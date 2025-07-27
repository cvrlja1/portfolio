function Skills() {
    const skills = [
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'C',
        'C++',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'Git & GitHub',
        'REST APIs',
        'Responsive Design',
    ];

    return (
        <section id="skills" className="py-16 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="bg-white shadow-md rounded-md py-3 px-4 text-center font-medium text-gray-700 hover:bg-blue-50 transition"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;