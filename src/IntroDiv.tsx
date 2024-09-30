import ImageDiv from "./components/ui/ImageDiv";
import SocialsIcon from "./components/ui/SocialsIcon";

function IntroDiv() {
    return (
        <div className="w-full flex flex-col">
            {/* name, socials and profile pic */}
            <div className="w-full flex justify-between">
                <div className="flex flex-col">
                    <div className="text-lg xl:text-4xl font-extrabold xl:mb-2">
                        Shiv Ji Tiwari
                    </div>
                    <div className="w-[95%] xl:w-full text-slate-400 text-xs xl:text-base">
                        Full Stack Web Developer focused on learning through
                        building cool things.
                    </div>
                    <div className="text-slate-400 flex items-center xl:mt-1">
                        <img
                            src="/icons/location.png"
                            className="h-[9px] xl:h-[15px] mr-[2px] xl:mr-1 w-auto"
                        />
                        <div className="h-[15px] flex items-center mt-[2px] text-xs xl:text-base">
                            Lucknow, UP.
                        </div>
                    </div>
                    <div className="flex mt-2 xl:mt-4">
                        <SocialsIcon
                            src="/icons/email.png"
                            to="mailto:mail.shivtiwari@gmail.com"
                        />
                        <SocialsIcon
                            src="/icons/call.png"
                            to="tel:+91 8471040291"
                        />
                        <SocialsIcon
                            src="/icons/twitter.png"
                            to="https://x.com/shivdotsol"
                        />
                        <SocialsIcon
                            src="/icons/github.png"
                            to="https://github.com/shivdotsol"
                        />
                        <SocialsIcon
                            src="/icons/linkedin.png"
                            to="https://www.linkedin.com/in/shivjitiwari/"
                        />
                        <SocialsIcon src="/icons/resume.png" to="/resume.pdf" />
                    </div>
                </div>
                <div className="my-auto w-[150px] h-[75px]  xl:h-40 xl:w-40 rounded-lg overflow-hidden bg-slate-500">
                    <ImageDiv imgSrc="/profile-pic.png" />
                </div>
            </div>
            {/* about me */}
            <div className="w-full flex flex-col my-5">
                <div className="text-lg xl:text-2xl font-extrabold xl:my-3">
                    About Me
                </div>
                <div className="text-slate-400 text-[10px] xl:text-base">
                    Hey! I'm a full-stack developer who enjoys building
                    efficient, scalable web applications. I love working with{" "}
                    <b className="text-slate-300">TypeScript</b> for the
                    front-end and tools like{" "}
                    <b className="text-slate-300">React.js</b> and{" "}
                    <b className="text-slate-300">Next.js</b>, while also
                    handling the back-end side with{" "}
                    <b className="text-slate-300">Node.js</b>,{" "}
                    <b className="text-slate-300">Express</b>, and databases
                    like <b className="text-slate-300">PostgreSQL</b> and{" "}
                    <b className="text-slate-300">MongoDB</b>. I've also got
                    experience deploying on{" "}
                    <b className="text-slate-300">AWS</b> and{" "}
                    <b className="text-slate-300">Cloudflare</b>. My focus is on
                    creating responsive, high-performance applications that
                    don't just look good but work flawlessly. I'm always
                    exploring new tech and enjoy tackling tricky coding
                    challenges along the way.
                </div>
            </div>
        </div>
    );
}

export default IntroDiv;
