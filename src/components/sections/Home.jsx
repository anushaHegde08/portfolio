import ProfilePhoto from "../../assets/profile-photo.jpg";
import Download from "../../assets/download-icon.png";
import { RevealOnScroll } from "../shared/revealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl text-center md:text-6xl font-bold mb-6 text-gray-50 leading-right">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Anusha Hegde,{" "}
            </span>
            Frontend Developer
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 relative">
            <div className="text-center z-10 px-4">
              <p className="text-gray-300 text-lg mb-4 max-w-lg mx-auto">
                I'm a passionate frontend developer who loves crafting
                beautiful, user-friendly web experiences. My expertise spans
                modern JavaScript, React, TypeScript, and CSS frameworks, always
                with a focus on performance and accessibility while writing
                clean, efficient code. I'm constantly learning and adapting to
                the ever-evolving world of web development.
              </p>
              <div className="flex max-[400px]:flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full py-2.5 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5"
                >
                  Contact Me
                </a>
                <div className="p-[2px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <a
                    href="https://drive.google.com/file/d/1BSQ8kbTaUWZwAt8BRrRlEqkN3XpclXax/view?usp=sharing"
                    target="_blank"
                    className="bg-black relative rounded-full overflow-hidden flex items-start self-start justify-between hover:cursor-pointer font-medium group transition-all duration-500 ease-out"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500 to-purple-600 w-full h-full translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 rounded-full" />
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300 z-10">
                      Resume
                    </span>
                    <div className="px-2 py-2 z-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                      <img
                        src={Download}
                        alt="!"
                        className="w-6 h-6 flex items-center justify-center"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center px-4 py-2 md:py-0">
              <img
                src={ProfilePhoto}
                alt="Profile Photo"
                className="max-w-3xs mx-auto rounded-2xl pt-6 md:pt-0 hover:scale-105 transition-all duration-75 ease-in-out"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
