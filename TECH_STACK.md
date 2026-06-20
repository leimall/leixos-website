# LeiMall 全球跨境电商SaaS平台 - 技术栈文档

> **项目名称**：LeiMall 全球跨境电商SaaS平台官网
> **文档版本**：v1.0.0
> **最后更新**：2026-06-07
> **文档目的**：记录项目技术架构、工具链和开发规范，供团队成员阅读和参考

---

## 1. 项目概述

### 1.1 项目基本信息

| 属性 | 说明 |
|------|------|
| 项目名称 | LeiMall（雷贸科技） |
| 项目类型 | 展示型营销网站（静态站点） |
| 项目目的 | 为全球中小企业提供跨境电商SaaS服务的产品介绍与咨询引流 |
| 目标用户 | 计划出海的中国中小企业、工厂型卖家、贸易商 |
| 核心市场 | 中国、东南亚（首发重点）、欧美、中东等200+国家和地区 |

### 1.2 项目定位

LeiMall 是昆明市呈贡数字化小镇重点培育项目，依托中老铁路物流大通道，致力于打造行业领先的东南亚专属解决方案，帮助中国企业快速开拓全球市场。

### 1.3 技术架构概览

```
┌─────────────────────────────────────────────────────────────┐
│                        Cloudflare CDN                        │
│                    (全球边缘节点加速)                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Cloudflare Pages                         │
│                    (静态网站托管与部署)                        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                  public/                             │    │
│  │  └── index.html (单页面应用，包含完整业务逻辑)          │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### 1.4 技术选型原则

- **轻量化优先**：无框架依赖，减少bundle体积
- **边缘计算**：利用Cloudflare全球CDN实现就近访问
- **SEO友好**：语义化HTML5结构，支持搜索引擎收录
- **快速迭代**：简单部署流程，支持频繁更新

---

## 2. 核心技术栈详解

### 2.1 Cloudflare Pages (Wrangler)

#### 2.1.1 平台概述

Cloudflare Pages 是 Cloudflare 推出的静态网站托管平台，提供以下核心能力：

- **全球CDN加速**：200+ 边缘节点，自动选择最优访问路径
- **边缘计算**：支持 Workers 在边缘节点执行代码
- **自动部署**：与 Git 集成，支持 GitHub/GitLab 自动化部署
- **免费额度**：每月500次构建、无限请求、无带宽限制

#### 2.1.2 Wrangler CLI 工具

Wrangler 是 Cloudflare Workers 和 Pages 的命令行开发工具，用于本地开发和部署。

**全局安装方式**：
```bash
npm install -g wrangler
```

**项目本地依赖**（已配置于 package.json）：
```json
"devDependencies": {
  "wrangler": "^3.0.0"
}
```

#### 2.1.3 开发命令

**本地开发服务器**（推荐）：
```bash
npx wrangler pages dev public --port 8787
```
或使用 npm scripts：
```bash
npm run dev
```

**生产部署**：
```bash
npx wrangler pages deploy ./public --project-name=leimall
```
或使用 npm scripts：
```bash
npm run deploy
```

**参数说明**：
- `public`：静态资源目录路径
- `--project-name=leimall`：Cloudflare Pages 项目名称
- `--port 8787`：本地开发服务器端口

#### 2.1.4 Wrangler 配置（可选）

项目根目录可创建 `wrangler.json` 进行高级配置：

```json
{
  "name": "leimall-website",
  "compatibility_date": "2024-01-01",
  "pages": {
    "build_output_dir": "./public"
  }
}
```

#### 2.1.5 部署流程说明

1. **本地开发**：使用 `npm run dev` 启动开发服务器
2. **预览测试**：访问 `http://localhost:8787` 验证功能
3. **生产部署**：执行 `npm run deploy` 推送到 Cloudflare Pages
4. **自动发布**：Cloudflare Pages 自动生成全球 CDN 缓存

---

### 2.2 HTML5 语义化标签

#### 2.2.1 标签使用规范

本项目采用 HTML5 语义化标签，提升 SEO 和可访问性：

| 标签 | 使用位置 | 用途 |
|------|---------|------|
| `<header>` | 页面顶部导航区域 | 定义页面或区块的头部 |
| `<nav>` | 导航栏 | 定义导航链接区域 |
| `<section>` | 各业务板块 | 定义文档的独立章节 |
| `<footer>` | 页脚 | 定义页面或区块的底部 |
| `<main>` | 主内容区 | 定义文档的主体内容 |
| `<article>` | 新闻卡片 | 定义独立的文章内容 |
| `<aside>` | 侧边信息 | 定义与主内容相关的附加信息 |

