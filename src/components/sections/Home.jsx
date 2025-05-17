import { useState } from "react";
import { StickyNote } from "./StickyNote";
import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectJournal } from "./ProjectJournal"; 

const projects = [
  {
    title: "Custom Keyboard",
    image: "Custom Keyboard", 
    goal: "Create a compact custom mechanical keyboard with embedded C",
    status: "Completed*",
    skills: ["Embedded C", "PCB Design", "3D Design and Printing"],
    icon: "⌨️",
  },
  {
    title: "8 bit computer",
    image: "8 Bit Computer",
    goal: "Build an 8-bit functional CPU using CMOS 74HC logic ICs on the breadboard along with custom assembly language",
    status: "In progress (Registers, clock, and ALU fully working)",
    skills: ["CPU Architecture", "Breadboarding", "Digital Systems Design", "Debugging and testing", "Assembly"],
    icon: "⚙️",
  },
  {
    title: "Self-Compiling C Compiler",
    image: "/assets/compiler.png",
    goal: "Develop a self-compiling C compiler with x86-64 Assembly backend",
    status: "Completed",
    skills: ["C", "Assembly", "Parsing", "Compiler Design", "Computer Architecture"],
    icon: "🛠️",
  },
  {
    title: "STM32 Pacman Game",
    image: "/assets/ece_projects.png",
    goal: "Design and implement the Pacman Game on STM32 with a TFT LCD display, joystick, LED matrix, and core peripherals",
    status: "Completed",
    skills: ["Embedded Systems", "STM32", "C", "Game Design", "Project Management", "Git"],
    icon: "🎓",
  },
  {
    title: "Simple x86 Kernel",
    image: "/assets/kernel.png",
    goal: "Develop a minimal x86 floppy disk bootloader in NASM assembly",
    status: "Completed",
    skills: ["NASM Assembly", "C++", "Bootloader", "Kernel Development", "Operating Systems"],
    icon: "💻",
  },
  {
    title: "Walkie Talkie",
    image: "/assets/walkie_talkie.png",
    goal: "Develop a smart cane to aid visually impaired individuals with real-time communication and obstacle detection",
    status: "Completed",
    skills: ["Raspberry Pi", "Computer Vision", "IoT", "Machine Learning", "Embedded Systems"],
    icon: "📡",
    link: "https://devpost.com/software/walkie-talkie-xg9d70",
  },
  {
    title: "Grade Saver",
    image: "/assets/grade_saver.png",
    goal: "Create a Chrome extension to automate regrade requests on Gradescope",
    status: "Completed",
    skills: ["Web Scraping", "LLMs", "LVMs", "HTML", "CSS", "JavaScript"],
    icon: "🧠",
    link: "https://devpost.com/software/grade-saver-8wjofd",
  },
  {
    title: "Purdue Marketplace",
    image: "Purdue Marketplace",
    goal: "Create a marketplace application for Purdue students to buy and sell items",
    status: "Completed",
    skills: ["Java", "gRPC framework", "ORM Database", "GUI", "Concurrency"],
    icon: "🖥️",
  },
  {
    title: "Odin Project Web Development Projects",
    image: "Web Development Projects",
    goal: "Complete the Odin Project curriculum for web development",
    status: "Ongoing",
    skills: ["HTML", "CSS", "JavaScript", "React", "chrome dev tools"],
    icon: "🖥️",
  },
  {
    title: "Personal Portfolio Website (This one!)",
    image: "You're right here!",
    goal: "Create a personal portfolio website to showcase my projects and skills",
    status: "Is the journey of learning ever really over?",
    skills: ["HTML", "JavaScript", "Tailwind CSS", "Vite"],
    icon: "🖥️",
  },
  {
    title: "Bonus: I use Arch btw",
    image: "Arch btw",
    goal: "Switch to using Arch Linux and rice it to my liking",
    status: "One last feature I promise and then I'm done I promise one last feature after this bug fix caused due to the one last ",
    skills: ["Arch Linux", "Shell Scripting", "Top Tier debugging skills", "Anger Mangement perhaps?"],
    icon: "🖥️",
  },
];


export const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
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
            <StickyNote {...proj} onClick={() => setSelectedProject(proj)} />
          </RevealOnScroll>
        ))}
      </section>
      {selectedProject && (
        <ProjectJournal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
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
