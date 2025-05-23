import React, { useEffect, useState } from 'react'
import style from './consultants-page.css'
import Navbar from '../../components/nav/nav';
import ConsultantCard from '../../components/card/consultant-card'
import ChatBot from '../../components/chat-bot/chat-bot';
import Footer from '../../components/footer/footer';

export default function ConsultantsPage(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    
    
    
    const [consultants , setConsultants] = useState([])
    const [isLoadin , setIsloading] = useState(false)
    useEffect(()=>{    
        setIsloading(true)
        setConsultants([
            {
                id:1,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/09c3c09c170b12ffd135d64240b1c7a9.jpg',
                name:'سید علی اکبر مرتضوی امامی',
                job:'روانکاو بالینی؛خانواده و زوج درمانی',
                city:'تهران',
                address:'تهران، مجیدیه، بالاتر از سه راه ارامنه روبروی کوچه ختایی پلاک۱۶۳ واحد۲ طبقه۷',
                number:'02126244749',
                map:'https://www.google.com/maps/dir//35.7351655,51.4627653/@35.7351394,51.5329108,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:2,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/1b4ad18e452c8fc6b0e65263305e3b91.jpg',
                name:'مونا نعمتی',
                job:'دکترای تخصصی روانشناسی بالینی',
                city:'تهران',
                address:'تهران . اتوبان چمران. نرسیده به ستارخان . خیابان باقرخان . بلوار فرزانه . نبش کوچه انوشه. ساختمان 42 . واحد 3',
                number:'02188001038',
                map:'https://www.google.com/maps?daddr=35.71219761317,51.377410796185&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:3,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/144e0179b0d87522150e2acefc9acd64.jpg',
                name:'نینا طیبی',
                job:'کارشناس مامایی و ارشد روانشناسی عمومی',
                city:'تهران',
                address:'تهران - شهرک غرب-بلوار دادمان_نبش خیابان میلاد پلاک یک طبقه چهارم واحد 8',
                number:'02188591834',
                map:'https://www.google.com/maps?daddr=35.764419,51.35128&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:4,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/noimage.png',
                name:'مهناز حاجلو',
                job:'مشاوره فردی، درمان افسردگی',
                city:'تهران',
                address:' تهران- پاسدارن- بین دشتستان پنجم و ششم- ساختمان آفتاب- پلاک 74 - طبقه پنجم - واحد 20',
                number:'02122886546',
                map:'https://www.google.com/maps/dir//35.7588993,51.4540716/@35.7585652,51.5285652,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:5,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/563cef6a91a9f263dbaf94db8c0969c5.jpg',
                name:'حسین ستوده',
                job:'مشاوره فردی، مشاوره کودک و نوجوان',
                city:'تهران',
                address:' تهران- پاسدارن- بین دشتستان پنجم و ششم- ساختمان آفتاب- پلاک 74 - طبقه پنجم - واحد 20',
                number:'02122886546',
                map:'https://www.google.com/maps/dir//35.7588993,51.4540716/@35.7585652,51.5285652,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:6,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/0d494e95b14b0f0ff03e69c3ee0af4f7.jpg',
                name:'مستانه رنجبر',
                job:'روانشناس بالینی و نوروتراپیست',
                city:'تهران',
                address:' تهران، شریعتی،بالاتر از ظفر،کوچه صادقیان،پلاک ۱۰،طبقه پنجم',
                number:'02126702023',
                map:'https://www.google.com/maps/dir//35.7665159,51.4426558/@35.7664586,51.5129097,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:7,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/00244ed0db0ec4d3636d109f71c447e4.jpg',
                name:'نیلوفر جعفری',
                job:'مشاور تغذیه و رژیم در چاقی،لاغری',
                city:'تهران',
                address:'اسلامشهر - قائمیه کوچه۲۱ ساختمان پزشکان شفای سبز۲ طبقه۲',
                number:'02156464442',
                map:'https://www.google.com/maps?daddr=35.687719899996,51.393159851432&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:8,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/b5a6cc1eaf7901d91af004937e9c522e.jpg',
                name:'اینچه ناز اسدزاده',
                job:'کارشناسی ارشد روانشناسی بالینی',
                city:'آذربایجان شرقی , تبریز ',
                address:'خیابان هفده شهریور جدید نرسیده به تقاطع چهاراه هفده شهریور جدید شریعتی جنوبی جنب بانک ایران زمین ساختمان 717 طبقه پایین',
                number:'09925803029',
                map:'https://www.google.com/maps?daddr=38.068490759823,46.285034991706&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:9,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/294e0b78a1fbfd750e17e58569ebe2d0.jpg',
                name:'محمود جبارزاده',
                job:'دکتری روانشناسی تربیتی',
                city:'آذربایجان شرقی , تبریز ',
                address:'3تبریز، 17 شهریور، برج آذربایجان، طبقه اول، واحد ',
                number:'04135576659',
                map:'https://www.google.com/maps?daddr=38.068306827682,46.293940712831&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:10,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/d4dcf52a6c73beaa92785775079fdbf2.jpg',
                name:'سید مرتضی سید شوری',
                job:'کارشناسی ارشد تغذیه و رژیم درمانی',
                city:'آذربایجان شرقی , تبریز ',
                address:'تبریز - شاه گلی- رجایی شهر-روبروی مدرسه بلال کلینیک یارا',
                number:'',
                map:'https://www.google.com/maps?daddr=38.03916119788,46.350277411066&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐'
    
            },
            {
                id:11,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'دکتر فریدرضا فغفوری',
                job:' مشاوره خانواده',
                city:'آذربایجان شرقی , میانه ',
                address:'خیابان امام خمینی - روبروی شهرداری - طبقه فوقانی لوازم خانگی تهران پخش - مرکز تخصصی مشاوره خانواده رایمند',
                number:'04152247075',
                map:'',
                star:'⭐⭐⭐⭐'
    
            },
            {
                id:12,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/d76810188f197694d704edf4dfaa1f38.jpeg',
                name:'امین رضانژاد',
                job:'متخصص روانشناسی',
                city:'آذربایجان شرقی , مراغه ',
                address:'مراغه - کلینیک مراغه، خواجه نصیر جنوبی، ساختمان بانک آینده، طبقه 6،',
                number:'04137231764',
                map:'https://www.google.com/maps?daddr=37.394665115364,46.23998554079&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐'
    
            },
            {
                id:13,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'مرکز مشاوره روانشناسی گوهران ',
                job:'روانشناس بالینی',
                city:'اردبیل',
                address:' اردبیل،سرچشمه،انتهای کوچه طوی(تاوار)،جنب مسجد طوی،مرکز مشاوره گوهران',
                number:'09923294102',
                map:'',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:14,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/e4d4781c9a1376da4bf7f4336a463ae3.jpg',
                name:'فرشید شهریاری',
                job:'متخصص اعصاب و روان',
                city:'اردبیل',
                address:' اردبیل سرچشمه کوی طوی روبروی پارکینگ طبقاتی ساختمان پزشکان فراز طبقه دوم',
                number:'04533250896',
                map:'https://www.google.com/maps?daddr=38.486124912952,47.890896326389&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:15,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/7d46e79fdc91c55976d8c4913f57f890.jpg',
                name:'فرناز روح اله زادگان',
                job:'کارشناسی ارشد علوم تغذیه',
                city:'اردبیل',
                address:'اردبیل - پشت بیمارستان امام خمینی، مجتمع پزشکان اردبیل، طبقه 6،واحد 189',
                number:'04533274041',
                map:'https://www.google.com/maps/dir//38.4853276,47.8911209/@38.4853067,47.9611609,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:16,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/def89a4178ddc9c9046775f771b66a40.png',
                name:'سوسن خوش بین',
                job:'کارشناسی علوم تغذیه',
                city:'اردبیل',
                address:'اردبیل - محل کار: خ مقدس مرکز اموزشی و درمانی علوی',
                number:'0452248888',
                map:'',
                star:'⭐⭐⭐⭐'
    
            },
            {
                id:17,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/211d1fa2d37a4c76ec6ee86855a813f0.jpg',
                name:'رضا غیاثوند',
                job:'متخصص تغذیه ورژیم درمانی بالینی',
                city:'اصفهان ',
                address:'اصفهان-خیابان شریف واقفی - چهار راه ابوالحسن اصفهانی - ابتدای شریف واقفی طبقه فوقانی داروخانه بهشتی',
                number:'09135955004',
                map:'https://www.google.com/maps?daddr=32.647975260181,51.692060589612&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:18,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'غلامرضا قاسمی تودشکچویی',
                job:'مشاور سلامت روان',
                city:'اصفهان ',
                address:'اصفهان - خیابان استانداری - بیمارستان خورشید',
                number:'09135955004',
                map:'https://www.google.com/maps/dir//%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%B3%D8%AA%D8%A7%D9%86+%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF%D8%8C+%D8%A7%D8%B3%D8%AA%D8%A7%D9%86+%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86%D8%8C+%D8%A7%D8%B5%D9%81%D9%87%D8%A7%D9%86%D8%8C+%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86+%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%AF%D8%A7%D8%B1%DB%8C,+No.+105%D8%8C+%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%E2%80%AD/@32.654245,51.7163423,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3fbc35f7b1f06fad:0xf5912d7162d75bab!2m2!1d51.6751426!2d32.6542517?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
    
            },
            {
                id:19,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/aac9dedd99a013cb8692f535bb7530c0.jpg',
                name:'مائده قضاوی',
                job:'روانپزشک ( اعصاب و روان)',
                city:'اصفهان ',
                address:'اصفهان - اصفهان، شیخ صدوق شمالی، جنب بانک پارسیان. ساختمان سرو طبقه اول',
                number:'',
                map:'https://www.google.com/maps?daddr=32.628820313072,51.6717290491&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:20,
                image:'https://cdn.paziresh24.com/getImage/p24/search-women/c6796997aabf03dfdec01a2f6aade643.jpg',
                name:'نسرین جوان',
                job:'کارشناس ارشد روانشناسی عمومی',
                city:'اصفهان ',
                address:'کلینیک پرواز: خیابان هزار جریب خیابان کارگر خیابان مهدوی بن بست اول میلاد کلینیک پر پرواز',
                number:'03136689239',
                map:'https://www.google.com/maps?daddr=32.60581422912,51.672070026398&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:21,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/6d7f1ebeeb8ebb35ab6298dbe0049a95.jpg',
                name:'منا حبیبی',
                job:'مشاور تغذیه و رژیم درمانی',
                city:'کرج ',
                address:' کرج- مهرشهر- بلوار ارم- بین خیابان 118 و119- درمانگاه مرکزی مهرشهر',
                number:'02633412345',
                map:'https://www.google.com/maps?daddr=35.804647,50.897388&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:22,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/3d9898c132632a745d5263f0bd63baee.jpeg',
                name:'زینب صائمی',
                job:'روانپزشک و زوج درمانگر',
                city:'کرج ',
                address:'کرج - کرج، طالقانی جنوبی، کنار گذر چهارراه طالقانی، نرسیده به اداره پست مرکزی، برج آدرخش ،طبقه دوم ، واحد ۵',
                number:'',
                map:'https://www.google.com/maps?daddr=35.820847641191,50.991337728923&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:23,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/85d801614d991d7992015730076b28ae.jpeg',
                name:'پری دخت اکبری',
                job:'روانپزشک و زوج درمانگر',
                city:'ایلام ',
                address:'ایلام، اشرفی اصفهانی، بلوار سیدالشهدا، شهید حمدی',
                number:'08433331350',
                map:'https://www.google.com/maps?daddr=33.630611658831,46.424697370234&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:24,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/a2631c83895fd671d8f4f8dc2f79d576.jpeg',
                name:'شکوفه عقیلی',
                job:'کارشناسی علوم تغذیه',
                city:'ایلام ',
                address:'ایلام - سعدی جنوبی_روبرو داروخانه دکتر رشیدی-ساختمان پزشکان پاستور طبقه اول',
                number:'09393418839',
                map:'https://www.google.com/maps?daddr=33.2957618,46.670534&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:25,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/b57130f61c5e9e34cea031f345f35e6a.jpg',
                name:'نیما جهانی بوشهری',
                job:'متخصص تغذیه ورزشی',
                city:'بوشهر  ',
                address:' بوشهر، خیابان باهنر، کلینیک گلبرگ',
                number:'09011350408',
                map:'https://www.google.com/maps/dir//28.9233837,50.820314/@28.9233656,50.8903542,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:26,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'حبیب رزمی زاده',
                job:' مشاور روان شناسی',
                city:'بوشهر  ',
                address:'کنگان - زیرپل هوایی - ساختمان پزشکان ابوالفضل - طبقه دوم',
                number:'077-37342841',
                map:'https://www.google.com/maps/dir//27.8347467,52.0634784/@27.8347595,52.1335022,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:27,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'دکتر سیدکمال صولتی',
                job:'متخصص روان شناسی بالینی',
                city:'چهارمحال بختیاری , شهرکرد  ',
                address:'چهار راه مولوی ( بالاتر از چهار راه فردوسی)-کلینیک حضرت رسول( آزمایشگاه مرکزی سابق)',
                number:'038-32221443',
                map:'',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:28,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/0a4e16b732469f5dd55abd0384ec1ad4.jpeg',
                name:'نادر ناصری',
                job:'روانشناسی کودکان استثنایی',
                city:'خراسان جنوبی , بیرجند   ',
                address:'طالقانی ۸،پل فرزین،روبروی ظروف یک بار مصرف سپهر درخشان',
                number:'056-32226473',
                map:'https://www.google.com/maps?daddr=32.871851683222,59.213258586794&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:29,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/9d8989cb57f2f8075d423f75ff392b3a.png',
                name:'سمیه قربانی',
                job:'دکتری روان شناسی عمومی',
                city:'مشهد ',
                address:'مشهد- خیابان کوثر شمالی- بین کوثر ۷ و ۹ - مجموعه پنجره - پلاک ۷۷',
                number:'09155552050',
                map:'https://www.google.com/maps/dir//36.2604623,59.6167549/@36.2601334,59.6874241,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:30,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/58daffd73b0565f3383a748ab2483783.jpg',
                name:'باقر رضائی منش',
                job:'روانشناسی بالینی',
                city:'مشهد ',
                address:'مشهد-نبش سناباد 45-پلاک76-واحد4',
                number:'09156858147',
                map:'https://www.google.com/maps/dir//36.2604623,59.6167549/@36.2601334,59.6874241,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:31,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'فیروزه خلیلی یزدی',
                job:'روانشناسی بالینی',
                city:'مشهد ',
                address:'پنجراه سناباد به سمت آبکوه، سناباد 39 ، بعد از ابوسعید، پلاک 33',
                number:'05138428404',
                map:'',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:32,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'محمدرضا حسینی یزدی',
                job:'مشاور روانشناسی',
                city:'مشهد ',
                address:'بلوار دانش آموز - بین دانش آموز 22 و 24 - پلاک 20 - طبقه اول و دوم',
                number:'05138931040',
                map:'https://www.google.com/maps?daddr=36.334715,59.512186&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐'
            },
            {
                id:33,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/a9a2c2207466fb4d1abc2b03aee9e7b6.jpeg',
                name:'سپیده شریف',
                job:'کارشناس ارشد روانشناسی عمومی',
                city:'خراسان شمالی , بجنورد  ',
                address:' بین امیریه و مخابرات کوچه شهید رنجبر (کاریز) بعد از چهارراه اول (آزمایشگاه طالقانی) سمت چپ ساختمان امید طبقه دوم',
                number:'09922577977',
                map:'https://www.google.com/maps?daddr=37.474692049636,57.333183288574&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:34,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'مرکز مشاوره حس برتر',
                job:'روانشناس بالینی',
                city:'خراسان شمالی , شیروان   ',
                address:'بلوار امام خمینی (ره)، روبروی پارک کوثر، جنب نمایشگاه اتومبیل نظر زاده',
                number:'05836242518',
                map:'',
                star:'⭐⭐⭐⭐'
            },
            {
                id:35,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'بهروز شادمان',
                job:'روانشناسی بالینی',
                city:'زنجان ',
                address:'چهارراه سعدی، ابتدای کوچه مشیری، ساختمان هوشمند، طبقه سوم',
                number:'02433366879',
                map:'https://www.google.com/maps?daddr=36.67359934725049,48.484046682715416&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐'
            },
            {
                id:36,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/ac92d58bac70c8b93190bfd9c74351d5.jpeg',
                name:'مریم عبادی',
                job:'متخصص تغذیه و رژیم درمانی',
                city:'زنجان ',
                address:'زنجان، هفت تیر، کوچه شهید بیستونی',
                number:'02433329857',
                map:'https://www.google.com/maps/dir//36.6719062,48.4820696/@36.6719659,48.5517403,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:37,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/285e1f557c2053b9fe1877a27ec3ac2d.png',
                name:'پروين افشار',
                job:'کارشناسی علوم تغذیه',
                city:'زنجان ',
                address:'مطب: ورودی پونک - جنب شرکت سرمایه داری مسکن - ساختمان پزسکان امید - طبقه 7 - واحد 32',
                number:'02433447475',
                map:'',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:38,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'محمد سلیمانیان',
                job:'روانشناس بالینی و مشاور خانواده',
                city:'سمنان  ',
                address:' میدان مشاهیر - بلوار قدس - نرسیده به میدان عدالت - روبروی داروخانه جهانشیر - مجتمع میثم - طبقه اول',
                number:'02333363640',
                map:'',
                star:'⭐⭐⭐⭐'
            },
            {
                id:39,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/624cde6ad35fd5a3e0bded9a542b0087.jpg',
                name:'عارفه السادات طاهري',
                job:'کارشناسی علوم تغذیه',
                city:'سمنان  ',
                address:'سمنان، پل شهید محب شاهدین، ساختمان پزشکان بوعلی، طبقه ۷',
                number:'02333492810',
                map:'https://www.google.com/maps/dir//35.2239647,54.4347111/@35.6261831,54.3293519,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:40,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/b4e3f19bad4876bd130d839fc1961d14.png  ',
                name:'دکتر مرکز مشاوره عمرانی',
                job:'مشاور و روانشناس خانواده',
                city:'سمنان  ',
                address:' میدان امام - ساختمان نگین - طبقه 4',
                number:'09125311829',
                map:'',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:41,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/b4e3f19bad4876bd130d839fc1961d14.png  ',
                name:'مریم دادور',
                job:'مشاور تغذیه و رژیم درمانی',
                city:'شیراز   ',
                address:'شیراز - خیابان قصردشت نرسیده به چهارراه زرگری بین کوچه 52 و 54 ساختمان المپیک طبقه3 واحد 8',
                number:'09389890290',
                map:'https://www.google.com/maps?daddr=29.636636977904,52.504393137019&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:41,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'محمدامین جعفری',
                job:'مشاور تخصصی تغذیه و رژیم درمانی',
                city:'شیراز   ',
                address:'شیراز، بلوار کریمخان زند، خیابان خیام، بین خیام 3 و 6',
                number:'07132135501',
                map:'https://www.google.com/maps?daddr=29.591061033424,52.5836160779&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:42,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/f9cabd414331a5bfc3bdfa85eb9b3c79.jpg',
                name:'مرتضی بخشیان',
                job:'روانشناس بالینی',
                city:'شیراز   ',
                address:'بیست متری سینما سعدی خیابان ۷ تیر کنار بیمارستان شفا مرکز مشاوره راه سبز زندگی',
                number:'07132346644',
                map:'https://www.google.com/maps?daddr=29.626249413876,52.525484561231&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:43,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'رضیه تقیه',
                job:'کارشناس ارشد روانشناسی عمومی',
                city:'شیراز   ',
                address:' شیراز، وکلا، وکلا 34',
                number:'09392024636',
                map:'https://www.google.com/maps?daddr=29.652668185817,52.482743561268&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:44,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'ارسلان عبدالهی دهکی',
                job:'روانشناس بالینی',
                city:'قزوین',
                address:'خیام جنوبی -روبروی ستاره شهر -کوچه نسترن-ساختمان شقایق-طبقه اول-واحد 1',
                number:'09127856736',
                map:'',
                star:'⭐⭐⭐⭐'
            },
            {
                id:45,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/4ccd7df43fdde9ca9274921aa0bb7897.png',
                name:'آرزو طباخی',
                job:'کارشناسی علوم تغذیه',
                city:'قزوین',
                address:'قزوین - فردوسی شمالی_ روبروی بیمارستان دهخدا_ساختمان پزشکان ساسان_طبقه سوم_ واحد۱۷',
                number:'02833361417',
                map:'https://www.google.com/maps/dir//36.0881317,49.8547266/@36.0881113,49.9247667,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:46,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/b5f74962a412a56539f5c39e12deba6c.jpeg',
                name:'سیما همدانی',
                job:'کارشناس ارشد تغذیه ورزشی',
                city:'قزوین',
                address:'قزوین - خیابان دانشگاه - چهارراه مدنی شرقی درمانگاه زیبایی مهرگان- چهارشنبه ها حتما با هماهنگی قبلی',
                number:'02833335531',
                map:'https://www.google.com/maps/dir//36.0881317,49.8547266/@36.0881113,49.9247667,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:47,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/d3b53e078ff98c9927c82c2259213c47.jpg',
                name:'روح الله قنبری',
                job:'مشاور ارشد علوم تغذیه',
                city:'قم',
                address:' قم بلوار امین کوچه 5 ساختمان مسیحا طبقه دوم',
                number:'02532615298',
                map:'https://www.google.com/maps/dir//34.6377205,50.8764919/@34.6376647,50.9467567,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:48,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/535b6739eb747f965d57f4e5080aa325.jpeg',
                name:'ماندانا نذری دوست',
                job:'کارشناسی ارشد روانشناسی عمومی',
                city:'قم',
                address:'قم، خیابان باجک۲ نبش تالار زیتون روبروی کوچه ۸۴ مرکز سلامت مهر',
                number:'09051721617',
                map:'https://www.google.com/maps/dir//34.6399443,50.8759419/@34.6399242,50.945982,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:49,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'روح الله امینی',
                job:'کارشناس ارشد روانشناسی',
                city:'قم',
                address:'فلکه صفاییه - فلکه مصلی - ابتدای بلوار شهید منتظری - نبش کوچه 36 - ساختمان ساحل - طبقه 1 - واحد 2',
                number:'02537839363',
                map:'https://www.google.com/maps?daddr=34.635618939209,50.86700659891994&amp;ll&openInBrowser=1',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:50,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/4d857af022248d0b3013bd390eec9d7e.jpg',
                name:'مریم معادی',
                job:'روانشناس سلامت',
                city:'رشت',
                address:'رشت- گلسار- خیابان142- ساختمان پزشکان اکباتان - طبقه 5- واحد 23',
                number:'09373813285',
                map:'https://www.google.com/maps/dir//37.28158,49.5824899/@37.281465,49.6526227,12z?entry=ttu',
                star:'⭐⭐⭐⭐⭐'
            },
            {
                id:51,
                image:'https://cdn.paziresh24.com/getImage/p24/search-men/noimage.png',
                name:'مرکز مشاوره اندیشه نوین ',
                job:' مشاور خانواده و کودک',
                city:'رشت',
                address:' ابتدای خیابان مطهری، جنب مسجد چهاربرادران (خاتم الانبیا)، ابتدای گذرفرخ، مجتمع پارس، طبقه چهارم، واحد 12.',
                number:'01333343658',
                map:'',
                star:'⭐⭐⭐⭐⭐'
            },
        ])
        setIsloading(false)
        const navElements =document.querySelectorAll('.nav-bar li a');
        const logo =document.querySelector('.logo');
        const menu_btns = document.querySelectorAll('.btn');
        navElements.forEach((a)=>{a.style.color="#368600fb"});
        menu_btns.forEach((btn)=>{btn.style.color="#368600fb"});
        logo.style.color="#368600fb";

        let search = document.querySelector('.search-box');
        search.addEventListener('keyup',() =>{
            let searchInput = document.querySelector('.search-box').value.trim();
            let cityName = document.querySelectorAll('.consultant-details .cityName');
            let card = document.querySelectorAll('.consultant-card')
            const span = document.querySelector('.result');
            let find = 0
            cityName.forEach((element,index) => {
                if (element.innerText.includes(searchInput)){
                    find += 1
                    card[index].classList.remove('hide')
                }else{
                    card[index].classList.add('hide')
                }
            })
            if (find === 0 ){
                span.classList.add('search-result')
                span.innerText = ' نتیجه ای برای '+`" ${searchInput} "`+' یافت نشد'

            }else{
                span.innerText = ''
                span.classList.remove('search-result')
            }
        })
    },[])
    return(
        <div className='matin'>
            {isLoadin ? <p></p> :(
                <section className='consultant-page'>
                    <nav className="consultant-navbar">
                        <Navbar/>
                    </nav>
                    <div className="chatbot">
                        <ChatBot/>
                    </div>  
                    <main className='consultant-main'>
                        <div className="search-container">
                            <div className="search">
                                <input type="text" className='search-box' placeholder='نام استان را وارد کنید'/>
                                <span class="material-symbols-outlined">data_loss_prevention</span>
                            </div>
                        </div>
                        <div className="consultant-card-container">
                            {consultants.map((item) => (
                                <ConsultantCard image={item.image} name={item.name} job={item.job} city={item.city} number={item.number} address={item.address} star={item.star} map={item.map}/>
                            ))}
                            
                        </div>
                        <span className='result'> </span>
                    </main>     
                </section>
            )}
            
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}