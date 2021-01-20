import React, { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Redirect, Route, Switch, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import { compose } from "redux";
import store from './redux/redux-store';
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));

class App extends React.Component {
  catchAllUnhandleErrors = (promiseRejectionEvent) => {
    alert(promiseRejectionEvent);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="App-wrapper">
        <HeaderContainer />
        <main>
          <div className="container">
            <Navbar />
            <div className="main_content">
              <Switch>
              <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/profile" />}
                />
                <Route
                  path="/profile/:userId?"
                  render={() => {
                    return (
                      <Suspense fallback={<Preloader />}>
                        <ProfileContainer />
                      </Suspense>
                    );
                  }}
                />
                <Route
                  path="/dialogs"
                  render={() => {
                    return (
                      <Suspense fallback={<Preloader />}>
                        <DialogsContainer />
                      </Suspense>
                    );
                  }}
                />
                <Route path="/users" render={() => <UsersContainer pageTitle={"Samurai"} />} />
                <Route path="/login" render={() => <Login />} />
                <Route path="*" render={() => <div>404 not found</div>} />
              </Switch>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);


const MainApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;