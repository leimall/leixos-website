# LeiMall 网站开发环境配置与部署指南

## 一、开发环境配置

### 1.1 系统要求

#### 操作系统
- **Windows**: Windows 10/11 (64位)
- **macOS**: macOS 10.15 (Catalina) 或更高版本
- **Linux**: Ubuntu 20.04 / Debian 11 或更高版本

#### 必需软件

1. **Node.js 和 npm**
   - 版本要求：Node.js ≥ 18.0.0，npm ≥ 8.0.0
   - 安装方式：推荐使用 nvm (Node Version Manager) 管理多版本
   - 验证安装：
     ```bash
     node --version
     npm --version
     ```

2. **Git**
   - 版本要求：≥ 2.30.0
   - 用于版本控制和代码管理
   - 配置SSH密钥（可选但推荐）：
     ```bash
     ssh-keygen -t ed25519 -C "your_email@example.com"
     ```

3. **代码编辑器**
   - 推荐：Visual Studio Code
   - 必需插件：
     - ESLint：代码质量检查
     - Prettier：代码格式化
     - Tailwind CSS IntelliSense：Tailwind智能提示
     - Live Server：本地预览服务器
     - HTML CSS Support：HTML/CSS支持

4. **Cloudflare Wrangler CLI**
   - 用于本地开发和部署
   - 通过npm全局安装：
     ```bash
     npm install -g wrangler
     ```
   - 验证安装：
     ```bash
     wrangler --version
     ```

### 1.2 项目初始化

#### 克隆项目
```bash
# 如果使用Git
git clone https://github.com/your-repo/leixos.com.git
cd leixos.com

# 或者直接下载解压
```

#### 安装依赖
```bash
# 进入项目目录
cd /path/to/leixos.com

# 安装项目依赖
npm install

# 查看已安装的依赖
npm ls
```

#### 验证安装
```bash
# 检查Node.js和npm版本
node --version
npm --version

# 检查Wrangler是否正确安装
wrangler --version

# 检查项目结构
ls -la
```

### 1.3 本地开发

#### 启动开发服务器
```bash
# 方式1：使用Wrangler（推荐）
npx wrangler pages dev public --port 8787

# 方式2：使用npm脚本
npm run dev

# 方式3：使用简单的HTTP服务器
npx http-server public -p 8080
```

#### 访问开发网站
- 打开浏览器访问：`http://localhost:8787` 或 `http://localhost:8080`
- 页面会自动热更新，修改代码后无需手动刷新

#### 开发时的常用命令

```bash
# 监听文件变化并自动重新加载
npx wrangler pages dev public --port 8787 --live-reload

# 查看构建输出
npx wrangler pages dev public --inspector-port 9229

# 启用调试模式
DEBUG=* npx wrangler pages dev public
```

### 1.4 代码编辑

#### HTML文件编辑
- 主文件位置：`public/index.html`
- 编辑器设置：
  - 启用HTML5语法验证
  - 设置Tab为2或4个空格
  - 启用自动保存

#### CSS样式编辑
- 使用Tailwind CSS CDN版本
- 自定义配置在HTML的`<script>`标签中
- 推荐使用VS Code的Tailwind插件获得智能提示

#### JavaScript编辑
- 内联在HTML文件中
- 使用ES6+语法特性
- 代码放在`</body>`标签前

#### 编辑器推荐设置 (VS Code)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "files.autoSave": "afterDelay",
  "tailwindCSS.includeLanguages": {
    "html": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["className=\"([^\"]*)"]
  ]
}
```

### 1.5 测试

#### 手动测试清单
- [ ] 页面在所有主要浏览器中正常显示
- [ ] 响应式布局在移动端、平板、桌面端都正常
- [ ] 所有链接都可以正常跳转
- [ ] 按钮和交互效果正常工作
- [ ] 图片正确加载
- [ ] 控制台无错误信息

#### 浏览器测试
- Chrome / Edge（推荐开发）
- Firefox
- Safari（macOS/iOS）
- 移动浏览器测试（iOS Safari、Android Chrome）

#### 响应式测试
- 使用浏览器开发者工具模拟不同设备
- 测试断点：768px（平板）、1024px（桌面）、1440px（大屏）

---

## 二、部署流程

### 2.1 部署前准备

#### 检查清单
```bash
# 1. 确保所有更改已保存
# 2. 检查HTML语法错误
# 3. 确认所有资源路径正确
# 4. 验证外部链接可用
# 5. 压缩图片资源（可选）
```

#### 本地构建测试
```bash
# 在部署前先在本地完整测试一遍
npx wrangler pages dev public --port 8787

