# Cloudflare Pages Peer Dependency 冲突修复 - Product Requirement Document

## Overview
- **Summary**: 修复 Cloudflare Pages 部署中的 npm peer dependency 冲突问题，将 `@nuxt/devtools@latest` 更新为兼容版本 `@nuxt/devtools@^3.2.4`，与 nuxt@3.21.7 保持一致
- **Purpose**: 解决 "npm peer dependency conflict" 错误，确保构建过程不依赖环境变量绕过
- **Target Users**: 项目开发人员

## Goals
- 更新 `@nuxt/devtools` 从 `latest`（4.0.0-alpha.7）到兼容版本 `^3.2.4`
- 保持与 nuxt@3.21.7 的兼容性
- 重新生成 package-lock.json
- 测试验证构建成功
- 确保不使用 `--legacy-peer-deps` 也能正常构建

## Non-Goals (Out of Scope)
- 不修改 nuxt 版本
- 不添加环境变量作为临时解决方案
- 不改变项目的其他功能

## Background & Context
- Cloudflare Pages 部署出现 peer dependency 冲突错误
- `@nuxt/devtools@latest` 解析为 `4.0.0-alpha.7`，但与 `nuxt@3.21.7` 不兼容
- nuxt@3.21.7 期望 `@nuxt/devtools@^3.2.4`
- 当前使用 `--legacy-peer-deps` 绕过，但这不是最佳实践

## Functional Requirements
- **FR-1**: 更新 package.json 中的 `@nuxt/devtools` 版本从 `latest` 到 `^3.2.4`
- **FR-2**: 删除旧的 package-lock.json 重新生成
- **FR-3**: 测试 npm install 和 npm run build 确保无 peer dependency 警告
- **FR-4**: 提交并推送修复到 GitHub

## Non-Functional Requirements
- **NFR-1**: 修复后的依赖版本与 nuxt@3.21.7 完全兼容
- **NFR-2**: 构建过程无 peer dependency 警告或错误
- **NFR-3**: 不依赖环境变量绕过机制

## Constraints
- **Technical**: 保持 nuxt 版本为 3.21.7
- **Dependencies**: 确保 devtools 版本与 nuxt 版本兼容
- **Business**: 确保不影响项目现有功能

## Assumptions
- nuxt@3.21.7 与 @nuxt/devtools@^3.2.4 完全兼容
- 重新生成 package-lock.json 不会引入新的冲突
- Cloudflare Pages 环境支持此配置

## Acceptance Criteria

### AC-1: package.json 正确更新
- **Given**: 需要修复 peer dependency 冲突
- **When**: 更新 package.json 中的 @nuxt/devtools 版本
- **Then**: 版本从 `latest` 更新为 `^3.2.4`
- **Verification**: `programmatic`
- **Notes**: 使用语义化版本范围

### AC-2: 依赖安装成功
- **Given**: package.json 已更新
- **When**: 删除旧的 package-lock.json 并重新安装
- **Then**: npm install 执行成功，无 peer dependency 警告
- **Verification**: `programmatic`
- **Notes**: 不使用 --legacy-peer-deps

### AC-3: 构建成功
- **Given**: 依赖安装成功
- **When**: 运行 npm run build
- **Then**: 构建成功，无警告和错误
- **Verification**: `programmatic`

### AC-4: 代码提交推送
- **Given**: 修复完成
- **When**: 提交到 Git
- **Then**: 包含 package.json 和 package-lock.json 的更新
- **Verification**: `human-judgment`

## Open Questions
- [ ] 无，问题明确
