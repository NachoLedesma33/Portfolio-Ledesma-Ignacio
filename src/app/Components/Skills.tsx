import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const skills = [
  {
    name: "Python",
    icon: "logos:python",
    url: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: "logos:java",
    url: "https://www.java.com/",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Bash",
    icon: "logos:bash-icon", // Nuevo ícono de bash de Iconify
    url: "https://www.gnu.org/software/bash/",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML5",
    icon: "vscode-icons:file-type-html",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap CSS",
    icon: "logos:bootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    url: "https://nodejs.org/",
  },
  {
    name: "React",
    icon: "logos:react",
    url: "https://reactjs.org/",
  },
  {
    name: "Astro",
    icon: "logos:astro-icon",
    url: "https://astro.build/",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    url: "https://nextjs.org/",
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    url: "https://spring.io/",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
    url: "https://github.com/",
  },
  {
    name: "Flask",
    icon: "logos:flask",
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "SQL",
    icon: "vscode-icons:file-type-sql",
    url: "https://www.w3schools.com/sql/",
  },
  {
    name: "SQLite",
    icon: "vscode-icons:file-type-sqlite",
    url: "https://www.sqlite.org/",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
    url: "https://www.mysql.com/",
  },
  {
    name: "VS Code",
    icon: "logos:visual-studio-code",
    url: "https://code.visualstudio.com/",
  },
  {
    name: "PyCharm",
    icon: "logos:pycharm",
    url: "https://www.jetbrains.com/pycharm/",
  },
  {
    name: "IntelliJ IDEA",
    icon: "logos:intellij-idea",
    url: "https://www.jetbrains.com/idea/",
  },
  {
    name: "PowerShell",
    icon: "vscode-icons:file-type-powershell",
    url: "https://learn.microsoft.com/en-us/powershell/",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen p-8 overflow-hidden">
      <h2 className="text-4xl font-bold text-center py-6">Skills</h2>
      <div
        className="flex-grow overflow-y-auto p-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Oculta barra de scroll
      >
        <p className="text-xl text-center mb-8 text-gray-300">
          Mis habilidades están basadas en torno a las siguientes tecnologías
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Link
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 bg-black bg-opacity-50 rounded-lg shadow-md"
            >
              <div className="relative w-16 h-16 mb-2 flex items-center justify-center">
                <Icon icon={skill.icon} className="w-12 h-12" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300 text-center">
                {skill.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

/*
tengo el siguiente error:
 GET /placeholder.svg?height=80&width=80 404 in 8528ms
 ⨯ The requested resource isn't a valid image for /placeholder.svg?height=80&width=80 received text/html; charset=utf-8
*/
