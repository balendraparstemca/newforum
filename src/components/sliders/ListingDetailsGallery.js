import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import { connect } from "react-redux";
import { getListDetail, getlistimage } from '../../services/action/list';
class ListingDetailsGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"></path></svg>',
            nextIcon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20c-.802 0-1.555-.312-2.122-.879-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l2.878-2.878-2.878-2.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l7.121 7.121-7.122 7.121c-.566.567-1.319.879-2.121.879zm0-14c-.268 0-.518.104-.707.292-.189.19-.293.441-.293.708s.104.518.293.707l4.292 4.293-4.292 4.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l5.708-5.708-5.708-5.707c-.189-.189-.439-.293-.707-.293z"></path></svg>',
            title: 'Gallery',
            listimage:[],
            items: [
                {
                    img: "http://localhost:7999/api/v1/utilities/image-light-mode-1605945544434.png",
                },
                {
                    img: "http://localhost:7999/api/v1/utilities/image-dark-mode-1605945544437.png"
                },

            ],
            dotImages: [
                {
                    img: "http://localhost:7999/api/v1/utilities/image-light-mode-1605945544434.png",
                },
                {
                    img: "http://localhost:7999/api/v1/utilities/image-dark-mode-1605945544437.png"
                },
            ]
        }
    }
    componentDidMount() {
     this. fetchlistDeatil()
    }
    fetchlistDeatil = async () => {
        let obj = { "canonicalurl": this.props.listurl }
        this.props.dispatch(getListDetail(obj)).then(() => {
            this.fetchImage(this.props.listdetail && this.props.listdetail.listing_id)
        });

    }

    fetchImage = (list_id) => {
        this.props.dispatch(getlistimage({ listing_id: list_id })).then(() => {
            this.setState({
                listimage: this.props.listallimage && this.props.listallimage
            })
        })
    }

    render() {


        console.log(this.state.listimage);
        return (
            <>
                <h2 className="widget-title">
                    {this.state.title}
                </h2>
                <div className="title-shape"></div>
                <OwlCarousel
                    className="gallery-carousel padding-top-35px"
                    loop
                    margin={10}
                    autoplay={true}
                    nav={true}
                    navText={[this.state.previcon, this.state.nextIcon]}
                    dots={true}
                    smartSpeed={1000}
                    items={1}
                    dotsContainer={'#gallery-carousel'}
                >
                    {this.state.listimage && this.state.listimage.map((img, i) => {
                        return (
                            <div key={i} className="gallery-item">
                                 <img src={`http://localhost:7999/api/v1/utilities/${img.imageurl}`} alt="list" />
                             </div>
                        )
                    })}
                </OwlCarousel>
                <div className="gallery-carousel">
                    <div className="owl-dots" id="gallery-carousel">
                        {this.state.listimage && this.state.listimage.map((img, i) => {
                            return (
                                <button key={i} className="owl-dot">
                                 <img src={`http://localhost:7999/api/v1/utilities/${img.imageurl}`} alt="list" />
                            
                                </button>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}


function mapStateToProps(state) {

    const { listallimage, listdetail } = state.list;
    return {
        listallimage, listdetail

    };
}
export default connect(mapStateToProps)(ListingDetailsGallery);