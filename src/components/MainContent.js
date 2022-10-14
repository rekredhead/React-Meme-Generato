export default function MainContent() {
    return (
        <div className="flex m-10 flex-col gap-5">
            <div className="flex justify-between gap-4">
                <input className="p-2 border w-full border-gray-400 rounded-md" placeholder="Upper Text"/>
                <input className="p-2 border w-full border-gray-400 rounded-md" placeholder="Lower Text"/>
            </div>
            <button className="text-white bg-gradient-to-r from-purple-900 to-fuchsia-600
                                py-3 rounded-md mb-4 hover:opacity-70 active:opacity-50">
                Get a new meme image
            </button>
            <div className="flex border border-gray-500 justify-center items-center h-80">
                <img alt="meme"/>
            </div>
        </div>
    );
}