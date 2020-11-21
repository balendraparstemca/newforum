import React, {Component} from 'react';
import SectionsHeading from "../../common/SectionsHeading";
import ModalVideo from "react-modal-video";
import {FiPlay} from 'react-icons/fi'
import {Link} from "react-router-dom";
import InfoBox3 from "../../other/infoboxes/InfoBox3";

class HowItWorkTwo extends Component {
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
    videostate = {
        videoImg: require('../../../assets/images/video-img2.jpg'),
        videoBtnTxt: 'watch how it works'
    }
    render() {
        return (
            <>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='R2kiP9Qu7Pc' onClose={() => this.setState({ isOpen: false })} />
                <section className="hiw-area hiw-2 earn-money-area padding-top-100px padding-bottom-80px text-center">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="How Can I Earn Money with Dirto?" desc="Dirto provides the various ways that help you can earn money from your site. Morbi convallis bibendum urna ut viverra." />
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hiw-video-btn before-none mt-5 mb-5">
                                    <img src={this.videostate.videoImg} alt="video-img" />
                                    <div className="video-text">
                                        <Link className="mfp-iframe video-popup-btn icon-element-2"
                                           onClick={this.openModal}
                                           to="#" title="Play Video">
                                            <FiPlay />
                                        </Link>
                                        <p className="video__desc">
                                            {this.videostate.videoBtnTxt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <InfoBox3 />
                    </div>
                </section>
            </>
        );
    }
}

export default HowItWorkTwo;