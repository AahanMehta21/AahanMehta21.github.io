import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="fixed left-0 top-0 h-full z-40 bg-[url('assets/navbarimg.jpg')] bg-cover bg-center backdrop-blur-lg border-r border-white/10 shadow-lg hidden md:block"
      style={{
        boxShadow: "10px 0 10px rgba(0, 0, 0, 0.5)", // Adds shadow to the right
      }}
    >
      <div className="flex flex-col justify-between h-full py-4">
        <a href="#home" className="font-mono text-xl font-bold text-white px-4">
          Home
        </a>

        <div className={`flex flex-col items-start space-y-4 px-4`}>
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};


// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="fixed left-0 top-0 h-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-r border-white/10 shadow-lg">
//       <div className="flex flex-col justify-between h-full py-4">
//         <a href="#home" className="font-mono text-xl font-bold text-white px-4">
//           pedro<span className="text-blue-500">.tech</span>
//         </a>

//         <div
//           className="w-7 h-5 relative cursor-pointer z-40 md:hidden px-4"
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           &#9776;
//         </div>

//         <div className={`flex flex-col items-start space-y-4 px-4 ${menuOpen ? "block" : "hidden"} md:flex`}>
//           <a
//             href="#home"
//             className="text-gray-300 hover:text-white transition-colors"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-gray-300 hover:text-white transition-colors"
//           >
//             About
//           </a>
//           <a
//             href="#projects"
//             className="text-gray-300 hover:text-white transition-colors"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="text-gray-300 hover:text-white transition-colors"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };