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
      "用于展示项目、发布 Markdown 技术博客，并记录服务端开发学习过程的个人网站。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Nginx"],
    href: "/projects/personal-site",
    status: "已上线 · 持续迭代",
    eyebrow: "WEB / INFRASTRUCTURE",
    highlight: "从本地开发、内容系统到 Docker、Nginx 与云服务器部署的完整实践。",
    architecture: ["Browser", "DNS", "Nginx", "Docker", "Next.js"],
  },
  {
    title: "C++ 游戏服务器",
    description:
      "计划从网络层开始，逐步实现 Gateway、登录、游戏逻辑、缓存与数据持久化。",
    tech: ["C++", "Linux", "TCP/IP", "CMake", "Redis", "MySQL"],
    href: "/projects/game-server",
    status: "计划中 · 待开发",
    eyebrow: "C++ / DISTRIBUTED SYSTEM",
    highlight: "围绕连接管理、服务拆分、状态缓存与持久化建立可验证的学习项目。",
    architecture: ["Client", "Gateway", "Login / Game", "Redis / MySQL"],
  },
];
