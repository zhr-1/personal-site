import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目",
  description: "我的个人开发项目与技术实践。",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-24 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-white/10 pb-10">
          <p className="text-sm font-medium text-emerald-400">
            PROJECTS
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            我的项目
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
            这里记录我开发和研究过的项目，包括 Web、
            C++ 服务端以及后续的游戏服务器实践。
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.href}
              title={project.title}
              description={project.description}
              tech={project.tech}
              href={project.href}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </main>
  );
}