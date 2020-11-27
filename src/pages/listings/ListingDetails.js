import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import { GiPositionMarker, GiChickenOven } from 'react-icons/gi'
import { MdStar, MdStarBorder, MdClose } from 'react-icons/md'
import { BsPencil } from 'react-icons/bs';
import { AiOutlineFlag } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram, FaTumblr, FaSnapchatGhost, FaGooglePlusG, FaPinterest, FaVk, FaLinkedinIn, FaYoutube, FaRegEnvelope } from 'react-icons/fa'
import { RiBookmarkLine, RiSendPlane2Line } from 'react-icons/ri';
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
import { BsCheckCircle } from 'react-icons/bs'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import ModalVideo from 'react-modal-video'
import { Link } from "react-router-dom";
import GeneralMap from "../../components/contact/GeneralMap";
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import PlaceOne from "../../components/places/PlaceOne";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { getListAmenties, getListDetail, getListFullDetail, getlistimage, getlistreview, getListShedule, reportList, saveList } from '../../services/action/list';
import { connect } from "react-redux";
import $ from 'jquery';
import { FiExternalLink, FiPhone } from 'react-icons/fi';
import WidgetOpenHours from '../../components/sidebars/widgets/WidgetOpenHours';
import WidgetSimilarListing from '../../components/sidebars/widgets/WidgetSimilarListing';
import WidgetSubscribe from '../../components/sidebars/widgets/WidgetSubscribe';
class ListingDetails extends Component {
    constructor(props) {
        super(props)
        this.onChangeReport = this.onChangeReport.bind(this);
        this.state = {
            isloading: false,
            authorImg: require('../../assets/images/testi-img2.jpg'),
            file:'',
            authorName: 'Mark Williamson',
            isOpen: false,
            listImg: '',
            listName: '',
            listbio: '',
            address: '',
            country: '',
            listingid: null,
            verifiedtxt: "",
            listimage: [],
            latitude: '',
            lagnitude: '',
            ownername: '',
            email: '',
            phone: '',
            website: '',
            facebooklink: '',
            twitterlink: '',
            googleplus: '',
            linkedin: '',
            bannerimg: '',
            reporttext: " ",
            tags: '',
            categoryname: '',
            shareLinks: [
                {
                    icon: <FaFacebookF />,
                    title: 'facebook',
                    url: 'https://facebook.com'
                },
                {
                    icon: <FaTwitter />,
                    title: 'twitter',
                    url: 'https://twitter.com'
                },
                {
                    icon: <FaInstagram />,
                    title: 'twitter',
                    url: 'https://instagram.com'
                },
                {
                    icon: <FaTumblr />,
                    title: 'tumblr',
                    url: 'https://tumblr.com'
                },
                {
                    icon: <FaSnapchatGhost />,
                    title: 'snapchat',
                    url: 'https://snapchat.com'
                },
                {
                    icon: <FaGooglePlusG />,
                    title: 'google plus',
                    url: 'https://plus.google.com'
                },
                {
                    icon: <FaPinterest />,
                    title: 'pinterest',
                    url: 'https://pinterest.com'
                },
                {
                    icon: <FaVk />,
                    title: 'vkontakte',
                    url: 'https://vkontakte.com'
                },
                {
                    icon: <FaLinkedinIn />,
                    title: 'linkedin',
                    url: 'https://linkedin.com'
                },
                {
                    icon: <FaYoutube />,
                    title: 'youtube',
                    url: 'https://youtube.com'
                }
            ],

        }
        this.openModal = this.openModal.bind(this)
    }

    componentDidMount() {
        $(document).on('click', '.report-list-items .report-modal-btn', function (e) {
            $('body').addClass('modal-open').css({ paddingRight: '17px' });
            $(".report-modal-box").addClass('show')
            e.preventDefault();
        })
        $(document).on('click', '.report-modal-box .modal-bg, .report-modal-box .modal-top .close', function (e) {
            $('body').removeClass('modal-open').css({ paddingRight: '0' });
            $(".report-modal-box").removeClass('show')
            e.preventDefault();
        })
        this.fetchlistDeatil()

    }

    saveUserList = (listid) => {
        const obj = {
            listing_id: listid,
            saved_by: this.props.userdetails.id,
        }

        this.props.dispatch(saveList(obj));
    }

    onReport = (listid) => {
        const obj = {
            listing_id: listid,
            report_by: this.props.userdetails.id,
            reason: this.state.reporttext
        }
        this.props.dispatch(reportList(obj)).then(() => {
            this.setState({ reporttext: '' })
        });
    }

    onChangeReport(e) {

        this.setState({
            reporttext: e.target.value
        });

    }

