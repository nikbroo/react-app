// import { useEffect } from 'react';
import { memo } from 'react';
import useVideoDispatch from '../hooks/VideoDispatch';
import './Video.css';

const Video = memo (function Video({ titleName, titleNumber, users, verify, children, editVideo }) {

    let title = 'title';
    console.log('render Video', titleNumber)

    const dispatch = useVideoDispatch();

    // useEffect(() => {
    //     const idx = setInterval(() => {
    //         console.log("video", titleNumber)
    //     },3000)

    //     return()=>{
    //         clearInterval(idx)
    //     }
    // }, [titleNumber])

    return (
        <>
            <div className="box">
                <button className='close' onClick={() => dispatch({ type: 'Delete', payload: titleNumber })}>X</button>
                <button className='edit' onClick={() => editVideo(titleNumber)}>Edit</button>
                <img src={`https://picsum.photos/id/${titleNumber}/200/300`} alt="demo" />
                <div className={title}>{titleName}</div>
                <div className={title}>{titleNumber}</div>
                <div className={title}>{users}</div>
                <div className={title}>{verify ? '@' : "!"}</div>
                <div className={title}>{children}</div>
            </div>
        </>

    )
})

export default Video;