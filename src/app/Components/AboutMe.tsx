import React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-8 text-red-300 flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-red-100"
      >
        Sobre Mí
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-2xl text-center"
      >
        <p className="text-lg mb-4">
          Hola, soy [Tu Nombre]. Como desarrollador web apasionado, me dedico a
          crear experiencias digitales únicas y cautivadoras.
        </p>
        <p className="text-lg mb-4">
          Mi viaje en el mundo del desarrollo comenzó hace [X años], impulsado
          por una curiosidad insaciable y un deseo constante de aprender. Desde
          entonces, he trabajado en una variedad de proyectos que han forjado mi
          experiencia y mi perspectiva única en el campo.
        </p>
        <p className="text-lg mb-4">
          Me apasiona especialmente [área específica, por ejemplo: la creación
          de interfaces intuitivas, la optimización del rendimiento, o la
          resolución de problemas complejos]. Creo firmemente en el poder de la
          tecnología para transformar ideas en realidades tangibles y mejorar la
          vida de las personas.
        </p>
        <p className="text-lg">
          Fuera del mundo del código, disfruto [tus hobbies o intereses, por
          ejemplo: explorar nuevas tecnologías, contribuir a proyectos de código
          abierto, o compartir mis conocimientos a través de tutoriales y
          charlas].
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
