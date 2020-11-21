import React, {Component} from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategories from "../../components/other/categories/PopularCategories";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PopularCategoriesMore from "../../components/other/categories/PopularCategoriesMore";

class AllCategories extends Component {
    state = {
        breadcrumbImg: require('../../assets/images/bread-bg.jpg'),
    }
    render() {
        return (
            <main className="all-categories">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="All Categories" MenuPgTitle="Categories" img={this.state.breadcrumbImg} />

                <section className="cat-area padding-top-40px padding-bottom-80px">
                    <div className="container">
                        <div className="row">
                            <PopularCategories />
                            <PopularCategoriesMore />
                        </div>
                    </div>
                </section>

                {/* NewsLetter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

export default AllCategories;