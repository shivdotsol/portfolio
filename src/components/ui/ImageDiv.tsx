import { useEffect, useState } from "react";

function ImageDiv({ imgSrc }: { imgSrc: string }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = imgSrc;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [imgSrc]);

    return (
        <div className="overflow-hidden">
            <div className={`${imageLoaded ? "opacity-100" : "opacity-0"}`}>
                <img src={imgSrc} />
            </div>
            <div
                className={`h-full w-full items-center justify-center bg-slate-700 ${
                    imageLoaded ? "hidden" : "flex"
                }`}
            >
                <img src="/icons/image-placeholder.png" />
            </div>
        </div>
    );
}

export default ImageDiv;
