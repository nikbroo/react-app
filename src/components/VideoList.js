import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from "axios";
import { useCallback, useEffect, useMemo } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {

  const url = "https://my.api.mockaroo.com/demo.json?key=ec7836e0"

  const videos = useVideos();

  const dispatch = useVideoDispatch();

  async function handleClick() {
    const res = await axios.get(url);
    dispatch({ type: 'LOAD', payload: res.data })
  }

  useEffect(() => {
    async function getVideo() {
      const res = await axios.get(url);
      dispatch({ type: 'LOAD', payload: res.data })
    }
    getVideo();
  }, [dispatch])


  const play = useCallback(() => console.log('Play-b'), [])
  const pause = useCallback(() => console.log('Pause-b'), [])
  const memoButton = useMemo(() => (
  <PlayButton 
    onPlay={play}
    onPause={pause}
  >
    Play
  </PlayButton>), [play, pause])

  return (
    <>
      <button onClick={handleClick}>Get Videos</button>
      {
        videos.map(video => <Video
          titleName={video.titleName}
          titleNumber={video.titleNumber}
          users={video.users}
          verify={video.verify}
          key={video.titleNumber}
          editVideo={editVideo}
        >
          {memoButton}
        </Video>
        )
      }

    </>
  )
}

export default VideoList;