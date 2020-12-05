import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css';
import './App.css';
import Home from './pages/homes/Home';
import Home2 from './pages/homes/Home2';
import Home3 from './pages/homes/Home3';
import Home4 from './pages/homes/Home4';
import Home5 from './pages/homes/Home5';
import AllCategories from './pages/categories/AllCategories';
import AllLocations from './pages/categories/AllLocations';
import TopPlaces from "./pages/categories/TopPlaces";
import ListingGrid from "./pages/listings/ListingGrid";
import ListingList from "./pages/listings/ListingList";
import ListMapView from "./pages/listings/ListMapView";
import ListMapView2 from "./pages/listings/ListMapView2";
import ListLeftSidebar from "./pages/listings/ListLeftSidebar";
import ListRightSidebar from "./pages/listings/ListRightSidebar";
import ListingDetails from "./pages/listings/ListingDetails";
import AddListing from "./pages/listings/AddListing";
import UserProfile from "./components/other/account/UserProfile";
import TopAuthors from "./pages/TopAuthors";
import Dashboard from "./pages/dashboard/Dashboard";
import Booking from "./pages/dashboard/Booking";
import BookingConfirmation from "./pages/dashboard/BookingConfirmation";
import Invoice from "./pages/dashboard/Invoice";
import PricingPlan from "./pages/PricingPlan";
import About from "./pages/About";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import BlogFullWidth from "./pages/blogs/BlogFullWidth";
import BlogGrid from "./pages/blogs/BlogGrid";
import BlogLeftSidebar from "./pages/blogs/BlogLeftSidebar";
import BlogRightSidebar from "./pages/blogs/BlogRightSidebar";
import BlogDetail from "./pages/blogs/BlogDetail";
import Login from "./pages/Login";
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
import CategoryListHeader from './components/common/categoryListheader';



function App() {
  return (
    <>
      <Route>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/index2" component={Home2} />
          <Route exact path="/index3" component={Home3} />
          <Route exact path="/index4" component={Home4} />
          <Route exact path="/index5" component={Home5} />
          <Route exact path="/all-categories" component={AllCategories} />
          <Route exact path="/all-locations" component={AllLocations} />
          <Route exact path="/top-place" component={TopPlaces} />
          <Route exact path="/listing-list" exact component={ListHeader} />
          <Route exact path="/listing-grid" exact component={ListRightSidebar} />
          <Route exact path="/listing-list/:category" exact component={ListHeader} />
          <Route exact path="/list-map-view" component={ListMapView} />
          <Route exact path="/list-map-view2" component={ListMapView2} />
          <Route exact path="/list-left-sidebar" component={ListLeftSidebar} />
          <Route exact path="/list-right-sidebar" component={ListRightSidebar} />
          <Route exact path="/listing-details/:listurl" exact component={ListingDetails} />
          <Route exact path="/listing-details/:listurl/edit" exact component={EditListing} />
          <Route exact path="/add-listing" component={AddListing} />
          <Route exact path="/user-profile/:username" component={UserProfile} />
          <Route exact path="/top-author" component={TopAuthors} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/booking-confirmation" component={BookingConfirmation} />
          <Route exact path="/invoice" component={Invoice} />
          <Route exact path="/pricing" component={PricingPlan} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/recover" component={RecoverPassword} />
          <Route path="/forum" exact component={BlogFullWidth} />
          <Route path="/forum/home" exact component={BlogFullWidth} />
          <Route path="/forum/submit" exact component={newpost} />
          <Route path="/forum/submit/:communityname" exact component={newpost} />
          <Route path="/forum/newcommunity" exact component={newcommunity} />
          <Route path="/forum/r/:communityurl" exact component={communitydashboard} />
          <Route path="/forum/user/:username" exact component={userdashboard} />
          <Route path="/forum/community" exact component={BlogLeftSidebar} />
          <Route path="/forum/community/:categoryid" exact component={BlogLeftSidebar} />
          <Route path="/login" component={Login} />
          <Route path="/forum/post/:url" exact component={BlogDetail} />
          <Route path="/forum/post/edit/:url" exact component={editPost} />
          <Route path="/imageupload" component={FilesUploadComponent} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/error/:what" component={Error} />
          <Route component={Error} />
        </Switch>
      </Route>
      <ToastContainer
        position="bottom-left"
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

export default App;
