import Experience from "../../assets/exp-icon.png";
import SnakeGame from "../../assets/snake-game.jpg";
import JSChallenges from "../../assets/JS-challenge.jpg";
import PortFolioImg from "../../assets/port-folio-ss.png";

import { ProjectsCard } from "../shared/ProjectCards";
import { RevealOnScroll } from "../shared/revealOnScroll";
import { ExperienceSvg } from "../icons";

export const Projects = (props) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </h2>
          <div className="grid gird-cols-1 md:grid-cols-2 gap-2">
            <div className="flex justify-center relative">
              <div className="border-l border-gray-200 absolute left-[22px] top-[50px] h-[calc(100%-50px)] rounded-full bg-black"></div>
              <div>
                <ExperienceSvg />
              </div>
              <div className="px-3 py-2">
                <p className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-600 rounded-2xl text-sm font-medium">
                  Oct 2022 - Apr 2025
                </p>
                <p className="text-xl py-1">
                  <span className="font-bold">
                    Software Development Engineer
                  </span>
                  - Perfios
                </p>
                <p>
                  Developed multiple responsive web applications from scratch
                  using ReactJS and JavaScript, enhancing functionality and user
                  experience for Account Aggregation Services, integrating REST
                  APIs and utilizing Redux for state management.
                </p>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="border-l border-gray-200 absolute left-[22px] top-[50px] h-[calc(100%-50px)] rounded-full bg-black"></div>
              <div>
                <ExperienceSvg />
              </div>
              <div className="px-3 py-2">
                <p className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-600 rounded-2xl text-sm font-medium">
                  Mar 2022 - Oct 2022
                </p>
                <p className="text-xl py-1">
                  <span className="font-bold">Software Developer</span>- Mphasis
                </p>
                <p>
                  Engineered a centralized web portal using ReactJS and
                  JavaScript to streamline employee parking management for the
                  client. Designed and built an operator dashboard featuring
                  tables, forms, and dropdowns for efficient data handling.{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="border-l border-gray-200 absolute left-[22px] top-[50px] h-[calc(100%-50px)] rounded-full bg-black"></div>
              <div>
                <ExperienceSvg />
              </div>
              <div className="px-3 py-2">
                <p className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-600 rounded-2xl text-sm font-medium">
                  Oct 2019 - Nov 2021
                </p>
                <p className="text-xl py-1">
                  <span className="font-bold">System Engineer</span>- Infosys
                </p>
                <p>
                  Completed a comprehensive six-month training program covering
                  Python, RDBMS, MongoDB, Express.js, React and Node.js. Worked
                  on ETL enhancements: validated, transformed, and loaded
                  business-critical data into Teradata for reporting purposes.
                </p>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="border-l border-gray-200 absolute left-[22px] top-[50px] h-[calc(100%-50px)] rounded-full bg-black"></div>
              <div>
                <ExperienceSvg />
              </div>
              <div className="px-3 py-2">
                <p className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-600 rounded-2xl text-sm font-medium">
                  Aug 2015 - May 2019
                </p>
                <p className="text-xl py-1">
                  <span className="font-bold">Bachelor's degree</span>- PES
                  Institute of Technology, Bangalore
                </p>
                <p>
                  Completed degree in Information Science and Engineering with
                  7.96 cgpa. Learnt various subjects like Database Management
                  System, Computer Networks, Operating System, Machine Learning
                  etc.
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold mb-8 mt-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 justify-items-center md:justify-items-normal px-4 md:px-0">
            <ProjectsCard
              title="Snake Game"
              image={SnakeGame}
              description="A simple snake game developed using React"
              gitHubLink="https://github.com/anushaHegde08/basic-snake-game"
              demoLink="https://anushahegde08.github.io/basic-snake-game"
            />
            <ProjectsCard
              title="JavaScript Challenges"
              image={JSChallenges}
              description="JavaScript challenges like tic-toc-toe, calculator, counter, to-do etc developed using HTML, CSS and JavaScript."
              gitHubLink="https://github.com/anushaHegde08/javascript-practice-challenges"
              demoLink=" https://anushahegde08.github.io/javascript-practice-challenges/"
            />
            <ProjectsCard
              title="My Portfolio"
              image={PortFolioImg}
              description="This is my personal portfolio where I’ve showcased some of the projects I’ve worked on using React, JavaScript, HTML, CSS, and Tailwind CSS."
              gitHubLink="https://github.com/anushaHegde08/portfolio"
              demoLink="https://anushahegde08.github.io/portfolio/"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
