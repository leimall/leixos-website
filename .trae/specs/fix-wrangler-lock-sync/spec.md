# Wrangler 升级后 package-lock.json 不同步修复 - Product Requirement Document

## Overview
- **Summary**: 修复 wrangler 从 v3 升级到 v4.98.0 后，package-lock.json 与 package.json 不同步导致的部署失败问题
- **Purpose**: 解决 npm ci 错误中大量包版本冲突（esbuild, miniflare, workerd, sharp 等）
- **Target Users**: 项目开发人员

## Goals
- 重新生成与 wrangler v4.98.0 兼容的 package-lock.json
- 确保所有依赖版本正确匹配
- 测试验证构建成功

## Non-Goals (Out of Scope)
- 不降级 wrangler 版本
- 不修改其他依赖
- 不改变项目功能

## Background & Context
- wrangler 从 ^3.0.0 升级到 ^4.98.0
- package-lock.json 仍为旧版本，导致大量包版本冲突
- npm ci 严格检查失败：esbuild@0.17.19 vs 0.27.3, miniflare@3.x vs 4.x 等
- 缺少新版本需要的包：@cloudflare/unenv-preset@2.16.1, @poppinss/dumper@0.6.5 等

## Functional Requirements
- **FR-1**: 删除旧的 package-lock.json
- **FR-2**: 删除 node_modules 目录
- **FR-3**: 重新运行 npm install 生成新的锁文件
- **FR-4**: 测试 npm run build 确保构建成功
- **FR-5**: 提交新的 package-lock.json 到 Git

## Non-Functional Requirements
- **NFR-1**: 新的 package-lock.json 与 package.json 完全同步
- **NFR-2**: 所有依赖包版本正确匹配
- **NFR-3**: 构建过程无警告和错误

## Constraints
- **Technical**: wrangler v4 是最新稳定版本，需要兼容的新依赖
- **Dependencies**: 所有依赖都需要与 wrangler v4 兼容

## Assumptions
- wrangler v4.98.0 与 Nuxt 3 项目完全兼容
- 重新生成 package-lock.json 不会引入其他问题

## Acceptance Criteria

### AC-1: package-lock.json 重新生成
- **Given**: wrangler 升级到 v4.98.0
- **When**: 删除旧锁文件并重新安装
- **Then**: 新的 package-lock.json 不再包含版本冲突
- **Verification**: `programmatic`

### AC-2: 本地构建成功
- **Given**: package-lock.json 已更新
- **When**: 运行 npm run build
- **Then**: 构建成功，无错误
- **Verification**: `programmatic`

### AC-3: 代码提交推送
- **Given**: 修复完成
- **When**: 提交到 Git
- **Then**: 包含新的 package-lock.json
- **Verification**: `human-judgment`

## Open Questions
- [ ] 无，问题明确
