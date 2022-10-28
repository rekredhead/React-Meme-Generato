import React from "react";
import memesData from "./memesData";

export default function MainContent() {
    const buttonCSS = "text-white bg-gradient-to-r from-purple-900 to-fuchsia-600 "+
        "py-3 rounded-md mb-4 hover:opacity-70 active:scale-90";
    const inputCSS = "p-2 border w-full border-gray-400 rounded-md";

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });
    const [allMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memesArray[randomNumber].url
            };
        });
    }

    return (
        <div className="flex m-10 mt-24 flex-col gap-5">
            <div className="flex justify-between gap-4">
                <input className={inputCSS} placeholder="Upper Text"/>
                <input className={inputCSS} placeholder="Lower Text"/>
            </div>
            <button className={buttonCSS} onClick={getMemeImage}>
                Get a new meme image
            </button>
            <div className="flex justify-center items-center">
                <img className="w-auto h-full" src={meme.randomImage} alt=""/>
            </div>
        </div>
    );
}