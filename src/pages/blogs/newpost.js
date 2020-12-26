import React, { Component } from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsFillPlusCircleFill, BsPencil, BsPencilSquare } from 'react-icons/bs'
import { RiSendPlane2Line } from 'react-icons/ri'
import Select from "react-select";
import { postModel } from '../../model/postModel';
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from "react-redux";
import { addFlaretags, fetchCommunityList, fetchFlair } from '../../services/action/common';
import { createpost, createpostwith } from '../../services/action/post';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.handlePost = this.handlePost.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeCommunity = this.onChangeCommunity.bind(this);
        this.onChangeFlare = this.onChangeFlare.bind(this);
        this.onChangeAccessmodifire = this.onChangeAccessmodifire.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.handleAmenties = this.handleAmenties.bind(this);
        this.onChangeAmentiesname = this.onChangeAmentiesname.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.state = {
            description: "",
            title: "",
            url: "",
            accessmodifier: "",
            loading: false,
            pictures: '',
            flare: { label: 'select tag', value: '' },
            comid: { label: 'select community', value: 0 },
            titleurl: '',
            file: null,
            imagecollection: '',
            createdsuccess: false,
            showModal: false,
            amentiesname: ''

        };

    }

    componentDidMount() {

        this.props.dispatch(fetchCommunityList());
        this.props.dispatch(fetchFlair(0));
        if (this.props.match.params.communityname) {
            this.state.comid.label = 'r/' + this.props.match.params.communityname
        }

    }

    onChangeAmentiesname(e) {
        this.setState({
            amentiesname: e.target.value,
        });
    }

    handleAmenties = (e) => {
        e.preventDefault();
        const obj = {
            "comid": 0,
            "title": this.state.amentiesname
        }
        this.props.dispatch(addFlaretags(obj)).then(() => {
            this.props.dispatch(fetchFlair(0));
            this.setState({
                amentiesname: '', showModal: false
            })
        })
    }

    uploadSingleFile(e) {
        this.setState({
            file: URL.createObjectURL(e.target.files[0]),
            imagecollection: e.target.files
        })
    }


    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });

    }


    onChangeFlare = flare => {
        this.setState({ flare });

    };

    onChangeCommunity = comid => {
        this.setState({ comid });

    };


    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }


    onDrop(picture) {
        this.setState({
            pictures: picture[0].name,
        });

    }

    onChangeAccessmodifire(e) {
        this.setState({
            accessmodifier: e.target.value,
        });
    }

    getAlert = (alerttype, title) => (
        <SweetAlert
            type={alerttype}
            title={title}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}>
            {this.props.message}
        </SweetAlert>
    );

    handlePost(e) {
        e.preventDefault();
        if (this.props.isLoggedIn) {
            if (!this.state.comid.value) { alert('please select community'); }
            else if (!this.state.flare.value) { alert('please select flare') }
            else {
                this.setState({
                    loading: true
                });

                if (this.state.file) {
                    var formData = new FormData();
                    for (const key of Object.keys(this.state.imagecollection)) {
                        formData.append('image', this.state.imagecollection[key])

                    }
                    formData.append('title', this.state.title)
                    formData.append('type', this.state.accessmodifier)
                    formData.append('description', this.state.description)
                    formData.append('user', this.props.userdetails.id)
                    formData.append('flare', this.state.flare.value)
                    formData.append('groupId', this.state.comid.value)
                    formData.append('url', this.state.url)
                    formData.append('canonicalurl', this.state.title.split(' ', 6).join(' ').toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, ''))
                    postModel.canonicalurl = this.state.title.split(' ', 6).join(' ').toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');

                    this.props.dispatch(createpostwith(formData)).then(() => {
                        this.setState({
                            createdsuccess: true, alert: this.getAlert('success', ' successfull created')
                        })


                    }).catch(() => {
                        this.setState({
                            createdsuccess: false, loading: false, alert: this.getAlert('warning', ' creating post Failed')
                        });

                    });

                } else {

                    postModel.title = this.state.title;
                    postModel.description = this.state.description;
                    postModel.type = this.state.accessmodifier;
                    postModel.user = this.props.userdetails.id;
                    postModel.flare = this.state.flare.value;
                    postModel.groupId = this.state.comid.value;
                    postModel.imgUrl = this.state.pictures;
                    postModel.url = this.state.url;
                    postModel.canonicalurl = this.state.title.split(' ', 6).join(' ').toLowerCase().replace(/ /g, '_').replace(/[^\w-]+/g, '');

                    this.props.dispatch(createpost(postModel)).then(() => {
                        this.setState({
                            createdsuccess: true, alert: this.getAlert('success', ' successfull created')
                        })

                    }).catch(() => {
                        this.setState({
                            createdsuccess: false, loading: false, alert: this.getAlert('warning', ' creating post Failed')
                        });

                    });
                }

            }
        } else {
            alert('please login first')
        }

    }

    onConfirm = () => {
        this.setState({
            loading: false, alert: null
        });

        if (this.state.createdsuccess) {
            this.props.history.push(`/forum/post/${postModel.canonicalurl}`);
            window.location.reload();
        }

    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }


    render() {
        let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' width="580px" height="500px" />;
        }

        const { flare, comid } = this.state;
        const { communitylist, flair } = this.props;
        const community = communitylist ? communitylist.map(com => {
            return { value: `${com.com_id}`, label: `r/${com.communityName}` };
        }) : [];
        const flairlist = flair ? flair.map(item => {
            return { value: `${item.title}`, label: `# ${item.title}` };
        }) : [];

        let addAmenties = (<div className="contact-form-action">
            <form method="post" onSubmit={this.handleAmenties}>
                <div className="row">


                    <div className="col-lg-12">
                        <div className="input-box">
                            <label className="label-text">Add Trending Tags</label>
                            <div className="form-group">
                                <span className="la form-icon">
                                    <BsPencilSquare />
                                </span>
                                <input className="form-control" type="text" name="amentiesname" value={this.state.amentiesname} onChange={this.onChangeAmentiesname} placeholder="Add some popular trending tags" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="btn-box mt-4">
                    <button type="submit" className="theme-btn border-0" disabled={this.state.loading}>
                        {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )} add</button>
                </div>

            </form>
        </div>)


        return (
            <main className="List-map-view2">
                {/* Header */}
                <GeneralHeader />

                <section className="blog-grid margin-top-190px  padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="faq-forum">
                                    <div className="billing-form-item">
                                        <div className="billing-title-wrap">
                                            <h3 className="widget-title">Create favourite Topic</h3>
                                            <p>  {this.props.isLoggedIn ? '' : <><span>please Login first to create the post </span><span><Link to='/login'>Login</Link></span></>}</p>
                                            <div className="short-option mr-3 padding-top-10px">
                                                <Select
                                                    value={comid} onChange={this.onChangeCommunity}
                                                    placeholder="Short by"
                                                    options={community}
                                                />
                                            </div>
                                            <div className="title-shape margin-top-10px"></div>
                                        </div>

                                        <div className="billing-content">
                                            <div className="contact-form-action">
                                                <form method="post" onSubmit={this.handlePost} >
                                                    <div className="input-box">
                                                        <label className="label-text">Title</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><AiOutlineUser /></span>
                                                            <input className="form-control" type="text" placeholder="Tittle (maxLength 500)" name="title" value={this.state.title} onChange={this.onChangeTitle} required="required" maxLength="1000" />
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Url</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><FaRegEnvelope /></span>
                                                            <input className="form-control" type="url" placeholder="Any urls for refences" name="url" value={this.state.url} onChange={this.onChangeUrl} />
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text">Description</label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><BsPencil /></span>
                                                            <textarea className="message-control form-control" name="description" value={this.state.description} onChange={this.onChangeDescription} required="required" placeholder="Write description for post"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text"> Select Flare Tags if not then add popular trending Flare tags <Badge variant="danger" onClick={this.open}><BsFillPlusCircleFill /> Add New tags</Badge></label>
                                                        <div className="form-group">
                                                            <span className="form-icon"><FaRegEnvelope /></span>
                                                            <Select value={flare} onChange={this.onChangeFlare}
                                                                placeholder="Short by"
                                                                options={flairlist}
                                                            />  </div>
                                                    </div>
                                                    <div className="form-group preview">
                                                        {imgPreview}
                                                    </div>
                                                    <div className="input-box">
                                                        <label className="label-text"> * please upload specific size(less than 580 * 500)</label>

                                                        <div className="form-group">
                                                            <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                                                        </div>
                                                    </div>



                                                    <div className="btn-box">
                                                        <button type="submit" className="theme-btn border-0" disabled={this.state.loading}>
                                                            <i><RiSendPlane2Line /></i>  {this.state.loading && (
                                                                <span className="spinner-border spinner-border-sm"></span>
                                                            )} Create Post
                                                         </button>
                                                    </div>
                                                    {this.state.alert}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">

                            </div>
                        </div>

                    </div>
                </section>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {addAmenties}

                    </Modal.Body>
                    <Modal.Footer>
                        <span onClick={this.close}>Close</span>
                    </Modal.Footer>
                </Modal>

                {/* Newsletter */}
                <NewsLetter />

                {/* Footer */}
                <Footer />

                <ScrollTopBtn />

            </main>
        );
    }
}

function mapStateToProps(state) {

    const { communitylist } = state.community;
    const { flair } = state.common;
    const { userdetails, isLoggedIn } = state.auth;
    const { isCreated } = state.post;
    return {
        communitylist, flair, userdetails, isCreated, isLoggedIn
    };
}
export default connect(mapStateToProps)(NewPost);