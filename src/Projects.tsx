import ProjectCard from "./components/ui/ProjectCard";

function Projects() {
    const projectsArr = [
        {
            title: "CipherShare",
            subheading: "E2EE File Sharing",
            description:
                "Your files stay private always. Fast, reliable, and built for true privacy. Share with confidence, knowing only the right eyes see your data.",
            status: "Deployed",
            imgSrc: "/project-img/cipher-share.png",
            gitHubLink: "https://github.com/shivdotsol/cipher-share",
            liveLink: "https://ciphershare.in",
        },
        {
            title: "VaultX",
            subheading: "cryptocurrency payments platform",
            description:
                "A user-friendly crypto payments application focused on easing up the payment hassle people face when using cryptocurrencies, this platform supports BTC, ETH & SOL.",
            status: "in progress",
            imgSrc: "/project-img/vaultx-home.png",
            gitHubLink: "https://github.com/shivdotsol/vaultx",
            liveLink: "https://vaultx.shivtiwari.com",
        },
    ];
    return (
        <div>
            <div className="text-lg xl:text-2xl font-extrabold mb-4 xl:mb-7 mt-5">
                Projects
            </div>
            <div className="flex">
                {projectsArr.map((i, n) => (
                    <ProjectCard
                        title={i.title}
                        subheading={i.subheading}
                        description={i.description}
                        status={i.status}
                        imgSrc={i.imgSrc}
                        gitHubLink={i.gitHubLink}
                        liveLink={i.liveLink}
                        key={n}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
