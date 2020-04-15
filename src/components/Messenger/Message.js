import React from 'react';

const Message = (props) => {
    const timestampToDate = (timestamp) => new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);

    return (
        <div className="message_box">
            <div className={props.messageUserStyle}>{props.user}</div>
            <div className={props.messageContentStyle} >{props.message}</div>
            <div className={props.timeStampStyle}>{timestampToDate(props.timeStamp)}</div>
        </div>
    );
}

export default Message;
