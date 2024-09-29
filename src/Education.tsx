function Education() {
    return (
        <>
            <div className="text-lg xl:text-2xl font-extrabold mb-2 xl:my-5">
                Education
            </div>
            <div className="bg-slate-800 rounded-lg mb-10 xl:px-7 xl:py-6 py-3 px-4 flex justify-between">
                <div className="flex flex-col">
                    <div className="text-xs xl:text-xl font-extrabold flex items-baseline mb-1">
                        Shri Ramswaroop Memorial University
                        <div className="hidden xl:block xl:text-lg ml-3 text-slate-400 font-thin">
                            - Lucknow, Uttar Pradesh
                        </div>
                    </div>
                    <div className="text-[10px] xl:text-lg tracking-wider text-slate-300">
                        Bachelor of Computer Applications
                    </div>
                </div>
                <div className="text-slate-400 text-[10px] xl:text-lg">
                    2022-2025
                </div>
            </div>
        </>
    );
}

export default Education;
