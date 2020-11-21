import React, { Component } from 'react'
import { RiBuilding4Line, RiHotelBedLine, RiPlaneLine } from 'react-icons/ri';
import { GiChickenOven } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { MdFitnessCenter } from 'react-icons/md';

export default class BannerOneCategories extends Component {
    state = {
        connector: 'or',
        title: 'browse featured categories:',
        items: [
            {
                path: "#",
                title: "Apartments",
                icon: <RiBuilding4Line />
            },
            {
                path: "#",
                title: "Restaurants",
                icon: <GiChickenOven />
            },
            {
                path: "#",
                title: "Travel",
                icon: <RiPlaneLine />
            },
            {
                path: "#",
                title: "Events",
                icon: <BsMusicNoteBeamed />
            },
            {
                path: "#",
                title: "Fitness",
                icon: <MdFitnessCenter />
            },
            {
                path: "#",
                title: "Hotels",
                icon: <RiHotelBedLine />
            }
        ]
    };
    render() {
        return (
            <>
                <div className="highlighted-categories">
                    <h4 className="highlighted-element">{this.state.connector}</h4>
                    <h5 className="highlighted__title">
                        {this.state.title}
                    </h5>
                    <div className="highlight-lists d-flex justify-content-center mt-4">
                        {this.state.items.map((item, index) => {
                            return (
                                <div className="category-item" key={index}>
                                    <a href={item.path} className="d-block">
                                        <span className="icon-element">{item.icon}</span>
                                        {item.title}
                                    </a>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </>
        )
    }
}
