import React from 'react'
import VideoItem from './VideoItem'

let VideoList = ({videos, onVideoSelect}) =>{
     const rendersList = videos.map((video)=>{
         return <VideoItem 
         key={video.id.videoId} 
         onVideoSelect={onVideoSelect} 
         video={video}/>
     })
        return(
            <div className="ui relexed divided list">
                {rendersList}
            </div>
        )
}

export default VideoList;