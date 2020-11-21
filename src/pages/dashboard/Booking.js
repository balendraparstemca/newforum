import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PersonalInfo from "../../components/other/account/PersonalInfo";
import WidgetBookingProduct from "../../components/sidebars/widgets/WidgetBookingProduct";
import { GiChickenOven } from 'react-icons/gi'
import WidgetBookingSummary from "../../components/sidebars/widgets/WidgetBookingSummary";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

class Booking extends Component {
    state = {
        breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
        img: require('../../assets/images/img25.jpg'),
        title: 'Favorite Place Food Bank',
        subtitle: 'Bishop Avenue, New York',
        cardTypeIcon: <GiChickenOven />,
        cardType: 'Restaurant',
        badge: '4.6',
        cardLink: '/listing-details',
        summaryTitle: 'Booking Summary',
        summaryDate: '12/03/2020',
        summaryHour: '6:30 PM',
        summaryAdults: '2',
        summaryChildren: '1',
        summaryTotal: '$8.00'
    }
    render() {
        return (
            <main className="booking-page">
                {/* Header */}
                <GeneralHeader/>

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Booking" MenuPgTitle="pages" img={this.state.breadcrumbimg}/>

                {/* Personal Information */}
                <section className="booking-area padding-top-40px padding-bottom-80px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <PersonalInfo/>
                            </div>
                            <div className="col-lg-4">
                                <WidgetBookingProduct
                                    img={this.state.img}
                                    title={this.state.title}
                                    subtitle={this.state.subtitle}
                                    cardType={this.state.cardType}
                                    badge={this.state.badge}
                                    cardLink={this.state.cardLink}
                                    cardTypeIcon={this.state.cardTypeIcon} />

                                <WidgetBookingSummary
                                    title={this.state.summaryTitle}
                                    date={this.state.summaryDate}
                                    hour={this.state.summaryHour}
                                    adults={this.state.summaryAdults}
                                    children={this.state.summaryChildren}
                                    total={this.state.summaryTotal} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default Booking;