#### 2.2.2 文档结构示例

```html
<body>
    <!-- 导航区域 -->
    <nav id="navbar">...</nav>

    <!-- 主内容 -->
    <main>
        <!-- Hero区域 -->
        <section id="hero">...</section>

        <!-- 产品功能 -->
        <section id="features">...</section>

        <!-- 解决方案 -->
        <section id="solutions">...</section>

        <!-- 关于我们 -->
        <section id="about">...</section>

        <!-- 产业生态 -->
        <section id="ecosystem">...</section>

        <!-- 新闻中心 -->
        <section id="news">...</section>

        <!-- 联系咨询 -->
        <section id="contact">...</section>
    </main>

    <!-- 页脚 -->
    <footer>...</footer>
</body>
```

---

### 2.3 Tailwind CSS (CDN版本)

#### 2.3.1 引入方式

通过 CDN 直接引入，无需构建步骤：

```html
<script src="https://cdn.tailwindcss.com"></script>
```

**注意**：CDN 版本适用于开发预览和生产环境，生产部署时会由 Cloudflare 自动缓存和优化。

#### 2.3.2 自定义配置

项目在 HTML 文件中通过 `tailwind.config` 对象扩展了品牌色系：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',        // 主色 - 深蓝
                secondary: '#F97316',     // 辅助色 - 橙色
                'global-blue': '#0EA5E9', // 全球蓝
                'sea-green': '#10B981',   // 东南亚绿
                'dark-gray': '#1F2937',   // 深灰（文字）
                'mid-gray': '#6B7280',    // 中灰（次要文字）
                'light-gray': '#F3F4F6',  // 浅灰（背景）
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        }
    }
}
```

#### 2.3.3 响应式断点

Tailwind CSS 默认断点配置：

| 前缀 | 最小宽度 | 典型设备 |
|------|---------|---------|
| `sm:` | 640px | 大手机 |
| `md:` | 768px | 平板 |
| `lg:` | 1024px | 笔记本 |
| `xl:` | 1280px | 桌面显示器 |
| `2xl:` | 1536px | 大屏显示器 |

#### 2.3.4 常用样式类示例

```html
<!-- 响应式布局 -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- 响应式间距 -->
<div class="px-4 sm:px-6 lg:px-8 py-20">

<!-- 响应式文字 -->
<h1 class="text-5xl lg:text-6xl font-bold">

<!-- 条件显示 -->
<div class="hidden md:flex items-center">
```

---

### 2.4 JavaScript (原生ES6+)

#### 2.4.1 技术特点

- **无框架依赖**：使用原生 JavaScript，减少页面体积
- **ES6+ 语法**：使用 const/let、箭头函数、模板字符串等现代语法
- **DOM操作**：直接操作 DOM 元素，实现交互效果
- **事件监听**：使用 addEventListener 注册事件

#### 2.4.2 核心功能实现

**导航滚动效果**：

```javascript
const navbar = document.getElementById('navbar');
const navTexts = document.querySelectorAll('.nav-text');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
        navTexts.forEach(el => el.classList.add('!text-dark-gray'));
        navTexts.forEach(el => el.classList.remove('!text-white'));
    } else {
        navbar.classList.remove('bg-white', 'shadow-md');
        navbar.classList.add('bg-transparent');
        navTexts.forEach(el => el.classList.remove('!text-dark-gray'));
        navTexts.forEach(el => el.classList.add('!text-white'));
    }
});
```

**移动端菜单切换**：

```javascript
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
```

#### 2.4.3 CSS动画效果

项目在 `<style>` 标签中定义了多种动画效果：

| 动画类名 | 效果 | 适用场景 |
|---------|------|---------|
| `.card-hover` | 悬停上浮+阴影加深 | 卡片交互 |
| `.fade-in-up` | 淡入上移 | 页面加载动画 |
| `.float-animation` | 上下漂浮 | 背景装饰 |
| `.gradient-bg` | 蓝紫渐变 | Hero区域背景 |

---

### 2.5 Google Fonts - Inter

#### 2.5.1 字体引入

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### 2.5.2 字重配置

| 字重 | 数值 | 使用场景 |
|------|------|---------|
| Regular | 400 | 正文内容 |
| Medium | 500 | 次要标题 |
| SemiBold | 600 | 卡片标题 |
| Bold | 700 | 主标题、大字号 |

#### 2.5.3 字体应用

```css
body {
    font-family: 'Inter', system-ui, sans-serif;
}
```

或通过 Tailwind CSS 配置：

```javascript
fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

