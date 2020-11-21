import React, {Component} from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'

class WidgetFollow extends Component {
    state = {
        title: 'Follow & Connect',
        socials: [
            {
                icon: <FaFacebookF />,
                url: 'https://facebook.com'
            },
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com'
            },
            {
                icon: <FaInstagram />,
                url: 'https://instagram.com'
            },
            {
                icon: <FaDribbble />,
                url: 'https://dribbble.com'
            },
            {
                icon: <FaBehance />,
                url: 'https://behance.be'
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget social-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <ul className="social-profile padding-top-30px">
                        {this.state.socials.map((item, i) => {
                            return (
                                <li key={i}>
                                    <a href={item.url}>
                                        <i className="d-inline-block">
                                            {item.icon}
                                        </i>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </>
        );
    }
}

export default WidgetFollow;