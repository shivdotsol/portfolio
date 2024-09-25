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
        <div className="relative h-full w-full overflow-hidden">
            <img
                className={`absolute top-0 left-0 object-cover h-full w-full ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                src={imgSrc}
            />
            <div className="h-full w-full flex items-center justify-center bg-slate-700">
                <img src="/icons/image-placeholder.png" />
            </div>
        </div>
    );
}

export default ImageDiv;
