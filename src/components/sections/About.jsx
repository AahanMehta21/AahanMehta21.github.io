import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "Firmware development & embedded systems",
    "Low-level programming & hardware-software integration",
    "STM32 microcontrollers, ADC/DAC interfacing, SPI/I2C communication",
    "SystemVerilog DV & waveform debugging",
    "Compiler design & custom CPU architecture",
    "Teamwork, leadership, and problem-solving through hands-on projects",
  ];

  const journeyItems = [
    "Building a self-hosting C compiler to understand how high-level code is transformed into machine instructions.",
    "Constructing an 8-bit CPU from TTL logic chips, learning how hardware interprets binary and executes instructions.",
    "Developing embedded firmware for STM32 microcontrollers, including a fully functional Pac-Man game with joystick input, timers, LCD display control, and collision logic.",
    "Contributing to Purdue's CubeSat team, designing firmware for the flight computer and coordinating interactions between subsystems.",
    "Firmware engineering internship at AMD, developing microcontroller firmware for memory controllers, writing SystemVerilog DV testcases, and performing low-level debugging at the waveform and post-silicon level.",
  ];

  const workApproach = [
    "Breaking down complex problems into smaller pieces",
    "Testing incrementally and debugging with tools like oscilloscopes and logic analyzers",
    "Asking for help when needed while staying self-driven",
    "Balancing curiosity with execution, ensuring progress toward tangible results",
  ];

  return (
    <section
      id="about"
      className="min-h-screen text-lg items-center justify-start relative bg-[url(/home/aahan/my-workbench-website/src/assets/Blueprint.svg)] bg-cover bg-center bg-no-repeat py-16 px-4 md:pl-0"
    >
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              style={{ color: "#e5e1d0", fontFamily: "'Patrick Hand', cursive" }}
            >
              About Me
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-8">
          {/* Who I Am - Large Note */}
          <RevealOnScroll>
            <div
              className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[0.5deg]"
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
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20 shadow-md"
                style={{
                  backgroundColor: "rgba(255, 255, 200, 0.65)",
                  transform: "rotate(-2deg)",
                  clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(200, 200, 150, 0.4)",
                }}
              />
              <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">Who I Am</h3>
              <p className="text-base sm:text-lg break-words">
                I'm <strong>Aahan Mehta</strong>, a junior at Purdue University majoring in Computer Science (Honors) with a minor in Electrical and Computer Engineering. I'm passionate about firmware, embedded systems, and systems engineering, and I thrive at the intersection of software and hardware. My curiosity drives me to understand how things work from the inside out, and I learn best by building—from compilers and CPUs to embedded projects and real-time firmware.
              </p>
            </div>
          </RevealOnScroll>

          {/* My Journey */}
          <RevealOnScroll>
            <div
              className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[-1deg]"
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
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20 shadow-md"
                style={{
                  backgroundColor: "rgba(255, 255, 200, 0.65)",
                  transform: "rotate(2deg)",
                  clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(200, 200, 150, 0.4)",
                }}
              />
              <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">My Journey</h3>
              <p className="text-base sm:text-lg mb-4 break-words">
                I've explored computing systems from the ground up. Some of my hands-on projects include:
              </p>
              <ul className="space-y-3 text-base sm:text-lg list-none">
                {journeyItems.map((item, idx) => (
                  <li key={idx} className="flex items-start break-words">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base sm:text-lg mt-4 break-words">
                These experiences have given me a deep understanding of the full stack—from high-level software to low-level hardware behavior—and strengthened my skills in debugging, validation, and system integration.
              </p>
            </div>
          </RevealOnScroll>

          {/* Skills */}
          <RevealOnScroll>
            <div
              className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[1deg]"
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
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20 shadow-md"
                style={{
                  backgroundColor: "rgba(255, 255, 200, 0.65)",
                  transform: "rotate(-1.5deg)",
                  clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(200, 200, 150, 0.4)",
                }}
              />
              <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">Skills</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                {skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start break-words">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span className="break-words">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* How I Work */}
          <RevealOnScroll>
            <div
              className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[-0.5deg]"
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
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20 shadow-md"
                style={{
                  backgroundColor: "rgba(255, 255, 200, 0.65)",
                  transform: "rotate(1deg)",
                  clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(200, 200, 150, 0.4)",
                }}
              />
              <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">How I Work</h3>
              <p className="text-base sm:text-lg mb-4 break-words">
                I enjoy building things from scratch and learning through experimentation. I approach challenges by:
              </p>
              <ul className="space-y-2 text-base sm:text-lg">
                {workApproach.map((item, idx) => (
                  <li key={idx} className="flex items-start break-words">
                    <span className="mr-2 flex-shrink-0">•</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Challenges & Growth */}
          <RevealOnScroll>
            <div
              className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[0.8deg]"
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
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20 shadow-md"
                style={{
                  backgroundColor: "rgba(255, 255, 200, 0.65)",
                  transform: "rotate(-2deg)",
                  clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(200, 200, 150, 0.4)",
                }}
              />
              <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">Challenges & Growth</h3>
              <p className="text-base sm:text-lg break-words">
                Many of my projects involved navigating complex systems with limited hardware resources and integration challenges, such as timing issues, single-threaded constraints, and peripheral interference. Tackling these taught me the importance of persistence, critical thinking, and attention to detail—skills I continue to refine as I explore new architectures and technologies.
              </p>
            </div>
          </RevealOnScroll>

          {/* What Drives Me */}
          <RevealOnScroll>
            <div
              className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[-1.2deg]"
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
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20 shadow-md"
                style={{
                  backgroundColor: "rgba(255, 255, 200, 0.65)",
                  transform: "rotate(1.5deg)",
                  clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(200, 200, 150, 0.4)",
                }}
              />
              <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">What Drives Me</h3>
              <p className="text-base sm:text-lg break-words">
                I'm passionate about understanding how complex systems work by building them, seeing software translate into real hardware behavior, and creating systems that make an immediate impact. Whether it's firmware, embedded systems, or system integration, I'm motivated by projects where I can take ownership, learn continuously, and see my work come to life.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
