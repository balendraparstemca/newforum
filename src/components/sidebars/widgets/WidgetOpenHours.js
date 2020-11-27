import React, { Component } from 'react';
import { connect } from "react-redux";
class WidgetOpenHours extends Component {

    constructor(props) {
        super(props)
        this.state = {
            op: { label: '', value: '' },
            cl: { label: '', value: '' },
            dayname: { label: '', value: '' },
            title: 'Opening Hours',
            stitle: 'now open',
            listshedulelist: [],
            items: [
                {
                    day: 'Monday',
                    time: '9am - 5pm',
                    close: false,
                },
                {
                    day: 'Tuesday',
                    time: '9am - 5pm',
                    close: false,
                },
                {
                    day: 'Wednesday',
                    time: '9am - 5pm',
                    close: false,
                },
                {
                    day: 'Thursday',
                    time: '9am - 5pm',
                    close: false,
                },
                {
                    day: 'Friday',
                    time: '9am - 5pm',
                    close: false,
                },
                {
                    day: 'Sat-Sun',
                    time: 'Closed',
                    close: true,
                }
            ]


        }
    }


  
    render() {
        console.log(this.props.shedulelist);
        return (
            <>
                <div className="sidebar-widget">
                    <div className="opening-hours">
                        <div className="listing-badge d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="widget-title">
                                    {this.state.title}
                                </h3>
                                <div className="title-shape"></div>
                            </div>
                            <p><span className="theme-btn button-success">
                                {this.state.stitle}
                            </span></p>
                        </div>
                        <ul className="list-items padding-top-30px">
                            {this.props.shedulelist && this.props.shedulelist.map((item, i) => {
                                return (
                                    <li key={i} className="d-flex justify-content-between">
                                        {item.day} <strong className={item.open === 'close' ? 'color-text' : 'font-weight-medium'}>{item.open}-{item.close}</strong>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}



function mapStateToProps(state) {

    const { listdetail, shedulelist } = state.list;

    return {
        listdetail, shedulelist

    };

}
export default connect(mapStateToProps)(WidgetOpenHours);