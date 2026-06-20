# LeiMall 网站 Nuxt.js 迁移 - The Implementation Plan

## [ ] Task 1: 初始化 Nuxt.js 项目（含 TypeScript）
- **Priority**: P0
- **Depends On**: None
- **Description**: 
  - 使用 `npx nuxi@latest init` 初始化 Nuxt 3 项目（启用 TypeScript）
  - 安装 Tailwind CSS 和必要的依赖
  - 配置 nuxt.config.ts（包括兼容性设置、TypeScript）
  - 配置 Tailwind 主题色系统（与现有品牌色一致）
  - 安装和配置 Google Fonts（Inter）
  - 安装和配置 @pinia/nuxt
  - 安装和配置 @nuxtjs/i18n
- **Acceptance Criteria Addressed**: AC-1, AC-2
- **Test Requirements**:
  - `programmatic` TR-1.1: 可以成功运行 `npm run dev`
  - `programmatic` TR-1.2: 项目结构正确，配置文件完整
  - `programmatic` TR-1.3: TypeScript 编译无错误
  - `human-judgement` TR-1.4: Tailwind 配置包含品牌色
- **Notes**: 使用 TypeScript 严格模式

## [ ] Task 2: 配置 Pinia 状态管理
- **Priority**: P0
- **Depends On**: Task 1
- **Description**:
  - 创建 stores 目录
  - 创建语言设置 store (`useLocaleStore`)
  - 创建基础 UI 状态 store (`useUiStore`)
  - 配置 Pinia 持久化（可选）
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `programmatic` TR-2.1: Pinia 正常工作
  - `programmatic` TR-2.2: stores 类型定义完整
- **Notes**: 预留更多 store 扩展空间

## [ ] Task 3: 配置多语言支持（i18n）
- **Priority**: P0
- **Depends On**: Task 2
- **Description**:
  - 创建 locales 目录
  - 创建中文翻译文件 (`locales/zh.json`)
  - 创建英文翻译文件 (`locales/en.json`)
  - 配置 @nuxtjs/i18n 插件
  - 创建语言选择器组件
  - 配置 SEO 多语言支持
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `programmatic` TR-3.1: 语言切换功能正常
  - `human-judgement` TR-3.2: 中英文内容完整对应
  - `programmatic` TR-3.3: 路由前缀正确更新
- **Notes**: 默认语言为中文

## [ ] Task 4: 实现布局组件系统
- **Priority**: P0
- **Depends On**: Task 3
- **Description**:
  - 创建通用布局组件 (`layouts/default.vue`)
  - 创建导航栏组件 (`components/TheNavbar.vue`)
  - 创建页脚组件 (`components/TheFooter.vue`)
  - 配置路由和路由导航
  - 在导航栏中集成语言选择器
- **Acceptance Criteria Addressed**: AC-6, AC-9
- **Test Requirements**:
  - `programmatic` TR-4.1: 导航栏和页脚在所有页面显示
  - `human-judgement` TR-4.2: 响应式布局与现有一致
  - `programmatic` TR-4.3: 路由导航功能正常
- **Notes**: 保留导航栏的滚动效果

## [ ] Task 5: 迁移首页到 Nuxt.js
- **Priority**: P0
- **Depends On**: Task 4
- **Description**:
  - 创建首页组件 (`pages/index.vue`)
  - 迁移所有首页内容到组件
  - 实现所有动画和交互效果
  - 配置页面 SEO（useHead）
  - 使用 i18n 替换所有硬编码文本
- **Acceptance Criteria Addressed**: AC-5, AC-7
- **Test Requirements**:
  - `human-judgement` TR-5.1: 视觉效果与现有一致
  - `programmatic` TR-5.2: 所有动画正常工作
  - `programmatic` TR-5.3: SEO 标签正确配置
  - `human-judgement` TR-5.4: 多语言支持完整
