import React from 'react'
import { store } from '../store';
import Footer from './Footer';

function TeacherDashBoard() {

  const state = store.getState();
    const username = state.Login.userinfo[0].details
    console.log("store->name:", username);
  
    return (
    <div>
      <h3>Welcome {username}</h3>
      <div className="break" style={{ marginTop : '240px' }}></div>
      <Footer />
    </div>
  )
}

export default TeacherDashBoard