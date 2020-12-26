import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css';
import './App.css';
import Home from './pages/homes/Home';
import AllCategories from './pages/categories/AllCategories';
import AllLocations from './pages/categories/AllLocations';
import ListingDetails from "./pages/listings/ListingDetails";
import AddListing from "./pages/listings/AddListing";
import UserProfile from "./components/other/account/UserProfile";
import Dashboard from "./pages/dashboard/Dashboard";
import About from "./pages/About";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import BlogFullWidth from "./pages/blogs/BlogFullWidth";
import BlogLeftSidebar from "./pages/blogs/BlogLeftSidebar";
import BlogDetail from "./pages/blogs/BlogDetail";
import LoginBox from "./pages/loginbox";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilesUploadComponent from './components/imageupload';
import EditListing from './pages/dashboard/EditListing';
import userdashboard from './pages/blogs/userdashboard';
import newpost from './pages/blogs/newpost';
import newcommunity from './pages/blogs/newcommunity';
import communitydashboard from './pages/blogs/communitydashboard';
import editPost from './pages/blogs/editPost';
import ListHeader from './components/common/listHeader';
import Verify from './pages/verify';
import ChangePassword from './pages/changepassword';
import { connect } from "react-redux";
import PopularForums from './pages/blogs/popularForums';
import listheadertwo from './components/common/listheadertwo';



function App(props) {

  return (

    <>
      <Route>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/all-categories" component={AllCategories} />
          <Route exact path="/all-location" component={AllLocations} />
          <Route exact path="/listing-list" exact component={ListHeader} />
          <Route exact path="/listing-list/search" exact component={listheadertwo} />
          <Route exact path="/listing-list/:category" exact component={ListHeader} />
          <Route exact path="/listing-details/:listurl" exact component={ListingDetails} />
          <Route exact path="/listing-details/:listurl/edit" exact component={EditListing} />
          <Route exact path="/add-listing" component={AddListing} />
          <Route exact path="/user-profile/:username" component={UserProfile} />
          <Route exact path="/dashboard" render={() => props.isLoggedIn ? <Dashboard /> : <Redirect to="/" />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/recover" component={RecoverPassword} />
          <Route path="/forum" exact render={() => props.isLoggedIn ? <Redirect to="/forum/home" /> : <Redirect to="/forum/popular" />} />
          <Route path="/forum/home" exact component={BlogFullWidth} />
          <Route path="/forum/popular" exact component={PopularForums} />
          <Route path="/forum/submit" exact component={newpost} />
          <Route path="/forum/submit/:communityname" exact component={newpost} />
          <Route path="/forum/newcommunity" exact component={newcommunity} />
          <Route path="/forum/r/:communityurl" exact component={communitydashboard} />
          <Route path="/forum/user/:username" exact component={userdashboard} />
          <Route path="/forum/community" exact component={BlogLeftSidebar} />
          <Route path="/forum/community/:categoryid" exact component={BlogLeftSidebar} />
          <Route path="/forum/post/:url" exact component={BlogDetail} />
          <Route path="/forum/post/edit/:url" exact component={editPost} />
          <Route path="/imageupload" component={FilesUploadComponent} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" render={() => props.isLoggedIn ? <Redirect to="/" /> : < LoginBox />} />
          <Route path="/verify/:emailid" component={Verify} />
          <Route path="/reset/:emailid" component={ChangePassword} />
          <Route path="/error/:what" component={Error} />
          <Route component={Error} />
        </Switch>
      </Route>
      <ToastContainer
        position="bottom-left"
        toastClassName="danger"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}
export default connect(mapStateToProps)(App);
