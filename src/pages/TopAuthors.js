import React, {Component} from 'react';
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import Authors from "../components/sliders/Authors";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

class TopAuthors extends Component {
    state = {
        breadcrumbimg: require('../assets/images/bread-bg.jpg')
    }
    render() {
        return (
            <main className="top-authors">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Top Authors" MenuPgTitle="pages" img={this.state.breadcrumbimg} />

                {/* Authors */}
                <section className="author-area  padding-bottom-100px bg-img-transparent before-none">
                    <div className="container-fluid">
                        <Authors />
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

export default TopAuthors;