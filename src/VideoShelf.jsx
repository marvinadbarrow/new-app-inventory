
import { useState } from 'react'
import containerImage from './images/container.png'
import ReactPlayer from 'react-player'
 


export const VideoShelf = ({}) =>{

// props for the player are set by clicking any button below the player which sends the URL to the video dealing with the button subject.  The function then sets the url in state. 
const [vidUrl, setVidUrl] = useState('')
const [vidTitle, setVidTitle] = useState('')

function setVideoProps(vidPath, vidTitle){
setVidUrl(vidPath)
setVidTitle(vidTitle)
}


    return(
        <>





<div className="video-list">

<div className="vid-player-div">
<ReactPlayer width="640" height="360" url={vidUrl} controls={true}/>
<p className="video-title">{vidTitle}</p>
</div>   

<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/create areas.mp4', 'Create areas')
}}>Create areas</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/search.mp4', 'Delete areas')
}}>Delete areas</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/search.mp4', 'Create Items')
}}>Create items</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/search.mp4', 'Delete items')
}}>Delete items</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/search.mp4', 'Transfer items')
}}>Transfer items</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/search.mp4', 'Transfer boxes')
}}>Transfer boxes</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/search.mp4', 'View all items')
}}>View all items</button>


<button className="vid-button" onClick={() =>{
setVideoProps('../draft videos/test recording.mp4', 'Search Items')
}}>Search items</button>
</div>
           </>
    )
}