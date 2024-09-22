import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-8 text-red-300 flex flex-col justify-center items-center rounded-lg">
      <h2 className="text-2xl font-bold">Home</h2>
      <p className="mt-4 text-gray-600">This is the home page.</p>
    </div>
  );
};

export default Home;
