import React, { useState } from 'react';
import style from './news-and-articles-page.css'
import Navbar from '../../components/nav/nav';
import ChatBot from '../../components/chat-bot/chat-bot';
import Card from '../../components/card/card'
import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import { click } from '@testing-library/user-event/dist/click';

export default function NewsAndArticles(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    const [articlesCard,setArticlesCard] = useState([])
    const [newsCard , steNewsCard] = useState([])

    const filterbuttons = document.querySelectorAll('.filter-buttons button');
    function filtercard(e){
        const cards = document.querySelectorAll('.card-div')
        document.querySelector('.active').classList.remove('active')
        e.target.classList.add('active')
        cards.forEach((card)=>{
            const parent = card.parentNode;
            parent.classList.add('hide')
            if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all' ){
                parent.classList.remove('hide')
            }
        })
    }

    filterbuttons.forEach(buttun => buttun.addEventListener("click",filtercard))

    useEffect(()=>{
        let imageUrls=["https://www.chetor.com/wp-content/uploads/2017/12/93957.jpg",
        "https://fitamin.ir/mag/wp-content/uploads/2022/10/The-effect-of-nutrition-on-height-increase.jpg",
        "https://actic.ir/blog/wp-content/uploads/2021/12/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AF%D9%88%DB%8C%D8%AF%D9%86-%D8%A7%DA%A9%D8%AA%DB%8C%DA%A9.jpg",
        "https://fitamin.ir/mag/wp-content/uploads/2020/09/%D8%AD%D8%B1%DA%A9%D8%A7%D8%AA-%D9%BE%D8%A7%DB%8C%D9%87-%D8%A8%D8%AF%D9%86%D8%B3%D8%A7%D8%B2%DB%8C.jpg",
        "https://www.elmevarzesh.com/wp-content/uploads/best-Workout-Drinks.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-iX62yLvwLLCnbYCnrvel4yDQ0qpQeIlKvgWghP__YPk4g3JtA1Yt6iAccMkSX41hdk&usqp=CAU",
        "https://drkoohdani.ir/wp-content/uploads/2021/05/3-15-696x464-1.jpg",
        "https://kalleh.com/book/wp-content/uploads/sites/2/2022/07/wrong-beliefs-on-weight-loss.jpg.webp",
        "https://cdn.asriran.com/files/fa/news/1396/1/22/688587_951.jpg",
        "https://media.khabaronline.ir/d/2020/12/29/3/5512479.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJG4WV3kKOPs5Pdy7glgzgO6ZyEZBSRqKvzQ&usqp=CAU",
        "https://media.imna.ir/d/2021/08/24/3/1723685.jpg",
        "https://www.chetor.com/wp-content/uploads/2017/02/42198.jpg",
        "https://www.moheb.com/wp-content/uploads/2019/10/sleeping-time.jpg",
        "https://cdn.wikigardi.net/thumbnail/KmdXGa3BaTum/WzAwSrGLsX43DbVJdwLhZWB4hPtncEkBXiE6W5TFHGpw0X9D6KkrBo6M5IFs8PLi/%D9%BE%D8%B1%D8%AE%D9%88%D8%B1%DB%8C+%D9%82%D8%A8%D9%84+%D8%A7%D8%B2+%D8%AE%D9%88%D8%A7%D8%A8+.jpg",
        "https://rahehno.com/wp-content/uploads/2021/07/Workplace-stress-and-ways-to-deal-with-it-1160x653.jpg",
        "https://moshaverline.com/wp-content/uploads/2023/03/Counselling.jpg",
        "https://files.namnak.com/bi/users/ms/aup/202205/15_pics/%D8%A7%D9%81%DA%A9%D8%A7%D8%B1-%D9%85%D9%86%D9%81%DB%8C.jpg",
        "https://mindtoolbox.ir/wp-content/uploads/2018/09/%D8%A7%D9%81%D8%B2%D8%A7%DB%8C%D8%B4-%D8%AA%D9%85%D8%B1%DA%A9%D8%B2.jpg",
        "https://drtabatabaie.ir/wp-content/uploads/2015/06/%D8%A2%D8%B1%D8%A7%D9%85%D8%B4-%D8%AE%DB%8C%D8%A7%D9%84-%D8%AF%DA%A9%D8%AA%D8%B1-%D8%A7%D9%81%D8%B4%DB%8C%D9%86-%D8%B7%D8%A8%D8%A7%D8%B7%D8%A8%D8%A7%DB%8C%DB%8C.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlc-mHwZ2_q0nFKI0knBR-HPEAzTPkxFMTg&usqp=CAU",
        "https://mosbatesabz.com/mag/wp-content/uploads/2023/04/bodybuilding-for-fat-people.jpg",
        "https://www.digikala.com/mag/wp-content/uploads/2021/07/01-11-Benefits-of-Exercise.jpg",
        "https://media.imna.ir/d/2017/07/13/4/1425581.jpg",
        "https://media.khabaronline.ir/d/2023/09/10/4/5911588.jpg?ts=1694335822000"


        
                    ]
        setArticlesCard(
            [
                <div className='card-width'><Card id = "1" dataName='article' title=' فعالیت های ورزشی متنوع روزانه' view = "1736" like = '1153' imgUrl={imageUrls[3]}/></div>,
                <div className='card-width'><Card id = "2" dataName='article' title='تاثیرات گرم کردن بدن قبل از شروع ورزش' view = "1277" like = '837' imgUrl={imageUrls[0]} /></div>,
                <div className='card-width'><Card id = "3" dataName='article' title='راهکار های ایجاد انگیزه برای ورزش منظم' view = "1529" like = '941' imgUrl={imageUrls[2]} /></div>,
                <div className='card-width'><Card id = "4" dataName='article' title='اقدامات لازم برای افزایش قد در نوجوانی و بزرگسالی' view = "932" like = '417' imgUrl={imageUrls[1]} /></div>,
                <div className='card-width'><Card id = "5" dataName='article' title='چه نوشیدنی هایی هنگام ورزش بنوشیم؟' view = "721" like = '402' imgUrl={imageUrls[4]} /></div>,
                <div className='card-width'><Card id = "10" dataName='article' title='رژیم های غذایی باید شامل چه چیز هایی باشند؟' view = "1622" like = '1057' imgUrl={imageUrls[9]} /></div>,
                <div className='card-width'><Card id = "6" dataName='article' title='چگونه می‌توانم میزان مصرف نمک، قند و چربی‌های اشباع شده را کاهش دهم؟' view = "1182" like = '836' imgUrl={imageUrls[5]} /></div>,
                <div className='card-width'><Card id = "7" dataName='article' title='راهکار های ترکیب برنامه ورزشی با تغذیه سالم ' view = "1028" like = '1592' imgUrl={imageUrls[6]} /></div>,
                <div className='card-width'><Card id = "8" dataName='article' title='تغذیه های مناسب برای کاهش وزن چیست؟' view = "829" like = '394' imgUrl={imageUrls[7]} /></div>,
                <div className='card-width'><Card id = "9" dataName='article' title='روزانه باید چه مقدار میوه و سبزیجات مصرف کنم؟' view = "592" like = '207' imgUrl={imageUrls[8]} /></div>, 
                <div className='card-width'><Card id = "11" dataName='article' title='چه وعده های غذایی قبل ازخواب پیشنهاد میشوند؟' view = "1065" like = '943' imgUrl={imageUrls[10]} /></div>,
                <div className='card-width'><Card id = "12" dataName='article' title='برای داشتن یک خواب مناسب چه اقداماتی باید انجام دهیم؟' view = "1006" like = '859' imgUrl={imageUrls[11]} /></div>,
                <div className='card-width'><Card id = "13" dataName='article' title='چگونه می‌توانم روال خواب منظم را در زندگی روزمره‌ام پیاده‌سازی کنم؟' view = "789" like = '281' imgUrl={imageUrls[12]} /></div>,
                <div className='card-width'><Card id = "14" dataName='article' title='هر فرد روزانه به چه مقدار خواب و استراحت نیاز دارید؟' view = "738" like = '382' imgUrl={imageUrls[13]} /></div>,
                <div className='card-width'><Card id = "15" dataName='article' title='دلیل بیداری های مککر بین خواب چیست؟' view = "627" like = '299' imgUrl={imageUrls[14]} /></div>,  
                <div className='card-width'><Card id = "16" dataName='article' title=' راهکار ها و روش های مقابله با استرس چیست؟' view = "1823" like = '1209' imgUrl={imageUrls[15]} /></div>,
                <div className='card-width'><Card id = "17" dataName='article' title='چه زمانی باید با یک متخصص روانشناسی یا پزشک مراجعه کنم؟' view = "1593" like = '1172' imgUrl={imageUrls[16]} /></div>,
                <div className='card-width'><Card id = "18" dataName='article' title='چگونه از فکر های منفی دوری کنم؟' view = "1681" like = '1553' imgUrl={imageUrls[17]} /></div>,
                <div className='card-width'><Card id = "19" dataName='article' title='چگونه می‌توانم تمرین تمرکز را در زندگی روزمره‌ام پیاده‌سازی کنم؟' view = "1205" like = '1058' imgUrl={imageUrls[18]} /></div>,
                <div className='card-width'><Card id = "21" dataName='article' title='چگونه به وزن متعادل خود برسیم ؟' view = "1729" like = '1437' imgUrl={imageUrls[20]} /></div>,
                <div className='card-width'><Card id = "22" dataName='article' title='چگونه برنامه ورزشی مناسب خودم تنظیم کنم؟' view = "1773" like = '1298' imgUrl={imageUrls[21]} /></div>,
                <div className='card-width'><Card id = "23" dataName='article' title='چه نوع فعالیت‌های ورزشی مناسبی برای رسیدن به وزن متعادل می‌توانم انجام دهم؟' view = "1602" like = '1487' imgUrl={imageUrls[22]} /></div>,
                <div className='card-width'><Card id = "24" dataName='article' title=' راهکار های کاهش وزن چیست؟' view = "1205" like = '969' imgUrl={imageUrls[23]} /></div>,
                <div className='card-width'><Card id = "25" dataName='article' title=' ایمنی که هایی برای جلوگیری از اسیب های ناخواسته هنگام ورزش باید رعایت کنیم' view = "1171" like = '1092' imgUrl={imageUrls[24]} /></div>, 
            ]
            
        )
        
        steNewsCard(
            [
                {
                    id:26,
                    classname:'news',
                    title:'شصت و سه مجموعه متخلف در حوزه سلامت محیط پلمب شد' ,
                    view :'2491' ,
                    date:'1403/01/04' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/07/21/1399072111150334221419934.jpg' ,
                },
                {
                    id:27,
                    classname:'news',
                    title:'تشکیل قرارگاه سلامت نوروزی مازندران' ,
                    view :'1201' ,
                    date:'1403/01/04' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/12/11/1402121119003212429520934.jpg' ,
                },
                {
                    id:28,
                    classname:'news',
                    title:'ضبط ۱۴ تن فرآورده دامی غیربهداشتی و پلمب ۱۵ واحد متخلف',
                    view :'2307' ,
                    date:'1403/01/03' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/07/21/1399072111150334221419934.jpg' ,
                },
                {
                    id:29,
                    classname:'news',
                    title:'اخطار بهداشتی برای۲ رستوران و فروشگاه بین راهی دماوند',
                    view :'1317' ,
                    date:'1403/01/01' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1395/04/05/139504052050535728002624.jpg' ,
                },
                {
                    id:30,
                    classname:'news',
                    title:'اجرای برنامه سلامت خانواده برای ۲۷میلیون نفر تا خرداد',
                    view :'1667' ,
                    date:'1403/01/01' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/05/31/1399053122073440821004064.jpg' ,
                },
                {
                    id:31,
                    classname:'news',
                    title:'زمینه مشارکت مردم در جهش تولید کالاهای سلامت فراهم شده',
                    view :'1123' ,
                    date:'1403/01/01' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/02/18/1402021813431485027531394.jpg' ,
                },
                {
                    id:32,
                    classname:'news',
                    title:'!پزشکان باید جور ناتوانمندی بیمه‌ها را بکشند',
                    view :'2302' ,
                    date:'1402/12/29' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/06/01/1399060109381266821006024.jpg' ,
                },
                {
                    id:33,
                    classname:'news',
                    title:'معدوم‌سازی ۵۰۰ تُن غذای فاسد در طرح سلامت نوروزی',
                    view :'1591' ,
                    date:'1402/12/28' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/12/28/1402122811325389929642494.jpg' ,
                },
                {
                    id:34,
                    classname:'news',
                    title:'بزرگترین جام رمضان کشور در مشهد آغاز شد',
                    view :'1358' ,
                    date:'1402/12/27' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1393/03/28/139303280834145633029464.jpg',
                },
                {
                    id:35,
                    classname:'news',
                    title:'تجویز دارو در ایران ۲ برابر استاندارد جهانی/ نیاز به بودجه ۱۵۵ هزار میلیاردی برای دارویار در سال آینده',
                    view :'2151' ,
                    date:'1402/12/27' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/08/01/140208011601444328627444.jpg' ,
                },
                {
                    id:36,
                    classname:'news',
                    title:'غذای آلوده عامل ۲۰۰ بیماری/ جزئیات بازرسی‌های بهداشتی از اصناف در تعطیلات نوروز',
                    view :'1897' ,
                    date:'1402/12/27' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/10/26/1402102614023668729206874.jpg' ,
                },
                {
                    id:37,
                    classname:'news',
                    title:'برگزاری نمایشگاه قرآن در سلامت مردم جامعه تاثیر مثبتی دارد',
                    view :'937' ,
                    date:'1402/12/27' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/01/18/140201181735155827344154.jpg' ,
                },
                {
                    id:38,
                    classname:'news',
                    title:'ارائه خدمات گردشگری سلامت در ۴۵ مرکز درمانی خراسان رضوی',
                    view :'937' ,
                    date:'1402/12/26' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1401/07/23/1401072309505577226251814.jpg' ,
                },
                {
                    id:39,
                    classname:'news',
                    title:'وزیر بهداشت: پیام رهبر انقلاب خستگی را از تن سربازان جبهه سلامت زدود',
                    view :'1334' ,
                    date:'1402/12/26' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/11/25/1402112517084859629399494.jpg' ,
                },
                {
                    id:40,
                    classname:'news',
                    title:'طرح "سلامت خانواده" به نام ایران ثبت جهانی شد',
                    view :'1715' ,
                    date:'1402/12/25' ,
                    imgUrl:'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/12/25/1402122510580427629621064.jpg' ,
                },
            ]
        )

        const navElements =document.querySelectorAll('.nav-bar li a');
        const logo =document.querySelector('.logo');
        const menu_btns = document.querySelectorAll('.btn');
        navElements.forEach((a)=>{a.style.color="#368600fb"});
        menu_btns.forEach((btn)=>{btn.style.color="#368600fb"});
        logo.style.color="#368600fb";
        },[])
    return(
        <div>
            <section className='page-main-container'>
                <header>
                    <nav className="consultant-navbar">
                        <Navbar/>
                    </nav>

                    <div className="chatbot">
                        <ChatBot/>
                    </div>
                </header>

                <main>
                    <div className='main-container'>
                        <div className="filter-container">
                            <div className="filter-buttons">
                                <button className='active' data-name='all'>همه</button>
                                <button data-name='article'>مقالات </button>
                                <button data-name='news'>اخبار</button>
                            </div>
                        </div>
                        <div className="cards-container">
                            {articlesCard}
                            {newsCard.map((item)=>(
                                <div className='card-width'><Card id ={item.id} dataName={item.classname} title={item.title} view ={item.view} imgUrl={item.imgUrl} date={item.date} /></div>
                            ))}
                            
                            
                        </div>
                    </div>
                </main>
            </section>
            <footer>
                <Footer/>
            </footer>
        </div>
           
    )
}