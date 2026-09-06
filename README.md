# 邹华仁个人技术网站

这是我的个人技术网站，用于展示项目、发布 Markdown 技术博客，并记录 C++ 服务端、Linux、网络编程与游戏服务器架构的学习和实践。

- 在线地址：[https://hrzou.cn](https://hrzou.cn)
- GitHub：[https://github.com/zhr-1/personal-site](https://github.com/zhr-1/personal-site)

## 当前状态

网站 V1.0 已上线并持续迭代。

已实现：

- [x] 响应式首页、项目列表、项目详情与关于页面
- [x] 首页项目预览与最新两篇博客预览
- [x] Markdown 博客列表和动态文章路由
- [x] 文章 frontmatter、标签、日期排序和页面 metadata
- [x] 日间 / 夜间主题切换与本地记忆
- [x] 桌面导航与移动端 hamburger 菜单
- [x] 自定义 404、favicon、Open Graph 图片
- [x] sitemap、robots 和基础 SEO
- [x] Docker Compose 生产部署
- [x] Nginx 反向代理与 HTTPS

后续计划：

- [ ] 博客代码高亮、目录、阅读时间、标签页和搜索
- [ ] C++ Backend API、后台管理与数据库
- [ ] 自动化发布与运行状态监控
- [ ] 继续开发 C++ 游戏服务器项目

## 技术栈

| 技术 | 用途 |
| --- | --- |
| Next.js 16 | App Router、静态页面与动态博客路由 |
| React 19 | 页面与交互组件 |
| TypeScript | 类型安全 |
| Tailwind CSS 4 | 响应式布局与主题样式 |
| gray-matter | 解析 Markdown frontmatter |
| remark / remark-html | Markdown 转换为 HTML |
| Docker / Docker Compose | 构建和运行生产容器 |
| Nginx | HTTPS 与反向代理 |

## 页面与路由

| 路由 | 说明 |
| --- | --- |
| `/` | 首页、主要项目与最新文章 |
| `/projects` | 项目列表 |
| `/projects/personal-site` | 个人网站项目详情 |
| `/projects/game-server` | 计划中的 C++ 游戏服务器项目 |
| `/blog` | Markdown 博客列表 |
| `/blog/[slug]` | Markdown 文章详情 |
| `/about` | 关于我 |
| `/sitemap.xml` | 网站地图 |
| `/robots.txt` | 搜索引擎抓取规则 |

## Markdown 博客

文章保存在 `content/blog/*.md`。`src/lib/blog.ts` 负责读取文件、解析 frontmatter、生成 slug，并按日期倒序返回文章。

新增文章只需创建 Markdown 文件，无需新增 React 页面：

```md
---
title: "文章标题"
description: "文章简介"
date: "2026-09-06"
tags:
  - C++
  - Linux
---

# 正文标题

这里开始编写文章内容。
```

文件名会成为文章地址。例如 `network-notes.md` 对应 `/blog/network-notes`。

## 项目结构

```text
personal-site/
├── content/
│   └── blog/                    # Markdown 文章
├── public/                      # 公共静态资源
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── blog/
│   │   │   ├── [slug]/         # Markdown 动态文章页
│   │   │   └── page.tsx        # 博客列表
│   │   ├── projects/
│   │   │   ├── game-server/
│   │   │   ├── personal-site/
│   │   │   └── page.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/              # 公共展示和交互组件
│   ├── data/projects.ts         # 项目公共数据
│   └── lib/blog.ts              # Markdown 博客数据层
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 本地开发

建议使用 Node.js 22。

```bash
npm ci
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

提交前执行：

```bash
npm run lint
npm run build
```

## 生产部署

当前请求链路：

```text
Browser → DNS → Nginx → Docker → Next.js
```

腾讯云服务器使用 Ubuntu 24.04。生产更新流程：

```bash
git pull origin main
docker compose up -d --build
```

容器仅监听服务器本机的 `127.0.0.1:3000`，公网请求通过 Nginx 和 HTTPS 进入应用。

## 项目方向

个人网站完成 V1.0 后，将继续推进 C++ 游戏服务器项目，计划围绕 Gateway、Login Server、Game Server、Redis 和 MySQL 构建可验证的最小服务链路，并逐步补充压测和性能分析记录。
