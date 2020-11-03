import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <main>
          <div className="container">
            <Navbar />
            <div className="main_content">
              <Route path='/profile' render={ () => <ProfileContainer />} />
              <Route path='/dialogs' render={ () => <DialogsContainer  />} />
              <Route path='/users' render={ () => <UsersContainer />} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
