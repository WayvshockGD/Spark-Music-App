import LayoutBuilder from "./components/LayoutBuilder";

export default function Home() {
    return (
        <LayoutBuilder title="Home">
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <main className="text-6xl font-bold">
                    <h1 id="text">Welcome to Spark</h1>
                    <h1 id="text">Where music is </h1>
                    <h1 className="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                        Possible
                    </h1>
                </main>
                <a
                        href="/playlists"
                        className="mt-6 w-96 rounded-xl text-left hover:text-white focus:text-white"
                    >
                        <h3 className="text-2xl font-bold">Start Listening</h3>
                    </a>
            </div>
        </LayoutBuilder>
    )
}