---

## 3. 开发工具链

### 3.1 Node.js / npm

#### 3.1.1 环境要求

- **Node.js**：>= 18.0.0（推荐使用 LTS 版本）
- **npm**：随 Node.js 自动安装

#### 3.1.2 package.json 配置

```json
{
  "name": "leimall-website",
  "version": "1.0.0",
  "description": "LeiMall Global Cross-border E-commerce SaaS Platform Official Website",
  "scripts": {
    "dev": "npx wrangler pages dev ./public",
    "build": "echo 'Static site, no build step needed'",
    "deploy": "npx wrangler pages deploy ./public --project-name=leimall"
  },
  "devDependencies": {
    "wrangler": "^3.0.0"
  }
}
```

#### 3.1.3 常用命令

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产部署
npm run deploy
```

### 3.2 Wrangler CLI

Cloudflare Workers 开发工具，提供本地模拟和部署功能。

**版本信息**：Wrangler 3.x（详见 package-lock.json）

**主要功能**：
- `wrangler pages dev`：启动本地开发服务器
- `wrangler pages deploy`：部署到 Cloudflare Pages
- `wrangler pages project`：管理 Pages 项目

### 3.3 代码编辑器推荐

**Visual Studio Code (VS Code)**

推荐安装插件：
- `Tailwind CSS IntelliSense`：Tailwind CSS 自动补全
- `Live Server`：本地实时预览
- `Prettier`：代码格式化
- `ESLint`：JavaScript 代码检查

---

## 4. 项目结构

### 4.1 目录结构

```
leixos.com/
├── public/
│   └── index.html          # 主页面（单页面应用）
├── package.json            # npm 包配置
├── package-lock.json      # 依赖锁定文件
├── TECH_STACK.md          # 技术栈文档（本文件）
├── LEIMALL_LOGO_DESIGN.md # Logo 设计文档
├── .wrangler/             # Wrangler 临时文件
│   ├── tmp/               # 构建临时文件
│   └── dev-*/             # 开发模式临时文件
└── .trae/                 # Trae IDE 配置
    └── specs/             # 项目规划文档
        ├── leimall-global-website/
        └── leimall-tech-stack-docs/
```

### 4.2 静态资源目录

```
public/
└── index.html  # 唯一入口文件，包含：
    ├── <head>  # 元信息、CSS、字体
    ├── <body>  # 页面内容
    │   ├── nav#navbar       # 导航栏
    │   ├── main            # 主内容区
    │   │   ├── section#hero         # Hero区域
    │   │   ├── section#features     # 产品功能
    │   │   ├── section#solutions    # 解决方案
    │   │   ├── section#about        # 关于我们
    │   │   ├── section#ecosystem    # 产业生态
    │   │   ├── section#news         # 新闻中心
    │   │   └── section#contact      # 联系咨询
    │   └── footer          # 页脚
    └── <script>  # JavaScript 交互逻辑
```

---

## 5. 前端架构特点

### 5.1 静态站点生成（SSG）

- **单文件架构**：所有内容内联在 index.html 中
- **无构建步骤**：修改即可见，无需编译
- **快速部署**：直接推送静态文件到 CDN

### 5.2 CDN 全球加速

- **边缘节点**：Cloudflare 在全球 200+ 地点部署节点
- **智能路由**：自动选择最近节点，减少延迟
- **缓存优化**：静态资源自动缓存

### 5.3 响应式设计优先

- **移动优先**：从小屏幕开始，逐步增强
- **断点适配**：sm/md/lg/xl/2xl 五档适配
- **流式布局**：使用 flex 和 grid 实现弹性布局

### 5.4 无需后端API

- **纯前端展示**：所有内容通过 HTML/CSS/JS 实现
- **静态内容**：无数据库依赖
- **可扩展性**：后续可集成第三方 API

### 5.5 SEO友好

- **语义化标签**：使用 header、nav、section、footer
- **元信息完整**：包含 title、description、charset
- **可访问性**：支持屏幕阅读器

---

## 6. 品牌设计系统

### 6.1 色彩系统

#### 6.1.1 主色系

| 颜色名称 | 色值 | Tailwind类名 | 使用场景 |
|---------|------|-------------|---------|
| 主色蓝 | `#1E40AF` | `primary` | Logo、按钮、链接 |
| 辅助橙 | `#F97316` | `secondary` | CTA按钮、强调元素 |
| 全球蓝 | `#0EA5E9` | `global-blue` | 全球通用方案标识 |
| 东南亚绿 | `#10B981` | `sea-green` | 东南亚市场标识 |

