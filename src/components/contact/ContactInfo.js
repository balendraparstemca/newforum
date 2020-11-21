import React, {Component} from 'react';
import { GiPositionMarker } from 'react-icons/gi'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiExternalLink } from 'react-icons/fi'

class ContactInfo extends Component {
    states = {
        title: 'Contact Information',
        address: '101 East Parkview Road, New York',
        email: 'example@gmail.com',
        number: '+7(111)123456789',
        website: 'www.techydevs.com',
        websiteUrl: 'https://techydevs.com',
        socials: [
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
                title: 'instagram',
                url: 'https://instagram.com'
            },
            {
                icon: <FaLinkedinIn />,
                title: 'linkedinIn',
                url: 'https://linkedin.com'
            },
            {
                icon: <FaYoutube />,
                title: 'youtube',
                url: 'https://youtube.com'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="contact-listing padding-top-40px padding-bottom-40px">
                    <h2 className="widget-title">
                        {this.states.title}
                    </h2>
                    <div className="title-shape"></div>
                    <div className="info-list margin-top-35px padding-bottom-35px">
                        <ul>
                            {this.states.address ? (
                                <li className="mb-2"><span><i className="la d-inline-block"><GiPositionMarker /></i> Address:</span>
                                    {this.states.address}
                                </li>
                            ) : ''}
                            {this.states.email ? (
                                <li className="mb-2"><span><i className="la d-inline-block"><FaRegEnvelope /></i> Email:</span>
                                    <a href={'mailto:'+this.states.email}>{this.states.email}</a>
                                </li>
                            ) : ''}
                            {this.states.number ? (
                                <li className="mb-2"><span><i className="la d-inline-block"><FiPhone /></i> Phone:</span>
                                    {this.states.number}
                                </li>
                            ) : '' }
                            {this.states.website ? (
                                <li><span><i className="la d-inline-block"><FiExternalLink /></i> Website:</span>
                                    <a href={this.states.websiteUrl}>{this.states.website}</a>
                                </li>
                            ) : ''}
                        </ul>
                    </div>

                    <div className="section-block"></div>
                    <div className="social-contact padding-top-40px">
                        {this.states.socials.map((item, i) => {
                            return (
                                <a key={i} href={item.url} className={'theme-btn '+item.title+'-link'}>
                                    <i className="d-inline-block">{item.icon}</i> {item.title}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ContactInfo;