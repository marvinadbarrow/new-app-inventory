import { AllLocationsButton } from "./AllLocationsButton"
import { SearchButton } from "./SearchButton"
import { BackToStartButton } from "./BackToStartButton"
import { VideoShelf } from "./VideoShelf"
import { useState } from "react";
import ReactPlayer from "react-player";


export const VideoUserGuide = ({returnToStart, openSearch, openAllLocations}) =>{

function backToStart(){
    // on main app page, the function returnToStart takes the 'start page' parameter and executes setViewArea to 'start page' allowing main page to open up
    returnToStart('start page')
}

function backToLocations(){
    openAllLocations('main') 
}

const [vidUrl, setVidUrl] = useState('')
const [vidTitle, setVidTitle] = useState('')




    return(


        <>

        <div className="inner-location">
<button className="close-location" onClick={backToLocations}>All Locations</button>
<BackToStartButton functionName={backToStart}/>
        </div>
        <SearchButton generalArea={'search page'} openSearch={openSearch}/>

        <div className="vid-player-div">
<ReactPlayer width="1920" height="1080" url={vidUrl} controls={true}/>
<p className="advice-para">To view on YouTube, hover over the video and click Title</p>
<p className="video-title">{vidTitle}</p>
</div>
        <div className="video-holder">
<VideoShelf setVidUrl={setVidUrl} setVidTitle={setVidTitle}/>

        </div>
        </>
    )
}