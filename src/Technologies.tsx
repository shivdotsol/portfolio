function Technologies() {
    const techArr = [
        { name: "TypeScript", imgSrc: "/icons/typescript.png" },
        { name: "NEXT.js", imgSrc: "/icons/next.png" },
        { name: "TailwindCss", imgSrc: "/icons/tailwind.png" },
        { name: "Node.js", imgSrc: "/icons/node.png" },
        { name: "Express.js", imgSrc: "/icons/express.png" },
        { name: "PostgreSQL", imgSrc: "/icons/postgre.png" },
        { name: "Prisma", imgSrc: "/icons/prisma.png" },
        { name: "MongoDb", imgSrc: "/icons/mongo.png" },
        { name: "Docker", imgSrc: "/icons/docker.png" },
        { name: "AWS", imgSrc: "/icons/aws.png" },
        { name: "Cloudflare", imgSrc: "/icons/cloudflare.png" },
        { name: "Git", imgSrc: "/icons/git.png" },
        { name: "Linux", imgSrc: "/icons/linux.png" },
    ];
    return (
        <div>
            <div className="text-2xl font-extrabold mb-6 mt-10">
                Technologies
            </div>
            <div className="grid grid-cols-8 mt-2 mb-5 px-2 py-1">
                {techArr.map((i, n) => (
                    <ImageDiv name={i.name} imgSrc={i.imgSrc} key={n} />
                ))}
            </div>
        </div>
    );
}

function ImageDiv({ name, imgSrc }: { name: string; imgSrc: string }) {
    return (
        <div className="flex flex-col w-28 mb-7">
            <div>
                <img className="w-14 h-auto mx-auto" src={imgSrc} />
            </div>
            <div className="h-5 text-sm mt-3 w-full text-center">{name}</div>
        </div>
    );
}

export default Technologies;
