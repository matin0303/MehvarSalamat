import React, { useEffect } from 'react'
import style from './card.css'
import img5 from '../../images/img1.png'
import Article from '../../pages/articles/article'
import { Link } from 'react-router-dom'

function Card(props){
    let icon = '';
    let likeORdate = '';

    if(props.id <= 25){
        icon = 'favorite';
        likeORdate = props.like
        
    }else{
        icon = 'history_toggle_off'
        likeORdate = props.date
    }
    let f ='favorite'
    return(
        <div className="card-div" data-name={props.dataName}>
            <Link to = {`/article/${props.id}`} className='link'><li className="card" >
                <div className='card-toping'>
                    <div className="card-image"><img src={props.imgUrl}/></div>
                    <h2>{props.title}</h2>
                </div>
                
                <div className="carddetails">
                    <div className="likeAndData">
                        <i class="material-symbols-outlined" >{icon}</i>
                        <i>{likeORdate}</i>
                    </div>
                    <div className="view">
                        <i class="material-symbols-outlined">visibility</i>
                        <i>{props.view}</i>
                    </div>
                </div>
                
            </li></Link>
        </div>
    )
    
}
export default Card