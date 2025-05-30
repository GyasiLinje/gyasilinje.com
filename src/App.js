import React from 'react';

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0C0E] to-[#010101] text-white font-sans relative overflow-hidden">
      {/* Subtle background glow from bottom-left, mimicking the screenshot */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Bottom-left blob - remains as a rounded shape, with increased visibility */}
        {/* Changed gradient to purple shades */}
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-[#5A3A6A] to-transparent rounded-full filter blur-3xl opacity-60 animate-pulse-subtle"></div>

        {/* Top-center blob - transformed into a rounded triangle shape, with increased visibility */}
        {/* Changed gradient to purple shades */}
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tl from-[#4A2A5A] to-transparent rounded-3xl filter blur-3xl opacity-45 animate-pulse-subtle delay-500
                    top-[-265px] left-1/2 -translate-x-1/2 transform rotate-45"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
        {/* "Available for projects" indicator */}
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2 animate-pulse-slow"></span>
          Let's Create Something
        </div>

        {/* Hero text - Adjusted font size */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Hi, I'm <span className="text-blue-400">Gyasi Linje</span>.
        </h1>
        {/* Replaced text content */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 mb-8">
          A ex-software engineer, turned tech creator.
        </h2>
        {/* Removed the paragraph text */}
        {/*
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Mainly working in the JavaScript ecosystem, I'm a dedicated problem-solver
          who thrives on learning and building.
        </p>
        */}

        {/* Icons and "EXPLORE MORE" button removed */}
        {/*
        <div className="flex space-x-6 mb-16">
          <div className="p-4 border border-gray-700 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <Bolt size={28} className="text-blue-400" />
          </div>
          <div className="p-4 border border-gray-700 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <User size={28} className="text-blue-400" />
          </div>
          <div className="p-4 border border-gray-700 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <Mail size={28} className="text-blue-400" />
          </div>
          <div className="p-4 border border-gray-700 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/20">
            <Folder size={28} className="text-blue-400" />
          </div>
        </div>
        */}

        {/*
        <button className="px-8 py-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
          EXPLORE MORE
        </button>
        */}
      </div>

     

      {/* Tailwind CSS custom animations (add to a <style> tag or global CSS if not using a build process) */}
      <style>
        {`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.6; transform: scale(1) rotate(45deg); } /* Increased base opacity */
          50% { opacity: 0.8; transform: scale(1.1) rotate(45deg); } /* Increased peak opacity and scale */
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 8s infinite ease-in-out; /* Slightly slower animation for more 'blob' feel */
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }
        `}
      </style>
    </div>
  );
};

export default App;
