# Cloudflare Pages 部署命令配置修复 - Product Requirement Document

## Overview
- **Summary**: 修复 Cloudflare Pages 部署命令配置错误问题，更新部署文档明确说明不要配置 Deploy command
- **Purpose**: 解决 "Workers-specific command in a Pages project" 错误，确保部署成功
- **Target Users**: 项目开发人员

## Goals
- 更新 DEPLOYMENT.md 文档，明确说明 Cloudflare Pages 不要配置 Deploy command
- 确保用户知道正确的 Cloudflare Pages 控制台配置方式

## Non-Goals (Out of Scope)
- 不修改项目代码
- 不添加 wrangler 配置
- 不改变构建命令

## Background & Context
- Cloudflare Pages 部署失败，错误提示 "It looks like you've run a Workers-specific command in a Pages project"
- 当前配置了 Deploy command: `npx wrangler deploy`（这是 Workers 的命令）
- 对于 Pages 项目，应该完全不配置 Deploy command，让 Cloudflare Pages 自动部署
- 如果要使用命令行部署，应该用 `wrangler pages deploy`

## Functional Requirements
- **FR-1**: 更新 DEPLOYMENT.md，明确说明不要配置 Deploy command
- **FR-2**: 添加如何在 Cloudflare Pages 控制台修复部署的说明

## Non-Functional Requirements
- **NFR-1**: 文档清晰易懂
- **NFR-2**: 包含明确的步骤指引修复现有部署

## Constraints
- **Technical**: Cloudflare Pages 的正确配置方式
- **Dependencies**: 不需要修改任何代码

## Assumptions
- 不配置 Deploy command 是 Cloudflare Pages 的正确做法
- 按照文档指引操作可以修复部署问题

## Acceptance Criteria

### AC-1: 文档已更新
- **Given**: 需要修复部署配置
- **When**: 更新 DEPLOYMENT.md
- **Then**: 明确说明不要配置 Deploy command
- **Verification**: `human-judgment`

### AC-2: 文档包含修复步骤
- **Given**: 现有部署配置错误
- **When**: 查看文档
- **Then**: 包含如何在 Cloudflare Pages 控制台删除错误配置的详细步骤
- **Verification**: `human-judgment`

## Open Questions
- [ ] 无，问题明确
