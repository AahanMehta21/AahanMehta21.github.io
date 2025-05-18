import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const ProjectJournal = ({ project, onClose }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") triggerClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const triggerClose = () => {
    setClosing(true);
    setTimeout(() => onClose(), 400); // match animation duration
  };

  useEffect(() => {
  document.body.style.overflow = "hidden";
  const preventTouch = (e) => e.preventDefault();
  document.body.addEventListener("touchmove", preventTouch, { passive: false });

  return () => {
    document.body.style.overflow = "";
    document.body.removeEventListener("touchmove", preventTouch);
  };
}, []);



  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col md:flex-row justify-center items-start bg-[#fdf6e3] bg-opacity-95 p-6 md:p-12 overflow-y-auto transition-all duration-500 ease-in-out ml-26 ${
        closing ? "animate-bookClose" : "animate-bookOpen"
      }`}
      style={{
        fontFamily: "'Patrick Hand', cursive",
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
      {/* Stitched Leather Spine */}
      <div
        className="absolute top-0 left-0 h-full w-8 z-10"
        style={{
          background: "repeating-linear-gradient(#5c3d2e 0 10px, #4a2d1e 10px 20px)", // leather bands
          boxShadow: "inset -4px 0 6px rgba(0,0,0,0.3)",
          borderRight: "2px dashed #eee",
        }}
      />
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

        @keyframes bookClose {
          0% {
            transform: scale(1) rotateX(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(0.95) rotateX(90deg);
            opacity: 0;
          }
        }

        .animate-bookOpen {
          animation: bookOpen 0.5s ease-out forwards;
        }
        .animate-bookClose {
          animation: bookClose 0.4s ease-in forwards;
        }
      `}
      </style>


      {/* Close button */}
      <button
          onClick={triggerClose}
        className="absolute top-4 right-4 text-xl font-bold px-3 py-1 border border-black rounded hover:bg-red-200 z-50"
      >
        ✖
      </button>
      <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 text-black text-xl">
      <div className="flex flex-col md:flex-row md:items-start gap-8 w-full ml-4">
        {/* Left Page */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl mb-4">{project.title}</h2>

          {project.gallery?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl mb-4">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((item, i) => (
                item.type === "image" ? (
                  <img
                    key={i}
                    src={item.src}
                    alt={item.alt || `Image ${i}`}
                    className="w-full h-auto rounded border border-black"
                  />
                ) : item.type === "video" ? (
                  <video
                    key={i}
                    controls
                    className="w-full rounded border border-black"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null
              ))}
            </div>
          </div>
        )}
          {/* <h3 className="text-2xl mb-2">Gallery</h3>
          <p>{Gallery placeholder}</p> */}


          <div className="mb-6">
            <h3 className="text-2xl mb-2">Purpose</h3>
            <p>{project.purpose}</p>
          </div>
        </div>

        {/* Right Page */}  
        <div className="md:w-1/2 w-full">
          {project.details && (
            <div className="mb-6">
              <h3 className="text-2xl mb-2">How I made it</h3>
              <p>{project.details}</p>
            </div>
          )}
          {project.skills && (
            <div className="mb-6">
              <h3 className="text-2xl mb-2">Skills</h3>
              <p>{project.skills}</p>
            </div>
          )}  
          {project.challenges && (
            <div className="mb-6">
              <h3 className="text-2xl mb-2">Challenges</h3>
              <p>{project.challenges}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
