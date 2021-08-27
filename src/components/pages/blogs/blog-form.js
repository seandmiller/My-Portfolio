import React, {Component} from 'react';
import axios from 'axios';
import RichText from '../form/rich-text';
import DropzoneComponent from 'react-dropzone-component';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            title:"",
            blog_status:"",
            content:"",
            featured_img:"",
            apiUrl:"https://aseani.devcamp.space/portfolio/portfolio_blogs",
            apiAction:'post'
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildForm = this.buildForm.bind(this);
    this.handleRichTextChange = this.handleRichTextChange.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleFeaturedImgDrop = this.handleFeaturedImgDrop.bind(this)
    this.featured_imgRef = React.createRef()
    this.deleteImage =  this.deleteImage.bind(this)

    }


    componentConfig() {
      return {
        iconFileTypes: ['.jpg','.png'],
        showFiletypeIcon: true,
        postUrl:"https://httpbin.org/post"
    
           }
    }

    djsConfig() {
        return {
            addRemoveLinks:true,
            maxFiles:1
        }
    }
UNSAFE_componentWillMount() {
    if (this.props.editMode) {
        this.setState({
            id:this.props.blog.id,
            title: this.props.blog.title,
            blog_status: this.props.blog.blog_status,
            apiAction:'patch',
            apiUrl:`https://aseani.devcamp.space/portfolio/portfolio_blogs/${this.props.blog.id}`
        })
    }
}


handleFeaturedImgDrop() {
    return {
        addedfile: file => {
            this.setState({
                featured_img:file
            })
        }
    }
}

  handleRichTextChange(content) {
      this.setState({
          content
      })

  }  
   
buildForm() {
        let formData = new FormData();
        formData.append("portfolio_blog[title]", this.state.title)
        formData.append("portfolio_blog[blog_status]", this.state.blog_status)
        formData.append('portfolio_blog[content]', this.state.content)
        if (this.state.featured_img) {
            formData.append('portfolio_blog[featured_image]',this.state.featured_img)
        }
        
        return formData;
    }
   
   
    handleSubmit(event) {
        event.preventDefault();
        axios({
            method:this.state.apiAction,
            url:this.state.apiUrl,
            data:this.buildForm(),
            withCredentials:true}
        ).then(response => {
            this.setState({
                            title:"",
                            blog_status:"",
                            content:""
                        }) ;
            if (this.state.featured_img) {
               this.featured_imgRef.current.dropzone.removeAllFiles()    
                                         }        
            if (this.props.editMode) {
               this.props.handleUpdateForm(response.data.portfolio_blog)
            } else {
            this.props.handleFormSubmit(response.data.portfolio_blog)
                 } 
                        
        }
        ).catch(error => {console.log(error)})
        
      

    }

deleteImage(imageType) {
  axios
    .delete(
      `https://api.devcamp.space/portfolio/delete-portfolio-blog-image/${
        this.props.blog.id
      }?image_type=${imageType}`,
      { withCredentials: true }
    )
    .then(response => {
      
      this.props.handleDeleteImg();
    })
    .catch(error => {
      console.log("deleteImage error", error);
    });
}
    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
        
    }
    
    render() {
        return (
            <div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
            <div className="two-column">
            <input 
            onChange={this.handleChange} 
            type="text"
            name="title"
            placeholder="Blog Title"
            value={this.state.title}
            />
            <input 
            name="blog_status"
            onChange={this.handleChange}
            type="text"
            value={this.state.blog_status}
            placeholder="Blog Status"/>
            </div>

            <RichText handleRichTextChange={this.handleRichTextChange}
            editMode={this.props.editMode}
            contentToEdit={this.props.editMode && this.props.blog.content ? this.props.blog.content : null}
            />
            
           <div className="image-wrapper">
           {this.props.editMode && this.props.blog.featured_image_url ? 
            <div>
            <img src={this.props.blog.featured_image_url}/>
             <a onClick={() => {this.deleteImage('featured_image')}}>Remove image</a>
              </div>
             :
            
               <DropzoneComponent
               ref={this.featured_imgRef}
               config={this.componentConfig()}
               djsConfig={this.djsConfig()}
               eventHandlers={this.handleFeaturedImgDrop()}
               > 
               <div className="dz-message">image drop</div>
               
               </DropzoneComponent>
             }
          
          </div>

           

           <button className="btn"> Submit </button>
           
             
            </form>
            </div>
        )
    }
}