import React, { Component } from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import { RiSendPlane2Line } from 'react-icons/ri'
import Select from "react-select";
import { BsPencil } from 'react-icons/bs';
import { FaRegEnvelope, } from 'react-icons/fa';
import SweetAlert from 'react-bootstrap-sweetalert'
import { connect } from "react-redux";
import { communityModel } from '../../model/communityModel';
import { updatecommunity } from '../../services/action/community';
import { CountryDropdown, } from 'react-country-region-selector';
import { fetchCategory } from '../../services/action/common';


class EditCommunity extends Component {
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
            communityid: null

        };

    }
    componentDidMount() {
        this.props.dispatch(fetchCategory())
        this.props.communitydetails.length > 0 && (this.setState({ communityid: this.props.communitydetails[0].com_id, name: this.props.communitydetails[0].communityName, catid: { label: this.props.communitydetails[0].category }, title: this.props.communitydetails[0].communityTitle, about: this.props.communitydetails[0].about, country: this.props.communitydetails[0].country, place: this.props.communitydetails[0].place, description: this.props.communitydetails[0].cammunityDes, Socialmedia: this.props.communitydetails[0].socialMedia, accessmodifier: this.props.communitydetails[0].communityType }))
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
            about: e.target.value
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
        communityModel.community_admin = this.props.userdetails.id
        communityModel.com_id = this.state.communityid
        console.log(communityModel)

        this.props.dispatch(updatecommunity(communityModel)).then(() => {

            if (this.props.isUpdated) {
                this.setState({
                    alert: this.getAlert('success', ' successfull updated')
                })
            }
            else {
                this.setState({
                    alert: this.getAlert('warning', 'updating community Failed')
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


    }

    callThis = (e) => {
        this.setState({ category: e.target.value })

    }
    render() {
        const { country} = this.state;
        const { category } = this.props;
        const categories = category && category.length ? category.map(cat => {
            return { value: `${cat.id}`, label: `${cat.name}` };
        }) : [{
            value: 0,
            label: 'no category feched'
        }];

        return (


            <section className="blog-grid margin-top-10px  padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="faq-forum">
                                <div className="billing-form-item">
                                    <div className="billing-title-wrap">
                                        <h3 className="widget-title">Edit Community</h3>

                                        <div className="title-shape margin-top-10px"></div>
                                    </div>

                                    <div className="billing-content">
                                        <div className="contact-form-action">
                                            <form method="post" onSubmit={this.handleCommunity}>
                                                <div className="input-box">
                                                    <label className="label-text">Community Name(community name you can't change)</label>
                                                    <div className="form-group">
                                                        <span className="form-icon"><AiOutlineUser /></span>
                                                        <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.onChangeName} required="required" maxLength="20" placeholder="Community Name(max30)" readOnly />
                                                    </div>
                                                </div>

                                                <div className="input-box">
                                                    <label className="label-text">Community Title</label>
                                                    <div className="form-group">
                                                        <span className="form-icon"><AiOutlineUser /></span>
                                                        <input className="form-control" type="text" maxLength="50" name="title" value={this.state.title} onChange={this.onChangeTitle} required="required" placeholder="Community Title(max50)" />
                                                    </div>
                                                </div>


                                                <div className="input-box">
                                                    <label className="label-text">About Community</label>
                                                    <div className="form-group">
                                                        <span className="form-icon"><BsPencil /></span>
                                                        <textarea className="message-control form-control" name="about" value={this.state.about} onChange={this.onChangeAbout} required="required"></textarea>
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
                                                        )} <i><RiSendPlane2Line /></i> update Community
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
                            
                        </div>
                    </div>

                </div>
            </section>



        );
    }
}

function mapStateToProps(state) {
    const { userdetails } = state.auth;
    const { communitydetails,  isUpdated } = state.community
    const { rule, category } = state.common;


    return {
        rule, userdetails, communitydetails, category, isUpdated
    };
}

export default connect(mapStateToProps)(EditCommunity);