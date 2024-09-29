function SocialsIcon({ src, to }: { src: string; to: string }) {
    return (
        <a href={to} target="_blank">
            <div className="w-8 h-8 mr-2 xl:w-10 xl:h-10 xl:mr-3 flex items-center justify-center border-[2px] border-slate-700 hover:bg-slate-700 rounded-md xl:rounded-lg cursor-pointer">
                <img className="w-4 h-4 xl:w-5 xl:h-5" src={src} alt="social" />
            </div>
        </a>
    );
}

export default SocialsIcon;
