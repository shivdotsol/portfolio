import Education from "./Education";
import IntroDiv from "./IntroDiv";
import Projects from "./Projects";
import Technologies from "./Technologies";

function App() {
    return (
        <div className="bg-gradient-to-tr from-black via-slate-800 to-black">
            <div className="w-full p-5 xl:mx-auto xl:container xl:px-48 xl:py-14 font-mono">
                <IntroDiv />
                <Education />
                <Technologies />
                <Projects />
            </div>
        </div>
    );
}

export default App;
