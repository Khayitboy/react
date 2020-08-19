import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <main>
          <div className="container">
            <Navbar />
            <div className="main_content">
              <Route path='/profile' render={ () => <Content profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
              <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}  />} />
              <Route path='/music' render={ () => <Music />} />
              <Route path='/news' render={ () => <News />} />
              <Route path='/settings' render={ () => <Settings />} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
