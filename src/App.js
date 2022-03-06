import React from 'react'
import { ChatEngine} from 'react-chat-engine';
import  ChatFeed from './components/ChatFeed';
import './App.css'
import LoginForm from './components/LoginForm';


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="700b223a-fa54-4c1e-a172-a4e1ee803a84"
      /* userName="Aparna"
      userSecret="123123" */
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps)=> 
       <ChatFeed{...chatAppProps}/>}  
    />
  )
}

export default App

