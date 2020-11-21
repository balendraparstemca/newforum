import React, {Component} from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import AskQuestionField from "../components/contact/AskQuestionField";
import ContactSidebar from "../components/sidebars/ContactSidebar";
import GeneralMap from "../components/contact/GeneralMap";
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class Contact extends Component {
    state = {
        breadcrumbimg: require('../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="contact-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Contact Us" MenuPgTitle="pages" img={this.state.breadcrumbimg} />

                <section className="contact-area padding-top-40px padding-bottom-80px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <AskQuestionField title="Get in touch" />
                            </div>

                            <div className="col-lg-5">
                                <ContactSidebar />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="gmaps">
                    <GeneralMap />
                    <div className="map-address-box">
                        <ul className="map-address">
                            <li>
                                <span className="la"><GoLocation /></span>
                                <h5 className="map__title">address</h5>
                                <p className="map__desc">
                                    Melbourne, Australia, 105 South <br /> Park Avenue
                                </p>
                            </li>
                            <li>
                                <span className="la"><FiPhone /></span>
                                <h5 className="map__title">phone</h5>
                                <p className="map__desc">Local: 2800 256 508</p>
                                <p className="map__desc">Local: 666 777 888</p>
                            </li>
                            <li>
                                <span className="la"><FaRegEnvelope /></span>
                                <h5 className="map__title">email</h5>
                                <p className="map__desc">needhelp@dirto.com</p>
                                <p className="map__desc">inquiry@dirto.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Contact;