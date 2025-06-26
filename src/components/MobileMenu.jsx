import CloseIcon from "../assets/close-white.png";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top 0 left-0 w-full bg-black z-40 flex flex-col items-center justify-center transistion-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-6 focus:outline-none cursor-pointer"
      >
        <img src={CloseIcon} alt="Close" className="w-6 h-6" />
      </button>
      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opaccity-0 transition-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opaccity-0 transition-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#projects"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opaccity-0 transition-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opaccity-0 transition-y-5"
        } `}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>
    </div>
  );
};
