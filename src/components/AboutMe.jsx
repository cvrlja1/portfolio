import NikolaPic from "../assets/nikola_picture.jpg";

function AboutMe() {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 max-w-3xl mx-auto">
            <img
                src={NikolaPic}
                alt="Nikola"
                width={200}
                height={200}
                className="border-2 rounded-full"
            />
            <p className="text-lg font-medium leading-relaxed tracking-wide text-stone-100 font-sans">
                Hi, I’m <strong>Nikola Cvrlja</strong>, a 28-year-old programmer originally from Serbia, now living in Vienna.
                I’m currently a student at Vienna 42 Programming School, where I’m sharpening my skills in software development.
                I specialize in <strong>C, C++, JavaScript, HTML, CSS, and React</strong>, and enjoy building clean, efficient, and user-friendly applications.
                Passionate about learning and growing, I’m excited to contribute to innovative projects and expand my expertise.
            </p>
        </div>
    )}

export default AboutMe;