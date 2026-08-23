# 华仁个人技术网站

这是我的个人技术网站，用于展示个人项目、技术博客以及服务端开发实践。

该项目不仅作为个人主页，同时也是一个持续迭代的工程实践项目，用于学习和实践：

- Web 前端开发
- Linux 服务器部署
- Docker 容器化
- 云服务器运维
- C++ 服务端架构设计

---

## ✨ Features

当前已实现：

- [x] 个人主页
- [x] 项目展示
- [x] 博客模块
- [x] 项目详情页面
- [x] 响应式页面布局
- [x] TypeScript 类型支持
- [x] ESLint 代码检查

计划实现：

- [ ] Markdown 博客系统
- [ ] SEO 优化
- [ ] 深色/浅色主题切换
- [ ] 后台管理系统
- [ ] 用户评论系统
- [ ] C++ Backend API
- [ ] 游戏服务器项目展示

---

# 技术栈

## Frontend

| 技术 | 用途 |
| ---- | ---- |
| Next.js | React 全栈 Web 框架 |
| React | UI 构建 |
| TypeScript | 类型安全 |
| Tailwind CSS | 样式开发 |
| ESLint | 代码质量检查 |

---

## Development Environment

开发环境：

```
Ubuntu 24.04 LTS
Node.js 22
npm
Git
Docker
Docker Compose
```

本地开发环境：

```
Windows
    |
    |
VMware
    |
    |
Ubuntu 24.04
    |
    |
Next.js Development Server
```

---

# 项目结构

```
personal-site

├── src
│
│   ├── app
│   │   ├── blog
│   │   │   ├── page.tsx
│   │   │   ├── my-first-site
│   │   │   └── cpp-server-notes
│   │   │
│   │   ├── projects
│   │   │   ├── page.tsx
│   │   │   ├── personal-site
│   │   │   └── game-server
│   │   │
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BlogCard.tsx
│   │   └── ProjectCard.tsx
│   │
│   └── data
│       ├── blogPosts.ts
│       └── projects.ts
│
├── public
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

# 本地运行

## 1. 安装依赖

```bash
npm install
```

---

## 2. 启动开发环境

```bash
npm run dev
```

访问：

```
http://localhost:3000
```

或者：

```
http://你的Ubuntu_IP:3000
```

---

# 常用命令

## 开发模式

```bash
npm run dev
```

---

## 代码检查

```bash
npm run lint
```

---

## 生产构建

```bash
npm run build
```

---

## 启动生产版本

```bash
npm run start
```

---

# Docker 部署计划

最终部署架构：

```
                 Internet

                    |
                    |

                Nginx

                    |
                    |

             Next.js Container

                    |
                    |

          Backend API (Future)

                    |
        -----------------------
        |                     |

      MySQL                Redis
```

---

# 云服务器部署计划

目标部署环境：

```
Tencent Cloud Ubuntu

        |
        |

Docker

        |
        |

Personal Website
```

部署流程：

```
Local Development

        |

       Git

        |

      GitHub

        |

 Tencent Cloud

        |

 Docker Deployment
```

---

# Future Backend Architecture

未来计划实现 C++ 服务端系统：

```
Client

  |

Gateway

  |

Login Server

  |

Game Server

  |

-----------------

|               |

Redis          MySQL

```

技术方向：

- C++17/C++20
- Linux
- TCP/IP
- Socket
- epoll
- Redis
- MySQL
- Docker

---

# Game Server Project Roadmap

计划实现：

## Phase 1

基础服务器：

- [ ] TCP Server
- [ ] Event Loop
- [ ] Connection Manager
- [ ] Message Protocol


## Phase 2

游戏服务：

- [ ] Gateway
- [ ] Login Server
- [ ] Room Server
- [ ] Game Server


## Phase 3

分布式能力：

- [ ] RPC
- [ ] Service Discovery
- [ ] Load Balance
- [ ] Distributed Deployment


---

# Git Workflow

开发流程：

```
Modify Code

    |

git add

    |

git commit

    |

git push

    |

Deploy
```

---

# Author

华仁

Focus:

- C++ Server Development
- Linux System Programming
- Network Programming
- Game Server Architecture
- Cloud Deployment
