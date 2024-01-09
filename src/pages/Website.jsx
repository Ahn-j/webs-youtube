import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main';

import { websiteText } from '../data/website';
import VideoCards from '../components/videos/VideoCard'
import { Link } from 'react-router-dom';

const Website = () => {
  const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

  const websitePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title='웹표준 사이트'
    description='웹표준 사이트 튜토리얼 강의입니다.'>
        <section id='website' className={websitePageClass}>
            <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
            <div className='video__inner'>
                <VideoCards videos={websiteText}/>
            </div>
        </section>
    </Main>
  )
}

export default Website;
