import React, {Component} from 'react';
import CountUp from 'react-countup';
import {Link} from "react-router-dom";

class FunFactsTwo extends Component {
    state = {
        items: [
            {
                id: '1',
                title: 'Projects Completed',
                buttonTxt: 'join now',
                buttonUrl: '#',
                start: 0,
                end: 1150,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: '2',
                title: 'Happy Clients',
                buttonTxt: 'join now',
                buttonUrl: '#',
                start: 0,
                end: 3040,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: '3',
                title: 'Cup of Coffee',
                buttonTxt: 'join now',
                buttonUrl: '#',
                start: 0,
                end: 2020,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: '4',
                title: 'Awards Winning',
                buttonTxt: 'join now',
                buttonUrl: '#',
                start: 0,
                end: 350,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.items.map(item => {
                        return (
                            <div className="col-lg-3 column-td-6" key={item.id}>
                                <div className={'counter-item counter-item-layout-2 count-bg-'+item.id}>
                                    <div className="counter-number">
                                        <span className="counter">
                                            <CountUp
                                                start={item.start}
                                                end={item.end}
                                                duration={item.duration}
                                                separator={item.separator}
                                                decimal={item.decimal}
                                                prefix={item.prefix}
                                                suffix={item.suffix}
                                            />
                                        </span>
                                    </div>
                                    <div className="counter-content padding-top-10px">
                                        <p className="counter__title">{item.title}</p>
                                    </div>
                                    <div className="counter-btn margin-top-50px">
                                        <Link to={item.buttonUrl} className="theme-btn radius-rounded">
                                            {item.buttonTxt}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </>
        );
    }
}

export default FunFactsTwo;