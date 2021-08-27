import React, {Component} from 'react';
import axios from 'axios';
import  DropzoneComponent from 'react-dropzone-component';
import '../../../node_modules/dropzone/dist/min/dropzone.min.css';
import '../../../node_modules/react-dropzone-component/styles/filepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            thumb_image:"",
            name:"",
            logo_url:"",
            description: "",
            category:'Language',
            thumb_image_url:"",
            logo:"",
            editMode:false,
            apiUrl: 'https://aseani.devcamp.space/portfolio/portfolio_items',
            apiAction:'post',
        }


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.buildForm = this.buildForm.bind(this)
    this.componentConfig = this.componentConfig.bind(this)
    this.djsConfig = this.djsConfig.bind(this)
    this.handleImageDrop = this.handleImageDrop.bind(this)
    this.handleLogoDrop = this.handleLogoDrop.bind(this)
    this.deleteImg = this.deleteImg.bind(this)
    this.thumbRef = React.createRef();
    this.logoRef = React.createRef();
    
  
   

}


deleteImg(imageType) {
 axios.delete(`https://aseani.devcamp.space/portfolio/delete-portfolio-image/${this.state.id}?image_type=${imageType}`,
 {withCredentials:true}
 ).then(response => {
     this.setState({
         [`${imageType}_url`]:""
     })
     return response 
 })
 .catch(error => {console.log(error)})

 this.props.handleEditSubmission();

}

componentDidUpdate() {
    if (Object.keys(this.props.portfolioToEdit).length > 0) {
        const {
            id,
            name,
            thumb_image,
            category,
            description,
            thumb_image_url,
            logo_url
        } = this.props.portfolioToEdit;
        this.props.handleCleartoEdit();
        this.setState({
            id:id,
        
            name:name || "",
            logo_url: logo_url || "",
            description: description || "",
            category: category ||'Language',
            thumb_image_url: thumb_image_url ||  "",
            editMode: true,
            apiUrl:  `https://aseani.devcamp.space/portfolio/portfolio_items/${id}`,
            apiAction:'patch'
        })
    }
}

handleImageDrop() {
    return {
        addedfile: file => this.setState({
            thumb_image: file })

}}    


handleLogoDrop() {
    return {
        addedfile: file => this.setState({
            logo: file
        })
    }
}    




componentConfig() {
    return {
        iconFiletypes: [".jpg",".png"],
        showFiletypeIcon: true,
        postUrl: 'https://httpbin.org/post'
    }
}    
djsConfig() {
      return {
          addRemoveLinks: true,
          maxFiles:1,
      }
}
    
    
handleChange(event) {
      
        
        this.setState({
            [event.target.name]:event.target.value
        })
        console.log(event.target.name)
    
    };
    buildForm() {
        let formData = new FormData();
        formData.append('portfolio_item[name]', this.state.name)
        
        formData.append('portfolio_item[category]', this.state.category)
        
        formData.append('portfolio_item[description]', this.state.description)
        if (this.state.thumb_image) {
            formData.append('portfolio_item[thumb_image]', this.state.thumb_image)
        }
        if (this.state.logo) {
            formData.append('portfolio_item[logo]', this.state.logo)
        }
        return formData;
    }
    
    
    handleSubmit(event) {
        event.preventDefault()
        axios({
            method:this.state.apiAction,
            url: this.state.apiUrl,
            data:  this.buildForm(),
            withCredentials: true
        })
        .then(response => {
            if (this.state.editMode) {
                this.props.handleEditSubmission();
            } else {
            this.props.handleNewSubmission(response.data.portfolio_item);}
            
            this.setState({
               name:"",
                logo_url:"",
                description: "",
                
                thumb_image_url:"",
                editMode:false,
                apiUrl: 'https://aseani.devcamp.space/portfolio/portfolio_items',
                apiAction:'post',

            });
            console.log(response);
            [this.logoRef, this.thumbRef].forEach(ref => {
                ref.current.dropzone.removeAllFiles();
            });
            

        
        
        })
        .catch(error => {console.log(error)});
       
        this.buildForm();
        
    }



    render() {
        return (
            
            <form onSubmit={this.handleSubmit} className='portfolio-form-wrapper'>
                <div className="two-column">
                    <input  type='text' name='name' placeholder='Item Name'
                            value={this.state.name} onChange={this.handleChange}  />

                    <select
                    name='category'
                    value={this.state.category}
                    onChange={this.handleChange}
                    >
                        <option value="Language">Language</option>
                        <option value="Libraries/modules">Libraries/modules</option>
                        
                        
                        
                  </select>        
    
                </div>
     
                  <div>

                
                <textarea  type='text' name='description' placeholder='description'
                            value={this.state.description} onChange={this.handleChange}  /> 
                  
                  
                  </div>
                  
 
                  <div className='image-wrapper two-column'>
                    
                    {this.state.thumb_image_url && this.state.editMode ? 
                    
                    (
                    <div className="image-upload" > 
                    <img src={this.state.thumb_image_url}/>
                    <div className="imageRemoval">
                        <a onClick={() => { this.deleteImg("thumb_image")}}> <FontAwesomeIcon icon="ban"/> </a>  
                          </div>
                    
                    </div>
                    )
                    
                    :(
                     
                    <DropzoneComponent 
                      config={this.componentConfig()}
                      djsConfig={this.djsConfig()}
                      eventHandlers={this.handleImageDrop()}
                      ref={this.thumbRef}
                    >   
                    <div className='dz-message'>Image goes here</div>
                    </DropzoneComponent>)}
                  

                    {this.state.logo_url && this.state.editMode ? 
                    
                    (
                    <div className="image-upload" > 
                    <img src={this.state.logo_url}/>
                    <div className="imageRemoval">
                        <a onClick={() => { this.deleteImg("logo")}}> <FontAwesomeIcon icon="ban"/> </a>  
                          </div>
                    
                    </div>
                    )
                    
                    :(
                    <DropzoneComponent 
                      config={this.componentConfig()}
                      djsConfig={this.djsConfig()}
                      eventHandlers={this.handleLogoDrop()}
                      ref={this.logoRef}
                    > 
                    <div className='dz-message'>Logo goes here </div>
                    </DropzoneComponent> )}
                 
                 
                 
                 </div>
                  
                  
                  
                  <div>

                  <button >Submit</button>

                  </div>
            </form>
        )
    }
}


