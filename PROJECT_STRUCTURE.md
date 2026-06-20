# LeiMall 网站项目结构详解

## 一、整体目录结构

```
leixos.com/
│
├── public/                          # 静态资源目录（必须）
│   ├── index.html                    # 主页面
│   ├── about.html                    # 关于我们页面（可选）
│   ├── contact.html                  # 联系页面（可选）
│   ├── css/                          # CSS样式目录（可选）
│   │   └── custom.css                # 自定义样式
│   ├── js/                           # JavaScript目录（可选）
│   │   └── main.js                   # 主脚本文件
│   ├── images/                       # 图片资源目录（可选）
│   │   ├── logo.png                  # Logo图片
│   │   ├── hero-bg.jpg               # 背景图片
│   │   └── icons/                    # 图标目录
│   │       ├── check.svg
│   │       └── arrow.svg
│   └── assets/                       # 其他资源（可选）
│       └── fonts/                    # 字体文件
│
├── src/                              # 源代码目录（可选，用于构建流程）
│   ├── html/                         # HTML源文件
│   ├── css/                          # CSS源文件
│   ├── js/                           # JavaScript源文件
│   └── assets/                       # 资源源文件
│
├── dist/                             # 构建输出目录（可选）
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
│
├── node_modules/                     # npm依赖包（自动生成）
│
├── .trae/                            # Trae IDE配置目录
│   └── specs/                        # 规范文档目录
│       ├── leimall-global-website/   # 网站规范
│       │   ├── spec.md
│       │   ├── tasks.md
│       │   └── checklist.md
│       └── leimall-tech-stack-docs/  # 技术文档规范
│           ├── spec.md
│           ├── tasks.md
│           └── checklist.md
│
├── package.json                      # npm配置文件
├── package-lock.json                 # npm锁定文件（自动生成）
├── wrangler.json                     # Wrangler配置文件（可选）
├── wrangler.toml                     # Wrangler配置（可选，替代JSON）
│
├── TECH_STACK.md                     # 技术栈文档
├── DEVELOPMENT_GUIDE.md              # 开发指南
├── PROJECT_STRUCTURE.md              # 项目结构文档
├── DEPLOYMENT.md                     # 部署文档
├── README.md                         # 项目说明
│
└── .gitignore                        # Git忽略文件
```

---

## 二、目录详解

### 2.1 public/ - 静态资源目录（必需）

**用途**：存放所有要部署到生产环境的静态文件

**结构说明**：
```
public/
├── index.html              # 【必需】网站首页
├── [页面文件]              # 其他HTML页面
├── css/                    # 【可选】自定义CSS
├── js/                     # 【可选】自定义JavaScript
├── images/                 # 【可选】图片资源
└── assets/                 # 【可选】其他静态资源
```

**Cloudflare Pages规则**：
- `public/`目录的内容会直接部署到CDN
- 不在`public/`中的文件不会被部署
- 建议保持目录结构扁平，避免深层嵌套

---

### 2.2 package.json - npm配置

**文件位置**：`leixos.com/package.json`

**示例内容**：
```json
{
  "name": "leimall-website",
  "version": "1.0.0",
  "description": "LeiMall全球跨境电商SaaS平台官网",
  "main": "index.js",
  "scripts": {
    "dev": "npx wrangler pages dev ./public",
    "build": "echo 'Static site, no build needed'",
    "deploy": "npx wrangler pages deploy ./public --project-name=leimall"
  },
  "keywords": ["leimall", "cross-border", "ecommerce", "cloudflare"],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "wrangler": "^3.0.0"
  }
}
```

**关键字段说明**：
- `scripts`：定义可用的npm命令
- `devDependencies`：开发依赖（仅本地使用）
- `dependencies`：生产依赖（部署时需要）

---

### 2.3 .trae/specs/ - 规范文档目录

**用途**：存放项目的规范文档和任务追踪

**结构**：
```
.trae/specs/
├── leimall-global-website/        # 网站规范包
│   ├── spec.md                    # 产品需求文档
│   ├── tasks.md                   # 任务列表
│   └── checklist.md               # 验收清单
│
└── leimall-tech-stack-docs/       # 技术文档包
    ├── spec.md                    # 技术文档规范
    ├── tasks.md                   # 任务列表
    └── checklist.md               # 验收清单
```

---

## 三、文件详解

### 3.1 public/index.html - 主页面

**文件路径**：`public/index.html`

**文件大小**：约35-50KB（含内联CSS和JavaScript）

**主要组成**：
1. **HTML结构**
   - 语义化HTML5标签
   - SEO元数据
   - 响应式视口设置

2. **内联CSS**
   - Tailwind CSS配置
   - 自定义样式
   - 动画效果

3. **内容区块**
   - 导航栏
   - Hero Banner
   - 核心数据展示
   - 品牌简介
   - 核心优势
   - 解决方案
   - 产业生态
   - 新闻动态
   - 合作伙伴
   - CTA区域
   - 页脚

4. **内联JavaScript**
   - 导航滚动效果
   - 移动端菜单切换
   - 动画触发

---

### 3.2 CSS文件（可选）

**文件路径**：`public/css/custom.css`

**用途**：存放无法用Tailwind实现的复杂样式

**示例**：
```css
/* 自定义动画 */
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* 品牌特定样式 */
.custom-gradient {
    background: linear-gradient(135deg, #1E40AF 0%, #0EA5E9 100%);
}
```

---

### 3.3 JavaScript文件（可选）

