import React, {Component} from 'react';
import CountUp from 'react-countup';

class FunFactsOne extends Component {
    funfactsstate = {
        items: [
            {
                id: '1',
                start: 0,
                end: 150,
                duration: '8',
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+',
                title: 'Projects Completed'
            },
            {
                id: '2',
                start: 0,
                end: 3040,
                duration: '8',
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+',
                title: 'Happy Clients'
            },
            {
                id: '3',
                start: 0,
                end: 2020,
                duration: '8',
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+',
                title: 'Cup of Coffee'
            },
            {
                id: '4',
                start: 0,
                end: 350,
                duration: '8',
                separator: '',
                decimal: ',',
                prefix: ' ',
                suffix: '+',
                title: 'Awards Winning'
            }
        ]
    }
    render() {
        return (
            <div className="row mt-5">
                {this.funfactsstate.items.map((item, index) => {
                    return (
                        <div className="col-lg-3 column-td-6" key={index}>
                            <div className="counter-item">
                                <div className={'counter-number fun-bg'+item.id}>
                                    <span className="counter">
                                        <CountUp start={item.start}
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
                                    <p className="counter__title">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default FunFactsOne;