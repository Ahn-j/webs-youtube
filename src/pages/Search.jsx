import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
  const { searchID } = useParams();
  const [ videos, setVideos ] = useState([]);
  const [ nextPageToken, setNextPageToken ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  console.log(" video : ",videos)
  // useEffect(() => {
  //   //youtube data V3 API사용
  //   fetch(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  //   )
  //   .then(response => response.json())
  //   .then(result => {
  //       console.log(result);
  //       setVideos(result.items)
  //   })
  //   .catch(error => console.log(error));
  //   }, [searchID]);

  useEffect(() => {
    setVideos([]);
    fetchVideos(searchID);
    setLoading(true);
  }, [searchID]);

  const fetchVideos = (query, pageToken = '') => {
    console.log("nextPage : ", pageToken)
    //Rapid API사용
    //Rapid 안에서 유튜브데이터v3 API를 사용하는것임
    fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
        .then((data) => {
            console.log("data : ", data)
            console.log("data.nextPageToken : ", data.nextPageToken)
            setNextPageToken(data.nextPageToken);
            setVideos((prevVideos) => [...prevVideos, ...data.items]);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
};

const handleLoadMore = () => {
    if (nextPageToken) {
        fetchVideos(searchID, nextPageToken);
    }
};

const searchPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title='유뷰트 검색'
    description='유튜브 검색 결과 페이지입니다.'>
      <section id='searchPage' className={searchPageClass}>
          <div className="video__inner search">
              <VideoSearch videos={videos} />
          </div>
          <div className="video__more">
              {nextPageToken && (
                <button onClick={handleLoadMore}>더 보기</button>
              )}
          </div>
      </section>
    </Main>
  )
}

export default Search;