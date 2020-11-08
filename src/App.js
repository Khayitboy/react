import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderContainer />
        <main>
          <div className="container">
            <Navbar />
            <div className="main_content">
              <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
              <Route path='/dialogs' render={ () => <DialogsContainer  />} />
              <Route path='/users' render={ () => <UsersContainer />} />
              <Route path='/login' render={ () => <Login /> } />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
