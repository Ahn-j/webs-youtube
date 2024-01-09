import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main';

import { youtubeText } from '../data/youtube';
import VideoCards from '../components/videos/VideoCard';
import { Link } from 'react-router-dom';

const Youtube = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title='유튜브 사이트'
    description='유튜브사이트 튜토리얼 강의입니다.'>
        <section id='youtube' className={youtubePageClass}>
            <h2>😱 지금 이 코딩을 영상으로</h2>
            <div className='video__inner'>
                <VideoCards videos={youtubeText} />
            </div>
        </section>
    </Main>
  )
}

export default Youtube;
