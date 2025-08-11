
const ProjectCard = ({ title, description, image,  codeLink, handleClick }) => {
    return (
        <div onClick={handleClick} className=" zoom bg-sky-50/10 backdrop-blur-lg border border-white/10 rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition shadow-indigo-200/80">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-3">{description}</p>
            {codeLink && (
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Code
                    </a>
                )}
            </div>
    );
};

export default ProjectCard;