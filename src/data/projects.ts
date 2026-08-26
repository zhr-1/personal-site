export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  status: string;
  eyebrow: string;
  highlight: string;
  architecture: string[];
};

export const projects: Project[] = [
  {
    title: "个人技术网站",
    description:
      "使用 Next.js、TypeScript 和 Tailwind CSS 开发的个人技术网站，用于展示项目、博客与技术经验。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    href: "/projects/personal-site",
    status: "开发中",
    eyebrow: "WEB / INFRASTRUCTURE",
    highlight: "从本地开发到 Docker、Nginx 与云服务器部署的完整实践。",
    architecture: ["Browser", "Nginx", "Docker", "Next.js"],
  },
  {
    title: "C++ 游戏服务器",
    description:
      "计划实现包含 Gateway、Login、Game Server、Redis 和 MySQL 的迷你游戏服务器架构。",
    tech: ["C++", "Linux", "Redis", "MySQL"],
    href: "/projects/game-server",
    status: "计划中",
    eyebrow: "C++ / DISTRIBUTED SYSTEM",
    highlight: "拆解网关、登录、游戏逻辑与数据层之间的职责边界。",
    architecture: ["Gateway", "Login", "Game", "Storage"],
  },
];
