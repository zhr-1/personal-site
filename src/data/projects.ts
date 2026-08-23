export type Project = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  status: string;
};

export const projects: Project[] = [
  {
    title: "个人技术网站",
    description:
      "使用 Next.js、TypeScript 和 Tailwind CSS 开发的个人技术网站，用于展示项目、博客与技术经验。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    href: "/projects/personal-site",
    status: "开发中",
  },
  {
    title: "C++ 游戏服务器",
    description:
      "计划实现包含 Gateway、Login、Game Server、Redis 和 MySQL 的迷你游戏服务器架构。",
    tech: ["C++", "Linux", "Redis", "MySQL"],
    href: "/projects/game-server",
    status: "计划中",
  },
];