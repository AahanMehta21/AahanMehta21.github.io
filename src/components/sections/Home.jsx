import { StickyNote } from "./StickyNote";
import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
  {
    title: "Custom Keyboard",
    image: "Custom Keyboard", 
    goal: "Create a compact custom mechanical keyboard with embedded C",
    status: "Completed",
    challenges: "Designing the layout, 3D printing, soldering",
    icon: "⌨️",
  },
  {
    title: "8 bit computer",
    image: "8 Bit Computer",
    goal: "Build an 8-bit CPU using CMOS 74HC logic ICs on the breadboard",
    status: "In progress (Registers and ALU fully working)",
    challenges: "Clock timing, power distribution, breadboard debugging",
    icon: "⚙️",
  },
  {
    title: "Self-Compiling C Compiler",
    image: "/assets/compiler.png", // Ensure this image exists in your assets
    goal: "Develop a self-hosting C compiler with x86-64 Assembly backend",
    status: "Completed",
    challenges: "Implementing recursive descent parsing, Pratt parsing, AST generation, and code generation",
    icon: "🛠️",
  },
  {
    title: "ECE Class Projects",
    image: "/assets/ece_projects.png", // Ensure this image exists in your assets
    goal: "Design and implement embedded systems projects for ECE coursework",
    status: "Ongoing",
    challenges: "Real-time lunar landing simulation on FPGA and STM32, Pacman replica using ADC",
    icon: "🎓",
  },
  {
    title: "Simple x86 Kernel",
    image: "/assets/kernel.png", // Ensure this image exists in your assets
    goal: "Develop a minimal x86 floppy disk bootloader in NASM assembly",
    status: "In progress",
    challenges: "Boot stages in real & protected mode, interfacing with C++ files and PS/2 keyboard",
    icon: "💻",
  },
  {
    title: "Walkie Talkie",
    image: "/assets/walkie_talkie.png", // Ensure this image exists in your assets
    goal: "Develop a hardware hack for real-time communication",
    status: "Completed",
    challenges: "Hardware integration and real-time data transmission",
    icon: "📡",
    link: "https://devpost.com/software/walkie-talkie-xg9d70",
  },
  {
    title: "Grade Saver",
    image: "/assets/grade_saver.png", // Ensure this image exists in your assets
    goal: "Create a Chrome extension to automate regrade requests on Gradescope",
    status: "Completed",
    challenges: "Web scraping, AI prompting, Chrome extension development",
    icon: "🧠",
    link: "https://devpost.com/software/grade-saver-8wjofd",
  },
];


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen    items-center justify-start relative bg-[url(/home/aahan/my-workbench-website/src/assets/Blueprint.svg)] bg-cover bg-center bg-no-repeat py-16 px-4"
    >
      <RevealOnScroll>
      <section className="flex flex-wrap justify-center gap-6 sm:gap-8 z-10 max-w-[1600px]">
      <div className="text-center z-10 mb-12 max-w-[90%] sm:max-w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-snug"
            style={{ color: "#e5e1d0", fontFamily: "'Patrick Hand', cursive" }}
          >
            Hi, I'm Aahan.<br />I build things.
          </h1>
        </div>
        {projects.map((proj, idx) => (
          <RevealOnScroll key={idx}>
            <StickyNote {...proj} />
          </RevealOnScroll>
        ))}
      </section>
      </RevealOnScroll>
    </section>
  );
};
// import { RevealOnScroll } from "../RevealOnScroll";

// export const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative bg-[url(/home/aahan/my-workbench-website/src/assets/Blueprint.svg)] bg-cover bg-center bg-no-repeat"
//     >
//       <RevealOnScroll>
//         <div className="text-center z-10 px-4">
//           <h1
//             className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent leading-right"
//             style={{ color: '#e5e1d0', fontFamily: "'Patrick Hand', cursive" }} 
//           >
//             Hi, I'm Aahan. I build things.
//           </h1>

//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
