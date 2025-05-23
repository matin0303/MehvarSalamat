import React from 'react'
import style from './guide.css'
import guideImage from '../../images/guide.png'
export default function Guide(){
    return(
        <div className='guide'>
            <div className="guide-text">
                <p>
                    :اگر سیستم عامل ویندوز هستید و ربات برای شما پاسخگو نیست<br />
                     قندشکن وصل کنید یا برای تغییر آی پی مراحل زیر را انجام دهید<br />
                    روی منوی استارت کلیک کنید و سپس روی کنترل پنل کلیک کنید<br />
                    روی گزینه Network and Internet کلیک کنید<br />
                    روی گزینه Change Adapter Settings کلیک کنید<br />
                    Propertiesروی شبکه وای‌فای که به آن متصل هستید راست کلیک کنید و سپس را انتخاب <br />
                    گزینه Internet Protocol Version 4 را انتخاب کنید<br />
                    Properties را بزنید<br />
                    اگر نشانی دی ان اس وجود دارد آن را جایی یادداشت کنید و برای مراجعات بعدی نگه دارید. سپس آنها را پاک کنید<br />
                    شانی 178.22.122.100 و 185.51.200.2 را در بخش‌های مربوط به دی ان اس وارد کنید<br />
                    <br />
                    : اگر اندروید هستید و ربات برای شما پاسخگو نیست قندشکن را وصل کنید یا برای تغییر آی پی<br />
                    در تنظیمات  (Settings) به بخش Network & Internet - Advanced - Private DNS بروید<br />
                    در قسمت Private DNS provider hostname عبارت free.shecan.ir <br />را وارد کنید و تنظیمات را ذخیره نمایید.

                </p>
            </div>
            <div className='guideImage'>
                <img src={guideImage} />
            </div>
        </div>
    )
}