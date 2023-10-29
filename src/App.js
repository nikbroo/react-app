
import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
// import videoDB from './components/Videos';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/Counter';

function App() {

  const [editableVideo, seteditableVideo] = useState(null);

  const inputref = useRef(null);



  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload;
      case 'ADD':
        return [...videos, { ...action.payload, titleNumber: videos.length + 1 }]
      case 'Delete':
        return videos.filter(video => video.titleNumber !== action.payload)
      case 'Update':
        const index = videos.findIndex(v => v.titleNumber === action.payload.titleNumber)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        seteditableVideo(null);
        return newVideos
      default:
        return videos
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, [])

  const editVideo = useCallback(function editVideo(titleNumber) {
    seteditableVideo(videos.find(video => video.titleNumber === titleNumber))
  }, [videos])
  


  return (
    <>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <AddVideo ref={inputref} editableVideo={editableVideo}></AddVideo>
          <button onClick={()=>inputref.current.focus()}>Focus</button>
          <VideoList editVideo={editVideo}></VideoList>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </>
  );
}

export default App;
