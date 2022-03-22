import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from 'react-chat-engine';

const Chats = () => {
  const navigate=useNavigate();

  const handleLogout=async()=>{
    await auth.signOut();

    navigate('/');
  }

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Chat App
        </div>

        <div className='logout-tab' onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine 
        height="calc(100vh-66px)"
        projectId="f775d338-6986-4677-835b-e8f09e72236f"
        userName=""
        userSecret=""
      />
    </div>
  )
}

export default Chats