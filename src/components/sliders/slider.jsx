import React, { useState } from 'react'
import { useEffect } from 'react'
import style from './slider.css'
import Card from '../card/card'
import { Link } from 'react-router-dom'

export default function Slider(props){
    const [cards,setCards] = useState([])
    const [scroll,setScroll] = useState(Number)
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
        "https://media.khabaronline.ir/d/2023/09/10/4/5911588.jpg?ts=1694335822000",
        "https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/07/21/1399072111150334221419932.jpg",
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/12/11/1402121119003212429520934.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/07/21/1399072111150334221419934.jpg' ,
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1395/04/05/139504052050535728002624.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/05/31/1399053122073440821004064.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/02/18/1402021813431485027531394.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1399/06/01/1399060109381266821006024.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/12/28/1402122811325389929642494.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1393/03/28/139303280834145633029464.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/08/01/140208011601444328627444.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/10/26/1402102614023668729206874.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/01/18/140201181735155827344154.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1401/07/23/1401072309505577226251814.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/11/25/1402112517084859629399494.jpg',
        'https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/1402/12/25/1402122510580427629621064.jpg'
        ]
        if(props.id === "1"){
            setCards(
                [
                <Card id = "1" title=' فعالیت های ورزشی متنوع روزانه' view = "1736" like = '1153' imgUrl={imageUrls[3]}/>,
                <Card id = "2" title='تاثیرات گرم کردن بدن قبل از شروع ورزش' view = "1277" like = '837' imgUrl={imageUrls[0]} />,
                <Card id = "3" title='راهکار های ایجاد انگیزه برای ورزش منظم' view = "1529" like = '941' imgUrl={imageUrls[2]} />,
                <Card id = "4" title='اقدامات لازم برای افزایش قد در نوجوانی و بزرگسالی' view = "932" like = '417' imgUrl={imageUrls[1]} />,
                <Card id = "5" title='چه نوشیدنی هایی هنگام ورزش بنوشیم؟' view = "721" like = '402' imgUrl={imageUrls[4]} />,
                ]
            )}
        if(props.id === "2"){
            setCards(
                [
                <Card id = "10" title='رژیم های غذایی باید شامل چه چیز هایی باشند؟' view = "1622" like = '1057' imgUrl={imageUrls[9]} />,
                <Card id = "6" title='چگونه می‌توانم میزان مصرف نمک، قند و چربی‌های اشباع شده را کاهش دهم؟' view = "1182" like = '836' imgUrl={imageUrls[5]} />,
                <Card id = "7" title='راهکار های ترکیب برنامه ورزشی با تغذیه سالم ' view = "1028" like = '1592' imgUrl={imageUrls[6]} />,
                <Card id = "8" title='تغذیه های مناسب برای کاهش وزن چیست؟' view = "829" like = '394' imgUrl={imageUrls[7]} />,
                <Card id = "9" title='روزانه باید چه مقدار میوه و سبزیجات مصرف کنم؟' view = "592" like = '207' imgUrl={imageUrls[8]} />,  
                ]
            )}
        if(props.id === "3"){
            setCards(
                [
                <Card id = "11" title='چه وعده های غذایی قبل ازخواب پیشنهاد میشوند؟' view = "1065" like = '943' imgUrl={imageUrls[10]} />,
                <Card id = "12" title='برای داشتن یک خواب مناسب چه اقداماتی باید انجام دهیم؟' view = "1006" like = '859' imgUrl={imageUrls[11]} />,
                <Card id = "13" title='چگونه می‌توانم روال خواب منظم را در زندگی روزمره‌ام پیاده‌سازی کنم؟' view = "789" like = '281' imgUrl={imageUrls[12]} />,
                <Card id = "14" title='هر فرد روزانه به چه مقدار خواب و استراحت نیاز دارید؟' view = "738" like = '382' imgUrl={imageUrls[13]} />,
                <Card id = "15" title='دلیل بیداری های مککر بین خواب چیست؟' view = "627" like = '299' imgUrl={imageUrls[14]} />,  
                ]
            )}
        if(props.id === "4"){
            setCards(
                [
                <Card id = "16" title=' راهکار ها و روش های مقابله با استرس چیست؟' view = "1823" like = '1209' imgUrl={imageUrls[15]} />,
                <Card id = "17" title='چه زمانی باید با یک متخصص روانشناسی یا پزشک مراجعه کنم؟' view = "1593" like = '1172' imgUrl={imageUrls[16]} />,
                <Card id = "18" title='چگونه از فکر های منفی دوری کنم؟' view = "1681" like = '1553' imgUrl={imageUrls[17]} />,
                <Card id = "19" title='چگونه می‌توانم تمرین تمرکز را در زندگی روزمره‌ام پیاده‌سازی کنم؟' view = "1205" like = '1058' imgUrl={imageUrls[18]} />,
                <Card id = "20" title=' تکنیک‌های آرامش مانند تکنیک تنش و تخلیه عضلات چیست؟' view = "1071" like = '722' imgUrl={imageUrls[19]} />,  
                ]
            )}
        if(props.id === "5"){
            setCards(
                [
                <Card id = "21" title='چگونه به وزن متعادل خود برسیم ؟' view = "1729" like = '1437' imgUrl={imageUrls[20]} />,
                <Card id = "22" title='چگونه برنامه ورزشی مناسب خودم تنظیم کنم؟' view = "1773" like = '1298' imgUrl={imageUrls[21]} />,
                <Card id = "23" title='چه نوع فعالیت‌های ورزشی مناسبی برای رسیدن به وزن متعادل می‌توانم انجام دهم؟' view = "1602" like = '1487' imgUrl={imageUrls[22]} />,
                <Card id = "24" title=' راهکار های کاهش وزن چیست؟' view = "1205" like = '969' imgUrl={imageUrls[23]} />,
                <Card id = "25" title=' ایمنی که هایی برای جلوگیری از اسیب های ناخواسته هنگام ورزش باید رعایت کنیم' view = "1171" like = '1092' imgUrl={imageUrls[24]} />,  
                ]
            )}
        if(props.id === "6"){
            setCards(
                [
                <Card id = "31" title='زمینه مشارکت مردم در جهش تولید کالاهای سلامت فراهم شده' date='1403/01/01' view = "1123" imgUrl={imageUrls[30]} />, 
                <Card id = "26" title='۶۳ مجموعه متخلف در حوزه سلامت محیط پلمب شد' view = "2491" date='1403/01/04' imgUrl={imageUrls[25]} />,
                <Card id = "27" title='تشکیل قرارگاه سلامت نوروزی مازندران'  view = "1201" date='1403/01/04' imgUrl={imageUrls[26]} />,
                <Card id = "28" title='ضبط ۱۴ تن فرآورده دامی غیربهداشتی و پلمب ۱۵ واحد متخلف' date='1403/01/03' view = "2307" imgUrl={imageUrls[27]} />,
                <Card id = "30" title='اجرای برنامه سلامت خانواده برای ۲۷میلیون نفر تا خرداد' date= '1403/01/01' view = "1667" imgUrl={imageUrls[29]} />,
                 
                ]
            )}
        const arrowBtn=document.querySelectorAll('.slider-contener span');
        const slider = document.querySelectorAll('.slider1');
        arrowBtn.forEach(btn => {
            btn.addEventListener("click",() => {
                slider.forEach((sl) => {
                    const firstCardWidth = document.querySelector ('.card').offsetWidth;
                    setScroll(sl.scrollLeft)
                    sl.scrollLeft += btn.id === "left" ? -firstCardWidth - 30 : firstCardWidth + 30   ;
                })           
            })
        });      
    },[]);
    
   
    
    return(
        <div className='slider-contener'>
            <h3>
                {props.titleValue}
            </h3>

            <div className="rightleftbtn">
                <span id='left' class="material-symbols-outlined">chevron_left</span>
            </div>
            

            <ul className="slider1">
                {cards}
            </ul>
            
            <div className="rightleftbtn">
                <span id='right' class="material-symbols-outlined">chevron_right</span>
            </div>
        </div>
    )
}