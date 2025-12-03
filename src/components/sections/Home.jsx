import { useState } from "react";
import { StickyNote } from "./StickyNote";
import { RevealOnScroll } from "../RevealOnScroll";
import { ProjectJournal } from "./ProjectJournal"; 

const projects = [
  {
    title: "8 bit computer",
    image: "assets/8bitcomp.png",
    goal: "Build an 8-bit functional CPU using CMOS 74HC logic ICs on the breadboard along with custom assembly language",
    status: "In progress (Registers, clock, and ALU fully working)",
    skills: ["CPU Architecture", "Breadboarding", "Digital Systems Design", "Debugging and testing", "Assembly"],
    icon: "⚙️",
  },
  {
    title: "Self-Compiling C Compiler",
    image: "assets/compiler.jpg",
    goal: "Develop a self-compiling C compiler with x86-64 Assembly backend",
    status: "Completed",
    skills: ["C", "Assembly", "Parsing", "Compiler Design", "Computer Architecture"],
    icon: "🛠️",
  },
  {
    title: "STM32 Pacman Game",
    image: "/assets/pacman.jpeg",
    goal: "Design and implement the Pacman Game on STM32 with a TFT LCD display, joystick, LED matrix, and core peripherals",
    status: "Completed",
    skills: ["Embedded Systems", "STM32", "C", "Game Design", "Project Management", "Git", "SPI, I2C, ADC, DAC, UART"],
    icon: "🎓", 
  },
  {
    title: "Walkie Talkie - Winner, Best Hardware Hack @ HackPrinceton 2025",
    image: "/assets/walkietalkie.jpeg",
    goal: "Develop a smart cane to aid visually impaired individuals with real-time communication and obstacle detection",
    status: "Completed",
    skills: ["Raspberry Pi", "Computer Vision", "IoT", "Machine Learning", "Embedded Systems"],
    icon: "📡",
    link: "https://devpost.com/software/walkie-talkie-xg9d70",
  },
  {
    title: "Grade Saver - Winner, Best Browser Automation Award @ Catapult Hacks 2025",
    image: "/assets/gradesaver.jpg",
    goal: "Create a Chrome extension to automate regrade requests on Gradescope",
    status: "Completed",
    skills: ["Web Scraping", "LLMs", "LVMs", "HTML", "CSS", "JavaScript"],
    icon: "🧠",
    link: "https://devpost.com/software/grade-saver-8wjofd",
  },
  {
    title: "Custom Keyboard",
    image: "assets/keyboard.png", 
    goal: "Create a compact custom mechanical keyboard with embedded C",
    status: "Completed*",
    skills: ["Embedded C", "PCB Design", "3D Design and Printing"],
    icon: "⌨️",
  },
  {
    title: "Simple x86 Kernel",
    image: "/assets/bootloader.png",
    goal: "Develop a minimal x86 floppy disk bootloader in NASM assembly",
    status: "Completed",
    skills: ["NASM Assembly", "C++", "Bootloader", "Kernel Development", "Operating Systems"],
    icon: "💻",
  },
  {
    title: "Purdue Marketplace",
    image: "assets/marketplace.jpg",
    goal: "Create a marketplace application for Purdue students to buy and sell items",
    status: "Completed",
    skills: ["Java", "gRPC framework", "ORM Database", "GUI", "Concurrency"],
    icon: "🖥️",
  },
  {
    title: "Odin Project Web Development Projects",
    image: "assets/theodinproject.png",
    goal: "Complete the Odin Project curriculum for web development",
    status: "Ongoing",
    skills: ["HTML", "CSS", "JavaScript", "React", "chrome dev tools"],
    icon: "🖥️",
  },
  {
    title: "Personal Portfolio Website (You're right here!)",
    image: "assets/personalwebsite.png",
    goal: "Create a personal portfolio website to showcase my projects and skills",
    status: "Is the journey of learning ever really over?",
    skills: ["HTML", "JavaScript", "Tailwind CSS", "Vite"],
    icon: "🖥️",
  },
  {
    title: "Bonus: I use Arch btw",
    image: "assets/archlinux.png",
    goal: "Switch to using Arch Linux and rice it to my liking",
    status: "One last feature I promise and then I'm done I promise one last feature after this bug fix caused due to the one last ",
    skills: ["Arch Linux", "Shell Scripting", "Top Tier debugging skills", "Anger Mangement perhaps?"],
    icon: "🖥️",
  },
];

