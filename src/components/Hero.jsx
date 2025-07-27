import NikolaPic from "../assets/nikola_picture.jpg";

function Hero() {
    return (
        <section id="hero" className="pt-32 p-10">
                <div className="flex">
                    <img
                        src={NikolaPic}
                        alt="Nikola"
                        width={200}
                        height={200}
                        className="border-2 rounded-full"
                    />
                    <p className="text-lg pl-8 text-primary font-medium leading-relaxed tracking-wide text-stone-100 font-sans">
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