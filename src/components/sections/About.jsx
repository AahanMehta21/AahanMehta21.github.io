import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "Firmware engineering & embedded systems",
    "Low-level programming & hardware-software integration",
    "microcontroller architecture, ADC/DAC interfacing, SPI/I2C/UART communication",
    "UVM, SystemVerilog DV & waveform debugging",
    "Computer architecture, compilers, & digital logic design",
    "Machine Learning, OpenCV, TensorFlow, PyTorch, ONNX",
    "Programming languages: C, C++, SystemVerilog, Python, Java, JavaScript, Perl, x86 Assembly, UNIX Shell Scripting",
    "Tools: Git, Perforce, JIRA, Verdi, Vivado, KiCad, MATLAB",
    "Teamwork, leadership, and problem-solving through hands-on projects",
  ];


  return (
    <section
      id="about"
      className="min-h-screen text-lg items-center justify-start relative bg-[url('assets/Blueprint.svg')] bg-cover bg-center bg-no-repeat py-16 px-4 md:pl-0"
    >
      <div className="max-w-6xl mx-auto">
        {/* About heading removed — 'Who I Am' card will serve as the About element inside the container */}

        <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-8">
          {/* Who I Am - Large Note */}
          <RevealOnScroll>
            <div
              className="relative flex-[2_1_640px] min-w-[320px] max-w-[720px] p-6 sm:p-8 shadow-lg rounded-lg border text-black transform rotate-[0.5deg]"
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
                lineHeight: "28px",
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
              <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-center break-words">About Me</h3>
              <p className="text-lg sm:text-xl md:text-lg break-words">
                I'm <strong>Aahan Mehta</strong>, a junior at Purdue University majoring in Computer Science (Honors) with a minor in Electrical and Computer Engineering. My strengths lie in firmware engineering, Machine Learning, and systems engineering, and I thrive at the intersection of software and hardware. My curiosity drives me to understand how things work from the inside out, and I learn best by building—from compilers and CPUs to computer vision and edge ML to embedded projects and firmware.
                <br></br>
                   I'm passionate about understanding how complex systems work, seeing software translate into real hardware behavior, and creating systems that make an immediate impact. Whether it's firmware, embedded systems, or system integration, I'm motivated by projects where I can take ownership, learn continuously, and see my work come to life.
                   <br></br>My goal is to understand the entire stack from high-level application based software down to silicon and RTL, because I believe this breadth of knowledge is crucial to building robust and efficient systems.
              </p>
            </div>
          </RevealOnScroll>

          {/* Experience Section */}
<RevealOnScroll>
  <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start gap-4 sm:gap-6 md:gap-8 w-full">
    
    {/* Industry Experience */}
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
      <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">Industry Experience</h3>
      <ul className="space-y-3 text-base sm:text-lg list-none">
        <li className="flex items-start break-words">
          <span className="mr-2 flex-shrink-0">•</span>
          <span className="break-words">
            <strong>Firmware Engineering Intern</strong> – Graphics Memory Controller Team, <strong>AMD</strong> (Sep 2025 - Dec 2025)<br></br>• Developing firmware for the memory controller, debugging interfaces for hardware validation, and implementing an abstraction-layer programming interface for the memory controller for quality assurance and to ensure proper spec
adherence through functional violation checking access for next-gen HBM and GDDR based controllers.
<br></br>• Designing and modifying DV testcases to validate firmware and API functions using SystemVerilog and performing
waveform analysis for signal-level debugging.
<br></br>• Providing post-silicon support through high-level JTAG tools, and pre-silicon waveform correlations.
<br></br>• Migrating the team’s specification generation workflow to feature.
          </span>
        </li>
      </ul>
    </div>

   {/* Research Experience */}
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
      transform: "rotate(-2deg)",
      clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
      boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
      border: "1px solid rgba(200, 200, 150, 0.4)",
    }}
  />
  <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">Research Experience</h3>
  <ul className="space-y-3 text-base sm:text-lg list-none">
    <li className="flex items-start break-words">
      <span className="mr-2 flex-shrink-0">•</span>
      <span className="break-words">
        <strong>Undergraduate Research Assistant – Edge Device AI/ML</strong> (Sep 2025 - Present, Dependable Computing Systems Lab @Purdue University): Investigating adaptive offloading techniques for deploying large AI/ML models on AR/VR devices (currently Oculus Quest 3) under constrained compute and bandwidth resources. Developed an ONNX-based inference pipeline using Sentis with Oculus SDK integration for real-time analytics.
      </span>
    </li>
    <li className="flex items-start break-words">
      <span className="mr-2 flex-shrink-0">•</span>
      <span className="break-words">
        <strong>Undergraduate Researcher – Secure Autonomous Systems</strong> (May 2025 - Jul 2025, Purdue University): Researched adversarial patch attacks on multi-object tracking pipelines in autonomous vehicles and implemented patch-based attacks on YOLOv5 + Kalman filter to induce bounding box misalignment under Prof. Berkay Celik.
      </span>
    </li>
    <li className="flex items-start break-words">
      <span className="mr-2 flex-shrink-0">•</span>
      <span className="break-words">
        <strong>Eye Tracking for Dyslexia Detection</strong> (Independent High School Research, India): Researched computer vision and ML approaches for dyslexia detection, achieving 92.8% accuracy. Developed models using OpenCV, R, and Python for multi-lingual detection of school-going students.
      </span>
    </li>
  </ul>
</div>


    {/* Other Experience */}
    <div
      className="relative w-full sm:w-[500px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 shadow-lg rounded-lg border text-black transform rotate-[-1.5deg]"
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
      <h3 className="text-2xl sm:text-3xl mb-4 text-center break-words">Other Experience</h3>
      <ul className="space-y-3 text-base sm:text-lg list-none">
        <li className="flex items-start break-words">
          <span className="mr-2 flex-shrink-0">•</span>
          <span className="break-words">
            <strong>Firmware Team Lead – CubeSat Development</strong> (Jan 2025 - Aug 2025, Purdue University): Developed STM32 bare-metal firmware, led subsystem integration design, implemented state machine-based control, and defined success criteria for system reviews.
          </span>
        </li>
        <li className="flex items-start break-words">
          <span className="mr-2 flex-shrink-0">•</span>
          <span className="break-words">
            <strong>Teaching Assistant – Electrical Engineering Lab</strong> (Aug 2024 - Aug 2025, Purdue University): Led labs on circuit modeling, MOSFETs, op-amps, frequency filtering, trained students on lab equipment including oscilloscopes and multimeters, and conducted office hours for 80+ students.
          </span>
        </li>
      </ul>
    </div>

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
          
        </div>
      </div>
    </section>
  );
};
