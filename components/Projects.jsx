import Image from "next/image";
import Link from "next/link";
import React from "react";
import maquinasDeTatuarImg from "../public/assets/projects/maquinasdetatuar.png";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import allmaDentalImg from "../public/assets/projects/allmaDentalMain.png";
import getTranscriptImg from "../public/assets/projects/getTranscript.png";
function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl -tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I`ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sitio de venta de Maquinas de tatuar"
            backgroundImg={maquinasDeTatuarImg}
            projectUrl="/maquinasDeTatuar"
            stack="ReactJs, Tailwind"
          />
          <ProjectItem
            title="Clinica Odontologica AllmaDental"
            backgroundImg={allmaDentalImg}
            projectUrl="/allmaDental"
            stack="NextJs, ReactJs, Tailwind"
          />
          <ProjectItem
            title="Sitio Web Transcripciones Youtube"
            backgroundImg={getTranscriptImg}
            projectUrl="/getTranscript"
            stack="SvelteKit, Tailwind"
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
