"use client";
import { useParams } from "next/navigation";
import { projectsData } from "@/lib/projectsData";
import ProjectTemplate from "@/components/projetos/ProjectTemplate"; // extrai aquele layout bonito que já fizemos

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Projeto não encontrado.
      </div>
    );
  }

  return <ProjectTemplate project={project} />;
}
