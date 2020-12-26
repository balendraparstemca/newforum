import React, { Component } from 'react';
import { Badge, Modal } from 'react-bootstrap';
import { AiFillFileAdd } from 'react-icons/ai';
import { BsFillPlusCircleFill, BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import { connect } from "react-redux";

import { fetchAmenties } from '../../services/action/common';
import { AddListAmenties, getListAmenties,mapAmentiestoList,unmapAmentiestoList } from '../../services/action/list';

class Amenities extends Component {
    constructor(props) {
        super(props)
        this.handleAmenties = this.handleAmenties.bind(this);
        //this.onReset = this.onReset.bind(this);
        this.onChangeAmentiesname = this.onChangeAmentiesname.bind(this);
        this.state = {
            showModal: false,
            amentiesname: ''
        }

    }


    componentDidMount() {
        this.props.dispatch(fetchAmenties(this.props.categoryid));
        this.props.dispatch(getListAmenties({ "listing_id": this.props.listid && this.props.listid }));
    }

    onChangeAmentiesname(e) {
        this.setState({
            amentiesname: e.target.value,
        });
    }

    handleAmenties = (e) => {
        e.preventDefault();
        this.setState({
            loading: true,
        });
        const obj = {
            amenties_name: this.state.amentiesname,
            categoryid: this.props.categoryid,
            listing_id: this.props.listid && this.props.listid
        }
        this.props.dispatch(AddListAmenties(obj)).then(() => {
            this.props.dispatch(fetchAmenties(this.props.categoryid));
            this.props.dispatch(getListAmenties({ "listing_id": this.props.listid && this.props.listid }));

            this.setState({ loading: false, showModal: false })
        }, () => { this.setState({ loading: false, showModal: false }) });
    }

    unmapAmenties = (sid) => {
        const obj={id:sid}
        this.props.dispatch(unmapAmentiestoList(obj));
        this.props.dispatch(getListAmenties({ "listing_id": this.props.listid && this.props.listid }));

    }

    mapAmenties = (id) => {
        const obj={ listing_id: this.props.listid && this.props.listid,amentiesid:id}
        this.props.dispatch(mapAmentiestoList(obj)).then(()=>{
            this.props.dispatch(getListAmenties({ "listing_id": this.props.listid && this.props.listid }));

        });
        
    }

    close = () => {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }



    render() {
        console.log(this.props.categoryid);
        const { amenties } = this.props;
        const items = amenties && amenties.length ? amenties.map(item => {
            return { id: `${item.amenties_id}`, title: `${item.amenties_name}` };
        }) : [{
            id: 0,
            title: 'no amenties feched'
        }];

        let addAmenties = (<div className="contact-form-action">
            <form method="post" onSubmit={this.handleAmenties}>
                <div className="row">


                    <div className="col-lg-12">
                        <div className="input-box">
                            <label className="label-text">Add Amenties</label>
                            <div className="form-group">
                                <span className="la form-icon">
                                    <BsPencilSquare />
                                </span>
                                <input className="form-control" type="text" name="amentiesname" value={this.state.amentiesname} onChange={this.onChangeAmentiesname} placeholder="Add More Amenties that you have in your service" />
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
            <>
                <div className="billing-form-item">
                    <div className="billing-title-wrap">
                        <p className="widge pb-0"><span><b>please select what service you offer to see or(add new amenties service)</b></span> <span className="float-right">
                            <Badge variant="danger" onClick={this.open}><BsFillPlusCircleFill />Add New services</Badge></span></p>
                        <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="row">
                    <div className="billing-content col">
                        <h5>you can add these amenties by clicking </h5>
                        <hr></hr>
                        {items.map(item => {
                            return (
                                <div key={item.id}>
                                    <span><AiFillFileAdd/></span>
                                   <span onClick={()=>this.mapAmenties(item.id)}> <label htmlFor={'chb' + item.id}> {item.title}</label></span>
                                </div>
                            )
                        })}

                    </div>

         
  
                    <div className="billing-content col">
                    <h5>added amenties in this business list </h5>
                    <hr></hr>

                        {this.props.listamenties.length === 0 ?
                            (<div className="custom-checkbox">

                                <label>there is no amenties please add </label>
                            </div>)
                            : this.props.listamenties.map(item => {
                                return (
                                    <div key={item.id}>
                                        <label onClick={()=>this.unmapAmenties(item.id)}> {item.amenties_name} <span><BsFillTrashFill /></span></label>
                                    </div>
                                )
                            })}

                   
                </div>
                </div>
                </div>

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
            </>
        );
    }
}


function mapStateToProps(state) {
    const { amenties } = state.common;
    const { listamenties } = state.list;
    return {
        amenties, listamenties

    };
}
export default connect(mapStateToProps)(Amenities);