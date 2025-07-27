import NikolaPic from "../assets/nikola_picture.jpg";

function Hero() {
    return (
        <section id="hero" className="pt-25 sm:pt-32 p-6 sm:p-10 max-w-5xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                        src={NikolaPic}
                        alt="Nikola"
                        width={200}
                        height={200}
                        className="border-2 rounded-full w-40 h-40 sm:w-48 sm:h-48 object-cover"
                    />
                    <p className="hero">
                        Hello, I'm Nikola Cvrlja, a developer focused on crafting full-stack web applications
                        using tools like <b>React</b>, <b>Express</b>, and <b>MongoDB</b>.<br/>
                        I love solving real-world problems through clean,
                        scalable code and intuitive interfaces. <br/>
                        💻 Take a look at my <a href="#projects"><b>projects</b></a> and see what I’ve been building.
                    </p>
                </div>
        </section>
    )
}

export default Hero;