    fetchlistDeatil = async () => {
        if (this.props.match.params.listurl) {
            let obj = { "canonicalurl": this.props.match.params.listurl }
            this.props.dispatch(getListDetail(obj)).then(() => {
                if (this.props.listdetail) {
                    this.setState({
                        listName: this.props.listdetail && this.props.listdetail.list_title,
                        listbio: this.props.listdetail && this.props.listdetail.description,
                        address: this.props.listdetail && this.props.listdetail.address,
                        listImg: this.props.listdetail && this.props.listdetail.bannerimg ? <img src={`http://localhost:7999/api/v1/utilities/${this.props.listdetail.bannerimg}`} alt='list-profile' /> : <img src={this.state.file} alt='default-list-profile' />,
                        file:this.props.listdetail && this.props.listdetail.bannerimg ? `http://localhost:7999/api/v1/utilities/${this.props.listdetail.bannerimg}` : require('../../assets/images/img24.jpg'),
                        listingid:this.props.listdetail && this.props.listdetail.listing_id,
                        verifiedtxt: this.props.listdetail && this.props.listdetail.approved ? 'Verified list' : 'Not Verified Yet',
                        country: this.props.listdetail && this.props.listdetail.country,
                        lagnitude: this.props.listdetail && this.props.listdetail.lagnitude,
                        latitude: this.props.listdetail && this.props.listdetail.latitude,
                        tags: this.props.listdetail && this.props.listdetail.keywords.replace(/,/g, ' '),
                        categoryname: this.props.listdetail && this.props.listdetail.categoryname
                    })
                    this.fetchlistfullDeatil();
                    this.props.dispatch(getListAmenties({ "listing_id": this.props.listdetail && this.props.listdetail.listing_id }));
                    this.fetchImage(this.props.listdetail && this.props.listdetail.listing_id);
                    this.fetchlistshedule(this.props.listdetail && this.props.listdetail.listing_id);
                    this.props.dispatch(getlistreview({ "listing_id": this.props.listdetail && this.props.listdetail.listing_id }))
                } else {
                    this.props.history.push("/error");
                    window.location.reload();
                }
            });



        } else {
            this.props.history.push("/error");
            window.location.reload();
        }



    }

    fetchlistfullDeatil = async () => {
        let obj = { "listing_id": this.props.listdetail && this.props.listdetail.listing_id }
        this.props.dispatch(getListFullDetail(obj)).then(() => {
            this.setState({
                ownername: this.props.listfulldetail && this.props.listfulldetail.owner_name,
                email: this.props.listfulldetail && this.props.listfulldetail.email,
                phone: this.props.listfulldetail && this.props.listfulldetail.phone,
                website: this.props.listfulldetail && this.props.listfulldetail.website,
                facebooklink: this.props.listfulldetail && this.props.listfulldetail.facebooklink,
                twitterlink: this.props.listfulldetail && this.props.listfulldetail.twitterlink,
                googleplus: this.props.listfulldetail && this.props.listfulldetail.googleplus,
                linkedin: this.props.listfulldetail && this.props.listfulldetail.linkedin,

            })

        });

    }

    fetchlistshedule = (listid) => {
        this.props.dispatch(getListShedule({ listing_id: listid }))
    }


