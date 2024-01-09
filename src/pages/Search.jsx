import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch'

const Search = () => {
  const { searchID } = useParams();
  const [ videos, setVideos ] = useState([]);

  console.log(" searchId : ", searchID)
  console.log(" process.env.REACT_APP_YOUTUBE_API_KEY : ", process.env.REACT_APP_YOUTUBE_API_KEY)

  console.log(" video : ",videos)
  useEffect(() => {
    fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
    .then(response => response.json())
    .then(result => {
        console.log(result);
        setVideos(result.items)
    })
    .catch(error => console.log(error));
    }, [searchID]);

  return (
    <Main title='유뷰트 검색'
    description='유튜브 검색 결과 페이지입니다.'>
      <section id='searchPage'>
          <div className="video__inner search">
              <VideoSearch videos={videos} />
          </div>
      </section>
    </Main>
  )
}

export default Search;