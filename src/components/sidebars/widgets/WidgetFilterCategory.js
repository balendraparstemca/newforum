import React, {Component} from 'react';
import $ from 'jquery'
import {Link} from "react-router-dom";

class WidgetFilterCategory extends Component {
    componentDidMount() {
        $(document).ready(function () {
            let catbox = document.querySelector('.sidebar-widget .filter-by-category');
            let height = catbox.offsetHeight
            $(".sidebar-widget .filter-by-category").css({height: '244px', overflow: 'hidden'})

            $(document).on('click', '#showfilterbycategory', function () {
                $(".sidebar-widget .filter-by-category").css({height: height, overflow: 'hidden'})
                $(this).addClass('lessfilterbyfeature');
            })
            $(document).on('click', '.lessfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-category").css({height: '244px', overflow: 'hidden'})
                $(this).removeClass('lessfilterbyfeature');
            })
        })
    }
    state = {
        title: 'Filter by Category',
        categories: [
            {
                id: 1,
                cat: 'Travel',
                catNum: 11
            },
            {
                id: 2,
                cat: 'Arts',
                catNum: 22
            },
            {
                id: 3,
                cat: 'Technology',
                catNum: 9
            },
            {
                id: 4,
                cat: 'Fashion',
                catNum: 11
            },
            {
                id: 5,
                cat: 'Technology',
                catNum: 12
            },
            {
                id: 6,
                cat: 'Lifestyle',
                catNum: 48
            },
            {
                id: 7,
                cat: 'Design',
                catNum: 23
            },
            {
                id: 8,
                cat: 'Computer',
                catNum: 28
            },
            {
                id: 9,
                cat: 'Jobs',
                catNum: 24
            },
            {
                id: 10,
                cat: 'Real Estates',
                catNum: 40
            },
            {
                id: 11,
                cat: 'Clothing',
                catNum: 23
            },
            {
                id: 12,
                cat: 'Beauty & Spa',
                catNum: 18
            },
            {
                id: 13,
                cat: 'Event',
                catNum: 65
            },
            {
                id: 14,
                cat: 'Health & Fitness',
                catNum: 34
            },
            {
                id: 15,
                cat: 'Restaurants',
                catNum: 20
            }
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="check-box-list show-more-item filter-by-category mt-4 mb-4">

                        {this.state.categories.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb'+item.id} />
                                    <label htmlFor={'chb'+item.id}>
                                        {item.cat} <span>{item.catNum}</span>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="#" id="showfilterbycategory" className="showmore-btn font-weight-semi-bold text-capitalize d-block ml-auto mr-auto text-center radius-rounded p-0">
                        <span className="showmore-txt ">Show More</span>
                        <span className="lessmore-txt d-none">Show Less</span>
                    </Link>
                </div>
            </>
        );
    }
}

export default WidgetFilterCategory;