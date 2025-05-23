import React from 'react'
import Style from './chat-bot-style.css'
function ChatBot(){
    let usermsg;    
    
    const callApi = (incomingChatLi)=>{
        const API_URL='https://api.openai.com/v1/chat/completions';
        const msgElement=incomingChatLi.querySelector('p')
        const request = {
            method : 'POST',
            headers:{
                "Content-Type":"application/json",
                ////
            },
            body:JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages":[{
                    "role": "user",
                    content: usermsg
                }]
            })
        };
        fetch(API_URL,request).then(res => res.json()).then(data => {
            msgElement.textContent=data.choices[0].message.content;
        }).catch(error => {
            msgElement.classList.add('error');
            msgElement.textContent="وای ارتباط برقرار نشد . روی 'راهنمای ربات 'کلیک کن";
        }).finally( () => {
            const chatbox = document.querySelector('.chat-box');
            chatbox.scrollTo(0,chatbox.scrollHeight)})
    }


    const createmsg = (message,className) =>{
        const chatLi = document.createElement('li');
        chatLi.classList.add('chat',className);
        let msg = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>` ;
        chatLi.innerHTML=msg;
        chatLi.querySelector('p').textContent = message;//because user can not send html tags in chat
        return chatLi
    }

    function sendInput(){
        const input=document.querySelector('.chat-input textarea');
        const chatbox = document.querySelector('.chat-box');

        usermsg=input.value.trim(); 
        if(!usermsg)return;
        //my msg
        chatbox.appendChild(createmsg(usermsg,"outgoing"));
        //for when send new message ,auto scroll down
        chatbox.scrollTo(0,chatbox.scrollHeight)
        //bot msg
        setTimeout(()=>{
            let incomingChatLi=createmsg("...درحال بررسی","incoming")
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0,chatbox.scrollHeight)
            callApi(incomingChatLi);
        },600)

        input.value =""
    }
    function closeChatbox(){
        const chat_div=document.querySelector('.chat_div')
        chat_div.classList.toggle("show-chatbot")
    }
    return(
        <div className='chat_div'>

            <button className='chatbot-toggler' onClick={closeChatbox}>
                <span class="material-symbols-outlined">smart_toy</span>
                <span class="material-symbols-outlined">close</span>
            </button>

            <div className="chat-bot">
                <header>
                    <h2>ربات سلامت</h2>
                    <span class="material-symbols-outlined" onClick={closeChatbox}>close</span>
                </header>

                <ul className='chat-box'>  
                    <li className='chat incoming'>
                        <span class="material-symbols-outlined">smart_toy</span>
                        <p>سلام من ربات سلامت هستم .هرسوالی درباره سلامتی، ورزش ، تغذیه و ... داری میتونی ازم بپرسی </p>
                    </li>

                    {/*
                    <li className='chat outgoing'>
                        <p>سلام</p>
                    </li>
                    */}
                </ul>

                <div className='chat-input'>
                    <textarea placeholder='...اینجا بنویسید' required ></textarea>
                    <span class="material-symbols-outlined" onClick={sendInput}>send</span>
                </div>
            </div>
            
        </div>
    )
}

export default ChatBot

