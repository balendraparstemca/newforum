import React, {Component} from 'react';
import Copyright from "./Copyright";
import FooterLeftWidget from "./FooterLeftWidget";
import FooterQuickLinkWidget from "./FooterQuickLinkWidget";
import FooterCategoryWidget from "./FooterCategoryWidget";
import FooterContactWidget from "./FooterContactWidget";

class Footer extends Component {
    render() {
        return (
            <>
                <section className="footer-area section-bg padding-top-140px padding-bottom-60px">
                    <div className="box-icon"></div>
                    <div className="box-icon"></div>
                    <div className="box-icon"></div>
                    <div className="box-icon"></div>
                    <div className="box-icon"></div>
                    <div className="box-icon"></div>
                    <div className="container">
                        <div className="row">
                            <FooterLeftWidget />
                            <FooterQuickLinkWidget />
                            <FooterCategoryWidget />
                            <FooterContactWidget />
                        </div>

                        {/* Copyright */}
                        <Copyright />
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;