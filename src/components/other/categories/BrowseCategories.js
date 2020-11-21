import React, {Component} from 'react';
import { GiChickenOven } from 'react-icons/gi'
import { IoMdCut } from 'react-icons/io'
import { BsGear, BsHouseDoor } from 'react-icons/bs'
import { RiHotelBedLine } from 'react-icons/ri'
import { TiBrush, TiPlane } from 'react-icons/ti'
import { FiShoppingCart, FiMusic } from 'react-icons/fi'
import { FaStethoscope, FaRegHospital, FaSearchDollar } from 'react-icons/fa'
import {Link} from "react-router-dom";

class BrowseCategories extends Component {
    state  = {
        categories: [
            {
                id: 1,
                icon: <GiChickenOven />,
                title: 'restaurants',
                listingsNum: 42,
                cardLink: '#'
            },
            {
                id: 2,
                icon: <RiHotelBedLine />,
                title: 'hotels',
                listingsNum: 22,
                cardLink: '#'
            },
            {
                id: 3,
                icon: <FiShoppingCart />,
                title: 'shopping',
                listingsNum: 7,
                cardLink: '#'
            },
            {
                id: 4,
                icon: <IoMdCut />,
                title: 'beauty & Spa',
                listingsNum: 31,
                cardLink: '#'
            },
            {
                id: 5,
                icon: <FaRegHospital />,
                title: 'Hospital',
                listingsNum: 33,
                cardLink: '#'
            },
            {
                id: 6,
                icon: <BsGear />,
                title: 'Services',
                listingsNum: 33,
                cardLink: '#'
            },
            {
                id: 7,
                icon: <TiBrush />,
                title: 'Arts & Design',
                listingsNum: 31,
                cardLink: '#'
            },
            {
                id: 8,
                icon: <BsHouseDoor />,
                title: 'Real State',
                listingsNum: 36,
                cardLink: '#'
            },
            {
                id: 9,
                icon: <FaStethoscope />,
                title: 'Health',
                listingsNum: 22,
                cardLink: '#'
            },
            {
                id: 10,
                icon: <FaSearchDollar />,
                title: 'Jobs',
                listingsNum: 40,
                cardLink: '#'
            },
            {
                id: 11,
                icon: <TiPlane />,
                title: 'Travels',
                listingsNum: 13,
                cardLink: '#'
            },
            {
                id: 12,
                icon: <FiMusic />,
                title: 'Events',
                listingsNum: 10,
                cardLink: '#'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.categories.map(item => {
                        return (
                            <div className="col-lg-2 column-td-6" key={item.id}>
                                <div className={'browse-category browse-category-color'+item.id}>
                                    <Link to={item.cardLink} className="category-inner d-block">
                                        <span>
                                            {item.icon}
                                        </span>
                                        <p className="cat__name">
                                            {item.title}
                                        </p>
                                        <p className="cat__meta">
                                            {item.listingsNum} Listings
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default BrowseCategories;