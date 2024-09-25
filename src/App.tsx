import Education from "./Education";
import IntroDiv from "./IntroDiv";
import Projects from "./Projects";
import Technologies from "./Technologies";

function App() {
    return (
        <div className="container mx-auto px-48 py-14 font-mono">
            <IntroDiv />
            <Education />
            <Technologies />
            <Projects />
        </div>
    );
}

export default App;
