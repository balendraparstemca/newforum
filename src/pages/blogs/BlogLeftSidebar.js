import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import ForumCategory from '../../components/sidebars/widgets/forumCategory';
import CommunityList from '../../components/blogs/communityList';
import { fetchCommunityList } from '../../services/action/common';
import { connect } from "react-redux";
class BlogLeftSidebar extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            breadcrumbimg: require('../../assets/images/bread-bg.jpg'),
        }
    }

    componentDidMount()
    {
        let obj = {
            'category': this.props.match.params.categoryid
        };
        if (this.props.match.params.categoryid) {


            this.props.dispatch(fetchCommunityList(obj)).then(() => {
                this.setState({
                    community: this.props.communitylist
                })
            });
        }
        else {
            this.props.dispatch(fetchCommunityList()).then(() => {
                this.setState({
                    community: this.props.communitylist
                })
            });

        }
    }
   
    render() {
        console.log(this.props.match.params.categoryid)
        return (
            <main className="blog-left-sidebar-page">
                {/* Header */}
                <GeneralHeader />

                {/* Breadcrumb */}
                <Breadcrumb CurrentPgTitle="Forum community" MenuPgTitle="Forum" img={this.state.breadcrumbimg} />

                <section className="blog-left-sidebar padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="sidebar section-bg">
                                   
                                    <ForumCategory />
                                   
                                   
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <CommunityList categoryLink={this.props.match.params.categoryid}/>
                            </div>

                            <div className="col-lg-4">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                               
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer*/}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}


function mapStateToProps(state) {
    const { communitylist } = state.community;
    const { message } = state.message;

    return {
        communitylist,
        message
    };
}
export default connect(mapStateToProps)(BlogLeftSidebar);