    fetchImage = (list_id) => {
        this.props.dispatch(getlistimage({ listing_id: list_id })).then(() => {
            this.setState({
                listimage: this.props.listallimage && this.props.listallimage
            })
        })
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    contentstate = {
        featureTitle: 'Features',
        videoTitle: 'Video',
      buttonText: 'Watch Video',
        mapTitle: 'Location',
        peopleViewtitle: 'People Also Viewed'
    }
    render() {
        var val = this.props.allreviewlist.length > 0 ? this.props.allreviewlist.reduce(function (previousValue, currentValue) {
            return {
                stars: Number(previousValue.stars) + Number(currentValue.stars),
            }
        }) : 0

        return (
            <main className="listing-details">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <section className="breadcrumb-area listing-detail-breadcrumb" style={{backgroundImage: 'url('+ this.state.file +')'}}>
                    <div className="breadcrumb-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 position-relative">
                                    <div className="breadcrumb-content">
                                        <h2 className="breadcrumb__title">
                                            {this.state.listName}
                                        </h2>
                                        <p className="breadcrumb__desc">
                                            <span className="la d-inline-block"><GiPositionMarker /></span> {this.state.address} {this.state.country}
                                        </p>
                                        <ul className="listing-info mt-3 mb-3">
                                            <li>
                                                <div className="theme-btn average-symble" data-toggle="tooltip" data-placement="top" title="Pricey">
                                                    <span className="average-active"></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="average-ratings">
                                                    <span className="theme-btn button-success mr-1">
                                                        <GiChickenOven />{this.state.categoryname}
                                                    </span>
                                                    <span className="theme-btn button-success mr-1">
                                                        {val && val.stars / this.props.allreviewlist.length}<i className="d-inline-block"><MdStar /></i>
                                                    </span>
                                                    <span><strong>36</strong> Reviews</span>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="theme-btn listing-tag">
                                                    <i className="d-inline-block"><GiChickenOven /></i> {this.state.tags}
                                                </span>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="report-list-items">
                                        <ul className="listing-info">
                                            <li>
                                                <a href="#review" className="theme-btn">
                                                    <i className="d-inline-block"><MdStarBorder /></i> write a review
                                                </a>
                                            </li>
                                            <li>
                                                <Link to="#" className="theme-btn report-modal-btn">
                                                    <i className="d-inline-block"><AiOutlineFlag /></i> report
                                                </Link>
                                            </li>
                                            <li>
                                                <button type="button" className="theme-btn" onClick={() => this.saveUserList(this.state.listingid)}>
                                                    <i className="d-inline-block"><RiBookmarkLine /></i> save
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bread-svg">
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
                        </svg>
                    </div>
                </section>

                <div className="modal-form">
                    <div className="modal fade report-modal-box bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                        <div className="modal-bg"></div>
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-top">
                                    <button type="button" className="close close-arrow" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" className="mb-0"><MdClose /></span>
                                    </button>
                                    <h4 className="modal-title"><span className="mb-0"><AiOutlineFlag /></span> Report this Listing</h4>
                                </div>
                                <div className="contact-form-action">
                                    <form method="post">
                                        <div className="msg-box">
                                            <label className="label-text">Write Message</label>
                                            <div className="form-group">
                                                <i className="form-icon"><BsPencil /></i>
                                                <textarea className="message-control form-control" value={this.state.reporttext} onChange={this.onChangeReport} name="message" placeholder="What's wrong with this listing?" required></textarea>
                                            </div>
                                        </div>
                                        <div className="btn-box text-right">
                                            <button type="button" onClick={() => this.onReport(this.state.listingid)} className="theme-btn button-success border-0"><i><RiSendPlane2Line /></i> Send message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  video */}

                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='R2kiP9Qu7Pc' onClose={() => this.setState({ isOpen: false })} />
                <section className="single-listing-area padding-top-35px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="single-listing-wrap">
                                    <ListingDetailsGallery listurl={this.props.match.params.listurl && this.props.match.params.listurl} />

                                    <div className="listing-description padding-top-40px padding-bottom-35px">
                                        <h2 className="widget-title">
                                            {this.contentstate.descTitle}
                                        </h2>
                                        <div className="title-shape"></div>
                                        <div className="section-heading mt-4">
                                            <p className="sec__desc font-size-16">
                                                {this.state.listbio}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="feature-listing padding-bottom-20px">
                                        <h2 className="widget-title">
                                            {this.contentstate.featureTitle}
                                        </h2>
                                        <div className="title-shape"></div>
                                        <ul className="list-items mt-4">
                                            {this.props.listamenties.length === 0 ?
                                                (<li>
                                                    <i className="color-text font-size-18"><BsCheckCircle /></i> there is no amenties
                                                </li>)
                                                : this.props.listamenties.map(item => {
                                                    return (

                                                        <li key={item.id}>
                                                            <i className="color-text font-size-18"><BsCheckCircle /></i> {item.amenties_name}
                                                        </li>

                                                    )
                                                })}
                                        </ul>

                                    </div>

                                    <div className="video-listing padding-bottom-40px">
                                        <h2 className="widget-title">
                                            {this.contentstate.videoTitle}
                                        </h2>
                                        <div className="title-shape"></div>
                                        <div className="video__box margin-top-35px text-center">
                                            {this.state.listImg}
                                            <div className="video__box-content">
                                                <Link className="mfp-iframe video-popup-btn video-play-btn"
                                                    to="#"
                                                    onClick={this.openModal}
                                                    title="Play Video">
                                                    <span className="d-inline-block">
                                                        <AiOutlinePlayCircle />
                                                    </span>
                                                </Link>
                                                <p className="video__desc">
                                                    {this.contentstate.buttonText}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="listing-map gmaps">
                                        <h2 className="widget-title">
                                            {this.contentstate.mapTitle}
                                        </h2>
                                        <div className="title-shape margin-bottom-35px"></div>
                                        <GeneralMap lng={this.state.lagnitude} lat={this.state.latitude} />
                                    </div>
                                    {/* contact info*/}
                                    <div className="contact-listing padding-top-40px padding-bottom-40px">
                                        <h2 className="widget-title">
                                            Contact Information
                                        </h2>
                                        <div className="title-shape"></div>
                                        <div className="info-list margin-top-35px padding-bottom-35px">
                                            <ul>
                                                {this.state.address ? (
                                                    <li className="mb-2"><span><i className="la d-inline-block"><GiPositionMarker /></i> Address:</span>
                                                        {this.state.address}
                                                    </li>
                                                ) : ''}
                                                {this.state.email ? (
                                                    <li className="mb-2"><span><i className="la d-inline-block"><FaRegEnvelope /></i> Email:</span>
                                                        <a href={'mailto:' + this.state.email}>{this.state.email}</a>
                                                    </li>
                                                ) : ''}
                                                {this.state.number ? (
                                                    <li className="mb-2"><span><i className="la d-inline-block"><FiPhone /></i> Phone:</span>
                                                        {this.state.number}
                                                    </li>
                                                ) : ''}
                                                {this.state.website ? (
                                                    <li><span><i className="la d-inline-block"><FiExternalLink /></i> Website:</span>
                                                        <a href={this.state.websiteUrl}>{this.state.website}</a>
                                                    </li>
                                                ) : ''}
                                            </ul>
                                        </div>

                                        <div className="section-block"></div>
                                        <div className="social-contact padding-top-40px">

                                        </div>
                                    </div>
                                    {/* contact info*/}



                                    <div className="comments-wrap">

                                        <ListingDetailsComments listid={this.state.listingid} />
                                    </div>



                                </div>
                            </div>
                            <div className="col-lg-4">

                                <div className="author-verified-badge margin-bottom-20px">
                                    <div className="author__verified-badge" data-toggle="tooltip" data-placement="top" title="Listing has been verified and belongs the business owner or manager">
                                        <span className="d-inline-block">{this.state.verifiedtxt}</span> {this.state.btnText}
                                    </div>
                                </div>
                                <div className="sidebar section-bg">
                                    <div className="sidebar-widget">
                                        <div className="author-bio margin-bottom-30px">
                                            <div className="d-flex align-items-center">
                                                <img src={this.state.authorImg} alt="author" />
                                                <div className="author-inner-bio">
                                                    <h4 className="author__title font-weight-bold pb-0 mb-1">
                                                        {this.state.ownername}
                                                    </h4>
                                                    <p className="author__meta">
                                                        {this.state.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="info-list">
                                            <ul>
                                                <li className="mb-2">
                                                    <i className="la"><GiPositionMarker /></i> {this.state.address}
                                                </li>
                                                <li className="mb-2">
                                                    <i className="la"><FaRegEnvelope /></i> <a href={'mailto:' + this.state.email}>
                                                        {this.state.email}
                                                    </a>
                                                </li>
                                                <li className="mb-2">
                                                    <i className="la"><FiPhone /></i> {this.state.phone}
                                                </li>
                                                <li className="mb-2">
                                                    <i className="la"><FiExternalLink /></i> <a href={this.state.websiteUrl}>{this.state.website}</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="section-block-2 margin-top-35px margin-bottom-35px"></div>
                                        <ul className="social-profile margin-bottom-35px text-center">


                                            <li>
                                                <a href={this.state.facebooklink}>
                                                    <i className="d-inline-block">
                                                        <FaFacebookF />
                                                    </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={this.state.twitterlink}>
                                                    <i className="d-inline-block">
                                                        <FaTwitter />
                                                    </i>
                                                </a>
                                            </li>

                                            <li>
                                                <a href={this.state.linkedin}>
                                                    <i className="d-inline-block">
                                                        <FaLinkedinIn />
                                                    </i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={this.state.googleplus}>
                                                    <i className="d-inline-block">
                                                        <FaGooglePlusG />
                                                    </i>
                                                </a>
                                            </li>

                                        </ul>

                                        <WidgetOpenHours />
                                        <WidgetSimilarListing />
                                        <WidgetSubscribe />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="card-area padding-top-80px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2 className="widget-title">
                                        {this.contentstate.peopleViewtitle}
                                    </h2>
                                    <div className="title-shape"></div>
                                </div>
                            </div>
                        </div>
                        <PlaceOne />
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />
            </main>
        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { listdetail, listamenties, listallimage, allreviewlist, listfulldetail } = state.list;
    return {
        isLoggedIn, userdetails, listdetail, listallimage, allreviewlist, listamenties, listfulldetail

    };
}
export default connect(mapStateToProps)(ListingDetails);