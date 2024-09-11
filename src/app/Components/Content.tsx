import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Certificates from "./Certificates";

interface ContentProps {
  activeTab: string;
}

const tabMap: Record<string, JSX.Element> = {
  "About Me": <AboutMe />,
  Projects: <Projects />,
  Skills: <Skills />,
  "Contact Me": <ContactMe />,
  Certificates: <Certificates />,
};

const Content: React.FC<ContentProps> = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState<string>("About Me");
  const [transitioning, setTransitioning] = useState<boolean>(false);

  useEffect(() => {
    if (currentTab !== activeTab) {
      setTransitioning(true);
      // Set a timeout to change the currentTab after animation duration
      const timer = setTimeout(() => {
        setCurrentTab(activeTab);
        setTransitioning(false);
      }, 500); // Duration of the animation in milliseconds

      return () => clearTimeout(timer); // Cleanup on component unmount or change
    }
  }, [activeTab, currentTab]);

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-100 p-4 relative overflow-hidden">
      <div
        className={`absolute w-full h-full bg-white p-4 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {tabMap[currentTab]}
      </div>
    </div>
  );
};

export default Content;
