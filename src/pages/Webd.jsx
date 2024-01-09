import React, { useEffect, useState} from 'react'
import Main from '../components/section/Main';

import { webdText } from '../data/webd';
import VideoCards from '../components/videos/VideoCard';
import { Link } from 'react-router-dom';

const Webd = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false);
    },300)
  },[])

  const webPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title='웹디자인 기능사'
    description='웹디자인 기능사 튜토리얼 강의입니다.'>
      <section id='webd' className={webPageClass}>
        <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
        <div className='video__inner'>
          <VideoCards videos={webdText} />
        </div>
      </section>
    </Main>
  )
}

export default Webd;