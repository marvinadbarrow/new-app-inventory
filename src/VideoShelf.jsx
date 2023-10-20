
import { useState } from 'react'
import containerImage from './images/container.png'
import ReactPlayer from 'react-player'
 


export const VideoShelf = ({setVidUrl, setVidTitle}) =>{

// props for the player are set by clicking any button below the player which sends the URL to the video dealing with the button subject.  The function then sets the url in state. 
function setVideoProps(vidPath, vidTitle){
    setVidUrl(vidPath)
    setVidTitle(vidTitle)
    }

    return(
        <>

<div className="video-list">
<div className="video-btn-holder">

<button className="vid-button vid-btn-blue" onClick={() =>{
setVideoProps('https://youtu.be/1kRvDypXnEA', 'Getting Started!')
}}>Getting Started</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/XBIJ9SDVRLc', 'Create locations')
}}>Create locations</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/7PGRWb5Kmlk', 'Create sections')
}}>Create sections</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/IacBztoi4nI', 'Create boxes')
}}>Create boxes</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/GjIK8TUN1kc', 'Create Items')
}}>Create items</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/HaHMB27-4Fo', 'Transfer items')
}}>Transfer items</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/id1mw-wyUpQ', 'Transfer boxes')
}}>Transfer boxes</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/K8uWidY9q24', 'View all section items')
}}>View entire section</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/fSDr-TVr6sA', 'Search Items')
}}>Search items</button>

<button className="vid-button" onClick={() =>{
setVideoProps('https://youtu.be/upuDD93LXSA', 'Delete areas')
}}>Delete elements</button>

<button className="vid-button  vid-btn-blue" onClick={() =>{
setVideoProps('https://www.youtube.com/watch?v=Cp5CG3kaNyI', 'Backup inventory')
}}>Backup inventory</button>

<button className="vid-button vid-btn-blue" onClick={() =>{
setVideoProps('https://www.youtube.com/watch?v=6Mn47FL2r8Y', 'Import inventory')
}}>Import inventory</button>

</div>

</div>
           </>
    )
}