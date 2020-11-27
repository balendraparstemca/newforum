import React, {Component} from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { FiPhone, FiExternalLink } from 'react-icons/fi'
import Button from "../../common/Button";

class WidgetAuthor extends Component {
    state = {
        authorImg: require('../../../assets/images/testi-img2.jpg'),
        authorName: 'Mark Williamson',
        date: 'Posted 3 Days ago',
        address: '101 Parkview, New York',
        email: 'example@gmail.com',
        number: '+7(111)123456789',
        website: 'www.techydevs.com',
        websiteUrl: 'https://techydevs.com',
      
    }
    render() {
        console.log(this.props.listid)
        return (
            <>
                <div className="sidebar-widget">
                    <div className="author-bio margin-bottom-30px">
                        <div className="d-flex align-items-center">
                            <img src={this.state.authorImg} alt="author" />
                            <div className="author-inner-bio">
                                <h4 className="author__title font-weight-bold pb-0 mb-1">
                                    {this.state.authorName}
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
                                <i className="la"><FaRegEnvelope /></i> <a href={'mailto:'+this.state.email}>
                                {this.state.email}
                            </a>
                            </li>
                            <li className="mb-2">
                                <i className="la"><FiPhone /></i> {this.state.number}
                            </li>
                            <li className="mb-2">
                                <i className="la"><FiExternalLink /></i> <a href={this.state.websiteUrl}>{this.state.website}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="section-block-2 margin-top-35px margin-bottom-35px"></div>
                    <ul className="social-profile margin-bottom-35px text-center">

                       
                                <li>
                                    <a href=''>
                                        <i className="d-inline-block">
                                        <FaFacebookF />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className="d-inline-block">
                                        <FaTwitter />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className="d-inline-block">
                                        <FaInstagram />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className="d-inline-block">
                                        <FaDribbble />
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className="d-inline-block">
                                        <FaBehance />
                                        </i>
                                    </a>
                                </li>
                          
                    </ul>
                    <div className="btn-box text-center">
                        <Button text="view Profile" url="/user-profile" className="d-block">
                            <span className="d-inline-block"><AiOutlineUser /></span>
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetAuthor;