import splitString from "../utils/util-helper";

export const Skills = (props) => {
  const { skill, level } = props;
  return (
    <div className="flex flex-col">
      <p className="uppercase text-base font-semibold">{splitString(skill)}</p>
      <div className="flex items-center gap-2">
        <p className="text-gray-200 text-xs">{level}</p>
        <div className="grow bg-gray-800 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full 
                    transform transition-transform duration-300"
            style={{ width: level }}
          ></div>
        </div>
      </div>
    </div>
  );
};
