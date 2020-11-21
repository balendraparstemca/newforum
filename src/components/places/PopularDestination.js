import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PopularDestination extends Component {
    state = {
        destinations: [
            {
                img: require('../../assets/images/img23.jpg'),
                cityFlag: require('../../assets/images/flag21.png'),
                cityName: 'Canada',
                listingTxt: '12 listings',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img24.jpg'),
                cityFlag: require('../../assets/images/flag1.jpg'),
                cityName: 'United States',
                listingTxt: '22 listings',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img25.jpg'),
                cityFlag: require('../../assets/images/flag2.jpg'),
                cityName: 'United Kingdom',
                listingTxt: '32 listings',
                boxCol: '4',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img26.jpg'),
                cityFlag: require('../../assets/images/flag22.png'),
                cityName: 'Mexico',
                listingTxt: '44 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img27.jpg'),
                cityFlag: require('../../assets/images/flag18.jpg'),
                cityName: 'Costa Rica',
                listingTxt: '48 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img28.jpg'),
                cityFlag: require('../../assets/images/flag3.jpg'),
                cityName: 'Australia',
                listingTxt: '50 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img29.jpg'),
                cityFlag: require('../../assets/images/flag7.jpg'),
                cityName: 'New Zealand ',
                listingTxt: '14 listings',
                boxCol: '3',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img30.jpg'),
                cityFlag: require('../../assets/images/flag5.png'),
                cityName: 'France',
                listingTxt: '20 listings',
                boxCol: '6',
                cardUrl: '#'
            },
            {
                img: require('../../assets/images/img31.jpg'),
                cityFlag: require('../../assets/images/flag19.svg'),
                cityName: 'Italy',
                listingTxt: '14 listings',
                boxCol: '6',
                cardUrl: '#'
            }
        ]
    }
    render() {
        return (
            <>
                {this.state.destinations.map((item, index) =>{
                    return (
                        <div className={'column-td-6 col-lg-'+item.boxCol} key={index}>
                            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                <figure className="category-fig mb-0">
                                    <img src={item.img} alt="category" className="cat-img" />
                                    <figcaption className="fig-caption">
                                        <Link to={item.cardUrl}
                                           className="cat-fig-box d-flex justify-content-between align-items-center">
                                            <div className="cat-content">
                                                <h4 className="cat__title mb-2">
                                                    {item.cityName}
                                                </h4>
                                                <span className="badge">
                                                    {item.listingTxt}
                                                </span>
                                            </div>
                                            <div className="loc-img">
                                                <img src={item.cityFlag} alt={item.cityName} />
                                            </div>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default PopularDestination;