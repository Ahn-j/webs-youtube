import React from 'react'
import { snsLink } from '../../data/header'

const Sns = () => {
    return (
        <div className='header__sns'>
            <ul>
                {snsLink.map((sns,index)=>(
                    <li key={index}>
                        {/* 외부 페이지를 부르기때문에 a태그 */}
                        <a href={sns.url} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
                            {sns.icon}{sns.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns;