#### 6.1.2 中性色系

| 颜色名称 | 色值 | Tailwind类名 | 使用场景 |
|---------|------|-------------|---------|
| 深灰 | `#1F2937` | `dark-gray` | 正文文字 |
| 中灰 | `#6B7280` | `mid-gray` | 次要文字、图标 |
| 浅灰 | `#F3F4F6` | `light-gray` | 背景色、分隔线 |

#### 6.1.3 语义色彩

| 语义 | 色值 | 使用场景 |
|------|------|---------|
| 成功 | `#10B981` | 成功提示、东南亚强调 |
| 警告 | `#F59E0B` | 警告提示 |
| 错误 | `#EF4444` | 错误提示 |
| 信息 | `#3B82F6` | 信息提示 |

### 6.2 字体系统

| 字体 | 用途 | 字重 |
|------|------|------|
| Inter | 全部文字内容 | 400/500/600/700 |
| system-ui | 降级字体 | - |

### 6.3 间距系统

使用 Tailwind CSS 间距类：

| 类名 | 值 | 典型用途 |
|------|---|---------|
| `p-4` | 16px | 小间距 |
| `p-6` / `p-8` | 24px / 32px | 卡片内间距 |
| `py-20` | 80px | 区块上下间距 |
| `gap-8` | 32px | 网格间距 |

### 6.4 阴影系统

| 类名 | 效果 | 使用场景 |
|------|------|---------|
| `shadow-md` | 中等阴影 | 卡片默认状态 |
| `shadow-lg` | 大阴影 | 重点卡片 |
| `shadow-2xl` | 超大阴影 | 浮层元素 |

---

## 7. 性能优化策略

### 7.1 CDN自动优化

Cloudflare Pages 自动提供以下优化：

- **静态资源压缩**：Gzip/Brotli 自动压缩
- **图片优化**：自动格式转换和压缩
- **缓存策略**：智能缓存减少重复请求

### 7.2 前端优化实践

#### 7.2.1 CSS优化

- **原子化样式**：Tailwind CSS 只加载使用的样式
- **内联关键CSS**：样式直接写在 HTML 中
- **无冗余代码**：避免重复样式定义

#### 7.2.2 JavaScript优化

- **原生实现**：无框架负担
- **事件委托**：减少事件监听器数量
- **按需执行**：滚动事件使用节流（可选）

#### 7.2.3 图片优化（可选扩展）

如需添加图片，建议：

```html
<!-- 懒加载 -->
<img src="image.jpg" loading="lazy" alt="描述">

<!-- 响应式图片 -->
<img srcset="small.jpg 480w, large.jpg 1200w" sizes="(max-width: 600px) 480px, 1200px" alt="描述">
```

### 7.3 性能指标目标

| 指标 | 目标值 |
|------|-------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.0s |

---

## 8. 浏览器兼容性

### 8.1 支持版本

| 浏览器 | 支持版本 | 说明 |
|--------|---------|------|
| Chrome | 最近2个主要版本 | 推荐浏览器 |
| Firefox | 最近2个主要版本 | 支持良好 |
| Safari | 最近2个主要版本 | macOS/iOS 默认 |
| Edge | 最近2个主要版本 | Chromium 内核 |
| 移动端 Safari | 最近2个版本 | iOS 默认 |
| Android Chrome | 最近2个版本 | Android 默认 |

### 8.2 CSS兼容性问题

Tailwind CSS 自动处理大多数兼容性前缀，但对于以下特性可能需要额外注意：

| 特性 | 最低支持版本 |
|------|------------|
| CSS Grid | IE 11+（已满足） |
| Flexbox | 所有现代浏览器 |
| CSS Variables | Chrome 49+ |
| scroll-behavior | Chrome 61+ |

