import React, {Component} from 'react';
import { GiChickenOven, GiWineGlass } from 'react-icons/gi'
import { TiPlane, TiBrush } from 'react-icons/ti'
import { FiMusic, FiShoppingCart } from 'react-icons/fi'
import { RiHotelBedLine } from 'react-icons/ri'
import { IoIosFitness } from 'react-icons/io'
import { FaRegMoneyBillAlt, FaRegHospital } from 'react-icons/fa'
import { BsBriefcase } from 'react-icons/bs'
import {Link} from "react-router-dom";

class BrowseCategoriesTwo extends Component {
    state = {
        categories: [
            {
                img: require('../../../assets/images/img1.jpg'),
                icon: <GiChickenOven />,
                title: 'Restaurants',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img2.jpg'),
                icon: <TiPlane />,
                title: 'Travels',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img3.jpg'),
                icon: <RiHotelBedLine />,
                title: 'Hotels',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img4.jpg'),
                icon: <FiMusic />,
                title: 'Events',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img5.jpg'),
                icon: <FiShoppingCart />,
                title: 'Shops',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img6.jpg'),
                icon: <IoIosFitness />,
                title: 'Fitness',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img7.jpg'),
                icon: <GiWineGlass />,
                title: 'Food & Drink',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img8.jpg'),
                icon: <TiBrush />,
                title: 'Art & Design',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img9.jpg'),
                icon: <TiBrush />,
                title: 'Salons',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img10.jpg'),
                icon: <FaRegMoneyBillAlt />,
                title: 'Jobs',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img11.jpg'),
                icon: <BsBriefcase />,
                title: 'Businesses',
                cardLink: '#'
            },
            {
                img: require('../../../assets/images/img12.jpg'),
                icon: <FaRegHospital />,
                title: 'Hospital',
                cardLink: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.categories.map((item,index) => {
                        return (
                            <div className="col-lg-2 column-td-6" key={index}>
                                <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
                                    <figure className="category-fig m-0">
                                        <img src={item.img} alt="category" className="cat-img" />
                                        <figcaption className="fig-caption">
                                            <Link to={item.cardLink} className="cat-fig-box">
                                                <div className="icon-element mb-3">
                                                    <span className="d-inline-block">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <div className="cat-content">
                                                    <h4 className="cat__title">
                                                        {item.title}
                                                    </h4>
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

export default BrowseCategoriesTwo;