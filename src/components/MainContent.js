import React, { useEffect } from "react";

export default function MainContent() {
    const buttonCSS = "text-white bg-gradient-to-r from-purple-900 to-fuchsia-600 "+
        "py-3 rounded-md mb-4 hover:opacity-70 active:scale-90";
    const inputCSS = "p-2 border w-full border-gray-400 rounded-md";
    const memeText = "absolute text-white font-bold text-5xl text-stroke-black "+
        "left-2 right-2 text-center ";

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState([]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes));
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                topText: "",
                bottomText: "",
                randomImage: allMemes[randomNumber].url
            };
        });
    }
    
    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
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
                <h1 className={memeText + "top-2"}>
                    {meme.topText}
                </h1>
                <h1 className={memeText + "bottom-2"}>
                    {meme.bottomText}
                </h1>
            </div>
        </div>
    );
}