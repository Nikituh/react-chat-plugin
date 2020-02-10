import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import SendIcon from './sendIcon.svg';


export default function InputBox(props) {
    const [inputText, setInputText] = useState('');

    const handleOnChange = (e) => {
        setInputText(e.target.value);
    }

    const handleOnClick = (e) => {
        if(inputText.length) {
            props.onSendMessage(inputText);
            setInputText('');
        } else {
            // to do cannot send empty message
        }
    }

    const onKeyPress = (e) => {
        if(e.shiftKey && e.charCode === 13) {
            props.onSendMessage(inputText);
            setInputText('');
            e.preventDefault();
            return false;
        }
    }

    return (
        <div className={`react-chat-inputBox ${props.disabled ? 'disabled' : ''}`}>
            <TextareaAutosize
                maxRows={3}
                className="react-chat-textarea"
                placeholder={props.disabled ? props.disabledInputPlaceholder : props.placeholder ? props.placeholder : "Press shift + enter to send"}
                value={inputText}
                onChange={handleOnChange}
                onKeyPress={onKeyPress}
                autoFocus
                disabled={props.disabled}
            />
            <button className="react-chat-sendButton" onClick={handleOnClick} disabled={props.disabled}>
                <SendIcon className={props.disabled ? "react-chat-SendIcon-disable" : "react-chat-SendIcon"} />
            </button>
        </div>
    );
}
