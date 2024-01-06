import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>
            {/* Helmet : Helmet 컴포넌트를 사용하여 페이지의 메타 데이터와 타이틀을 설정합니다. 
            이 컴포넌트를 사용하면 서버 사이드 렌더링(SSR) 및 동적 페이지 제목 설정과 같은 작업을 쉽게 수행할 수 있습니다. 
            주로 title, meta, link, script 등의 태그를 동적으로 조작하는 데 사용됩니다. */}
            <Helmet
            titleTemplate='%s | Webs Youtube'
            defaultTitle='Webs Youtube'
            defer={false}>
                  {props.title && <title>{props.title}</title>}
                <meta name='description' content={props.description} />
            </Helmet>

            <Header />
            <main id='main' role='main' >
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main;