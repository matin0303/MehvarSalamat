import React, { useEffect } from 'react'
import style from './bmi-card.css'

export default function BmiCard(){
        
    function bmi(){
        const weight = document.querySelector('.front .bmicard-main .weight ');
        const height = document.querySelector('.front .bmicard-main .height ');
        const bmiicon = document.querySelector('.flip-card .back .icon i');
        const cardBack = document.querySelector('.flip-card .back');
        const cardFront = document.querySelector('.flip-card .front');
        const bmitext = document.querySelector('.flip-card .back .bmi-text p ');
        const bmiNumber = document.querySelector('.flip-card .back .number p ');

        var bmires = (Number(weight.value)/(Number(height.value)/100 * Number(height.value)/100 )).toFixed(1);
        bmiNumber.innerText= `شاخض توده بدنی شما :${bmires}`
        if (weight.value !== '' && height.value !== ''){
            if(bmires < 16){
                bmiNumber.style = 'background-color: rgba(228, 9, 9, 0.171)'
                bmiNumber.style.color= 'red'
                bmitext.innerText = 'شما در وضعیت "لاغری شدید"هستید'
                bmitext.style.color = 'red'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'red'
            } if(16 < bmires && bmires< 17){
                bmiNumber.style = 'background-color: rgba(255, 153, 0, 0.194)'
                bmiNumber.style.color = 'orange'
                bmitext.innerText = 'شما در وضعیت "لاغری متوسط"هستید'
                bmitext.style.color = 'orange'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'orange'
            } if(17 <bmires && bmires< 18.5){
                bmiNumber.style = 'background-color: rgba(255, 153, 0, 0.194)'
                bmiNumber.style.color = 'orange'
                bmitext.innerText = 'شما در وضعیت "لاغری خفیف"هستید'
                bmitext.style.color = 'orange'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'orange'
            } if(18.5 <bmires && bmires< 25){
                bmiNumber.style = 'background-color: rgba(0, 244, 73, 0.304)'
                bmitext.innerText = 'شما در وضعیت "نرمال"هستید'
                bmitext.style.color = 'green'
                bmiicon.innerText = 'done_outline'
                bmiicon.style.color = 'green'
            }
             if(25 < bmires && bmires< 30){
                bmiNumber.style = 'background-color: rgba(0, 221, 255, 0.13)'
                bmiNumber.style.color = 'blue'
                bmitext.innerText = 'شما در وضعیت "اضافه وزن"هستید'
                bmitext.style.color = 'skyblue'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'skyblue'
            } if( 30 < bmires && bmires< 35){
                bmiNumber.style = 'background-color: rgba(255, 153, 0, 0.194)'
                bmiNumber.style.color = 'orange'
                bmitext.innerText = 'شما در وضعیت "چاقی کلاس یک"هستید'
                bmitext.style.color = 'orange'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'orange'
            } if(35 < bmires && bmires< 40){
                bmiNumber.style = 'background-color: rgba(255, 153, 0, 0.194)'
                bmiNumber.style.color = 'orange'
                bmitext.innerText = 'شما در وضعیت "چاقی کلاس دو"هستید'
                bmitext.style.color = 'orange'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'orange'
            } if(40 < bmires){
                bmiNumber.style = 'background-color: rgba(228, 9, 9, 0.171)'
                bmiNumber.style.color= 'red'
                bmitext.innerText = 'شما در وضعیت "چاقی کلاس سه"هستید'
                bmitext.style.color = 'red'
                bmiicon.innerText = 'report'
                bmiicon.style.color = 'red'
            }
    
            cardBack.classList.add('flip-back')
            cardFront.classList.add('flip-front')
        }
    }
        
    function close_res(){
        const cardBack = document.querySelector('.flip-card .back');
        const cardFront = document.querySelector('.flip-card .front');
        cardBack.classList.remove('flip-back')
        cardFront.classList.remove('flip-front')
    }
    
    useEffect(()=>{
        document.querySelector(".male-checkbox").checked = true;
    },[])
    return(
        <div className='bmicard'>
            <div className="flip-card">
                <div className="front">
                    <div className="bmi-title">
                        <h3>شاخص توده بدنی (BMI)</h3>
                    </div>
                    <div className="bmicard-main">
                        <div>
                            <input type="number" className='weight' />
                            <h4>وزن(کیلوگرم)</h4>
                        </div>
                        <div>
                            <input type="number" className='height' />
                            <h4>قد(سانتی متر)</h4>
                        </div>

                        <div className="gender">
                            <div>
                                <label for="checkbox1">اقا</label>
                                <input  type="radio" value='male' id = 'checkbox1' name ='genderr'  className='male-checkbox'/>
                            </div>
                            <div>
                                <label for="checkbox2">خانم</label>
                                <input  type="radio" value='female' id = 'checkbox2' name='genderr' className='female-checkbox'/>
                            </div> 
                        </div>
                        <button onClick={bmi}>محاسبه</button>
                    </div>
                </div>
                <div className="back">
                    <div className="back-title">
                        <p>نتیجه محاسبه</p>
                    </div>
                    <div className="icon">
                        <i class="material-symbols-outlined"></i>
                    </div>
                    <div className="number">
                        <p></p>
                    </div>
                    <div className="bmi-text">
                        <p></p>
                    </div>
                    <div className='closeBtn' onClick={close_res}>
                        <i class="material-symbols-outlined">close</i>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}