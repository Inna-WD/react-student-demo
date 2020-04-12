import React, { useState } from 'react';
import Message from './Message';
import uuid from 'react-uuid'

const Messenger = () => {
    const [messages, setMessages] = useState([{id: uuid(), user: "user1", message: "Hi", timeStamp: Date.now()}, {id: uuid(), user: "user2", message: "hello", timeStamp: Date.now()}]);
    const [message, setMessage] = useState('');
    const [activeUser, setActiveUser] = useState('user1');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    }

    const handleUserChange = (event) => {
        setActiveUser(event.target.value);
    }

    const handleMessageSubmit = (event) => {
        event.preventDefault();      
        if (message) {
            setMessages(messages.concat({id: uuid(), user: activeUser, message: message, timeStamp: Date.now()}));            
        };
        setMessage('');
    }    

    return (
        <main className="main_layout">
          <div className="messengerContainer">
            {messages.map(item => 
                <Message 
                    messageUserStyle={item.user === "user1" ? "message_user1" : "message_user2"}
                    messageContentStyle={item.user === "user1" ? "message_content1" : "message_content2"}
                    timeStampStyle={item.user === "user1" ? "time_stamp1" : "time_stamp2"}
                    key={item.id}
                    id={item.id}                    
                    user={item.user}
                    message={item.message}
                    timeStamp={item.timeStamp}
                />
            )}            
            <form className="send_form" onSubmit={handleMessageSubmit}>
                <div className="radio_input_box">
                    <label className="radio_input_label">
                        <input type="radio" value="user1" checked={activeUser === "user1"} onChange={handleUserChange}/>
                        User1
                    </label>
                    
                    <label className="radio_input_label">
                        <input type="radio" value="user2" checked={activeUser === "user2"} onChange={handleUserChange}/>
                        User2
                    </label>
                </div>
                <div className="send_area">
                    <textarea className="send_message_form" type="text" value={message} onChange={handleInputChange} placeholder="Type your message here"/>
                    <input className="button" type="submit" value="Send"/>
                </div>
                
            </form>             
        </div>  
        </main>                
    );
}

export default Messenger;
