import { useEffect, useRef } from 'react';

/**
 * Clean grid-line light pulse animation.
 * Glowing dots travel along the existing CSS grid lines (H/V only),
 * never crossing. Creates a calm, structured cyberpunk aesthetic.
 *
 * Channel-aware mode:
 *   Pass `channels` prop to drive pulse count & color from channel status.
 *   - 'ok'    → green pulse (cyber-accent)
 *   - 'error' → red pulse
 *   When channels is undefined or empty, falls back to default ambient mode.
 */

const GRID = 40;
const COLOR_OK: [number, number, number] = [0, 255, 157];    // cyber-accent green
const COLOR_ERR: [number, number, number] = [255, 60, 60];   // error red
const DEFAULT_MAX = 8;
const SPAWN_EVERY = 30;
const SPEED = 2.5;
const TRAIL = 160;
const HEAD_R = 2.5;
const TARGET_FPS = 30;
const FRAME_MS = 1000 / TARGET_FPS;

// ── Public interface ──────────────────────────────────────────
export interface ChannelPulseStatus {
    id: number;
    status: 'ok' | 'error';
}

export interface CircuitFlowProps {
    /** Channel status list — drives pulse count & color.
     *  undefined/empty = default ambient mode (random green pulses). */
    channels?: ChannelPulseStatus[];
}

// ── Internal types ────────────────────────────────────────────
interface Pulse {
    x: number;
    y: number;
    dx: number;
    dy: number;
    life: number;
    color: [number, number, number];
}

export function CircuitFlow({ channels }: CircuitFlowProps = {}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const channelsRef = useRef(channels);
    channelsRef.current = channels;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let w = 0, h = 0;
        let pulses: Pulse[] = [];
        let rafId = 0;
        let last = 0;
        let tick = 0;

        const resize = () => {
            const p = canvas.parentElement;
            if (!p) return;
            const dpr = window.devicePixelRatio || 1;
            w = p.clientWidth;
            h = p.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement!);
        resize();

        const spawnPulse = (color: [number, number, number]) => {
            const horizontal = Math.random() < 0.5;
            if (horizontal) {
                const rows = Math.floor(h / GRID);
                const row = (Math.floor(Math.random() * rows) + 1) * GRID;
                const goRight = Math.random() < 0.5;
                pulses.push({
                    x: goRight ? -TRAIL : w + TRAIL,
                    y: row, dx: goRight ? 1 : -1, dy: 0,
                    life: w + TRAIL * 2, color,
                });
            } else {
                const cols = Math.floor(w / GRID);
                const col = (Math.floor(Math.random() * cols) + 1) * GRID;
                const goDown = Math.random() < 0.5;
                pulses.push({
                    x: col,
                    y: goDown ? -TRAIL : h + TRAIL,
                    dx: 0, dy: goDown ? 1 : -1,
                    life: h + TRAIL * 2, color,
                });
            }
        };

        /** Spawn logic — channel-aware or default */
        const spawn = () => {
            const chs = channelsRef.current;
            if (chs && chs.length > 0) {
                // Channel mode: maintain exactly one pulse per channel
                // Only spawn if we have fewer pulses than channels
                if (pulses.length < chs.length) {
                    const ch = chs[pulses.length % chs.length];
                    spawnPulse(ch.status === 'error' ? COLOR_ERR : COLOR_OK);
                }
            } else {
                // Default ambient mode
                if (pulses.length < DEFAULT_MAX) {
                    spawnPulse(COLOR_OK);
                }
            }
        };

        const drawPulse = (p: Pulse) => {
            const [r, g, b] = p.color;
            const tailX = p.x - p.dx * TRAIL;
            const tailY = p.y - p.dy * TRAIL;

            const grad = ctx.createLinearGradient(tailX, tailY, p.x, p.y);
            grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
            grad.addColorStop(0.6, `rgba(${r},${g},${b},0.12)`);
            grad.addColorStop(1, `rgba(${r},${g},${b},0.4)`);

            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Head glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, HEAD_R, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
            ctx.fill();

            // Soft outer glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},0.12)`;
            ctx.fill();
        };

        const frame = (ts: number) => {
            rafId = requestAnimationFrame(frame);
            if (ts - last < FRAME_MS) return;
            last = ts;
            tick++;

            ctx.clearRect(0, 0, w, h);

            if (tick % SPAWN_EVERY === 0) spawn();

            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                p.x += p.dx * SPEED;
                p.y += p.dy * SPEED;
                p.life -= SPEED;

                if (p.life <= 0) {
                    pulses.splice(i, 1);
                    continue;
                }
                drawPulse(p);
            }
        };

        // Seed initial pulses
        for (let i = 0; i < 4; i++) spawn();
        rafId = requestAnimationFrame(frame);

        return () => {
            cancelAnimationFrame(rafId);
            ro.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: -1 }}
        />
    );
}
