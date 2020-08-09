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

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <main>
          <div className="container">
            <Navbar />
            <div className="main_content">
              <Route path='/profile' component={Content} />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/music' component={Music} />
              <Route path='/news' component={News} />
              <Route path='/settings' component={Settings} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
