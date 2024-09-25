function SocialsIcon({ src, to }: { src: string; to: string }) {
    return (
        <a href={to} target="_blank">
            <div className="w-10 h-10 mr-3 flex items-center justify-center border-[2px] border-slate-700 hover:bg-slate-700 rounded-lg cursor-pointer">
                <img className="w-5 h-5" src={src} alt="social" />
            </div>
        </a>
    );
}

export default SocialsIcon;
