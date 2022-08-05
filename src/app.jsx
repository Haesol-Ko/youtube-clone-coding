import './app.css';
import {useEffect, useState} from "react";
import VideoList from "./components/video_list/video_list";

function App() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        console.log('useEffect');
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBXQapvezFFdXhbP9U-2Z2MbbCDvAzRJQc", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }, []);
    return <VideoList videos={videos} />
}

export default App;