- **Notes**: 使用 Nuxt 的 `<Transition>` 组件实现动画

## [ ] Task 6: 创建可复用组件库
- **Priority**: P1
- **Depends On**: Task 5
- **Description**:
  - 创建通用卡片组件 (`components/common/BaseCard.vue`)
  - 创建按钮组件 (`components/common/BaseButton.vue`)
  - 创建图标组件或使用图标库（推荐 Heroicons）
  - 创建其他可复用组件
- **Acceptance Criteria Addressed**: AC-6
- **Test Requirements**:
  - `human-judgement` TR-6.1: 组件样式统一
  - `programmatic` TR-6.2: 组件可以正常使用
  - `programmatic` TR-6.3: 类型定义完整
- **Notes**: 参考现有设计创建通用组件

## [ ] Task 7: 预留 API 请求架构
- **Priority**: P1
- **Depends On**: Task 1
- **Description**:
  - 创建 `composables` 目录
  - 创建 `useFetch` wrapper composable
  - 创建 API 基础结构
  - 预留新闻和申请系统的 API 调用结构
  - 创建类型定义文件
- **Acceptance Criteria Addressed**: AC-8
- **Test Requirements**:
  - `human-judgement` TR-7.1: 架构清晰可扩展
  - `programmatic` TR-7.2: 基础 API 函数可以正常调用
  - `programmatic` TR-7.3: 类型定义完整
- **Notes**: 预留接口，但暂时不实现实际功能

## [ ] Task 8: 配置其他页面路由
- **Priority**: P1
- **Depends On**: Task 5
- **Description**:
  - 创建产品功能页面 (`pages/features.vue`)
  - 创建解决方案页面 (`pages/solutions.vue`)
  - 创建关于我们页面 (`pages/about.vue`)
  - 创建联系我们页面 (`pages/contact.vue`)
  - 创建新闻中心页面 (`pages/news.vue`)
  - 配置多语言路由
- **Acceptance Criteria Addressed**: AC-9
- **Test Requirements**:
  - `programmatic` TR-8.1: 所有路由可以正常访问
  - `human-judgement` TR-8.2: 页面结构与设计一致
  - `human-judgement` TR-8.3: 多语言支持完整
- **Notes**: 先创建基础页面结构，后续逐步完善内容

## [ ] Task 9: 配置 Cloudflare Pages 部署
- **Priority**: P0
- **Depends On**: Task 5
- **Description**:
  - 配置 Nuxt 输出为 Cloudflare Pages 兼容格式
  - 创建 wrangler.toml 配置
  - 测试本地构建
  - 更新 package.json 的脚本
- **Acceptance Criteria Addressed**: AC-10
- **Test Requirements**:
  - `programmatic` TR-9.1: `npm run build` 可以成功构建
  - `programmatic` TR-9.2: 可以在 Cloudflare Pages 部署
- **Notes**: 使用 Nuxt 的 nitro 预设

## [ ] Task 10: 测试和质量保证
- **Priority**: P0
- **Depends On**: Task 9
- **Description**:
  - 在多个浏览器测试
  - 在移动设备测试
  - 测试响应式布局
  - 测试所有交互动效
  - 测试多语言切换
  - 检查 SEO 标签
- **Acceptance Criteria Addressed**: AC-2, AC-3, AC-5, AC-7, AC-9
- **Test Requirements**:
  - `human-judgement` TR-10.1: 所有浏览器兼容
  - `human-judgement` TR-10.2: 移动设备适配完美
  - `human-judgement` TR-10.3: 多语言切换正常
  - `programmatic` TR-10.4: 所有功能正常工作
- **Notes**: 测试清单见 checklist.md

## Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 2
- Task 4 depends on Task 3
- Task 5 depends on Task 4
- Task 6 depends on Task 5
- Task 7 depends on Task 1
- Task 8 depends on Task 5
- Task 9 depends on Task 5
- Task 10 depends on Task 9
