import React, {Component} from 'react';
import InfoBoxOne from "../../other/infoboxes/infobox1/InfoBoxOne";
import HowItWorkOneVideo from "./HowItWorkOneVideo";

class HowItWorkOne extends Component {
    render() {
        return (
            <>
                <div className="row padding-top-100px">
                    <InfoBoxOne />
                </div>

                {/* Video */}
                <div className="row">
                    <div className="col-lg-8 mx-auto padding-top-30px">
                        <HowItWorkOneVideo />
                    </div>
                </div>
            </>
        );
    }
}

export default HowItWorkOne;