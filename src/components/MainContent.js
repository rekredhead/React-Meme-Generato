export default function MainContent() {
    const buttonCSS = "text-white bg-gradient-to-r from-purple-900 to-fuchsia-600 "+
                        "py-3 rounded-md mb-4 hover:opacity-70 active:scale-90";
    
    let thingsArray = ["Thing 1", "Thing 2"];
    let thingsElements = thingsArray.map((item, i) => {
        return <p key={i}>{item}</p>
    });

    function mouseClicked() {
        let newThingText = `Thing ${thingsArray.length + 1}`;
        thingsArray.push(newThingText);
        console.log(thingsArray);
    }

    return (
        <div className="flex m-10 mt-24 flex-col gap-5 w-128">
            <div>{thingsElements}</div>
            <div className="flex justify-between gap-4">
                <input className="p-2 border w-full border-gray-400 rounded-md" placeholder="Upper Text"/>
                <input className="p-2 border w-full border-gray-400 rounded-md" placeholder="Lower Text"/>
            </div>
            <button className={buttonCSS} onClick={mouseClicked}>
                Get a new meme image
            </button>
            <div className="flex border border-gray-500 justify-center items-center h-80">
                <img alt="meme"/>
            </div>
        </div>
    );
}