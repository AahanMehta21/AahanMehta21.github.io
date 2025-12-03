import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const ProjectJournal = ({ project, onClose }) => {
  const [closing, setClosing] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);

  const getLinkInfo = (url) => {
    if (!url) return null;
    try {
      const hostname = new URL(url).hostname.replace('www.', '');
      if (hostname.includes('github.com')) {
        return { text: 'GitHub', icon: '🔗' };
      } else if (hostname.includes('devpost.com')) {
        return { text: 'Devpost', icon: '🔗' };
      } else {
        // Extract domain name for other links
        const domain = hostname.split('.')[0];
        return { text: domain.charAt(0).toUpperCase() + domain.slice(1), icon: '🔗' };
      }
    } catch {
      return { text: 'Link', icon: '🔗' };
    }
  };



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
  // Prevent body scroll but allow modal to scroll
  document.body.style.overflow = "hidden";
  
  return () => {
    document.body.style.overflow = "";
  };
}, []);



  return (
    <div
      className={`fixed inset-0 z-50 bg-[#fdf6e3] bg-opacity-95 overflow-y-auto transition-all duration-500 ease-in-out touch-pan-y ${
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
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Stitched Leather Spine - Hidden on mobile */}
      <div
        className="hidden md:block fixed top-0 left-0 h-screen w-8 z-10 pointer-events-none"
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
        className="fixed top-4 right-4 text-xl font-bold px-3 py-1 border border-black rounded hover:bg-red-200 z-50 bg-[#fdf6e3]"
      >
        ✖
      </button>
      
      <div className="min-h-full w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12 text-black text-base sm:text-xl pb-16">
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 w-full ml-0 md:ml-4">
        {/* Left Page */}
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl break-words">{project.title}</h2>
            {project.link && (() => {
              const linkInfo = getLinkInfo(project.link);
              return linkInfo ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-xl hover:underline flex items-center gap-2 border border-black px-3 py-1 rounded hover:bg-yellow-100 transition-colors whitespace-nowrap"
                  title={`View on ${linkInfo.text}`}
                >
                  <span>{linkInfo.icon}</span>
                  <span>{linkInfo.text}</span>
                </a>
              ) : null;
            })()}
          </div>

          {project.gallery?.length > 0 && (
            <div className="my-6 sm:my-8">
              <h3 className="text-xl sm:text-2xl mb-4 break-words">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((item, i) =>
                  item.type === "image" ? (
                    <Zoom key={i}>
                      <img
                        src={item.src}
                        alt={item.alt || `Image ${i}`}
                        className="w-full h-auto rounded border border-black cursor-zoom-in"
                      />
                    </Zoom>
                  ) : item.type === "video" ? (
                    <div
                        key={i}
                        className="relative border border-black rounded overflow-hidden"
                      >
                        {playingVideoIndex === i ? (
                          <video
                            src={item.src}
                            controls
                            autoPlay
                            className="w-full rounded"
                            onEnded={() => setPlayingVideoIndex(null)} // reset when done
                          />
                        ) : (
                          <div
                            className="relative cursor-pointer"
                            onClick={() => setPlayingVideoIndex(i)}
                          >
                            <video
                              src={item.src}
                              muted
                              playsInline
                              preload="metadata"
                              className="w-full rounded pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-3xl font-bold">
                              ▶
                            </div>
                          </div>
                        )}
                      </div>
                  ) : null
                )}
              </div>
            </div>
          )}
          {activeVideo && (
            <div className="fixed inset-0 z-[999] bg-black bg-opacity-80 flex items-center justify-center">
              <div className="relative w-full max-w-4xl px-4">
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
                >
                  ✖
                </button>
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-lg border border-white"
                />
              </div>
            </div>
          )}

          {/* <h3 className="text-2xl mb-2">Gallery</h3>
          <p>{Gallery placeholder}</p> */}


          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl mb-2 break-words">Purpose</h3>
            <p className="break-words">{project.purpose}</p>
          </div>
        </div>

        {/* Right Page */}  
        <div className="md:w-1/2 w-full">
          {project.details && (
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl mb-2 break-words">How I made it</h3>
              <p className="break-words">{project.details}</p>
            </div>
          )}
          {project.skills && (
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl mb-2 break-words">Skills</h3>
              <p className="break-words">{project.skills}</p>
            </div>
          )}  
          {project.challenges && (
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl mb-2 break-words">Challenges</h3>
              <p className="break-words">{project.challenges}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
