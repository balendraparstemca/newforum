import React, {Component} from 'react';
import {Link} from "react-router-dom";

class DreamPlaces extends Component {
    state = {
        places: [
            {
                img: require('../../assets/images/img24.jpg'),
                country: 'united states',
                badge: 'Explore',
                placeNum: 5,
                listingNum: 250,
                cardColumn: 6,
                cardLink: '#'
            },
            {
                img: require('../../assets/images/img25.jpg'),
                country: 'united kingdom',
                badge: 'Explore',
                placeNum: 7,
                listingNum: 220,
                cardColumn: 6,
                cardLink: '#'
            },
            {
                img: require('../../assets/images/img23.jpg'),
                country: 'Australia',
                badge: 'Explore',
                placeNum: 8,
                listingNum: 80,
                cardColumn: 4,
                cardLink: '#'
            },
            {
                img: require('../../assets/images/img24.jpg'),
                country: 'New zealand',
                badge: 'Explore',
                placeNum: 9,
                listingNum: 190,
                cardColumn: 4,
                cardLink: '#'
            },
            {
                img: require('../../assets/images/img25.jpg'),
                country: 'Russia',
                badge: 'Explore',
                placeNum: 11,
                listingNum: 110,
                cardColumn: 4,
                cardLink: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.places.map((item, index) => {
                        return (
                            <div className={'col-lg-'+item.cardColumn+' column-td-6'} key={index}>
                                <div className="category-item place-category mb-4 mt-0 ml-0 mr-0 p-0">
                                    <figure className="category-fig m-0">
                                        <img src={item.img} alt="category" className="cat-img" />
                                        <figcaption className="fig-caption">
                                            <Link to={item.cardLink} className="cat-fig-box">
                                                <div className="cat-content">
                                                    <h4 className="cat__title mb-2">
                                                        {item.country}
                                                    </h4>
                                                    <ul className="cat__place-list">
                                                        <li><span>{item.placeNum}</span> Cities</li>
                                                        <li><span>{item.listingNum}</span> Listing</li>
                                                    </ul>
                                                    <span className="badge">
                                                        {item.badge}
                                                    </span>
                                                </div>
                                            </Link>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default DreamPlaces;