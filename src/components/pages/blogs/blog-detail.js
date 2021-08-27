import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import BlogImage from './blog-image';
import BlogForm from './blog-form';


export default class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId:this.props.match.params.slug,
            blogItem: {},
            editMode:false
        }
     this.getBlogItem = this.getBlogItem.bind(this);
     this.handleEdit = this.handleEdit.bind(this);
     this.handleDeleteImg = this.handleDeleteImg.bind(this);
     this.handleUpdateForm = this.handleUpdateForm.bind(this)   
    };

handleUpdateForm(data) {
    this.setState({
        blogItem: data,
        editMode:false
    })
}


 handleDeleteImg() {
     this.setState({
         blogItem: {
             featured_image_url: ""
         }
     })
 }   


handleEdit() {
    this.setState({
        editMode: true
    })
}




getBlogItem() {
    axios.get(`https://aseani.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`)
    .then(response => {
        this.setState({
            blogItem:response.data.portfolio_blog
        })
    }).catch(error => {
        console.log(error)
    })
}

componentDidMount() {
    this.getBlogItem();
}
   render() {
       const {
           title,
           content,
           featured_image_url,
           blog_status
       } = this.state.blogItem;

     const contentManager = () => { 
         if (this.state.editMode) {
             return <BlogForm handleUpdateForm={this.handleUpdateForm} handleDeleteImg={this.handleDeleteImg} editMode={this.state.editMode} blog={this.state.blogItem} />
         } else { return ( <div className="content-container">
             
            <h1 onClick={this.handleEdit}>{title}</h1>
            
            <BlogImage img ={featured_image_url}/>


           <div className="container">{ReactHtmlParser(content)} </div> 
             </div>       )
         };
     }  
    
    return(
        <div className="blog-container">
           {contentManager()}
     </div>
    )
   } 
}
