import React, {Component} from 'react';
import { FaFacebookF,FaTwitter, FaLinkedinIn, FaBehance, FaDribbble } from 'react-icons/fa'

class SocialProfile extends Component {
    state = {
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
                icon: <FaLinkedinIn />,
                url: 'https://linkedin.com'
            },
            {
                icon: <FaDribbble />,
                url: 'https://dribbble.com'
            },
            {
                icon: <FaBehance />,
                url: 'https://behance.com'
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="social-profile padding-top-30px padding-bottom-30px">
                    {this.state.socials.map((item, i) => {
                        return (
                            <li key={i}><a href={item.url}><i className="fa">{item.icon}</i></a></li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default SocialProfile;