<p align="center">
  <img src="../build/icon.png" alt="WhichClaw" width="120" />
</p>

<h1 align="center">WhichClaw</h1>

<p align="center">
  <strong>One Hub. All Models. Every Coding Tool.</strong><br/>
  <sub>لوحة تحكم الهاكر لعصر الذكاء الاصطناعي.</sub>
</p>

<p align="center">
  <a href="https://github.com/WhichClawTeam/WhichClaw/releases">
    <img src="https://img.shields.io/github/v/release/WhichClawTeam/WhichClaw?style=flat-square&color=00FF9D" alt="Release" />
  </a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-blue?style=flat-square" alt="Platform" />
  <img src="https://img.shields.io/github/license/WhichClawTeam/WhichClaw?style=flat-square" alt="License" />
</p>

<p align="center">
  <a href="../README.md">English</a> · <a href="./README.zh-CN.md">简体中文</a> · <a href="./README.zh-TW.md">繁體中文</a> · <a href="./README.ja.md">日本語</a> · <a href="./README.ko.md">한국어</a> · <a href="./README.es.md">Español</a> · <a href="./README.fr.md">Français</a> · <a href="./README.de.md">Deutsch</a> · <a href="./README.pt.md">Português</a> · <a href="./README.ru.md">Русский</a> · <strong>العربية</strong>
</p>

---

## ✨ ما هو WhichClaw؟

WhichClaw هو تطبيق سطح مكتب يوفر **واجهة مرئية موحدة** لإدارة نماذج الذكاء الاصطناعي عبر أدوات البرمجة الخاصة بك. لا مزيد من البحث في ملفات الإعدادات — فقط انقر وبدّل.

### المشكلة

- 😫 تبديل نماذج الذكاء الاصطناعي في أدوات مثل OpenClaw يتطلب تحرير ملفات الإعدادات يدوياً
- 🔄 كل أداة لها تنسيق إعدادات نموذج خاص بها
- 🧩 لا توجد طريقة سهلة لإدارة المهارات والإضافات عبر الأدوات

### الحل

يعمل WhichClaw كـ**لوحة تحكم مركزية** لجميع أدوات البرمجة بالذكاء الاصطناعي:

- 🎯 **تبديل بنقرة واحدة** — بدّل نماذج الذكاء الاصطناعي بصرياً لأي أداة مدعومة
- 🔀 **بروتوكول مزدوج** — دعم OpenAI و Anthropic API، بدّل النماذج في أي وقت
- 🚇 **وكيل نفق ذكي** — الوصول إلى APIs المحظورة جغرافياً بدون VPN كامل
- 🧩 **متصفح المهارات** — اكتشف وثبّت وأدر مهارات الذكاء الاصطناعي
- 🖥️ **خادم محلي** — شغّل نماذج مفتوحة المصدر (Qwen، DeepSeek، Llama) محلياً عبر llama.cpp
- 🌍 **28 لغة** — دعم كامل للتدويل
- 🎮 **تطبيقات ذكاء اصطناعي مدمجة** — ألعاب وأدوات مثل Reversi و AI Translate
- 🌃 **واجهة هاكر سايبربانك** — جمالية طرفية نيون خضراء

## 🖼️ لقطات الشاشة

### Model Nexus — أدر جميع نماذج الذكاء الاصطناعي في مكان واحد
![Model Nexus](1.png)

### App Manager — تبديل النموذج بنقرة واحدة لجميع الأدوات
![App Manager](2.png)

### Local Server — شغّل نماذج مفتوحة المصدر محلياً مع llama.cpp
![Local Server](3.png)

### Skill Browser — اكتشف وثبّت مهارات الذكاء الاصطناعي
![Skill Browser](4.png)

## 🚀 بداية سريعة

### التحميل

| المنصة | التحميل |
|----------|----------|
| Windows  | [WhichClaw-Setup.exe](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| macOS    | [WhichClaw.dmg](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |
| Linux    | [WhichClaw.AppImage](https://github.com/WhichClawTeam/WhichClaw/releases/latest) |

### ملاحظات Linux

```bash
chmod +x WhichClaw-*.AppImage
./WhichClaw-*.AppImage
```

> في حالة أخطاء FUSE: `sudo apt install libfuse2`

## 🔧 الأدوات المدعومة

| الأداة | الحالة | تبديل النموذج | البروتوكول |
|------|--------|----------------|----------|
| OpenClaw | ✅ مدعوم | ✅ | OpenAI / Anthropic |
| Claude Code | ✅ مدعوم | ✅ | Anthropic |
| Cline | ✅ مدعوم | ✅ | OpenAI |
| Continue | ✅ مدعوم | ✅ | OpenAI |
| OpenCode | ✅ مدعوم | ✅ | OpenAI |
| Codex | ✅ مدعوم | ✅ | OpenAI |
| Roo Code | ✅ مدعوم | ✅ | OpenAI |
| ZeroClaw | ✅ مدعوم | ✅ | OpenAI |
| Aider | ✅ مدعوم | ✅ | OpenAI / Anthropic |

## 🏗️ المجموعة التقنية

- **Electron** — إطار عمل سطح مكتب متعدد المنصات
- **React + TypeScript** — إطار عمل واجهة المستخدم
- **Vanilla CSS** — نظام تصميم سايبربانك مخصص
- **Vite** — أداة بناء
- **llama.cpp** — محرك استنتاج نماذج محلي

## 🛠️ التطوير

```bash
npm install
npm run dev
npm run build
```

## 🤝 المساهمة

المساهمات مرحب بها! لا تتردد في فتح issues أو إرسال pull requests.

We're especially looking for help with:
- 🍎 **اختبار macOS** — لم نختبر بنيات macOS بالكامل بعد
- 🔧 **تكاملات جديدة** — ساعدنا في دعم المزيد من أدوات الذكاء الاصطناعي
- 🌐 **تحسين الترجمة** — الناطقون الأصليون مرحب بهم!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

- 📧 Email: [hi@whichclaw.com](mailto:hi@whichclaw.com)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/WhichClawTeam/WhichClaw/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/WhichClawTeam/WhichClaw/discussions)

## ⭐ الدعم

إذا وجدت WhichClaw مفيداً، امنحه ⭐ على GitHub!

## 📄 الرخصة

[MIT](../LICENSE)

---

<p align="center">
  صُنع بـ 💚 من فريق WhichClaw<br/>
  <sub>📧 <a href="mailto:hi@whichclaw.com">hi@whichclaw.com</a></sub>
</p>
