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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilesUploadComponent from './components/imageupload';
import EditListing from './pages/dashboard/EditListing';



function App() {
  return (
    <>
    <Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/index2" component={Home2} />
        <Route path="/index3" component={Home3} />
        <Route path="/index4" component={Home4} />
        <Route path="/index5" component={Home5} />
        <Route path="/all-categories" component={AllCategories} />
        <Route path="/all-locations" component={AllLocations} />
        <Route path="/top-place" component={TopPlaces} />
        <Route path="/listing-grid" component={ListingGrid} />
        <Route path="/listing-list" component={ListingList} />
        <Route path="/list-map-view" component={ListMapView} />
        <Route path="/list-map-view2" component={ListMapView2} />
        <Route path="/list-left-sidebar" component={ListLeftSidebar} />
        <Route path="/list-right-sidebar" component={ListRightSidebar} />
        <Route path="/listing-details/:listurl" exact component={ListingDetails} />
        <Route path="/listing-details/:listurl/edit" exact  component={EditListing} />
        <Route path="/add-listing" component={AddListing} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/top-author" component={TopAuthors} />
        <Route path="/dashboard" component={EditListing} />
        <Route path="/booking" component={Booking} />
        <Route path="/booking-confirmation" component={BookingConfirmation} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/pricing" component={PricingPlan} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route path="/recover" component={RecoverPassword} />
        <Route path="/blog-full-width" component={BlogFullWidth} />
        <Route path="/blog-grid" component={BlogGrid} />
        <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
        <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
        <Route path="/blog-single" component={BlogDetail} />
        <Route path="/login" component={Login} />
        <Route path="/imageupload" component={FilesUploadComponent} />
        <Route path="/sign-up" component={SignUp} />
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
