import React, {Component} from 'react';
import CountUp from "react-countup";

class FunFactsThree extends Component {
    state = {
        items: [
            {
                id: 1,
                title: 'New Visitors Every Week',
                start: 0,
                end: 250,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: 2,
                title: 'Happy customers every year',
                start: 0,
                end: 3040,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+'
            },
            {
                id: 3,
                title: 'Awards Won',
                start: 0,
                end: 172,
                duration: 8,
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: ''
            },
            {
                id: 4,
                title: 'New Listing Every Week',
                start: 0,
                end: 150,
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
                {this.state.items.map(item => {
                    return (
                        <div className="col-lg-3 column-td-6" key={item.id}>
                            <div className="counter-item">
                                <div className={'counter-number after-none fun-bg'+item.id}>
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
                                <div className="counter-content padding-top-20px">
                                    <p className="counter__title font-size-16 color-text-2">New Visitors Every Week</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default FunFactsThree;