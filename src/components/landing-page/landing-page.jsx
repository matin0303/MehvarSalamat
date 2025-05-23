import React, { useEffect } from 'react'
import CahtBot from '../../components/chat-bot/chat-bot'
import style from './landing-page.css'
import Navbar from '../../components/nav/nav'
import images from '../../images/bot.png'



function LandingPage(){
    useEffect(()=>{
        const btn = document.querySelector('.open-botchat')
        btn.addEventListener('click',()=>{
            const chat_div=document.querySelector('.chat_div')
            chat_div.classList.add("show-chatbot")
        })
    })

    return(
        <div className='main-page'>

            <nav>
                <Navbar/>
            </nav>

            <div className='chatbot'>
                <CahtBot/>
            </div>

            <main>
                <div className="landing-text">
                    
                    <h1>  به <span>محورسلامت</span>&thinsp;&thinsp;&thinsp;خوش آمدید</h1>


                    <p>
                        همه اخبار &thinsp;&thinsp;و &thinsp;&thinsp;مقاله های &thinsp;&thinsp;معتبر 
                        &thinsp;&thinsp;و &thinsp;&thinsp;مشاورین&thinsp;&thinsp; سلامت  اینجان  
                        <br /> راستی هر سـوالی&thinsp;&thinsp; در مـورد&thinsp;&thinsp; سلامتی&thinsp;&thinsp;
                        ، ورزش &thinsp;&thinsp;، تغذیه &thinsp;&thinsp;و... &thinsp;&thinsp;داری
                        <br /> میتونی&thinsp;&thinsp; از  '&thinsp;&thinsp;&thinsp; ربات سلامت&thinsp;&thinsp;&thinsp; ' بپرسی 
                        <br />!
                        یادت نره&thinsp;&thinsp; همیشه &thinsp;&thinsp;مراقب سلامتیت &thinsp;&thinsp;باشی
                    </p>
                    
                    <button className='open-botchat'>
                        گفت و گو&thinsp;&thinsp; با&thinsp;&thinsp; ربات
                    </button>
                </div>
                
                <div className="robot-image ">
                    <div className="borderRadius "></div>
                    <img src={images}/>
                </div>
            </main>
        </div>
    )
}
export default LandingPage