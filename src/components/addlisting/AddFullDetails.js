import React, { Component } from 'react';
import { AiOutlineUser, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { BsLink45Deg } from 'react-icons/bs'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { getListFullDetail, UpdateListingdetail } from '../../services/action/list';
import { connect } from "react-redux";
class AddFullDetails extends Component {
    constructor(props)
    {
        super(props)
        this.handleListingdetail = this.handleListingdetail.bind(this);
        //this.onReset = this.onReset.bind(this);
        this.onChangeOwnername = this.onChangeOwnername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeFacebooklink = this.onChangeFacebooklink.bind(this);
        this.onChangeTwitterlink= this.onChangeTwitterlink.bind(this);
        this.onChangeGoogleplus= this.onChangeGoogleplus.bind(this);
        this.onChangeLinkedin= this.onChangeLinkedin.bind(this);

        this.state={
            loading:false,
            ownername:'',
            email:'',
            phone:'',
            website:'',
            facebooklink:'',
            twitterlink:'',
            googleplus:'',
            linkedin:'',
            listid:null

        }
    }
    componentWillMount(){
       this.fetchlistfullDeatil()
    }

    fetchlistfullDeatil = async () => {
        let obj = { "listing_id": this.props.listid && this.props.listid}
        this.props.dispatch(getListFullDetail(obj)).then(() => {
            this.setState({
                ownername: this.props.listfulldetail && this.props.listfulldetail.owner_name,
                email: this.props.listfulldetail &&this.props.listfulldetail.email,
                phone:this.props.listfulldetail && this.props.listfulldetail.phone,
                website: this.props.listfulldetail&& this.props.listfulldetail.website,
                facebooklink: this.props.listfulldetail &&this.props.listfulldetail.facebooklink,
                twitterlink: this.props.listfulldetail && this.props.listfulldetail.twitterlink,
                googleplus: this.props.listfulldetail && this.props.listfulldetail.googleplus,
                linkedin: this.props.listfulldetail && this.props.listfulldetail.linkedin,

            })

        });

    }
   
    onChangeOwnername(e) {
        this.setState({
            ownername: e.target.value,
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value,
        });
    }
    onChangeFacebooklink(e) {
        this.setState({
            facebooklink: e.target.value,
        });
    }
    onChangeTwitterlink(e) {
        this.setState({
            twitterlink: e.target.value,
        });
    }
    onChangeGoogleplus(e) {
        this.setState({
            googleplus: e.target.value,
        });
    }
    onChangeWebsite(e) {
        this.setState({
            website: e.target.value,
        });
    }

    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value,
        });
    }

    handleListingdetail(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });

        const obj = {
            listing_id:this.props.listid && this.props.listid,
            owner_name: this.state.ownername,
            email: this.state.email,
            phone: this.state.phone,
            website: this.state.website,
            facebooklink: this.state.facebooklink,
            twitterlink: this.state.twitterlink,
            googleplus: this.state.googleplus,
            linkedin: this.state.googleplus
        }
        console.log(obj)

        this.props.dispatch(UpdateListingdetail(obj)).then(() => {
            this.setState({ loading: false })
            this.fetchlistfullDeatil()
        })

    }

    render() {
    
        return (
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <h3 className="widget-title pb-0">Full Details</h3>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                        <div className="contact-form-action">
                            <form method="post" onSubmit={this.handleListingdetail}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Owner Name</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineUser />
                                                </span>
                                                <input className="form-control" type="text" value={this.state.ownername} onChange={this.onChangeOwnername} name="ownername" required="required" placeholder="ownerName" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Email</label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FaRegEnvelope />
                                                </span>
                                                <input className="form-control" type="email" name="email" value={this.state.email} onChange={this.onChangeEmail}  required="required"placeholder="Email address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Phone <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <FiPhone />
                                                </span>
                                                <input className="form-control" type="text" name="phone"  value={this.state.phone} onChange={this.onChangePhone} required="required"placeholder="Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Website <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <BsLink45Deg />
                                                </span>
                                                <input className="form-control" type="url" name="website" value={this.state.website} onChange={this.onChangeWebsite}   placeholder="website url" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Facebook Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineFacebook />
                                                </span>
                                                <input className="form-control" type="url" value={this.state.facebooklink} onChange={this.onChangeFacebooklink} name="facebook"  placeholder="facebook url" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Twitter Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineTwitter />
                                                </span>
                                                <input className="form-control" type="url" value={this.state.twitterlink} onChange={this.onChangeTwitterlink} name="twitter"  placeholder="twitter" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Google Plus <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <TiSocialGooglePlus />
                                                </span>
                                                <input className="form-control" type="url" value={this.state.googleplus} onChange={this.onChangeGoogleplus} name="googleplus" placeholder="google plus" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-box">
                                            <label className="label-text">Linkedin Link <span className="text-muted">(optional)</span></label>
                                            <div className="form-group">
                                                <span className="la form-icon">
                                                    <AiOutlineLinkedin />
                                                </span>
                                                <input className="form-control" type="url" value={this.state.linkedin} onChange={this.onChangeLinkedin} name="linkedin"  placeholder="linkedin url" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-box mt-4">
                                        <button type="submit" className="theme-btn border-0" disabled={this.state.loading}>
                                            {this.state.loading && (
                                                <span className="spinner-border spinner-border-sm"></span>
                                            )} update listing</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {
    const { isLoggedIn, userdetails } = state.auth;
    const { listfulldetail} = state.list;
    return {
        isLoggedIn,userdetails,listfulldetail

    };
}
export default connect(mapStateToProps)(AddFullDetails);