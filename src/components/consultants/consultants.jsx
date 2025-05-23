import React from 'react'
import style2 from './consultants.css'
import img1 from '../../images/doctor/img1.jpg'
import img2 from '../../images/doctor/img2.jpg'
import img3 from '../../images/doctor/img3.jpg'
import img4 from '../../images/doctor/img4.jpg'
import img5 from '../../images/doctor/img5.jpg'

export default function Consultants(){
    
    return(
        <div className="wrapper">
            <div className="outer">

                <div className="consultants-card1" >
                    <div className="consultants-card-contents">
                        <div className="consultants-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="details">
                            <div>
                                <span >⭐⭐⭐⭐⭐</span>
                            </div>
                            <div>
                                <p className='name'>مژده بیات</p>
                                <p> روانشناس و مشاور</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="consultants-card2" >
                    <div className="consultants-card-contents">
                        <div className="consultants-img">
                            <img src={img2}  alt="" />
                        </div>
                        <div className="details">
                            <div>
                                <span >⭐⭐⭐⭐⭐</span>
                            </div>
                            <div>
                                <p className='name'>نعیم مهیاری</p>
                                <p>روانکاو , روانشناس</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="consultants-card3" >
                    <div className="consultants-card-contents">
                        <div className="consultants-img">
                            <img src={img3}  alt="" />
                        </div>
                        <div className="details">
                            <div>
                                <span >⭐⭐⭐⭐</span>
                            </div>
                            <div>
                                <p className='name'>فاطمه نعت اللهی</p>
                                <p>روان درمانگر,</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="consultants-card4">
                    <div className="consultants-card-contents">
                        <div className="consultants-img">
                            <img src={img4}  alt="" />
                        </div>
                        <div className="details">
                            <div>
                                <span >⭐⭐⭐⭐⭐</span>
                            </div>
                            <div>
                                <p className='name'>میلاد خواجه پور</p>
                                <p>روانشناس سلامت</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="consultants-card5">
                    <div className="consultants-card-contents">
                        <div className="consultants-img">
                            <img src={img5}  alt="" />
                        </div>
                        <div className="details">
                            <div>
                                <span >⭐⭐⭐⭐</span>
                            </div>
                            <div>
                                <p className='name'>دکتر فرزانه ردایی</p>
                                <p>روان درمانگر تحلیلی</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}