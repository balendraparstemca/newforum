import React, {Component} from 'react';
import { FiCheck } from 'react-icons/fi'

class InfoBox5 extends Component {
    state = {
        items: [
            {
                icon: <FiCheck />,
                title: 'We Are Professional',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
            },
            {
                icon: <FiCheck />,
                title: 'Best Service Guarantee',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
            },
            {
                icon: <FiCheck />,
                title: 'We Are Trusted and Secured',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
            },
            {
                icon: <FiCheck />,
                title: 'Online Support 24/7 ',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,'
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    {this.state.items.map((item, index) => {
                        return (
                            <div className="col-lg-6 column-td-6" key={index}>
                                <div className="icon-box icon-box-layout-2">
                                    <div className="info-icon text-center">
                                        <span className="d-inline-block">
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div className="info-content">
                                        <h4 className="info__title">
                                            {item.title}
                                        </h4>
                                        <p className="info__desc">
                                            {item.desc}
                                        </p>
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

export default InfoBox5;