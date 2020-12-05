import React, {Component} from 'react';
import { MdStar } from 'react-icons/md'

class WidgetFilterRatings extends Component {
    state = {
        title: 'Filter by Ratings',
        ratings: [
            {
                active: true,
                icons: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                ]
            },
            {
                active: false,
                icons: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                ]
            },
            {
                active: false,
                icons: [
                    <MdStar />,
                    <MdStar />,
                    <MdStar />,
                ]
            },
            {
                active: false,
                icons: [
                    <MdStar />,
                    <MdStar />,
                ]
            },
            {
                active: false,
                icons: [
                    <MdStar />,
                ]
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
                    <ul className="rating-list mt-4">

                            
                                <li>
                                  <span className="la-star"><MdStar /> <MdStar /> <MdStar /> <MdStar /> <MdStar /></span>
                                  <label className="review-label">
                                        <input type="radio" name="review-radio" />
                                        <span className="review-mark"></span>
                                    </label>
                                </li>
                                <li>
                                  <span className="la-star"><MdStar /> <MdStar />  <MdStar /> <MdStar /></span>
                                  <label className="review-label">
                                        <input type="radio" name="review-radio" />
                                        <span className="review-mark"></span>
                                    </label>
                                </li>
                                <li>
                                  <span className="la-star"><MdStar />  <MdStar /> <MdStar /></span>
                                  <label className="review-label">
                                        <input type="radio" name="review-radio" />
                                        <span className="review-mark"></span>
                                    </label>
                                </li>
                                <li>
                                  <span className="la-star"><MdStar />  <MdStar /></span>
                                  <label className="review-label">
                                        <input type="radio" name="review-radio" />
                                        <span className="review-mark"></span>
                                    </label>
                                </li>
                                <li>
                                  <span className="la-star"> <MdStar /></span>
                                  <label className="review-label">
                                        <input type="radio" name="review-radio" />
                                        <span className="review-mark"></span>
                                    </label>
                                </li>
                          
                    </ul>
                </div>
            </>
        );
    }
}

export default WidgetFilterRatings;