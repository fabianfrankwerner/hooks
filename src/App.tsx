import { VideoGrid } from "./components/VideoGrid";

function App() {
    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                My Video Gallery
            </h1>
            <VideoGrid />
        </div>
    );
}

export default App;
