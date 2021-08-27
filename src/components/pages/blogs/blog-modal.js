import React, {Component} from 'react';
import ReactModal from 'react-modal';
import BlogForm from './blog-form';
import axios  from 'axios';


ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props);
        this.customStyles = {
            content: {
                top : "50%",
                left: "50%",
                right:"auto",
                marginRight: "-50%",
                transform: "translate(-50%,-50%)",
                width:"800px",

            },
            overlay: {
                backgroundColor: "rgba(0, 128, 108, 0.85)"
            }

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)



    }
handleFormSubmit(record) {
       
       this.props.handleNewBlogSubmit(record);

    }


   render() {
       return ( 
       
       
       <ReactModal  style={this.customStyles} onRequestClose={this.props.handleModalClick} isOpen={this.props.isModal}> 
         <BlogForm handleFormSubmit={this.handleFormSubmit}/>
       
       </ReactModal> )
   }



}