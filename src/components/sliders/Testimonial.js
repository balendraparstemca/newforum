import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import { FaQuoteLeft } from 'react-icons/fa'

class Testimonial extends Component {
    testimonialState = {
        prevIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 010-1.506l5.48-4.796A1 1 0 0111 3.204v9.592a1 1 0 01-1.659.753z" clip-rule="evenodd"></path></svg>',
        nextIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z" clip-rule="evenodd"></path></svg>',
        sliders: [
            {
                id: '1',
                img: require('../../assets/images/team8.jpg'),
                title: 'Richard Doe',
                designation: 'united states',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: '2',
                img: require('../../assets/images/team9.jpg'),
                title: 'Denwen Evil',
                designation: 'united kingdom',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            },
            {
                id: '3',
                img: require('../../assets/images/team10.jpg'),
                title: 'Collis Pong',
                designation: 'melbourne, australia',
                content: 'Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit anim laborum sint occaecat cupidatat non proident. Occaecat cupidatat non proident des culpa officia deserunt mollit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at cumque fuga minima molestias nihil perspiciatis repudiandae sed vitae voluptatibus?'
            }
        ]
    }
    render() {
        return (
            <>
                <OwlCarousel
                    className="testimonial-carousel"
                    loop
                    margin={80}
                    autoplay={true}
                    nav={true}
                    navText={[this.testimonialState.prevIcon, this.testimonialState.nextIcon]}
                    dots={true}
                    items={1}
                    smartSpeed={1000}
                >
                    {this.testimonialState.sliders.map(slider => {
                        return (
                            <div className="testimonial-item" key={slider.id}>
                                <div className="testi-comment">
                                    <span className="testi_quote">
                                        <FaQuoteLeft />
                                    </span>
                                    <p className="testi__desc">
                                        {slider.content}
                                    </p>
                                </div>
                                <div className="testi-content">
                                    <img src={slider.img} className="testi__img" alt="testimonial" />
                                    <h4 className="tesi__title">{slider.title}</h4>
                                    <span className="testi__meta">{slider.designation}</span>
                                </div>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </>
        );
    }
}

export default Testimonial;