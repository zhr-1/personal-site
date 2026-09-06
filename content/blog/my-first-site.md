---
title: "我的第一个个人网站"
description: "记录个人网站从开发、Docker 容器化到腾讯云部署的完整过程。"
date: "2026-08-23"
tags:
  - Next.js
  - Docker
  - 部署
---

这篇文章记录我的个人网站从 VMware Ubuntu 本地开发环境，到 Next.js 开发，再到最终部署腾讯云的完整过程。

## 为什么要做这个网站？

我希望建立一个属于自己的技术网站，用来记录学习过程、展示项目，以及整理 C++ 服务端开发相关内容。

## 从本地开发到部署

网站使用 Next.js 和 TypeScript 开发，通过 Docker 完成容器化，再部署到腾讯云 Ubuntu 服务器，由 Nginx 负责反向代理和 HTTPS 访问。
