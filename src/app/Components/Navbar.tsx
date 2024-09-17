import React from "react";

interface NavbarProps {
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab }) => {
  return (
    <nav className="bg-gradient-to-b from-gray-800 via-gray-900 to-black p-6 flex flex-col items-center justify-between min-h-screen w-48">
      <div className="flex flex-col space-y-4 mt-4">
        {["About Me", "Projects", "Skills", "Contact Me", "Certificates"].map(
          (tab, index) => (
            <button
              key={tab}
              className="text-red-300 hover:text-red-100 transition-all duration-700 transform-gpu hover:rotate-y-180 hover:scale-100 text-lg font-semibold"
              style={{
                transitionDelay: `${index * 1000}ms`,
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>
      <div className="mb-4">{/* Aquí puedes agregar los íconos */}</div>
    </nav>
  );
};

export default Navbar;
