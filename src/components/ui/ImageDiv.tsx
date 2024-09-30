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
        <div className="relative w-full h-full overflow-hidden">
            <div
                className={`absolute h-full w-full top-0 left-0 bg-slate-600 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                }`}
            >
                <img src={imgSrc} className="w-full h-auto" />
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
