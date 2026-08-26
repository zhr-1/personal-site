import type { Metadata } from "next";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "项目",
  description: "我的个人开发项目与技术实践。",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-[calc(100svh-8.5rem)] w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          项目
        </h1>
        <p className="mt-3 text-zinc-500">
          我正在开发和研究的项目，以及它们背后的思考与实现过程。
        </p>
      </header>

      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.href}
            index={index + 1}
            title={project.title}
            description={project.description}
            tech={project.tech}
            href={project.href}
            status={project.status}
            eyebrow={project.eyebrow}
            highlight={project.highlight}
            architecture={project.architecture}
          />
        ))}
      </div>
    </main>
  );
}
