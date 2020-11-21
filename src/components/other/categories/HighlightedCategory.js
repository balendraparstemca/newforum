import React, {Component} from 'react';
import Button from "../../common/Button";
import { BsEye, BsMusicNoteBeamed } from 'react-icons/bs'
import { RiBuilding4Line, RiPlaneLine, RiHotelBedLine } from 'react-icons/ri'
import { GiChickenOven } from 'react-icons/gi'
import { IoMdFitness } from 'react-icons/io'
import {Link} from "react-router-dom";

class HighlightedCategory extends Component {
    state = {
        categories: [
            {
                path: '#',
                text: 'apartments',
                icon: <RiBuilding4Line />
            },
            {
                path: '#',
                text: 'Restaurants',
                icon: <GiChickenOven />
            },
            {
                path: '#',
                text: 'travel',
                icon: <RiPlaneLine />
            },
            {
                path: '#',
                text: 'Events',
                icon: <BsMusicNoteBeamed />
            },
            {
                path: '#',
                text: 'Fitness',
                icon: <IoMdFitness />
            },
            {
                path: '#',
                text: 'Hotels',
                icon: <RiHotelBedLine />
            }
        ]
    }
    render() {
        return (
            <>
                <div className="highlighted-categories">
                    <div className="highlight-lists d-flex">
                        {this.state.categories.map((list, index) => {
                            return (
                                <div className="category-item radius-rounded" key={index}>
                                    <Link to={list.path} className="d-block">
                                        <span className="icon-element">{list.icon}</span>
                                        {list.text}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>

                    <div className="highlight-btn mt-4">
                        <Button text="view more categories" className="radius-rounded" url="/all-categories">
                            <span className="la la-eye">
                                <BsEye />
                            </span>
                        </Button>
                    </div>

                </div>
            </>
        );
    }
}

export default HighlightedCategory;