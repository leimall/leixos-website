# LeiMall 网站部署文档

本文档详细介绍了如何将 LeiMall 官网部署到 Cloudflare Pages 平台。

---

## 1. 前置条件

在开始部署之前，请确保您已满足以下条件：

### 1.1 Cloudflare 账号
- 拥有有效的 Cloudflare 账号
- 已验证您的域名（如需使用自定义域名）
- 账号具有创建 Pages 项目的权限

### 1.2 本地开发环境
- **Node.js**: 版本 22.x（必需，已配置 .nvmrc）
- **npm**: 版本 ≥ 8.0.0

### 1.3 Wrangler CLI
Wrangler 是 Cloudflare 的官方命令行工具，用于与 Cloudflare 服务交互。

**安装 Wrangler：**
```bash
npm install -g wrangler
```

**验证安装：**
```bash
wrangler --version
```

**登录 Cloudflare：**
```bash
wrangler login
```
这将打开浏览器，完成 OAuth 授权登录。

---

## 2. 本地开发、构建、预览步骤

### 2.1 安装依赖
```bash
cd /Users/richard/project/5.website-all/leixos.com
npm install
```

### 2.2 启动开发服务器
```bash
npm run dev
```
开发服务器将在 `http://localhost:3000` 启动（Nuxt 默认端口）。

### 2.3 构建项目
```bash
npm run build
```
构建完成后，输出文件将位于 `.output/` 目录。

### 2.4 预览构建结果
```bash
npm run preview
```
这将启动一个本地服务器预览构建后的生产版本。

---

## 3. 命令行部署步骤

### 3.1 使用 npm 脚本部署（推荐）
项目已配置好部署脚本，可以直接运行：

```bash
npm run deploy
```

这个命令会自动：
1. 执行 `npm run build` 构建项目
2. 使用 Wrangler 部署到 Cloudflare Pages

### 3.2 跳过构建直接部署
如果您已经构建过项目，可以直接部署：

```bash
npm run deploy:skip-build
```

### 3.3 手动使用 Wrangler 部署
```bash
# 先构建
npm run build

# 再部署
wrangler pages deploy
```

部署成功后，您将获得一个 Cloudflare Pages 提供的预览 URL。

---

## 4. Cloudflare 控制台创建 Pages 项目并连接 GitHub

### 4.1 创建 Pages 项目

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 在左侧菜单中选择 **Workers & Pages**
3. 点击 **Create application**
4. 选择 **Pages** 标签页
5. 点击 **Connect to Git**

### 4.2 连接 GitHub 仓库

1. 选择 **GitHub** 作为 Git 提供商
2. 授权 Cloudflare 访问您的 GitHub 账号
3. 选择 `leixos.com` 所在的仓库
4. 点击 **Begin setup**

### 4.3 配置构建设置

在 **Build settings** 部分，填写以下配置：

| 配置项 | 值 |
|--------|-----|
| **Project name** | `leimall` (或您喜欢的名称) |
| **Production branch** | `main` (或您的主分支名称) |
| **Framework preset** | `Nuxt.js` |
| **Build command** | `npm run build` |
| **Build output directory** | `.output/public` |

**重要**：确保不要手动设置部署命令（Deploy command），让 Cloudflare Pages 使用默认方式，不需要使用 `npx wrangler deploy`。

### 4.4 环境变量（可选）

如果项目需要环境变量，在 **Environment variables** 部分添加：

```bash
# 示例（如需要）
NODE_VERSION=18
```

### 4.5 完成部署

1. 点击 **Save and Deploy**
2. Cloudflare 将开始自动构建和部署
3. 部署完成后，您将获得一个类似 `https://leimall.pages.dev` 的 URL

### 4.6 配置自动部署

连接 GitHub 后，每次推送到指定分支（如 `main`）都会触发自动部署。

---

## 5. 常见问题解答

### 5.1 部署失败：构建命令错误

**问题：** 部署时提示构建命令失败

**解决方案：**
- 检查 `package.json` 中的脚本是否正确
- 确保 Node.js 版本符合要求（≥ 18.0.0）
- 查看 Cloudflare Pages 的构建日志获取详细错误信息

### 5.2 Wrangler 登录失败

**问题：** `wrangler login` 无法完成授权

**解决方案：**
- 确保网络连接正常
- 尝试使用 API Token 登录：
  ```bash
  wrangler config
  ```
- 在 Cloudflare 控制台创建 API Token，权限选择 `Cloudflare Pages:Edit`

### 5.3 自定义域名配置

**问题：** 如何配置自定义域名（如 www.leixos.com）

**解决方案：**
1. 在 Cloudflare Pages 项目设置中，进入 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入您的域名（如 `www.leixos.com`）
4. 按照提示完成 DNS 配置
5. Cloudflare 将自动为您配置 SSL 证书

### 5.4 构建缓存问题

**问题：** 部署后修改没有生效，可能是缓存问题

**解决方案：**
- 在 Cloudflare Pages 项目设置中，点击 **Settings** → **Builds**
- 点击 **Retry deployment** 并勾选 **Clear cache and retry**
- 或在项目设置中配置缓存规则

### 5.5 环境变量未生效

**问题：** 配置的环境变量在代码中无法读取

**解决方案：**
- 确保环境变量在 Cloudflare Pages 控制台中正确配置
- 对于 Nuxt 项目，环境变量需要以 `NUXT_` 开头
- 需要重新部署才能使环境变量生效

### 5.6 本地预览与线上不一致

**问题：** 本地运行正常，但线上部署后有问题

**解决方案：**
- 确保本地使用 `npm run build && npm run preview` 测试生产版本
- 检查 `nuxt.config.ts` 中的配置是否正确
- 确认构建输出目录为 `.output/public`

### 5.7 npm ci 错误：package-lock.json 不同步

**问题：** 部署时提示 "npm ci can only install packages when your package.json and package-lock.json are in sync"

**解决方案：**
1. 在本地删除旧的锁文件和依赖：
   ```bash
   rm -rf node_modules package-lock.json
   ```
2. 重新安装依赖：
   ```bash
   npm install --legacy-peer-deps
   ```
3. 测试构建：
   ```bash
   npm run build
   ```
4. 提交新的 package-lock.json 到 Git：
   ```bash
   git add package-lock.json
   git commit -m "fix: regenerate package-lock.json for Cloudflare Pages"
   git push
   ```

**说明：** 此错误是因为 Cloudflare Pages 使用 `npm ci` 进行严格安装，要求 package.json 和 package-lock.json 完全同步。

---

## 6. 有用的链接

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Nuxt 3 部署到 Cloudflare Pages](https://nuxt.com/deploy/cloudflare)
- [Cloudflare 控制台](https://dash.cloudflare.com/)

---

## 7. 技术支持

如遇到问题，请联系 LeiMall 技术团队：
- 邮箱：contact@leixos.com
- 网站：www.leixos.com

---

**文档版本**：1.0.0  
**最后更新**：2026-06-07  
**维护团队**：LeiMall 技术团队
