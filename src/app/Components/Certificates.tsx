import React, { useState } from "react";
import Image from "next/image";
import certificatesData from "../data/certificates.json";

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(
    null
  );

  const imageMap: { [key: number]: { image: string; fullImage: string } } = {
    1: {
      image: "/src/app/public/images/Js-Frontend-Ledesma-ignacio.png",
      fullImage: "/src/app/public/images/js-Front-ledesma-ignacio.jpg",
    },
    2: {
      image: "/src/app/public/images/Js-FullStack-Ledesma-Ignacio.png",
      fullImage: "/src/app/public/images/js-ledesma-ignacio.jpg",
    },
    3: {
      image: "/src/app/public/images/Python-Ledesma-Ignacio.png",
      fullImage: "/src/app/public/images/Python-Ignacio-Ledesma.jpg",
    },
    4: {
      image: "/src/app/public/images/TS-Ledesma-Ignacio.png",
      fullImage: "/src/app/public/images/ts-ledesma-ignacio.jpg",
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-12 text-gray-300 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-red-300 text-center py-1">
        Certificados
      </h2>
      <p className="mt-4 text-gray-400 mb-8">
        Algunos de mis certificados en estos años de desarrollo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSelectedCertificate(cert.id)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={imageMap[cert.id].image}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-red-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="bg-gray-800 p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
            <Image
              src={imageMap[selectedCertificate].fullImage}
              alt="Full Certificate"
              width={800}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
