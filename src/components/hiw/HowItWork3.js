import React, {Component} from 'react';
import SectionsHeading from "../common/SectionsHeading";
import IconBoxOne from "../other/iconboxes/IconBoxOne";
import ModalVideo from "react-modal-video";
import {Link} from "react-router-dom";
import { FiPlay } from 'react-icons/fi'

class HowItWork3 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }

    hiwstate = {
        videoBg: require('../../assets/images/video-img3.jpg'),
        videoBtn: 'watch how it works',
        videoIcon: <FiPlay />
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='R2kiP9Qu7Pc' onClose={() => this.setState({ isOpen: false })} />
                <section className="hiw-area earn-money-area get-started-area padding-top-100px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Get Started With Dirto!" desc="Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero." />
                        </div>

                        <IconBoxOne />

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hiw-video-btn before-none mt-3 mb-5">
                                    <img src={this.hiwstate.videoBg} alt="video-img" />
                                    <div className="video-text">
                                        <p className="video__desc">
                                            {this.hiwstate.videoBtn}
                                        </p>
                                        <Link className="mfp-iframe video-popup-btn icon-element-2"
                                              onClick={this.openModal}
                                           to="#" title="Play Video">
                                            <span className="d-inline-block">
                                                {this.hiwstate.videoIcon}
                                            </span>
                                        </Link>
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

export default HowItWork3;