# 测试完成后按 Ctrl+C 停止服务器
```

### 2.2 Cloudflare Pages 部署

#### 方式1：使用Wrangler CLI（推荐）

**步骤1：登录Cloudflare**
```bash
# 登录到Cloudflare账户
wrangler login

# 会打开浏览器进行授权
```

**步骤2：部署到Cloudflare Pages**
```bash
# 部署到Cloudflare Pages
npx wrangler pages deploy ./public --project-name=leimall

# 或者使用交互式部署
npx wrangler pages deploy ./public
```

**步骤3：配置项目（首次部署）**
```bash
# 创建新的Pages项目
wrangler pages project create leimall

# 设置生产环境域名
wrangler pages domain add www.leimall.com
```

**步骤4：设置环境变量（可选）**
```bash
# 为生产环境设置变量
wrangler pages secret put API_KEY --project-name=leimall

# 查看所有环境变量
wrangler pages secret list --project-name=leimall
```

#### 方式2：使用Git集成部署

**前提条件**
- 项目已上传到GitHub/GitLab/Bitbucket
- Cloudflare账户已连接版本控制平台

**配置步骤**
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Workers & Pages
3. 点击"创建应用程序"
4. 选择"Pages"标签
5. 连接到Git仓库
6. 配置构建设置：
   - 构建命令：`npm run build`（可选）
   - 构建输出目录：`public`
7. 点击"保存并部署"

**自动化部署**
- 每次推送到主分支都会自动触发部署
- 可以设置预览部署用于PR和分支

#### 方式3：使用Cloudflare Dashboard直接上传

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Workers & Pages
3. 点击"创建应用程序"
4. 选择"Pages"标签
5. 点击"上传资产"
6. 将`public`文件夹拖入上传区域
7. 设置自定义域名（可选）

### 2.3 部署验证

#### 立即检查
```bash
# 查看部署状态
wrangler pages deployment list --project-name=leimall

# 获取部署URL
wrangler pages project list
```

#### 功能验证清单
- [ ] 网站可以正常访问
- [ ] 所有页面资源正常加载
- [ ] HTTPS已自动启用
- [ ] 域名解析正确
- [ ] CDN缓存生效
- [ ] 控制台无错误

### 2.4 自定义域名配置

#### 添加自定义域名
```bash
# 使用Wrangler添加域名
wrangler pages domain add www.leixos.com --project-name=leimall

# Cloudflare会自动配置SSL证书
```

#### DNS配置
如果域名在其他注册商处管理，需要添加DNS记录：
```
类型：CNAME
名称：www
值：leimall.pages.dev
代理状态：已代理（橙色云）
```

### 2.5 环境管理

#### 生产环境
```bash
# 查看所有环境
wrangler pages project list

# 查看特定环境详情
wrangler pages env list --project-name=leimall
```

#### 预览环境
- 每次部署都会生成预览URL
- 格式：`https://[commit-hash].leimall.pages.dev`
- 预览URL永久保留（除非手动删除）

#### 回滚操作
```bash
# 列出所有部署
wrangler pages deployment list --project-name=leimall

# 回滚到特定版本
wrangler pages deployment rollback [deployment-id] --project-name=leimall
```

---

## 三、生产环境优化

### 3.1 性能优化

#### 图片优化
```html
<!-- 使用现代图片格式 -->
<img src="image.webp" alt="描述">

<!-- 添加srcset提供多分辨率 -->
<img srcset="small.jpg 480w, medium.jpg 800w" sizes="...">

<!-- 使用懒加载 -->
<img loading="lazy" src="image.jpg" alt="描述">
```

#### CSS优化
- Tailwind CSS CDN会自动压缩
- 避免内联过多样式
- 使用CSS变量复用颜色

#### JavaScript优化
- 保持代码简洁
- 避免不必要的库依赖
- 使用事件委托减少事件监听器

### 3.2 缓存策略

#### Cloudflare缓存
- 静态资源自动缓存
- 可在Cloudflare Dashboard调整缓存时长
- 建议对图片设置较长的缓存时间

#### 版本控制缓存
```html
<!-- 添加版本号强制刷新 -->
<link rel="stylesheet" href="styles.css?v=1.0.1">
```

### 3.3 安全设置

#### HTTPS
- Cloudflare Pages自动提供SSL证书
- 强制HTTPS重定向可在Dashboard中开启

#### WAF规则
- Cloudflare提供Web应用防火墙
- 可根据需求配置自定义规则

#### 访问控制
- 可以设置IP白名单
- 支持密码保护特定页面

---

## 四、常见问题与解决方案

### Q1: Wrangler部署失败
**问题**：部署时出现权限错误
**解决方案**：
```bash
# 重新登录
wrangler logout
wrangler login

# 检查账户权限
wrangler whoami
```

### Q2: 本地服务器无法启动
**问题**：端口被占用
**解决方案**：
```bash
# 使用其他端口
npx wrangler pages dev public --port 8788

# 或杀死占用端口的进程
lsof -ti:8787 | xargs kill -9
```

### Q3: 部署后页面样式丢失
**问题**：CSS路径错误
**解决方案**：
- 检查CSS文件路径是否正确
- 确保在HTML中使用相对路径
- 检查Cloudflare缓存设置

### Q4: 域名解析不生效
**问题**：DNS更改后网站无法访问
**解决方案**：
- DNS传播可能需要24-48小时
- 检查DNS记录配置是否正确
- 使用`dig`命令检查解析状态：
  ```bash
  dig www.leixos.com
  ```

### Q5: HTTPS证书问题
**问题**：SSL证书错误
**解决方案**：
- 等待Cloudflare自动签发证书（最长24小时）
- 在Cloudflare Dashboard检查SSL/TLS设置
- 确保使用"完全"或"灵活"加密模式

---

## 五、维护与更新

### 5.1 定期维护

#### 月度检查清单
- [ ] 检查所有链接是否有效
- [ ] 更新依赖包版本
- [ ] 测试所有表单功能
- [ ] 检查分析数据（如果有）
- [ ] 审查SEO效果

#### 性能监控
- 使用Cloudflare Analytics监控流量
- 检查Cloudflare Insights
- 定期审查Core Web Vitals

### 5.2 内容更新

#### 添加新页面
1. 在`public/`目录创建新HTML文件
2. 复制现有页面的导航结构
3. 更新页脚链接
4. 部署更新

#### 更新图片
1. 优化图片大小（建议压缩到100KB以下）
2. 使用WebP格式（如果浏览器支持）
3. 保持一致的命名规范
4. 更新HTML中的图片路径

#### 修改样式
1. 直接编辑HTML中的Tailwind类
2. 或在`<style>`标签中添加自定义CSS
3. 测试更改效果
4. 部署到生产环境

### 5.3 备份策略

#### 手动备份
```bash
# 备份整个项目
tar -czvf backup-$(date +%Y%m%d).tar.gz public/

# 备份特定文件
cp -r public/index.html backup/
```

#### Git备份（推荐）
```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "更新网站内容"

# 推送到远程仓库
git push origin main
```

---

## 六、联系方式与支持

### 技术支持
- Cloudflare支持：[Cloudflare Community](https://community.cloudflare.com/)
- Tailwind CSS文档：[Tailwind Docs](https://tailwindcss.com/docs)

### 相关资源
- [Cloudflare Pages文档](https://developers.cloudflare.com/pages)
- [Wrangler文档](https://developers.cloudflare.com/workers/wrangler/)
- [Tailwind CSS指南](https://tailwindcss.com/docs)

---

**文档版本**：1.0
**最后更新**：2024年
**维护团队**：LeiMall技术团队
