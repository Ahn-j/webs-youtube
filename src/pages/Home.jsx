import React from 'react'
import Main from '../components/section/Main';
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Gsap from '../components/contents/Gsap'
import Portfolio from '../components/contents/Portfolio'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Youtube from '../components/contents/Youtube'

const Home = () => {
    return (
        <Main title='test유튜브채널'
        description='유튜브채널에 오신걸 환영합니다'>
            
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube />
        </Main>
    )
}

export default Home;
