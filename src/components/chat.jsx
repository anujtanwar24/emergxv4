import React  from 'react';
import './sign.css'
import Chatbot from 'react-chatbot-kit';
import config from './chatbot/config';
import MessageParser from './chatbot/messageparser';
import ActionProvider from './chatbot/actionprovider';

function Chat() {
    return (
        
        <div className='chat'>
            
           
     <div className='chatBot'>
     <div className='contact-info'><h2>you will be able to contact with the nearest doctor, private clinics or hospital.<br/>Through various options like voice,Video or in person Depending on you type and place of emergency</h2></div>
     <Chatbot
     config={config} 
     messageParser={MessageParser}
     actionProvider={ActionProvider}/>
     </div>


            </div>
      
    )
}


export default Chat