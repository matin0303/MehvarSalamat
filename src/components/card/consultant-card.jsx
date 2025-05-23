import React from 'react'
import style from './consultant-card.css'
import img1 from '../../images/doctor/img1.jpg'

export default function ConsultantCard(props){
    return(
        <div className='consultant-card'>
            <div className="consultant-top">
                <div className="consultant-image">
                    <img src={props.image}/>
                </div>
                <h4>{props.name}</h4>
                <p>{props.job}</p>  
            </div>            
            <div className="consultant-details">
                <ol>
                    <li>  استان : <span className='cityName'>{props.city}</span></li>
                    <li>شماره تماس : {props.number}</li>
                    <li>ادرس : {props.address}</li>
                    <li>{props.star} : امتیاز </li>
                </ol>
                <a href={props.map} target="_blank"><button>مشاهده در گوگل مپ</button></a>
            </div>
            
        </div>
    )
}