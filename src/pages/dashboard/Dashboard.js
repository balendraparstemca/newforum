import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsPencil, } from 'react-icons/bs'
import { FaRegEdit, FaRegEnvelope, FaRegTrashAlt } from 'react-icons/fa'
import { AiOutlineUser, AiOutlinePlusCircle, AiOutlinePoweroff, AiOutlineExclamationCircle } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { connect } from "react-redux";
import { addImageprofile } from '../../services/action/auth';
import { getuserlist, getusersavedlist, userUnsaveList } from '../../services/action/list';
import SignInOptions from '../../components/other/account/SignInOptions';
import { userdetails } from '../../services/action/user';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
        this.state = {
            file: require('../../assets/images/team2.jpg'),
            imgCollection: '',
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            savedlist: [],
            userlist: [],
            userImg: require('../../assets/images/team2.jpg'),
            userName: '',
            userbio: '',
            address: '',
            phoneNum: '',
            website: '',
            email: "",
            firstname: "",
            lastname: "",

        }
    }

    componentDidMount() {
        this.userd()

        $(document).on('click', '.delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn', function (e) {
            $('body').addClass('modal-open').css({ paddingRight: '17px' });
            $(".account-delete-modal").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn', function (e) {
            $('body').removeClass('modal-open').css({ paddingRight: '0' });
            $(".account-delete-modal").removeClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn', function (e) {
            $(".user-edit-form .dropdown-menu, .user-edit-form .dropdown").toggleClass('show');
            $(".user-edit-form .dropdown-menu").css({ position: 'absolute', transform: 'translate3d(0px, -733px, 0px)', top: '0', left: '0', willChange: 'transform' })
            e.preventDefault();
        });

    }

    userd = () => {
        let obj = { "userName": this.props.userdetails.userName }

        this.props.dispatch(userdetails(obj)).then(() => {
            this.getusersavedlist(this.props.udetails[0].id)
            this.getuserlist(this.props.udetails[0].id)
            this.setState({
                userdetail: this.props.udetails[0],
                userName: this.props.udetails[0].userName,
                email: this.props.udetails[0].emailId,
                firstname: this.props.udetails[0].firstName,
                lastname: this.props.udetails[0].lastName,
                file: this.props.udetails[0].profileimg ? `http://localhost:7999/api/v1/utilities/${this.props.udetails[0].profileimg}` : require('../../assets/images/team2.jpg')
            })
        })

    }

    getusersavedlist = (userid) => {
        this.props.dispatch((getusersavedlist(userid))).then(() => {
            this.setState({
                savedlist: this.props.usersavedlist
            })
        })
    }


    getuserlist = (userid) => {
        this.props.dispatch((getuserlist(userid))).then(() => {
            this.setState({
                userlist: this.props.alluserlist
            })
        })

    }



    onChangeFirstname(e) {
        this.setState({
            firstname: e.target.value,
        });

    }

    onChangeLastname(e) {
        this.setState({
            lastname: e.target.value,
        });

    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    handleRegister(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });

        //this.props.dispatch(registerUser(this.state.firstname, this.state.lastname, this.state.email)).then(() => {
        //  this.setState({
        //    loading: false,
        //});
        // })

    }


    uploadSingleFile(e) {
        this.setState({
            imgCollection: e.target.files,
            file: URL.createObjectURL(e.target.files[0])

        })
    }

    upload(e) {
        e.preventDefault()
        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('image', this.state.imgCollection[key])

        }
        this.props.dispatch(addImageprofile(formData, this.props.userdetails.id));
    }

    Unsave = (listid) => {
        const obj = {
            listing_id: listid,
            saved_by: this.props.userdetails.id
        }
        this.props.dispatch(userUnsaveList(obj)).then(() => {
            this.getusersavedlist(this.state.userdetail.id)
        })

        console.log(obj);

    }

    render() {


        return (
            <main className="dashboard-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Dashboard" MenuPgTitle="pages" img={this.state.breadcrumbimg} />

                <section className="dashboard-area padding-top-40px padding-bottom-90px">
                    <div className="container">
                        <Tabs>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                                        <TabList className="nav nav-tabs border-0" id="nav-tab">
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><AiOutlineUser /></span> Profile
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsListCheck /></span> Listings
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span> Bookmark List
                                                </Link>
                                            </Tab>

                                        </TabList>
                                        <div className="btn-box">
                                            <Link to="/add-listing" className="theme-btn"><span className="la"><AiOutlinePlusCircle /></span> create listing</Link>
                                            <Link to="/" className="theme-btn ml-1"><span className="la"><AiOutlinePoweroff /></span> sign out</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tab-content" id="nav-tabContent">

                                        <TabPanel>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="user-profile-action">
                                                        <div className="user-pro-img mb-4">
                                                            <img src={this.state.file} alt='default-list-profile' />

                                                            <div className="dropdown">
                                                                <button
                                                                    className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                                                    type="button" id="editImageMenu"
                                                                    data-toggle="dropdown" aria-haspopup="true"
                                                                    aria-expanded="false">
                                                                    <i className="la la-photo"></i> Edit
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                    aria-labelledby="editImageMenu">
                                                                    <div className="upload-btn-box">
                                                                        <form>
                                                                            <input type="file" name="files[]" id="filer_input" onChange={this.uploadSingleFile} />
                                                                            <button className="theme-btn border-0 w-100 button-success" type="button" onClick={this.upload} value="submit">
                                                                                Save changes
                                                                            </button>
                                                                        </form>
                                                                    </div>
                                                                    <div className="btn-box mt-3">
                                                                        <button className="theme-btn border-0 w-100">Remove
                                                                        Photo
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="user-details">
                                                            <h2 className="user__name widget-title pb-2">
                                                                {this.state.userName}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">


                                                    <div className="billing-form-item mb-0">

                                                        <div className="billing-content">
                                                            <div className="contact-form-action">
                                                                <form method="post" onSubmit={this.handleRegister}>
                                                                    <div className="row">

                                                                        <div className="col-lg-12">
                                                                            <div className="input-box">
                                                                                <label className="label-text">First name</label>
                                                                                <div className="form-group">
                                                                                    <span className="form-icon">
                                                                                        <AiOutlineUser />
                                                                                    </span>
                                                                                    <input className="form-control" type="text" placeholder="First name" name="firstname" value={this.state.firstname} onChange={this.onChangeFirstname} required="required" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                            <div className="input-box">
                                                                                <label className="label-text">Last name</label>
                                                                                <div className="form-group">
                                                                                    <span className="form-icon">
                                                                                        <AiOutlineUser />
                                                                                    </span>
                                                                                    <input className="form-control" type="text" name="lastname" value={this.state.lastname} onChange={this.onChangeLastname} required="required" placeholder="Last name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-12">
                                                                            <div className="input-box">
                                                                                <label className="label-text">Email</label>
                                                                                <div className="form-group">
                                                                                    <span className="form-icon">
                                                                                        <FaRegEnvelope />
                                                                                    </span>
                                                                                    <input className="form-control" type="email" required="required" name="email" value={this.state.email} onChange={this.onChangeEmail} placeholder="Enter email" />
                                                                                </div>
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-lg-12">
                                                                            <div className="btn-box margin-top-20px margin-bottom-20px">
                                                                                <button className="theme-btn border-0" type="submit" disabled={this.state.loading}>
                                                                                    {this.state.loading && (
                                                                                        <span className="spinner-border spinner-border-sm"></span>
                                                                                    )} update account
                                                           </button>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    {this.state.alert}
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="user-form-action">
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0">Change Password</h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="billing-content">
                                                                <div className="contact-form-action">
                                                                    <form>
                                                                        <div className="input-box">
                                                                            <label className="label-text">Current Password</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="Current Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">New Password</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="New Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-box">
                                                                            <label className="label-text">Confirm New Password</label>
                                                                            <div className="form-group">
                                                                                <span className="la form-icon"><BsPencil /></span>
                                                                                <input className="form-control" type="text" name="text" placeholder="Confirm New Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="btn-box">
                                                                            <button className="theme-btn button-success border-0">
                                                                                updated password
                                                                            </button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row">

                                                {this.state.userlist.length === 0 ? (<div className="card-item center"><h5>there is no list</h5></div>)
                                                    : this.state.userlist.map((item, i) => {
                                                        return (
                                                            <div key={i} className="col-lg-4 column-td-6">
                                                                <div className="card-item">
                                                                    <Link to={`/listing-details/${item.listing.canonicalurl}`} className="card-image-wrap">
                                                                        <div className="card-image">
                                                                            <img src={`http://localhost:7999/api/v1/utilities/${item.listing.bannerimg}`} className="card__img" alt="Card" />
                                                                        </div>
                                                                    </Link>
                                                                    <div className="card-content-wrap">
                                                                        <div className="card-content">
                                                                            <Link to={`/listing-details/${item.listing.canonicalurl}`}>
                                                                                <h4 className="card-title mt-0">{item.listing.list_title}</h4>
                                                                                <p className="card-sub">{item.listing.address}</p>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="rating-row">
                                                                            <div className="edit-info-box">
                                                                                <button type="button" className="theme-btn button-success border-0 mr-1">
                                                                                    <Link to={`/listing-details/${item.listing.canonicalurl}/edit`}><span className="la"><FaRegEdit /></span> Edit</Link>
                                                                                </button>
                                                                                <button type="button" className="theme-btn delete-btn border-0" data-toggle="modal" data-target=".product-delete-modal">
                                                                                    <span className="la"><FaRegTrashAlt /></span> Delete
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row">

                                                {this.state.savedlist.length === 0 ? (<div className="card-item center"><h5>there is no list</h5></div>)
                                                    : this.state.savedlist.map((item, i) => {
                                                        return (
                                                            <div key={i} className="col-lg-4 column-td-6">
                                                                <div className="card-item">
                                                                    <Link to={`/listing-details/${item.canonicalurl}`} className="card-image-wrap">
                                                                        <div className="card-image">
                                                                            <img src={`http://localhost:7999/api/v1/utilities/${item.bannerimg}`} className="card__img" alt="Card" />
                                                                        </div>
                                                                    </Link>
                                                                    <div className="card-content-wrap">
                                                                        <div className="card-content">
                                                                            <Link to={`/listing-details/${item.canonicalurl}`}>
                                                                                <h4 className="card-title mt-0">{item.list_title}</h4>
                                                                                <p className="card-sub">{item.address}</p>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="rating-row">
                                                                            <div className="edit-info-box">

                                                                                <button type="button" className="theme-btn  border-0" onClick={() => this.Unsave(item.listing_id)}>
                                                                                    <span className="la"><FaRegTrashAlt /></span> Remove
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                            </div>
                                        </TabPanel>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />


                {/* Modal */}
                <div className="modal-form text-center">
                    <div className="modal fade account-delete-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-sm" role="document">
                            <div className="modal-content p-4">
                                <div className="modal-top border-0 mb-4 p-0">
                                    <div className="alert-content">
                                        <span className="la warning-icon"><AiOutlineExclamationCircle /></span>
                                        <h4 className="modal-title mt-2 mb-1">Your account will be deleted permanently!</h4>
                                        <p className="modal-sub">Are you sure to proceed.</p>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="theme-btn border-0 button-success mr-1" data-dismiss="modal">
                                        Cancel
                                    </button>
                                    <button type="button" className="theme-btn border-0 button-danger">
                                        delete!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main>


        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { alluserlist, usersavedlist } = state.list;
    const { udetails } = state.user;
    return {
        isLoggedIn, userdetails, usersavedlist, alluserlist, udetails

    };
}
export default connect(mapStateToProps)(Dashboard);