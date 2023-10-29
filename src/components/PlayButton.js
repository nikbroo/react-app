import { memo, useState } from "react";

const PlayButton = memo( function PlayButton({children,onPlay,onPause}){
    
    console.log("render playbutton")
    const [playing, setPlaying] = useState(false);

    function click_hendle(){
        if(playing) onPause()
        else onPlay()
        setPlaying(!playing);
        console.log("render playbutton")
    }

    return(
        <>
        <button onClick={click_hendle}>{children} : {playing ? '>' : '||'}</button>
        </>
    )
})

export default PlayButton;