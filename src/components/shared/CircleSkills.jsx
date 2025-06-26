import { CircularProgress } from "../icons";
import splitString from "../utils/util-helper";

export const CircleSkills = (props) => {
  const { percentage, skillName } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-14 h-14 relative">
        <CircularProgress percentage={percentage} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xs">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="text-base text-center font-semibold">{splitString(skillName)}</p>
    </div>
  );
};
