import React, {Component} from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/all";

class BlogShare extends Component {
    state = {
        title: 'Share: ',
        lists: [
            {
                path: 'https://facebook.com',
                icon: <FaFacebookF />
            },
            {
                path: 'https://twitter.com',
                icon: <FaTwitter />
            },
            {
                path: 'https://instagram.com',
                icon: <FaInstagram />
            },
            {
                path: 'https://linkedin.com',
                icon: <FaLinkedinIn />
            },
        ]
    }
    render() {
        return (
            <>
                <ul className="social-profile">
                    <li className="font-weight-semi-bold color-text-2">{this.state.title}</li>
                    {this.state.lists.map((item, i) => {
                        return (
                            <li key={i}>
                                <a href={item.path}><i>{item.icon}</i></a>
                            </li>
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default BlogShare;