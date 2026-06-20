# Cloudflare Pages Node.js 版本修复 - Product Requirement Document

## Overview
- **Summary**: 修复 Cloudflare Pages 部署中的 Node.js 版本不兼容问题，将 .nvmrc 从 20.x 更新为 22.x 以满足 Cloudflare Pages 环境要求
- **Purpose**: 确保项目可以在 Cloudflare Pages 的 Node.js >= 22 环境中正常构建
- **Target Users**: 项目开发人员

## Goals
- 将 .nvmrc 从 20.x 更新为 22.x
- 重新生成与 Node.js 22.x 兼容的 package-lock.json
- 确保所有依赖都满足 Node.js 22.x 要求
- 测试验证构建过程正常

## Non-Goals (Out of Scope)
- 不升级或降级项目依赖版本
- 不修改现有代码功能
- 不改变 Cloudflare Pages 控制台配置

## Background & Context
- Cloudflare Pages 当前环境要求 Node.js >= 22
- 当前 .nvmrc 配置为 20.x，导致某些依赖包的引擎检查失败
- 错误信息显示 "which@7.0.0 requires node: >=22"
- package-lock.json 存在多个包版本冲突需要重新生成

## Functional Requirements
- **FR-1**: 更新 .nvmrc 文件指定 Node.js 22.x 版本
- **FR-2**: 删除旧的 package-lock.json 重新生成兼容版本
- **FR-3**: 使用 --legacy-peer-deps 确保依赖兼容性
- **FR-4**: 测试 npm run build 确保构建成功

## Non-Functional Requirements
- **NFR-1**: 新的 Node.js 版本与 Cloudflare Pages 环境完全兼容
- **NFR-2**: 重新生成的 package-lock.json 与 package.json 完全同步
- **NFR-3**: 构建过程无错误和警告

## Constraints
- **Technical**: 必须使用 Cloudflare Pages 支持的 Node.js 版本（>= 22）
- **Dependencies**: 保持现有依赖配置不变
- **Business**: 确保不影响项目现有功能

## Assumptions
- Cloudflare Pages 环境的默认 Node.js 版本支持 22.x
- 重新生成 package-lock.json 不会引入破坏性变更
- Node.js 22.x 与所有项目依赖兼容

## Acceptance Criteria

### AC-1: .nvmrc 文件正确配置
- **Given**: Cloudflare Pages 要求 Node.js >= 22
- **When**: 更新 .nvmrc 文件
- **Then**: 文件内容指定 Node.js 22.x 版本
- **Verification**: `programmatic`
- **Notes**: 使用 "22.x" 或具体版本号

### AC-2: package-lock.json 重新生成
- **Given**: Node.js 版本已更新为 22.x
- **When**: 删除旧锁文件并重新安装依赖
- **Then**: 新的 package-lock.json 不再包含版本冲突
- **Verification**: `programmatic`
- **Notes**: npm ci 不再报错

### AC-3: 本地构建成功
- **Given**: package-lock.json 已重新生成
- **When**: 运行 npm run build
- **Then**: 构建成功完成，退出码为 0，无警告
- **Verification**: `programmatic`

### AC-4: 代码提交并推送
- **Given**: 所有修复已完成
- **When**: 提交修复到 Git
- **Then**: 修复包含 .nvmrc 和 package-lock.json 的更新
- **Verification**: `human-judgment`

## Open Questions
- [ ] 无，问题明确
