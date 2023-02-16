import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./components/redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
//import { withSuspense } from "./components/hoc/withSuspense";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
//const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
import ProfileContainer from "./components/Profile/ProfileContainer";
//const ProfileContainer = React.lazy(()=> import ("./components/Profile/ProfileContainer"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="global-app">
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="" element={ <ProfileContainer />} />
              <Route path="/profile/:userId?" element={ <Suspense fallback={<div>Loading...</div>}><ProfileContainer /></Suspense>} />
              {/* <Route path="/profile/:userId?" element={withSuspense(ProfileContainer)} /> */}
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/dialogs" element={<Suspense fallback={<div>Loading...</div>}><DialogsContainer /></Suspense>} /> 
              {/* <Route path="/dialogs" element={withSuspense(DialogsContainer)} /> */}
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
