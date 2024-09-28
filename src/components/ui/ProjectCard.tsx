import ImageDiv from "./ImageDiv";

function ProjectCard({
    imgSrc,
    title,
    subheading,
    description,
    status,
    gitHubLink,
    liveLink,
}: {
    imgSrc: string;
    title: string;
    subheading: string;
    description: string;
    status: string;
    gitHubLink: string;
    liveLink: string;
}) {
    return (
        <div className="w-96 ml-10 bg-slate-900 rounded-xl overflow-hidden border-[1px] border-slate-800">
            <div className="w-full h-52">
                <ImageDiv imgSrc={imgSrc} />
            </div>
            <div className="py-5 px-5">
                <div className="flex items-center text-2xl font-bold text-slate-100">
                    {title}
                    <div className="h-4 flex items-center ml-3 text-slate-40 text-[8px] bg-slate-700 rounded-lg px-2">
                        {status}
                    </div>
                </div>
                <div className="mb-4 font-bold text-slate-300">
                    {subheading}
                </div>
                <div className="font-bold text-slate-400 text-sm">
                    {description}
                </div>
                <div className="mt-10 flex justify-between">
                    <a href={gitHubLink}>
                        <button className="flex justify-center w-32 h-11 mr-1 items-center rounded-md border-2 border-slate-800 hover:bg-slate-800">
                            Github
                            <img
                                src="/icons/github.png"
                                className="ml-2 h-4 mb-[2px]"
                            />
                        </button>
                    </a>
                    <a href={liveLink}>
                        <button className="flex items-center justify-center w-52 h-11 rounded-md border-2 border-slate-800 hover:bg-slate-800">
                            Live link
                            <img
                                className="h-4 ml-2 mb-1 w-auto"
                                src="/icons/link.png"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
