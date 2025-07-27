import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiC, SiCplusplus, SiHtml5, SiTailwindcss, SiGit } from 'react-icons/si';
import { FiServer } from 'react-icons/fi';
import { MdDevices } from 'react-icons/md';



function Skills() {
    const skills = [
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'C', icon: SiC },
        { name: 'C++', icon: SiCplusplus },
        { name: 'HTML5 & CSS3', icon: SiHtml5 },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Git & GitHub', icon: SiGit },
        { name: 'REST APIs', icon: FiServer },
        { name: 'Responsive Design', icon: MdDevices },
    ];

    return (
        <section id="skills" className="py-16 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map(({ name, icon: Icon}) => (
                        <li
                            key={name}
                            className="bg-white shadow-md rounded-md py-3 px-4 text-center font-medium text-gray-700 hover:bg-blue-50 transition flex flex-col items-center gap-1"
                        >
                            <Icon className="w-6 h-6 text-blue-600" />
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;