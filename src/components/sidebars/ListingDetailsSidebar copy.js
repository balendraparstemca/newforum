import React, {Component} from 'react';
import WidgetAuthor from "./widgets/WidgetAuthor";
import WidgetStaticsInfo from "./widgets/WidgetStaticsInfo";
import WidgetBooking from "./widgets/WidgetBooking";
import WidgetOpenHours from "./widgets/WidgetOpenHours";
import WidgetCategory from "./widgets/WidgetCategory";
import WidgetTags from "./widgets/WidgetTags";
import WidgetSimilarListing from "./widgets/WidgetSimilarListing";
import WidgetSubscribe from "./widgets/WidgetSubscribe";
import WidgetFollow from "./widgets/WidgetFollow";
import { BsCheckCircle } from 'react-icons/bs'

class ListingDetailsSidebar extends Component {
    state = {
        btnText: 'Verified Listing',
        btnIcon: <BsCheckCircle />
    }
    render() {
        return (
            <>
                <div className="author-verified-badge margin-bottom-20px">
                    <div className="author__verified-badge" data-toggle="tooltip" data-placement="top" title="Listing has been verified and belongs the business owner or manager">
                        <span className="d-inline-block">{this.state.btnIcon}</span> {this.state.btnText}
                    </div>
                </div>
                <div className="sidebar section-bg">
                    <WidgetAuthor />
                    <WidgetStaticsInfo />
                    <WidgetBooking />
                    <WidgetOpenHours />
                    <WidgetCategory />
                    <WidgetTags />
                    <WidgetSimilarListing />
                    <WidgetSubscribe />
                    <WidgetFollow />
                </div>
            </>
        );
    }
}

export default ListingDetailsSidebar;