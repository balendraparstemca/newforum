import React, {Component} from 'react';
import Logo from "../Logo";
import SocialProfile from "../../other/account/SocialProfile";

class FooterLeftWidget extends Component {
    state = {
        logo: require('../../../assets/images/logo2.png'),
        desc: 'Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros',
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <div className="logo">
                            <Logo url={this.state.logo} className="foot-logo" />
                            <p className="footer__desc">
                                {this.state.desc}
                            </p>
                            <SocialProfile />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterLeftWidget;