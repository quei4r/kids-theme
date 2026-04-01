# 🌑 Kids Theme for VS Code

一款**纯黑主题**，遵循 VS Code 自身的**色彩标准**设计——专为那些觉得官方 VS Code 主题**太亮**的用户打造。  
同时还支持 **`.cfg` 文件**，确保自定义配置文件也能保持一致的视觉效果。

---

## ✨ 特性

- 🎨 深邃护眼**纯黑**背景
- 🧩 与 **VS Code UI 颜色**完美契合
- 🗂️ 增强对 `.cfg` 文件的语法高亮支持
- 💻 适合长时间编码或低光环境
- ⚙️ 超简单的安装体验，自动更新：主题会自动应用 `settings.json` 中的设置，开箱即用
- 📦 已预装并激活 ***`Material Icon Theme`*** 图标主题，文件视图更现代、更有序

---

## ⚙️ 安装

1. 克隆或下载主题仓库
2. 在 VS Code 中打开：`文件 → 首选项 → 颜色主题 → 从 VSIX 安装...`
3. 选择 `.vsix` 文件（如果有），或手动将主题文件夹移动到 `.vscode/extensions` 目录
4. 从颜色主题列表中激活主题

---

## 📂 文件支持

支持以下文件的语法高亮：

- `.js`
- `.ts`
- `.json`
- `.yaml`
- `.yml`
- `.xml`
- `.html`
- `.css`
- `.sql`
- `.cpp`
- `.py`
- `.sh`
- `.bash`
- `.zsh`
- `.cfg`
- `.ini`
- `.properties`
- `.env`
- `.markdown`
- `.php`
- `.blade.php`

可通过 `settings.json` 添加更多自定义扩展支持。

---

## 🖼️ 预览

> _"如此深邃的黑暗，仿佛能吞噬你的思绪..."_

![预览图](./screenshots/preview.png)

---

## 📌 为什么选择 Kids Theme？

- 完美适配 **OLED 显示器**（省电）
- 比深灰色主题更护眼
- 适合深夜编程或需要高度专注的工作
- 采用**极简风格**，减少视觉杂乱

---

## 🛠️ 自定义

想要调整颜色或添加更多文件类型支持？  
只需打开 `theme.json` 文件编辑数值，使用 VS Code 内置的主题编辑器，  
或者直接在 `settings.json` 中进行修改。

---

## 🛠️ 推荐设置

> 为确保获得最佳的 **Kids Theme** 体验，我们建议将以下设置应用到你的 `settings.json` 中——现已自动化，安装更加轻松便捷！

```json
{
  "workbench.startupEditor": "none",
  "editor.fontSize": 17,
  "editor.lineNumbers": "on",
  "editor.wordWrap": "on",
  "explorer.compactFolders": false,
  "code-runner.runInTerminal": true,
  "code-runner.clearPreviousOutput": true,
  "code-runner.executorMap": {
    "python": "cls ; python -u"
  },
  "code-runner.ignoreSelection": true,
  "security.workspace.trust.untrustedFiles": "open",
  "workbench.editorAssociations": {
    "*.exe": "default",
    "*.pf": "default"
  },
  "explorer.confirmDelete": false,
  "git.autofetch": true,
  "files.autoSave": "afterDelay",
  "files.associations": {
    "*.cfg": "cpp"
  },
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "KIDS THEME COLORFUL",
  "terminal.integrated.defaultProfile.windows": "Powershell",
}
```

---

## 🙌 致谢

> 由 [Alan Marques (M0rdek4y)](https://github.com/MarqueesDev) 用 ❤️ 打造

---

## 🧠 许可协议

[© MIT 许可证](https://github.com/MarqueesDev/kids-theme/blob/main/LICENSE.txt) —— 可自由使用、修改和分享。
