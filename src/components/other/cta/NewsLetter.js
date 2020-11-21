import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import { FaRegEnvelope } from 'react-icons/fa'

class NewsLetter extends Component {
    render() {
        return (
            <>
                <section className="cta-area cta-area2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cta-box d-flex align-items-center">
                                    <div className="col-lg-8">
                                        <SectionsHeading title="Subscribe to Newsletter!" titleClass="text-white" desc="Subscribe to get latest updates and information." />
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="contact-form-action">
                                            <form method="post">
                                                <div className="form-group mb-0">
                                                    <span className="form-icon">
                                                        <FaRegEnvelope />
                                                    </span>
                                                    <input className="form-control" type="email" placeholder="Enter your email" />
                                                        <button className="theme-btn" type="submit">Subscribe</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default NewsLetter;