import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const skills = [
  {
    name: "Python",
    icon: "logos:python",
    url: "https://www.python.org/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Java",
    icon: "logos:java",
    url: "https://www.java.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    url: "https://www.typescriptlang.org/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "HTML5",
    icon: "vscode-icons:file-type-html",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    url: "https://tailwindcss.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Bootstrap CSS",
    icon: "logos:bootstrap",
    url: "https://getbootstrap.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    url: "https://nodejs.org/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "React",
    icon: "logos:react",
    url: "https://reactjs.org/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Astro",
    icon: "logos:astro-icon",
    url: "https://astro.build/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    url: "https://nextjs.org/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Spring",
    icon: "logos:spring-icon",
    url: "https://spring.io/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    url: "https://git-scm.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
    url: "https://github.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Flask",
    icon: "logos:flask",
    url: "https://flask.palletsprojects.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "SQL",
    icon: "vscode-icons:file-type-sql",
    url: "https://www.w3schools.com/sql/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "SQLite",
    icon: "vscode-icons:file-type-sqlite",
    url: "https://www.sqlite.org/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
    url: "https://www.mysql.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "VS Code",
    icon: "logos:visual-studio-code",
    url: "https://code.visualstudio.com/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "PyCharm",
    icon: "logos:pycharm",
    url: "https://www.jetbrains.com/pycharm/",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "IntelliJ IDEA",
    icon: "logos:intellij-idea",
    url: "https://www.jetbrains.com/idea/",
    image: "/placeholder.svg?height=80&width=80",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-r from-black via-red-900 to-black text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center py-6 bg-black bg-opacity-50">
        Skills
      </h2>
      <div className="flex-grow overflow-y-auto p-4">
        <p className="text-xl text-center mb-8 text-gray-300">
          My skills are based on the following technologies
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <Link
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2 bg-black bg-opacity-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="relative w-16 h-16 mb-2">
                <Image
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 group-hover:opacity-0"
                />
                <Icon
                  icon={skill.icon}
                  className="w-16 h-16 absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-red-400 transition-colors duration-300 text-center">
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
