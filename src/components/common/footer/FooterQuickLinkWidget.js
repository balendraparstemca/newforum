import React, {Component} from 'react';

class FooterQuickLinkWidget extends Component {
    state = {
        title: 'Quick Links',
        links: [
            {
                path: '/about',
                text: 'about us'
            },
            {
                path: '/sign-up',
                text: 'sign up'
            },
            {
                path: '/login',
                text: 'log in'
            },
            {
                path: '/add-listing',
                text: 'add listing'
            },
            {
                path: '/contact',
                text: 'contact us'
            },
            {
                path: '/pricing',
                text: 'pricing'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <h4 className="footer__title">
                            {this.state.title}
                        </h4>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.path}>{link.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterQuickLinkWidget;