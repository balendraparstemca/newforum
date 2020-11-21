import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";

class ClientLogo extends Component {
    state = {
        logos: [
            {
                img: require('../../assets/images/client-logo.png')
            },
            {
                img: require('../../assets/images/client-logo.png')
            },
            {
                img: require('../../assets/images/client-logo.png')
            },
            {
                img: require('../../assets/images/client-logo.png')
            },
            {
                img: require('../../assets/images/client-logo.png')
            },
            {
                img: require('../../assets/images/client-logo.png')
            }
        ],
        responsive: {
            0: {
                items: 1,
            },
            450: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    }
    render() {
        return (
            <>
                <section className="clientlogo-area padding-top-80px padding-bottom-80px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <OwlCarousel
                                    className="client-logo text-center"
                                    loop
                                    margin={10}
                                    autoplay={true}
                                    nav={false}
                                    dots={false}
                                    smartSpeed={1000}
                                    responsive={this.state.responsive}
                                >
                                    {this.state.logos.map((slider, index) => {
                                        return (
                                            <div className="client-logo-item" key={index}>
                                                <img src={slider.img} alt="Client Logo" />
                                            </div>
                                        )
                                    })}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default ClientLogo;