import React from "react";
import memesData from "./memesData";

export default function MainContent() {
    const buttonCSS = "text-white bg-gradient-to-r from-purple-900 to-fuchsia-600 "+
        "py-3 rounded-md mb-4 hover:opacity-70 active:scale-90";
    const inputCSS = "p-2 border w-full border-gray-400 rounded-md";
    const memeText = "absolute text-white font-bold text-5xl text-stroke-black ";

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
    
    function handleChange(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]: event.target.value
            }
        });
    }
    return (
        <div className="flex m-10 mt-24 flex-col gap-5">
            <div className="flex justify-between gap-4">
                <input
                    className={inputCSS} placeholder="Top Text"
                    onChange={handleChange} name="topText"
                    value={meme.topText}/>
                <input
                    className={inputCSS} placeholder="Bottom Text"
                    onChange={handleChange} name="bottomText"
                    value={meme.bottomText}/>
            </div>
            <button className={buttonCSS} onClick={getMemeImage}>
                Get a new meme image
            </button>
            <div className="flex relative justify-center items-center">
                <img className="w-auto h-full" src={meme.randomImage} alt=""/>
                <h1 className={memeText + "top-5"}>
                    {meme.topText}
                </h1>
                <h1 className={memeText + "bottom-5"}>
                    {meme.bottomText}
                </h1>
            </div>
        </div>
    );
}