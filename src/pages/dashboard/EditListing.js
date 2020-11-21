import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import { BsListCheck, BsBookmark, BsCheckCircle } from 'react-icons/bs'
import { FaGlobeAmericas } from 'react-icons/fa'
import { GiPositionMarker } from 'react-icons/gi'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineUser, AiOutlineExclamationCircle, AiFillDelete } from 'react-icons/ai'
import Button from "../../components/common/Button";
import $ from 'jquery'
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import AddFullDetails from '../../components/addlisting/AddFullDetails';
import PhotoUploader from '../../components/addlisting/PhotoUploader';
import OpeningHours from '../../components/addlisting/OpeningHours';
import Amenities from '../../components/addlisting/Amenities';
import GeneralInfo from '../../components/addlisting/GeneralInfo';
import { addImageList, addImageListprofile, getListDetail, getlistimage, removeImageList } from '../../services/action/list';
import { connect } from "react-redux";



class EditListing extends Component {
    constructor(props) {
        super(props)
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.upload = this.upload.bind(this)
        this.state = {
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
            listImg: '',
            listName: '',
            listbio: '',
            address: '',
            country: '',
            website: '',
            listingid: null,
            verifiedtxt: " n",
            reason: '',
            listimage: [],
            imgCollection:'',
            file:  require('../../assets/images/g-img1.jpg')
        }
    }

    componentDidMount() {

        this.fetchlistDeatil();
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

    uploadSingleFile(e) {
        this.setState({
            imgCollection: e.target.files,
            listImg:<img src={URL.createObjectURL(e.target.files[0])} alt='default-list-profile' /> 
            
        })
    }

    upload(e) {
        e.preventDefault()
        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('image', this.state.imgCollection[key])

        }
       this.props.dispatch(addImageListprofile(formData,this.state.listingid));
    }



    fetchlistDeatil = async () => {
        let obj = { "canonicalurl": this.props.match.params.listurl }
        this.props.dispatch(getListDetail(obj)).then(() => {
            this.setState({
                listName: this.props.listdetail && this.props.listdetail.list_title,
                listbio: this.props.listdetail && this.props.listdetail.description,
                address: this.props.listdetail && this.props.listdetail.address,
                listImg: this.props.listdetail && this.props.listdetail.bannerimg ?  <img src={`http://localhost:7999/api/v1/utilities/${this.props.listdetail.bannerimg}`} alt='list-profile' /> : <img src={this.state.file} alt='default-list-profile' /> ,
                listingid: this.props.listdetail && this.props.listdetail.listing_id,
                verifiedtxt: this.props.listdetail && this.props.listdetail.approved ? 'Verified list' : 'Not Verified Yet',
                country: this.props.listdetail && this.props.listdetail.country,
                reason: this.props.listdetail && this.props.listdetail.reason,
                website: this.props.listdetail && this.props.listdetail.approved ? <Link to={`/listing-details/${this.props.listdetail.canonicalurl}`}>preview your list detail</Link> : '',
             

            })

            this.fetchImage(this.props.listdetail && this.props.listdetail.listing_id)
     

        });

    }

    fetchImage = (list_id) => {
        this.props.dispatch(getlistimage({ listing_id: list_id })).then(() => {
            this.setState({
                listimage: this.props.listallimage && this.props.listallimage
            })
        })
    }

    addimageinlist = (formdata) => {
        this.props.dispatch(addImageList(formdata, this.state.listingid)).then(() => {
            this.fetchImage(this.state.listingid);
        });

    }

    removeImage = (imgid,imagepath) => {
        this.props.dispatch(removeImageList({id:imgid,image:imagepath})).then(() => {
            this.fetchImage(this.state.listingid);
        });

    }