const journal = [
  {
    title: "8 Bit Computer",
    gallery: [
      {type: "image", src: "assets/8bitcomp.png", alt: "computer"},
    ],
    purpose: "After building a self-hosting C compiler, the next step was to explore how hardware executes assembly instructions. This curiosity led to an in-depth study of computer architecture, instruction sets, and CPU design. Using the most basic components available, CMOS 74HC logic ICs and a single EEPROM, a custom computer was constructed to examine instruction decoding, data flow, ALU design, and bus architecture, revealing the inner workings of a CPU at the gate and register level. The project also involved designing a custom ISA, experimenting with memory addressing constraints, and gaining hands-on experience with timing, latches, and hardware debugging beyond initial expectations.",
    details: "This project is a custom 8-bit CPU built from scratch using 74HC logic ICs. The design includes a 555-based system clock (with manual and automatic modes), an 8-bit tri-state data bus, general-purpose registers, an instruction register, a memory address register, a program counter, and an output register driving a seven-segment display. The memory subsystem uses 4-bit addressing (16 bytes). The ALU performs addition and subtraction using 74HC283 adders and XOR-based two's-complement logic, with support for flags and future multiplication (which can be done with software). The control logic fetches instructions from memory, decodes opcodes, and orchestrates register/bus transfers. The computer should be able to execute simple programs written in a custom assembly language, which I am building alongside an assembler.",
    skills: "Digital logic design, CPU and micro-architecture, instruction set design, memory addressing, timing analysis, debugging with scopes and logic probes, seven-segment display multiplexing, schematic design, hardware-software co-design, and writing a custom assembly language + assembler.",
    challenges: "Building a CPU from raw logic exposed many low-level pitfalls: register wiring mistakes, bus contention from misconfigured OE lines, and discovering how sensitive circuits are to loading resistance and power integrity. The limited 4-bit memory addressing forced creative ideas for instruction loading. And often, the hardest part wasn't broken hardware—it was realizing I misunderstood how the chip was supposed to behave or simply incorrect wiring. Each issue pushed my understanding of real CPU behavior and digital design deeper.",
    link: "https://github.com/AahanMehta21/8-bit-computer", 
  },
  {
    title: "SecC — Self-Compiling C Compiler",
    gallery: [
      
    ],
    purpose: "As part of my Computer Architecture class, I worked on a C compiler project. However most of the core pieces (lexer, parser, syntax tree) were provided to us and we neded up only writing grammar in lex and yacc. In order to understand how a real compiler works from the ground up, so I built my own C compiler in C and x86-64 assembly. The objective was to create a self-hosting compiler capable of compiling its own source code while mastering the fundamentals of parsing, semantic analysis, code generation, and overall toolchain design.",
  details: "SecC is a recursive-descent C compiler that parses C source code, performs semantic analysis using ASTs, and generates x86-64 assembly. It uses Pratt parsing to correctly handle operator precedence, supports compound statements, nested flow control, nested loops, comparison operations, global variables, and basic data types (int and char). The compiler comes with a full test suite, including functional testcases and diff-based testbenches that compare emitted assembly output against expected results. A Makefile automates the entire toolchain: building the compiler, converting C to assembly, assembling to an executable, running tests, cleaning artifacts, and handling Git workflow. SecC produces an assembly file (out.s) which can be assembled using cc, and the test framework includes utilities to check correctness, runtimes, and regression behavior.",
  skills: "Compiler construction, recursive-descent parsing, Pratt parsing, AST design, semantic analysis, code generation for x86-64, low-level assembly, Makefile automation, debugging compilers with test harnesses, architecture-aware toolchain design, and C systems programming.",
  challenges: "Building a compiler from scratch meant addressing every subtle detail that existing tools hide—managing token streams, designing an AST representation flexible enough for flow control, handling operator precedence without ambiguity, generating valid x86-64 assembly, and ensuring correctness across deeply nested program structures. Debugging semantic errors required careful reasoning about scope and symbol tables. Writing a reliable testbench was crucial, especially for catching small differences in emitted assembly. Making SecC deterministic, robust, and maintainable pushed my understanding of compilers far beyond what class projects typically cover.",
  link: "https://github.com/AahanMehta21/secCCompiler", 
  },
  {
    title: "STM32 Pacman Game",
    gallery: [
      {type: "video", src: "assets/pacmandemo.mp4", alt: "Video demonstrating the game"},
    ],
    purpose: "As the final project for Purdue's ECE 36200 (Microprocessor Systems and Interfacing), our team built a full Pac-Man clone on an STM32 microcontroller. I focused on the TFT LCD SPI display pipeline, joystick-driven movement, and core game logic. The goal was to recreate the classic arcade feel—pellets, ghosts, scoring, lives, levels—while operating under the constraints of a single-threaded embedded system.",
  details: "The game ran on an STM32 and rendered graphics on a TFT LCD over SPI, with joystick input read through ADC sampling (with boxcar smoothing and a deadzone threshold). We implemented movement memory so Pac-Man can queue turns before corridors, and collision detection used pixel-level hitboxes. The gameplay included pellets, power pellets, a scoring system, win/lose conditions, and multi-level progression where ghost speed increased each round.\n\nGhost movement combined randomness with simple vector math—similar to Clyde’s alternating chase/retreat behavior—to create believable interactions without full AI. A key challenge was orchestrating ghost release timing in a single-threaded environment; I solved this by designing an invisible “mini-maze” inside the ghost house, letting ghosts wander until they naturally exited, creating the illusion of timed sequential release.\n\nThe project used timers for game logic, ADC sampling for the joystick, DAC output for Pac-Man’s audio, DMA for efficient peripheral handling, and I²C to store highscores in EEPROM. A matrix keypad (scanned via GPIO) allowed players to enter their initials. Although the architecture began as a finite-state machine, the implemented engine blended state-driven and event-based logic to meet timing constraints.",
  skills: "STM32 embedded programming, SPI-driven display rendering, ADC signal processing (boxcar smoothing, deadzones), DMA and timer-based concurrency, I²C EEPROM interfacing, matrix keypad scanning, collision detection, game-engine design on microcontrollers, debugging with oscilloscopes and hardware probes.",
  challenges: "The single-threaded nature of the STM32 meant ADC sampling, rendering, and game logic all competed for time, causing timing jitter and missed inputs until carefully tuned. The I²C EEPROM wrote correctly but failed reads, requiring extensive debugging with a scope and step-through breakpoints. Ghost logic and release timing were particularly tricky, and engineering the invisible maze workaround was a highlight. Integration across display, input, timers, and audio required constant coordination and fine-grained timing adjustments."

  },
  {
    title: "Walkie Talkie - Winner, Best Hardware Hack @ HackPrinceton 2025",
    gallery: [
      {type: "image", src: "assets/walkietalkie.jpeg", alt: "The device"},
      {type: "image", src: "assets/walkietalkie3.jpg", alt: "Some Components"},
      {type: "image", src: "assets/walkietalkie2.jpg", alt: "Me and the device"},
    ],
    purpose: "We wanted to create a device that solves a real-world problem for visually impaired users by combining hardware and software. The Smart Cane provides real-time guidance through object detection and haptic feedback, helping users navigate safely and intuitively while detecting obstacles and hazards in their environment.",
  details: "The cane integrates a camera for streaming images to a YOLOv5 object detection model, providing audio descriptions of pedestrians, bicycles, cars, and other obstacles via text-to-speech. Ultrasonic sensors on the cane detect proximity and trigger vibration motors in the handle, with intensity scaled by distance. A Raspberry Pi handles sensor data, coordinates camera input, and streams video to a server for efficient YOLO processing. The system also includes multithreading to handle simultaneous sensor input, haptic output, and audio feedback, and a matrix keypad for highscore entry. The modular architecture allows for easy expansion, such as adding more sensors or interactive navigation modes.",
  skills: "Hardware-software integration, embedded systems design with Raspberry Pi, Python programming, multithreading, real-time sensor processing, computer vision (OpenCV, YOLOv5), text-to-speech, haptic feedback design, WebSockets communication, GPIO programming, and user-centered assistive technology design.",
  challenges: "Achieving real-time performance was difficult due to limited hardware resources, requiring offloading YOLO processing to a server. Integrating multiple systems—camera, sensors, haptic motors, and audio output—without noticeable latency required careful multithreaded design. Designing effective feedback with limited sensors required creative solutions to ensure intuitive, actionable guidance for users.",
    link: "https://devpost.com/software/walkie-talkie-xg9d70",
  },
  {
    title: "Grade Saver - Winner, Best Browser Automation Award @ Catapult Hacks 2025",
    gallery: [
    ],
    purpose: "Grade Saver was built to simplify the tedious process of submitting regrade requests on Gradescope. The goal was to create a tool that automatically identifies opportunities to reclaim points and generates AI-assisted regrade requests, saving time and reducing manual effort while protecting student privacy.",
  details: "Grade Saver is a Chrome extension that integrates web scraping, image processing, and AI prompting. It parses Gradescope pages using Playwright and Beautiful Soup to extract rubric comments for incorrect questions. Handwritten or scanned submissions are processed with OpenCV for denoising and contrast enhancement, and text is extracted using open-source VLM models. The cleaned rubric and submission are sent to a Python server, which prompts a large language model (LLaMA 3.1) to generate regrade requests. The Chrome extension then injects these requests directly into Gradescope’s submission field, streamlining the process. Flask hosts the server, while the extension handles browser interactions through Manifest V3, providing a user-friendly interface to select questions and copy AI-generated requests with a single click.",
  skills: "Browser extension development (Chrome, Manifest V3), Python programming, Flask server development, web scraping with Beautiful Soup and Playwright, image processing with OpenCV, text extraction using open-source VLM models, prompt engineering, JSON data handling, AI integration, privacy-conscious design, and full-stack tool integration.",
  challenges: "Integrating multiple stacks—including browser extension, server, AI model, and image preprocessing—posed significant challenges. Privacy concerns required local hosting. Deploying AI models locally was constrained by memory and compute limits, while coordinating web scraping and AI prompting under strict hackathon time pressure demanded rapid debugging. Extracting high-quality text from handwritten submissions, generating accurate regrade requests, and ensuring seamless injection into Gradescope required careful iteration and testing. A major challenge that still remains is ensuring privacy of student answers",
    link: "https://devpost.com/software/grade-saver-8wjofd",
  },
  {
    title: "Custom Mechanical Keyboard",
    gallery: [
      {type: "image", src: "N/A", alt: "Work in Progress"},

    ],
    purpose: "The goal was to build a fully custom keyboard, from design and engineering to firmware—rather than assembling an existing kit. This involved creating the PCB, soldering every component, modeling and 3D printing the case and keycaps, and developing the firmware that drives the entire system. The project provided hands-on experience with end-to-end PCB design, keyboard matrix scanning at both electrical and firmware levels, and advanced QMK firmware customization beyond standard configurations.",
    details: "This project started with a KiCad PCB designed around a classic row-column keyboard matrix. I routed traces for diodes, switches, and an onboard controller, then manufactured the board and hand-soldered all components—including diodes, hot-swap switches, resistors, and an Arduino Pro Micro as the main MCU. For the enclosure, I modeled a custom frame, case, and keycaps in CAD and printed them on an FDM 3D printer, tuning tolerances until everything fit seamlessly. Firmware was written using QMK, where I created a YAML-based keymap, defined layers and macros, and added custom logic for lighting and tap/hold behavior. I compiled the firmware, flashed it to the Pro Micro’s bootloader, and fine-tuned debouncing and scan rates to get a responsive feel tailored to my typing style.",
    skills: "PCB design in KiCad, switch matrix routing, hand soldering, prototyping with Arduino Pro Micro, 3D modeling and printing, QMK firmware development in C, YAML keymap configuration, USB HID fundamentals, hardware/firmware integration, and iterative mechanical design.",
    challenges: "Fine-tuning the PCB layout to avoid ghosting and ensure proper diode orientation was a learning curve. Getting the 3D-printed case to align with the PCB required multiple iterations because small dimensional errors amplified in assembly. Debugging switch matrix issues—especially when a single cold solder joint breaks an entire row—took patience and careful probing. Flashing QMK to the Pro Micro also introduced its own quirks, requiring troubleshooting bootloader modes and USB recognition. Each stage reinforced the importance of attention to detail in both electronics and mechanical design."
  },
  {
    title: "Simple x86 Kernel",
    gallery: [
      { type: "image", src: "assets/x86kernel1.png", alt: "kernel display messsage" },
      { type: "image", src: "assets/x86kernel2.png", alt: "kernel from 32 bit mode"}
    ],
    purpose: "The goal of this project was to develop a minimal x86 bootloader and kernel to understand low-level system initialization, CPU modes, and how operating systems start from bare hardware. It was an exercise in learning assembly, memory addressing, and kernel-level execution. This little project is supposed to be a stepping stone towards building my own OS from scratch.",
    details: "The kernel consists of a simple x86 floppy disk bootloader written in NASM assembly and emulated using QEMU. It can boot in real mode to print a message, switch to 32-bit protected mode to print directly to VGA memory, and execute code beyond the first 512 bytes of the disk. Future work includes integrating C++ code using a custom cross-compiler and linker to explore higher-level kernel routines while still booting from a minimal assembly foundation.",
    skills: "NASM assembly, x86 architecture, bootloader development, kernel programming, QEMU-based hardware emulation.",
    link: "https://github.com/AahanMehta21/simple-x86-kernel"
  }
  
];

export const Home = () => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(null);
  return (
    <section
      id="home"
      className="min-h-screen text-lg items-center justify-start relative bg-[url(/home/aahan/my-workbench-website/src/assets/Blueprint.svg)] bg-cover bg-center bg-no-repeat py-16 px-4 md:pl-0"
    >
      
      <section className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-8 z-10 max-w-[1600px] mx-auto">
      <div className="text-center z-10 mb-12 max-w-[90%] sm:max-w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-snug "
            style={{ color: "#e5e1d0", fontFamily: "'Patrick Hand', cursive" }}
          >
            Hi, I'm Aahan.<br />I build things.
          </h1>
        </div>
        
          {projects.map((proj, idx) => (
            <StickyNote key={idx} {...proj} onClick={() => setSelectedProjectIdx(idx)} />
          ))}
        
      </section>
      {selectedProjectIdx !== null && journal[selectedProjectIdx] && (
        <ProjectJournal 
        project={journal[selectedProjectIdx]} 
        onClose={() => setSelectedProjectIdx(null)} />
      )}
      
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
