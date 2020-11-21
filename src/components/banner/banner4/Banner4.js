import React from 'react';
import BannerOneSearchInput from "../banner1/BannerOneSearchInput";
import SectionsHeading from "../../common/SectionsHeading";
import { FiChevronDown } from 'react-icons/fi'

function Banner4({videoUrl}) {
    return (
        <>
            <section className="hero-wrapper hero-wrapper4">
                <div className="hero-overlay"></div>
                <div className="video-bg">
                    <video autoPlay loop>
                        <source src={videoUrl} />
                    </video>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hero-heading">
                                <SectionsHeading title="Find the Best Places to Be" desc="Discover the best places to stay, eat, shop & visit the city nearest to you." />
                            </div>
                            <BannerOneSearchInput />
                        </div>
                    </div>
                </div>
                <div className="hero-svg-content text-center">
                    <i>
                        <FiChevronDown />
                    </i>
                </div>
            </section>
        </>
    );
}

export default Banner4;