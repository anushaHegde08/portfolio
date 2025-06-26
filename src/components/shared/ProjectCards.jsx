import GitHubLogo from "../../assets/icons8-github-48.png";
import LinkIcon from "../../assets/icons8-external-link-48.png";

export const ProjectsCard = (props) => {
  const { title, image, description, gitHubLink, demoLink } = props;
  return (
    <div className="group relative flex flex-col justify-between border rounded-2xl max-w-64 h-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 overflow-hidden hover:p-[1px]">
      <div className="bg-black rounded-2xl h-full flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col justify-between h-full">
          <h3 className="font-medium text-center break-words px-2 min-h-10 flex items-center justify-center">
            {title}
          </h3>
          <div className="relative">
            <img src={image} alt={title} className="w-full h-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-4 scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out origin-center">
              <h3 className="font-semibold text-lg text-blue-900 mb-6 text-center truncate w-full px-2">
                {title}
              </h3>
              <div className="flex gap-6 justify-center items-center">
                <a
                  href={gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-110 transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={GitHubLogo}
                    alt="GitHub"
                    className="object-contain"
                  />
                </a>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-110 transform"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={LinkIcon} alt="Link" className="w-9 h-9" />
                </a>
              </div>
            </div>
          </div>
          <p className="p-2 min-h-20 break-words text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
