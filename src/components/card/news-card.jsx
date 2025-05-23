import React from 'react'
import style from './news-card.css'
export default function NewsCard(props){
    function showNews(e){
        const target = e.target.parentNode
        const targetTextcontainer =target.offsetParent.querySelector('.news-content')
        const targetSpan =target.offsetParent.querySelector('.newsimg .off')
        targetTextcontainer.classList.toggle('show-news')
        targetSpan.classList.toggle('on')
    }
    return(
        <div className="news-card">
            <div className="card-container">
                <div className="newsimg">
                    <img src={props.img} alt="image"/>
                    <h3>{props.title}</h3>
                    <p>{props.date}</p>
                    <span class="material-symbols-outlined off" onClick={showNews}>expand_more</span>
                </div>
                <div className="news-content "> 
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
            
        </div> 
    )
}