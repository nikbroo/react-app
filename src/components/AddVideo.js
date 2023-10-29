import { forwardRef, useEffect, useRef, useState } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
    verify: false,
    titleName: "",
    users: ""
}

const AddVideo = forwardRef(function AddVideo({ editableVideo }, ref) {
    const [video, setVideo] = useState(initialState)

    const dispatch = useVideoDispatch();

    // const inputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (editableVideo) {
            dispatch({ type: 'Update', payload: video })
        } else {
            dispatch({ type: 'ADD', payload: video })
        }
        setVideo(initialState)

    }
    function handleChange(e) {
        console.log(e.target.name, e.target.value)
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
        // inputRef.current.focus();
    }, [editableVideo])
    return (
        <form>
            <input
                ref={ref} 
                type="text" name="titleName" onChange={handleChange} placeholder="titleName" value={video.titleName} />
            <input type="text" name="users" onChange={handleChange} placeholder="users" value={video.users} />
            <button
                onClick={handleSubmit}

            >{editableVideo ? 'Edit' : 'ADD'}</button>
        </form>
    )
})

export default AddVideo;