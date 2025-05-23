import React, { useEffect ,useRef} from 'react'
import style from './footer.css'
import {Link} from 'react-router-dom'
import emailjs from '@emailjs/browser';
import eitaa from '../../images/eitaa.png'
import rubika from '../../images/rubika.png'
import telegram from '../../images/telegram.png'
import insta from '../../images/insta.png'

export default function Footer(){
   

    const success = '<span class="material-symbols-outlined">check</span> پیام شما باموفیت ارسال شد';
    const errormsg = '<span class="material-symbols-outlined">wifi_off</span> اتصال اینترنت را بررسی کنید'
    function showtoast(msg){
        let toastBox = document.querySelector('.toastBox')
        let toast =document.createElement('div');
        toast.classList.add('toast');
        
        toast.innerHTML = msg;
        toastBox.appendChild(toast)
        if(msg.includes('wifi_off')){
            toast.classList.add('error');
        }else{
            toast.classList.remove('error');
        }

        setTimeout(()=>{
            toast.remove()
        },3000)
       }
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const textbox = document.querySelector('.email-form textarea');
        const emailinput = document.querySelector('.email-form input');
    
        if(emailinput.value === ''){
            emailinput.style='border:2px solid red';
        }else if (textbox.value === ''){
            textbox.style='border:2px solid red';
        }else{
            emailinput.style='none';
            textbox.style='none';

            emailjs
          .sendForm('service_bdhe89q', 'template_kqmtlhb', form.current, {
            publicKey: 'khc1PdK-bJvQs3OXn',
          })
          .then(
            () => {
              showtoast(success);
              e.target.reset()
            },
            (error) => {
                showtoast(errormsg);
            },
          );
        }
        

      };
    useEffect(()=>{

        const btn2 = document.querySelector('.footer-open-botguide')
        btn2.addEventListener('click',()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            const guide=document.querySelector('.botguide');
            const body = document.querySelector('body')
            guide.style.display = "block"
            if(body.offsetWidth < 800 ){
                const nav_menu=document.querySelector('.menu-btn')
                const hamber_nav=document.querySelector('.hamber-nav-menu')
                nav_menu.classList.remove("menu-is-open")
                hamber_nav.classList.remove("nav-menu")
            }
        })
        
        
    })

    return(
        <div className='footer-maincontainer'>

            <div className="footer-container1">
                <div className='container-title'>
                    <div>
                        <h3>محور سلامت</h3>
                    </div>
                </div>
                <div className="container1-content">
                    <p>
                        اخبار و مقاله های مفید و هر سوالی که دارید جوابش داخل این سایت هست حتی اگه در مطالب 
                        سایت به جواب نرسیدید از ربات سلامت بپرسید تا همان لحظه جواب سوالتان را بدهد
                        فقط قبل آن فراموش نکنید قندشکن دستگاهتان روشن باشد<br />
                        تیم محور سلامت تمام وقت برای بهبود سایت تلاش میکنند پس ممنون
                        میشویم انتقاد و پیشنهاد های خود را باما درمیان بگذارید
                    </p>
                </div>
            </div>  

            <div className="footer-container2">
                <div className='container-title'>
                    <h3>دسترسی سریع</h3>
                </div>
                <div className='containter2-content'>
            
                    <div>
                        <ul>
                            <Link to='/'><li> صفحه خانه</li></Link>
                            <Link to='/consultants'><li>صفحه مشاورین</li></Link>
                            <Link to='/newsandarticles'><li>صفحه اخبار و مقالات</li></Link>
                            <Link to='/bmi'><li>BMI محاسبه</li></Link>
                            <a><li className='footer-open-botguide'>راهنمای ربات</li></a>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="footer-container3">
                <div className='container-title'>
                    <h3>ارتباط با ما </h3>
                </div>
                <div className='container3-content'>
                    <div className="social">
                        <a href="https://rubika.ir/mehvarsalamat" target='_block'><img src={rubika} /></a>
                        <a href="https://eitaa.com/mehvarssalamat" target='_block'><img src={eitaa}/></a>
                        <a href="https://t.me/mehvarssalamat" target='_block'><img src={telegram}/></a>
                        <a href="https://www.instagram.com/mehvarsalamat.ir" target='_block'><img src={insta}/></a>
                    </div>
                    <div className="email">
                        <form ref={form} onSubmit={sendEmail} className='email-form' >
                            <input type="email" name="user_email" placeholder='Email' />
                            <textarea placeholder='...اینجا بنویسید'  name="message"></textarea>
                            <button type="submit" value="Send">ارسال</button>
                            <p>Email : info@mehvarsalamat.ir</p>
                        </form>
                    </div>
                </div>
                
                
            </div>
            <div className="toastBox"></div>
        </div>
    )
}