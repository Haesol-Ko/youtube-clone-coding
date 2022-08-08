import styles from './app.module.css';
import {useCallback, useEffect, useState} from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    useEffect(() => {
        youtube
            .mostPopular()
            .then(videos => setVideos(videos));
    }, [youtube]);

    const selectVideo = video => {
        setSelectedVideo(video);
    }

    // memory 상에 저장하니까 꼭 필요할 때만 쓰기
    // ex: 자식함수에 값 넘겨줄 때
    const search = useCallback(
        query => {
            if (query) {
                youtube
                    .search(query)
                    .then(videos => {
                            setVideos(videos);
                            setSelectedVideo(null);
                        }
                    );
            }
        },
        [youtube]
    );

    return (
        <div className={styles.app}>
            <SearchHeader onSearch={search}/>
            <section className={styles.content}>
                {selectedVideo && (
                    <div className={styles.detail}>
                        <VideoDetail video={selectedVideo}/>
                    </div>
                )}
                <div className={styles.list}>
                    <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
                </div>
            </section>
        </div>
    );
}

export default App;