**文件路径**：`public/js/main.js`

**用途**：存放复杂的交互逻辑

**示例**：
```javascript
// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化功能
    initNavigation();
    initAnimations();
    initForms();
});

function initNavigation() {
    // 导航功能实现
}

function initAnimations() {
    // 动画功能实现
}
```

---

### 3.4 图片资源（可选）

**目录路径**：`public/images/`

**推荐格式**：
- 照片：WebP > JPEG > PNG
- 图标：SVG > PNG
- Logo：PNG/SVG（带透明背景）

**图片优化建议**：
- 单张图片不超过200KB
- 使用图片压缩工具
- 提供多分辨率版本
- 使用懒加载

---

## 四、路径规范

### 4.1 相对路径 vs 绝对路径

**推荐使用相对路径**：
```html
<!-- ✅ 推荐：相对路径 -->
<link rel="stylesheet" href="css/style.css">
<img src="images/logo.png" alt="Logo">
<script src="js/main.js"></script>

<!-- ❌ 不推荐：绝对路径 -->
<link rel="stylesheet" href="/css/style.css">
```

**原因**：
- 相对路径在本地和生产环境都可用
- 避免域名变更导致的问题
- 便于本地测试

### 4.2 资源引用示例

**HTML文件中的引用**：
```html
<!DOCTYPE html>
<html>
<head>
    <!-- CSS引用 -->
    <link rel="stylesheet" href="css/custom.css">

    <!-- 内联样式（Tailwind）已在此之前引入 -->
</head>
<body>
    <!-- 图片引用 -->
    <img src="images/hero.jpg" alt="Hero Image">

    <!-- JavaScript引用 -->
    <script src="js/main.js"></script>
</body>
</html>
```

---

## 五、命名规范

### 5.1 文件命名

**通用规则**：
- 使用小写字母
- 使用连字符`-`分隔单词
- 避免使用中文
- 保持简洁明了

**示例**：
```
✅ 正确命名
- index.html
- about-us.html
- product-details.html
- custom-style.css
- main-script.js

❌ 错误命名
- Index.html
- AboutUs.html
- product details.html
- CustomStyle.CSS
- MainScript.JS
```

### 5.2 CSS类命名

**使用Tailwind类**：
```html
<!-- Tailwind类名 -->
<div class="bg-primary text-white p-8 rounded-lg">

<!-- 自定义类名 -->
<div class="custom-card">
```

### 5.3 JavaScript命名

**变量和函数命名**：
```javascript
// 变量命名
const siteName = 'LeiMall';
let isMenuOpen = false;

// 函数命名
function initNavigation() { }
function toggleMobileMenu() { }
function handleScroll() { }

// 常量命名
const MAX_WIDTH = '1200px';
const ANIMATION_DURATION = '0.3s';
```

---

## 六、Git忽略规则

### 6.1 .gitignore文件

**文件位置**：`leixos.com/.gitignore`

**示例内容**：
```gitignore
# 依赖
node_modules/
package-lock.json

# 构建输出
dist/
build/

# IDE
.vscode/
.idea/
*.swp
*.swo

# 操作系统
.DS_Store
Thumbs.db

# 日志
*.log
npm-debug.log*

# 临时文件
*.tmp
*.temp

# 环境配置
.env
.env.local

# Cloudflare
.wrangler/
```

---

## 七、最佳实践

### 7.1 目录组织原则

1. **保持扁平**：避免过深的目录嵌套
2. **功能分组**：相似文件放在一起
3. **命名一致**：使用统一的命名规范
4. **最小化**：不需要的目录不要创建

### 7.2 文件组织建议

**推荐的项目结构**：
```
leixos.com/
├── public/                 # 简单项目：所有文件放这里
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── css/
│   ├── js/
│   └── images/
│
├── src/                   # 复杂项目：源文件放这里
│   ├── html/
│   ├── css/
│   ├── js/
│   └── assets/
│
└── dist/                  # 构建输出
    └── *
```

### 7.3 部署检查清单

部署前确认：
- [ ] `public/`目录存在
- [ ] `index.html`在`public/`根目录
- [ ] 所有资源路径正确
- [ ] 没有缺失的依赖文件
- [ ] HTML语法正确

---

## 八、扩展性考虑

### 8.1 添加新页面

**步骤**：
1. 在`public/`目录创建新HTML文件
2. 命名遵循规范（如`features.html`）
3. 复制`index.html`的基础结构
4. 修改页面内容
5. 更新导航栏链接
6. 测试并部署

### 8.2 添加资源

**添加CSS文件**：
```html
<!-- 在<head>标签内添加 -->
<link rel="stylesheet" href="css/new-style.css">
```

**添加JavaScript文件**：
```html
<!-- 在</body>标签前添加 -->
<script src="js/new-script.js"></script>
```

**添加图片**：
```html
<img src="images/new-image.jpg" alt="描述">
```

### 8.3 迁移到构建工具

如果项目变大需要构建工具：

**推荐的构建工具栈**：
- **打包工具**：Vite / Webpack / Parcel
- **CSS框架**：Tailwind CLI / PostCSS
- **HTML模板**：EJS / Nunjucks / Handlebars
- **图片优化**：Sharp / ImageMagick

**迁移步骤**：
1. 创建`src/`目录存放源文件
2. 配置构建脚本
3. 迁移HTML、CSS、JS文件
4. 测试构建输出
5. 更新部署配置

---

**文档版本**：1.0
**最后更新**：2024年
**维护团队**：LeiMall技术团队
