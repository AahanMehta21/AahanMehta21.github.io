import React from "react";

export const StickyNote = ({ title, image, goal, status, challenges, icon }) => {
  return (
    <div
      className="relative w-[280px] sm:w-[300px] p-4 shadow-lg rounded-lg border text-black"
      style={{
        backgroundColor: "#fdf6e3", // soft cream paper base
        backgroundImage: `
          url('/assets/paper-fibers.png'),
          repeating-linear-gradient(
            to bottom,
            transparent 24px,
            rgba(120, 120, 120, 0.25) 25px
          )
        `,
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        borderColor: "#d3d3d3",
        fontFamily: "'Patrick Hand', cursive",
        lineHeight: "25px",
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

      <h2 className="text-2xl mb-2 text-center">{title}</h2>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full mb-4 border border-black"
        />
      )}
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Status:</strong> {status}</p>
      <div className="flex justify-between items-start">
        <p><strong>Challenges:</strong> {challenges}</p>
        <div className="text-right mt-2 text-xl">{icon}</div>
      </div>
    </div>
  );
};



// import React from "react";

// export const StickyNote = ({ title, image, goal, status, challenges, icon }) => {
//   return (
//     <div
//       className="relative w-[280px] sm:w-[300px] p-4 shadow-lg rounded-lg border-4 border-dashed text-black"
//       style={{
//         backgroundColor: "#fdf6e3",
//         borderColor: "#4B6EAF",
//         fontFamily: "'Patrick Hand', cursive",
//       }}
//     >
//       {/* tape */}
//       <div
//         className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 rounded rotate-[-3deg] shadow-sm"
//         style={{ backgroundColor: "#d1d5db" }} // gray-300
//       />

//       <h2 className="text-2xl mb-2 text-center">{title}</h2>
//       <img
//         src={image}
//         alt={title}
//         className="w-full mb-4 border border-black"
//       />
//       {/* <img src="/assets/keyboard.png" alt="test" className="w-full mb-4 border border-black" /> */}

//       <p><strong>Goal:</strong> {goal}</p>
//       <p><strong>Status:</strong> {status}</p>
//       <div className="flex">
//       <p><strong>Challenges:</strong> {challenges}</p>
//       <div className="text-right mt-2 text-xl">{icon}</div>
//       </div>
//     </div>
//   );
// };
