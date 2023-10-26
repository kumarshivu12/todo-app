import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import '../../css/app.css'

function Todo() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <div className="container">
      
        <PageTitle>TODO List
          <div  style={{fontSize:"14px",textTransform:"lowercase"}}>Welcome {user.name}</div>
          
        </PageTitle>
        <div className="app__wrapper">
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default Todo;