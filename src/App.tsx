import Education from "./Education";
import IntroDiv from "./IntroDiv";
import Projects from "./Projects";
import Technologies from "./Technologies";

function App() {
    return (
        <div className="w-[100vw] px-5 py-5 xl:mx-auto xl:container xl:px-48 xl:py-14 font-mono">
            <IntroDiv />
            <Education />
            <Technologies />
            <Projects />
        </div>
    );
}

export default App;
