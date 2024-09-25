import ImageDiv from "./ImageDiv";

function ProjectCard({ imgSrc }: { imgSrc: string }) {
    return (
        <div className="w-96 bg-slate-800 rounded-xl overflow-hidden">
            <div className="w-full h-60">
                <ImageDiv imgSrc={imgSrc} />
            </div>
            <div className="py-5 px-5">
                <div className="text-2xl font-bold text-slate-100">Title</div>
                <div className="mb-4 font-bold text-slate-300">
                    subheading and overview
                </div>
                <div className="font-bold text-slate-400 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo excepturi quas cumque debitis. Enim rem, quas placeat ex
                    ab fugiat.
                </div>
                <div className="mt-10 flex justify-between">
                    <button className="flex justify-center w-32 mr-1 py-2 rounded-md border-2 border-slate-700 hover:bg-slate-700">
                        Github
                        <img src="/icons/github.png" className="ml-2 h-5" />
                    </button>
                    <button className="flex items-center justify-center w-52  py-2 rounded-md border-2 border-slate-700 hover:bg-slate-700">
                        Live link
                        <div className="h-full pt-[2px]">
                            <img
                                className="h-4 ml-2 w-auto"
                                src="/icons/link.png"
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
