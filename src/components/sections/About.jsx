import { CircleSkills } from "../shared/CircleSkills";
import { RevealOnScroll } from "../shared/revealOnScroll";
import { Skills } from "../shared/skills";

export const About = () => {
  const technicalSkills = [
    {
      javascript: "90%",
      reactjs: "80%",
      html5: "90%",
      css3: "90%",
      typescript: "70%",
      tailwind_css: "60%",
      react_native: "60%",
    },
  ];
  const professionalSkills = [
    {
      team_work: 100,
      self_driven: 90,
      communication_skills: 90,
      Adaptable: 85,
      Growth_mindset: 80,
    },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-8 gradient-text">
            About Me
          </h2>
          <div>
            <p className="text-gray-300 mb-8">
              I'm a front-end developer with a Bachelor's degree in Information
              Science Engineering from PES Institute of Technology, Bangalore
              and 3+ years of software development experience. I'm experienced
              in front-end technologies such as HTML, CSS, JavaScript and
              Typescript. I have also developed and maintained various
              JavaScript applications and has exceptional knowledge of React.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-8 border-white/20 border hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 hover:-translate-y-1 transition-all">
              <p className="text-2xl gradient-text">10+</p>
              <p className="text-white font-bold">Projects Completed</p>
            </div>
            <div className="rounded-xl p-8 border-white/20 border hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 hover:-translate-y-1 transition-all">
              <p className="text-2xl gradient-text">3+</p>
              <p className="text-white font-bold">Years of Experience</p>
            </div>
            <div className="rounded-xl p-8 border-white/20 border hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 hover:-translate-y-1 transition-all">
              <p className="text-2xl gradient-text">5+</p>
              <p className="text-white font-bold">Certified Courses</p>
            </div>
            <div className="rounded-xl p-8 border-white/20 border hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 hover:-translate-y-1 transition-all">
              <p className="text-2xl gradient-text">5+</p>
              <p className="text-white font-bold">Awards Received</p>
            </div>
          </div>
          <div className="m-6 border border-blue-500/20"></div>
          <h2 className="text-center text-2xl font-bold mb-8 gradient-text">
            My Skills
          </h2>
          <div className="grid grid-cols-2 gap-4 px-2">
            <p className="font-semibold text-xl text-center gradient-text">
              Technical Skills
            </p>
            <p className="font-semibold text-xl text-center gradient-text">
              Professional Skills
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalSkills.map((skillObj) => {
                return Object.entries(skillObj).map(([skill, level]) => (
                  <Skills skill={skill} level={level} />
                ));
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professionalSkills.map((skillObj) => {
                return Object.entries(skillObj).map(([skill, percentage]) => (
                  <CircleSkills percentage={percentage} skillName={skill} />
                ));
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
