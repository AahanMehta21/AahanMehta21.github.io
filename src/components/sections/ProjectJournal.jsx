import React, { useEffect } from "react";

export const ProjectJournal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col md:flex-row justify-center items-start bg-[#fdf6e3] bg-opacity-95 p-6 md:p-12 overflow-y-auto ml-26"
      style={{
        fontFamily: "'Patrick Hand', cursive",
        animation: "bookOpen 0.5s ease-out forwards",
        lineHeight: "1.75rem",
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            transparent 24px,
            rgba(100, 100, 100, 0.1) 25px
          ),
          url('/assets/paper-fibers.png')
        `,
        backgroundSize: "100% 25px, cover",
        backgroundBlendMode: "normal, multiply",
      }}
    >
      {/* Book open animation */}
      <style>
        {`
        @keyframes bookOpen {
          0% {
            transform: scale(0.95) rotateX(90deg);
            opacity: 0;
            transform-origin: top center;
          }
          100% {
            transform: scale(1) rotateX(0deg);
            opacity: 1;
          }
        }
        `}
      </style>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-xl font-bold px-3 py-1 border border-black rounded hover:bg-red-200 z-50"
      >
        ✖
      </button>

      {/* Left Page */}
      <div className="md:w-1/2 w-full pr-0 md:pr-8">
        <h2 className="text-4xl mb-4">{project.title}</h2>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full mb-6 border border-black rounded"
          />
        )}
        <div className="mb-6">
          <h3 className="text-2xl mb-2">Objective</h3>
          <p>{project.goal}</p>
        </div>
      </div>

      {/* Right Page */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 md:pl-8">
        {project.details && (
          <div className="mb-6">
            <h3 className="text-2xl mb-2">What I Did</h3>
            <p>{project.details}</p>
          </div>
        )}
        {project.skills && (
          <div className="mb-6">
            <h3 className="text-2xl mb-2">Skills Used</h3>
            <ul className="list-disc ml-6">
              {project.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {project.challenges && (
          <div className="mb-6">
            <h3 className="text-2xl mb-2">Challenges Faced</h3>
            <p>{project.challenges}</p>
          </div>
        )}
      </div>
    </div>
  );
};