    render() {

       
        return (
            <main className="blog-fullwidth-page">
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
                                                    <span className="la"><BsListCheck /></span> Edit Listings
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span> Add Full Details
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><AiOutlineUser /></span> Add Amenties
                                                </Link>
                                            </Tab>
                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span> Add Images
                                                </Link>
                                            </Tab>

                                            <Tab>
                                                <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                    <span className="la"><BsBookmark /></span> Add shedule
                                                </Link>
                                            </Tab>


                                        </TabList>

                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="tab-content" id="nav-tabContent">

                                        <TabPanel>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="user-profile-action">
                                                        <div className="user-pro-img mb-4">
                                                            <div className="user-edit-form mt-4">
                                                                <div className="author-verified-badge margin-bottom-20px">
                                                                    <div className="author__verified-badge" data-toggle="tooltip" data-placement="top" title="Listing has been verified and belongs the business owner or manager">
                                                                        <span className="d-inline-block"> <BsCheckCircle /></span> {this.state.verifiedtxt}
                                                                    </div>
                                                                    <p><b>{this.state.reason}</b></p>
                                                                </div>
                                                            </div>
                                                            {this.state.listImg}
                                                          
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
                                                                            <input type="file" name="files[]" id="filer_input" onChange={this.uploadSingleFile}/>
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
                                                                {this.state.listName}
                                                            </h2>
                                                            <div className="section-heading">
                                                                <p className="sec__desc font-size-15 line-height-24">
                                                                    {this.state.listbio}
                                                                </p>
                                                            </div>
                                                            <ul className="list-items mt-3">
                                                                <li>
                                                                    <span className="la d-inline-block"><GiPositionMarker /></span> {this.state.address}
                                                                </li>
                                                                <li className="text-lowercase">
                                                                    <span className="la d-inline-block"><FiPhone /></span> {this.state.country}
                                                                </li>
                                                                <li className="text-lowercase">
                                                                    <span className="la d-inline-block"><FaGlobeAmericas /></span> {this.state.website}
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8">
                                                    <GeneralInfo listurl={this.props.match.params.listurl} />
                                                    <div className="delete-account-info">
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0 color-text">Delete Listing</h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="delete-info-content p-4">
                                                                <p className="mb-3">
                                                                    <span className="text-warning">Warning:</span> Once you delete your business listing, there is no going back. Please be certain.
                                                                </p>
                                                                <Button text="delete my account" url="#" className="delete-account border-0" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <AddFullDetails listid={this.props.listdetail && this.props.listdetail.listing_id} />
                                        </TabPanel>
                                        <TabPanel>
                                            <Amenities categoryid={this.props.listdetail && this.props.listdetail.categoryid} listid={this.props.listdetail && this.props.listdetail.listing_id} />
                                        </TabPanel>

                                        <TabPanel>
                                            <div className="row">

                                                {
                                                    this.state.listimage.length === 0 ? (

                                                        <div className="user-profile-action">
                                                            <div className="user-pro-img mb-2">
                                                                <b>there is no image added please add</b>
                                                            </div>
                                                        </div>
                                                    ) : this.state.listimage.map((img, id) => (
                                                        <div className="col-2" key={id}>
                                                            <div className="user-profile-action">
                                                                <div className="user-pro-img mb-2">
                                                                    <img src={`http://localhost:7999/api/v1/utilities/${img.imageurl}`} alt="list" />
                                                                    <div className="dropdown">
                                                                        <button
                                                                            className="theme-btn edit-btn dropdown-toggle border-0 after-none"
                                                                            type="button" id="editImageMenu"
                                                                            aria-haspopup="true"
                                                                            aria-expanded="false" onClick={() => this.removeImage(img.id,img.imageurl)}>
                                                                            <AiFillDelete />
                                                                        </button></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))

                                                }

                                            </div>

                                            <PhotoUploader listid={this.props.listdetail && this.props.listdetail.listing_id} addimage={this.addimageinlist} />



                                        </TabPanel>

                                        <TabPanel>
                                            <OpeningHours listid={this.props.listdetail && this.props.listdetail.listing_id} />
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
    const { listdetail, listallimage } = state.list;
    return {
        isLoggedIn, userdetails, listdetail, listallimage

    };
}
export default connect(mapStateToProps)(EditListing);
