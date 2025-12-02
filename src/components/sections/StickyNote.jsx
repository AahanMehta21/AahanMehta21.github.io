import React from "react";

export const StickyNote = ({ title, image, goal, status, skills, icon, onClick }) => {
  return (
    <div
    onClick={onClick}
  className="relative w-[280px] sm:w-[300px] max-w-[calc(100vw-2rem)] p-3 sm:p-4 shadow-lg rounded-lg border text-black transform rotate-[-1.5deg] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:brightness-110 cursor-pointer"
  style={{
    backgroundColor: "#fdf6e3",
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        transparent 24px,
        rgba(100, 100, 100, 0.2) 25px
      ),
      url('/assets/paper-fibers.png')
    `,
    backgroundSize: "100% 25px, cover",
    backgroundBlendMode: "normal, multiply",
    borderColor: "#d3d3d3",
    fontFamily: "'Patrick Hand', cursive",
    lineHeight: "25px",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  }}
>

      <div
      className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 z-20 shadow-md"
      style={{
        backgroundColor: "rgba(255, 255, 200, 0.65)", // masking tape yellow
        transform: "rotate(-3deg)",
        clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)", // jagged ends
        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",  
        border: "1px solid rgba(200, 200, 150, 0.4)",
        backdropFilter: "blur(0.5px)",
      }}
    />

      <h2 className="text-xl sm:text-2xl mb-2 text-center break-words">{title}</h2>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full mb-3 sm:mb-4 border border-black"
        />
      )}
      <p className="text-sm sm:text-base break-words"><strong>Goal:</strong> {goal}</p>
      <p className="text-sm sm:text-base break-words mt-2"><strong>Status:</strong> {status}</p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mt-2">
        <p className="text-sm sm:text-base break-words flex-1"><strong>Skills:</strong> <span className="break-words">{skills.join(", ")}</span></p>
        <div className="text-right mt-1 sm:mt-2 text-lg sm:text-xl flex-shrink-0">{icon}</div>
      </div>
      
    </div>
  );
};



// import React from "react";

// export const StickyNote = ({ title, image, goal, status, skills, icon }) => {
//   return (
//     <div
//       className="relative w-[280px] sm:w-[300px] p-4 shadow-lg rounded-lg border text-black"
//       style={{
//         backgroundColor: "#fdf6e3", // soft cream paper base
//         backgroundImage: `
//           url('/assets/paper-fibers.png'),
//           repeating-linear-gradient(
//             to bottom,
//             transparent 24px,
//             rgba(120, 120, 120, 0.25) 25px
//           )
//         `,
//         backgroundSize: "cover",
//         backgroundBlendMode: "multiply",
//         borderColor: "#d3d3d3",
//         fontFamily: "'Patrick Hand', cursive",
//         lineHeight: "25px",
//       }}
//     >
//       <div
//       className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 z-20 shadow-md"
//       style={{
//         backgroundColor: "rgba(255, 255, 200, 0.65)", // masking tape yellow
//         transform: "rotate(-3deg)",
//         clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)", // jagged ends
//         boxShadow: "0 2px 4px rgba(0,0,0,0.15)",  
//         border: "1px solid rgba(200, 200, 150, 0.4)",
//         backdropFilter: "blur(0.5px)",
//       }}
//     />

//       <h2 className="text-2xl mb-2 text-center">{title}</h2>
//       {image && (
//         <img
//           src={image}
//           alt={title}
//           className="w-full mb-4 border border-black"
//         />
//       )}
//       <p><strong>Goal:</strong> {goal}</p>
//       <p><strong>Status:</strong> {status}</p>
//       <div className="flex justify-between items-start">
//         <p><strong>Skills:</strong> {skills.join(", ")}</p>
//         <div className="text-right mt-2 text-xl">{icon}</div>
//       </div>
      
//     </div>
//   );
// };