### 8.3 JavaScript兼容性

项目使用 ES6+ 语法，依赖以下 API：

| API | 最低支持版本 |
|-----|------------|
| const/let | 所有现代浏览器 |
| 箭头函数 | 所有现代浏览器 |
| template literals | Chrome 41+ |
| class | Chrome 49+ |
| addEventListener | 所有现代浏览器 |

---

## 9. 安全考虑

### 9.1 Cloudflare 安全功能

| 功能 | 说明 |
|------|------|
| HTTPS 自动启用 | 所有流量强制 HTTPS |
| DDoS 防护 | 自动识别和缓解攻击 |
| Web应用防火墙 (WAF) | 阻止常见Web攻击 |
| Bot 防护 | 识别和阻止恶意爬虫 |

### 9.2 前端安全实践

- **无敏感数据**：页面不包含任何敏感信息
- **外部资源验证**：只使用可信 CDN（Tailwind、Google Fonts）
- **无内联事件**：JavaScript 与 HTML 分离

### 9.3 隐私保护

- **无追踪脚本**：页面未引入任何分析追踪工具
- **Cookies**：不依赖 Cookies 存储数据
- **本地存储**：不使用 localStorage/sessionStorage

---

## 10. 扩展性指南

### 10.1 添加新页面

1. 在 `public/` 目录创建新 HTML 文件
2. 复制 `index.html` 的 `<head>` 和 `<style>` 部分
3. 修改 `<body>` 内容
4. 部署到 Cloudflare Pages

### 10.2 多语言支持

HTML 文档已预留 lang 属性：

```html
<html lang="zh-CN">
```

如需添加英文版本：

1. 创建 `public/en/index.html`
2. 将所有中文内容替换为英文
3. 更新导航链接

### 10.3 CMS 集成方案

可选的 CMS 集成方案：

| CMS | 集成难度 | 特点 |
|-----|---------|------|
| Cloudflare D1 | 中等 | 原生集成、边缘运行 |
| Contentful | 较低 | API驱动、CDN加速 |
| Strapi | 较高 | 自托管、灵活定制 |
| Sanity | 较低 | 实时协作、图形化 |

### 10.4 分析工具集成

如需添加访问分析，推荐：

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 10.5 联系方式表单

如需添加联系表单，建议使用 Cloudflare Workers 或第三方服务：

| 方案 | 说明 |
|------|------|
| Cloudflare Workers + R2 | 自建无服务器函数 |
| Formspree | 免费额度、简单集成 |
| Netlify Forms | 静态网站表单服务 |
| EmailJS | 前端直接发送邮件 |

---

## 11. 常见问题（FAQ）

### Q1: 本地开发服务器端口是多少？

A: 默认端口是 **8787**，完整地址：`http://localhost:8787`

### Q2: 修改代码后需要重新构建吗？

A: 不需要。静态站点无需构建，修改文件后刷新浏览器即可看到更新。

### Q3: 如何查看部署是否成功？

A: 部署完成后会返回 Cloudflare Pages 提供的预览地址，格式如：`https://[project-name].[username].pages.dev`

### Q4: 如何回滚到旧版本？

A: 登录 Cloudflare Dashboard，进入 Pages 项目，在 "Deployments" 中选择旧版本，点击 "Promote to production"。

### Q5: 图片应该放在哪里？

A: 建议放在 `public/` 目录下，如 `public/images/logo.png`，引用时使用绝对路径 `/images/logo.png`。

---

## 12. 相关资源链接

### 12.1 官方文档

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Google Fonts Inter](https://fonts.google.com/specimen/Inter)

### 12.2 开发工具

- [Node.js 官网](https://nodejs.org/)
- [npm 官网](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## 附录A：快速参考卡片

### 开发命令

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产部署
npm run deploy
```

### 核心文件

| 文件路径 | 说明 |
|---------|------|
| `public/index.html` | 主页面文件 |
| `package.json` | npm 配置 |
| `TECH_STACK.md` | 技术文档 |

### 品牌色值

| 名称 | 色值 |
|------|------|
| Primary | `#1E40AF` |
| Secondary | `#F97316` |
| Global Blue | `#0EA5E9` |
| Sea Green | `#10B981` |

---

*本文档由技术团队维护，如有问题请联系相关负责人。*
