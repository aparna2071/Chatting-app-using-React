import React from 'react'
import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState(''); 
  const { chatId, creds } = props;  //destructuring props

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //to not do a browser refresh on submit

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue(''); 
  };
  const handleUpload = (event) => {
      sendMessage(creds,chatId,{files:event.target.files, text:""})
      
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor='upload-button'>
          <span className='image-button'>
              <PictureOutlined className='picture-icon'/>
          </span>
      </label>
      <input type='file'
      multiple={false}
      id='upload-button'
      style={{display:'none'}}
      onChange={handleUpload}/>
      <button type="submit" className='send-button'>
          <SendOutlined className='send-icon'/>
      </button>
      
    </form>
  );
};

export default MessageForm;
