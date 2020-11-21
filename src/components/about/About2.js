import React, {Component} from 'react';
import SectionsHeading from "../common/SectionsHeading";
import Button from "../common/Button";

class About2 extends Component {
    state = {
        images: [
            {
                img: require('../../assets/images/img15.jpg'),
                boxClass: 'mt-4'
            },
            {
                img: require('../../assets/images/img16.jpg'),
                boxClass: ''
            },
            {
                img: require('../../assets/images/img16.jpg'),
                boxClass: 'mt-4'
            },
            {
                img: require('../../assets/images/img15.jpg'),
                boxClass: ''
            }
        ]
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <SectionsHeading
                                title="Welcome to the Dirto Business Directory Service and a Public Company"
                                desc="Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend."
                                descClass=" font-size-17 pr-3 mb-3"
                            >
                                <p className="sec__desc font-size-17 pr-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                                </p>
                                <div className="btn-box padding-top-30px">
                                    <Button text="find out more" url="#" />
                                </div>
                            </SectionsHeading>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img-boxes">
                            <div className="row">
                                {this.state.images.map((item, i) => {
                                    return (
                                        <div className="col-lg-6 column-td-6" key={i}>
                                            <div className={'img-box-item ' + item.boxClass}>
                                                <img src={item.img} alt="about" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About2;