export default function Header() {
    return(
        <div className="flex px-3 bg-gradient-to-r from-purple-900
                        to-fuchsia-600 justify-between items-center h-14
                        fixed top-0 left-0 right-0">
            <div className="flex items-center">
                <img className="w-10" src="./images/memeLogo.png" alt="Logo"/>
                <p className="text-white font-semibold ml-1 text-lg">Meme Generator</p>
            </div>
            <h5 className="text-white text-sm font-semibold">React Course - Project 4</h5>
        </div>
    );
}