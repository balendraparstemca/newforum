import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { AiOutlineUser } from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Select from "react-select";
import { BsPencil } from 'react-icons/bs';
import { FaRegEnvelope, FaSoundcloud } from 'react-icons/fa';
import SweetAlert from 'react-bootstrap-sweetalert'
import { connect } from "react-redux";
import { communityModel } from '../../model/communityModel';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { fetchCategory } from '../../services/action/common';
import { createcommunity } from '../../services/action/community';

class NewCommunity extends Component {

    constructor(props) {
        super(props);
        this.handleCommunity = this.handleCommunity.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.state = {
            name: "",
            title: "",
            about: "",
            catid: { label: '', value: null },
            category: [],
            country: '',
            place: " ",
            Socialmedia: "",
            accessmodifier: "",
            loading: false,
            title: '',


        };

    }
    componentDidMount() {
        this.props.dispatch(fetchCategory()).then(() => {
            this.setState({
                category: this.props.category
            })
        });
    }

    selectCountry(val) {
        this.setState({ country: val });
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value.toLocaleLowerCase().replace(/\s/g, ''),
        });

    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()),
            name: e.target.value.toLocaleLowerCase().replace(/\s/g, ''),
        });
    }
    onChangeAbout(e) {
        this.setState({
            about: e.target.value.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase()),
        });


    }


    onChangeCat = async (catid) => {
        this.setState({ catid });

    }


    onChangePlace(e) {
        this.setState({
            place: e.target.value,
        });
    }






    getAlert = (alerttype, title) => (
        <SweetAlert
            type={alerttype}
            title={title}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}>
            {this.props.message}
        </SweetAlert>
    );

    handleCommunity(e) {
        e.preventDefault();
        this.setState({
            loading: true
        });

        communityModel.community_name = this.state.name;
        communityModel.community_title = this.state.title;
        communityModel.community_about = this.state.about;
        communityModel.community_category = this.state.catid.label;
        communityModel.community_country = this.state.country;
        communityModel.community_place = this.state.place;
        communityModel.community_admin = this.props.userdetails ? this.props.userdetails.id : alert('user not find');

        this.props.dispatch(createcommunity(communityModel)).then(() => {

            if (this.props.isCreated) {
                this.setState({
                    alert: this.getAlert('success', ' successfull created')
                })
            }
            else {
                this.setState({
                    alert: this.getAlert('warning', 'creating community Failed')
                })
            }

        }).catch(() => {
            this.setState({
                loading: false, alert: this.getAlert('warning', ' creating community Failed')
            });

        });



    }

    onConfirm = () => {
        this.setState({
            loading: false, alert: null
        });
        if (this.props.isCreated) {
            this.props.history.push(`/forum/r/${this.state.name}`);
            window.location.reload();
        }

          }



        callThis = (e) => {
            this.setState({ category: e.target.value }, () => { console.log(this.state.category) });
        }
        render() {
            const { country, category } = this.state;
            const categories = category && category.length ? category.map(cat => {
                return { value: `${cat.id}`, label: `${cat.name}` };
            }) : [{
                value: 0,
                label: 'no category feched'
            }];
            return (
                <main className="List-map-view2">
                    {/* Header */}
                    <GeneralHeader />

                    <section className="blog-grid margin-top-100px  padding-bottom-100px">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="faq-forum">
                                        <div className="billing-form-item">
                                            <div className="billing-title-wrap">
                                                <h3 className="widget-title">Create Community</h3>

                                                <div className="title-shape margin-top-10px"></div>
                                            </div>

                                            <div className="billing-content">
                                                <div className="contact-form-action">
                                                    <form method="post" onSubmit={this.handleCommunity}>
                                                       

                                                        <div className="input-box">
                                                            <label className="label-text">Community Title (short)</label>
                                                            <div className="form-group">
                                                                <span className="form-icon"><AiOutlineUser /></span>
                                                                <input className="form-control" type="text" maxLength="20" name="title" value={this.state.title} onChange={this.onChangeTitle} required="required" placeholder="Community Title(max50)" />
                                                            </div>
                                                        </div>

                                                        <div className="input-box">
                                                            <label className="label-text">Community Name(uniq for url)</label>
                                                            <div className="form-group">
                                                                <span className="form-icon"><AiOutlineUser /></span>
                                                                <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.onChangeName} required="required" maxLength="20" placeholder="Community Name(max30) should be uniq" disabled/>
                                                            </div>
                                                        </div>


                                                        <div className="input-box">
                                                            <label className="label-text">About Community</label>
                                                            <div className="form-group">
                                                                <span className="form-icon"><BsPencil /></span>
                                                                <textarea className="message-control form-control"  name="about" value={this.state.about} onChange={this.onChangeAbout} required="required" placeholder="About Community(max150) "></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="input-box">
                                                            <label className="label-text">Categories</label>
                                                            <div className="form-group">
                                                                <span className="form-icon"><FaRegEnvelope /></span>
                                                                <Select
                                                                    value={this.state.catid}
                                                                    onChange={this.onChangeCat}
                                                                    placeholder="Short by"
                                                                    options={categories}
                                                                />  </div>
                                                        </div>
                                                        <div className="billing-form-item">
                                                            <div className="billing-title-wrap">
                                                                <h3 className="widget-title pb-0">
                                                                    Location

                                                            </h3>
                                                                <div className="title-shape margin-top-10px"></div>
                                                            </div>
                                                            <div className="billing-content">
                                                                <div className="contact-form-action">

                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <label className="label-text">Country</label>
                                                                            <div className="form-group">
                                                                                <CountryDropdown
                                                                                    value={country}
                                                                                    onChange={(val) => this.selectCountry(val)} />
                                                                            </div>
                                                                        </div>



                                                                        <div className="col-lg-6">
                                                                            <div className="input-box">
                                                                                <label className="label-text">City or places</label>
                                                                                <div className="form-group">
                                                                                    <input className="form-control" type="text" name="place" value={this.state.place} onChange={this.onChangePlace} required="required" placeholder="City or place name" />

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="btn-box">
                                                            <button type="submit" className="theme-btn border-0" disabled={this.state.loading}>
                                                                {this.state.loading && (
                                                                    <span className="spinner-border spinner-border-sm"></span>
                                                                )} <i><RiSendPlane2Line /></i> Create Community
                                                          </button>
                                                        </div>
                                                        {this.state.alert}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4">
                                    <div className="billing-form-item">
                                        <div className="billing-title-wrap">
                                            <h3 className="widget-title pb-0">
                                                {this.state.title}
                                            </h3>
                                            <div className="title-shape margin-top-10px"></div>
                                        </div>
                                        <div className="billing-content">
                                            <div className="our-office-content">
                                                <img src={this.state.img} alt="group-img" className="w-100 radius-round" />
                                                <div className="section-heading mt-4 mb-4">
                                                    <p className="sec__desc font-size-15 line-height-24">
                                                        {this.state.desc}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="billing-title-wrap pt-0">
                                            <h3 className="widget-title pb-0">Working Hours</h3>
                                            <div className="title-shape margin-top-10px"></div>
                                        </div>
                                        <div className="billing-content">
                                            <ul className="list-items">
                                                <li className="d-flex align-items-center justify-content-between color-text-2">
                                                    <strong className="font-weight-medium">{this.state.opendays}</strong><strong className="font-weight-medium color-text-3">{this.state.opendaytime}</strong>
                                                </li>
                                                <li className="d-flex align-items-center justify-content-between color-text-2">
                                                    <strong className="font-weight-medium">{this.state.closeday}</strong><strong className="color-text">Closed</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
    const { userdetails } = state.auth;
    const { message } = state.message;
    const { isCreated } = state.community;
    const { category } = state.common;

    return {
        message, category, userdetails, isCreated
    };
}
export default connect(mapStateToProps)(NewCommunity);