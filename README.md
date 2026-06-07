# LeiMall 网站项目文档总览

> 这里是 LeiMall 全球跨境电商 SaaS 平台官网的完整技术文档集合。

## 📚 文档目录

### 1. 核心文档

| 文档名称 | 文件路径 | 说明 |
|---------|---------|------|
| **技术栈文档** | [TECH_STACK.md](TECH_STACK.md) | 完整的技术栈详解 |
| **开发指南** | [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | 本地开发环境配置 |
| **项目结构** | [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | 项目目录结构说明 |
| **技术选型** | [TECH_SELECTION.md](TECH_SELECTION.md) | 技术选型理由 |
| **Logo设计** | [LEIMALL_LOGO_DESIGN.md](LEIMALL_LOGO_DESIGN.md) | 品牌Logo设计 |

### 2. 规划文档

| 文档名称 | 文件路径 | 说明 |
|---------|---------|------|
| **产品需求** | [.trae/specs/leimall-global-website/spec.md](.trae/specs/leimall-global-website/spec.md) | PRD文档 |
| **任务列表** | [.trae/specs/leimall-global-website/tasks.md](.trae/specs/leimall-global-website/tasks.md) | 项目任务 |
| **验收清单** | [.trae/specs/leimall-global-website/checklist.md](.trae/specs/leimall-global-website/checklist.md) | 验收检查点 |

---

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18.0.0
- npm ≥ 8.0.0
- Wrangler CLI

### 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 或
npx wrangler pages dev public --port 8787

# 访问 http://localhost:8787
```

### 部署
```bash
npx wrangler pages deploy ./public --project-name=leimall
```

---

## 🛠️ 技术栈总览

| 技术 | 用途 | 版本 |
|------|------|------|
| **Cloudflare Pages** | 静态托管 | 最新 |
| **Wrangler CLI** | 开发工具 | 3.114.17+ |
| **HTML5** | 页面结构 | - |
| **Tailwind CSS** | 样式框架 | CDN |
| **JavaScript** | 交互逻辑 | ES6+ |
| **Google Fonts** | Web字体 | Inter |

---

## 📁 项目结构

```
leixos.com/
├── public/                      # 静态资源
│   └── index.html               # 主页面
├── package.json                 # npm配置
├── TECH_STACK.md               # 技术栈文档
├── DEVELOPMENT_GUIDE.md       # 开发指南
├── PROJECT_STRUCTURE.md        # 项目结构
├── TECH_SELECTION.md           # 技术选型
├── LEIMALL_LOGO_DESIGN.md      # Logo设计
├── README.md                   # 项目说明
└── .trae/specs/                # 规划文档
```

---

## 🎨 品牌设计系统

### 颜色规范

| 颜色 | 色值 | 用途 |
|------|------|------|
| **主色** | `#1E40AF` | 导航栏、按钮 |
| **辅助色** | `#F97316` | CTA按钮 |
| **全球蓝** | `#0EA5E9` | 全球元素 |
| **东南亚绿** | `#10B981` | 东南亚专属 |

---

## 🔧 常用命令

```bash
# 开发
npm run dev

# 部署
npm run deploy

# 或
npx wrangler pages deploy ./public --project-name=leimall
```

---

## 📖 功能特性

### 已实现
- ✅ 响应式布局
- ✅ 现代化UI设计
- ✅ 品牌设计系统
- ✅ 东南亚市场高亮
- ✅ 政府展示条
- ✅ 核心优势展示
- ✅ 解决方案展示
- ✅ 新闻动态
- ✅ 合作伙伴
- ✅ CTA区域
- ✅ 完整页脚

---

## 📚 学习资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## 📞 联系方式

- **网站**：www.leixos.com
- **邮箱**：contact@leixos.com

---

**版本**：1.0.0
**最后更新**：2024年
**维护团队**：LeiMall技术团队
