import React, {Component} from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Plans from "../components/other/plans/Plans";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class PricingPlan extends Component {
    state = {
        breadcrumbimg: require('../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="pricing-plan-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Pricing Plans" MenuPgTitle="pages" img={this.state.breadcrumbimg}/>

                {/* Pricing Plan */}
                <section className="pricing-area padding-top-70px padding-bottom-90px">
                    <div className="container">
                        <Plans />
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default PricingPlan;