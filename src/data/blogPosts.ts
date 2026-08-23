export type BlogPost = {
  title: string;
  summary: string;
  date: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "我的第一个个人网站",
    summary:
      "记录这个网站从 VMware Ubuntu 本地开发环境，到 Next.js 开发，再到最终部署腾讯云的完整过程。",
    date: "2026-08-23",
    href: "/blog/my-first-site",
  },
  {
    title: "C++ 服务端开发笔记",
    summary:
      "整理 Linux 网络编程、并发、Redis、MySQL 和游戏服务器架构相关知识。",
    date: "持续更新",
    href: "/blog/cpp-server-notes",
  },
];
