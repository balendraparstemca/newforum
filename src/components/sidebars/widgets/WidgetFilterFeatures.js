import React, {Component} from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery'

class WidgetFilterFeatures extends Component {
    componentDidMount() {
        $(document).ready(function () {
            let box = document.querySelector('.sidebar-widget .filter-by-feature');
            let height = box.offsetHeight
            $(".sidebar-widget .filter-by-feature").css({height: '244px', overflow: 'hidden'})

            $(document).on('click', '#showfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-feature").css({height: height, overflow: 'hidden'})
                $(this).addClass('lessfilterbyfeature');
            })
            $(document).on('click', '.lessfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-feature").css({height: '244px', overflow: 'hidden'})
                $(this).removeClass('lessfilterbyfeature');
            })
        })
    }

    state = {
        title: 'Filter by Features',
        features: [
            {
                id: 1,
                text: 'Elevator in building'
            },
            {
                id: 2,
                text: 'Friendly Workspace'
            },
            {
                id: 3,
                text: 'Instant Book'
            },
            {
                id: 4,
                text: 'Wireless Internet'
            },
            {
                id: 5,
                text: 'Free Parking On Premises'
            },
            {
                id: 6,
                text: 'Free Parking On Street'
            },
            {
                id: 7,
                text: 'Smoking Allowed'
            },
            {
                id: 8,
                text: 'Events'
            },
            {
                id: 9,
                text: 'Wheelchair Accessible'
            },
            {
                id: 10,
                text: 'Alarm System'
            },
            {
                id: 11,
                text: 'Electricity'
            },
            {
                id: 12,
                text: 'Attached Garage'
            },
            {
                id: 13,
                text: 'Security Cameras'
            },
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
                    <div className="check-box-list show-more-item filter-by-feature mt-4 mb-4">
                        {this.state.features.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb2-'+item.id} />
                                    <label htmlFor={'chb2-'+item.id}>
                                        {item.text}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                    <Link to="#" id="showfilterbyfeature" className="showmore-btn font-weight-semi-bold text-capitalize d-block ml-auto mr-auto text-center  radius-rounded p-0">
                        <span className="showmore-txt ">Show More</span>
                        <span className="lessmore-txt d-none">Show Less</span>
                    </Link>
                </div>
            </>
        );
    }
}

export default WidgetFilterFeatures;