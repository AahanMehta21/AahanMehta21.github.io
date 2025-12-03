import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen text-lg flex items-center justify-center relative py-24 px-4"
    >
      <RevealOnScroll>
        <div
          className="relative w-full max-w-2xl p-6 sm:p-8 shadow-lg rounded-lg border text-black transform rotate-[0.8deg]"
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
          {/* Sticky Tape */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 z-20"
            style={{
              backgroundColor: "rgba(255, 255, 200, 0.7)",
              transform: "rotate(-2deg)",
              clipPath: "polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
              border: "1px solid rgba(200, 200, 150, 0.4)",
            }}
          />

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl text-center mb-4">Contact Me</h3>

          {/* Intro */}
          <p className="text-lg sm:text-xl mb-6 text-center">
            If you'd like to reach out—whether it’s about firmware, machine learning, 
            research, collaborations, or just to say hi—I'd love to connect!
          </p>

          {/* Contact Links */}
          <div className="space-y-3 text-lg sm:text-xl mb-8 text-center">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:aahanmehta2005@purdue.edu"
                className="underline hover:text-blue-700"
              >
                aahanmehta2005@purdue.edu
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/aahanm"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                linkedin.com/in/aahanm
              </a>
            </p>

            <p>
              💻 GitHub:{" "}
              <a
                href="https://github.com/AahanMehta21"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-700"
              >
                github.com/AahanMehta21
              </a>
            </p>
          </div>

          {/* Optional Contact Form */}
          <form
            className="flex flex-col gap-4 text-base sm:text-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for reaching out! (Form not wired up yet)");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="p-3 rounded border bg-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="p-3 rounded border bg-white"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your message…"
              className="p-3 rounded border bg-white"
              required
            />

            <button
              type="submit"
              className="mt-2 py-2 px-4 rounded bg-black text-white hover:bg-gray-800 transition"
              style={{ fontFamily: "'Patrick Hand', cursive" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
