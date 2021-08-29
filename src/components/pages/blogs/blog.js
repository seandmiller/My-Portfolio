import React, {Component} from 'react';
import axios from 'axios';
import BlogItem from './blog-item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BlogModal from './blog-modal';


class Blogs extends Component {
constructor() {
    super();
    this.state = {
        blogItems:[],
        totalCount:0,
        currentPage:0,
        isLoading: true,
        isModal:false,
        currentPage:0
    }
    this.getBlogItems = this.getBlogItems.bind(this)
    this.onScroll = this.onScroll.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this)
    window.addEventListener("scroll", this.onScroll, false)
    this.handleNewBlogSubmit = this.handleNewBlogSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this)

    
}
handleDeleteClick(blog) {
    axios.delete(`https://aseani.devcamp.space/portfolio/portfolio_blogs/${blog.id}`,
    {withCredentials:true})
    .then(response => {
        this.setState({
            blogItems:this.state.blogItems.filter(item =>  { return item.id !== blog.id })
        })
        return response
    })
}

handleModalClick() {
    this.setState({
        isModal: !this.state.isModal
    })
}


handleNewBlogSubmit(blog) {
    this.handleModalClick();
    this.setState({
        blogItems: [blog].concat(this.state.blogItems)

    })

}

onScroll() {
  
      
      if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
          
           return;
      }
      
      
      const pageLocation = window.innerHeight + document.documentElement.scrollTop
      if ( parseInt(pageLocation) === document.documentElement.offsetHeight ) {
                      this.getBlogItems();
      }
 
  
}


getBlogItems() 
{ const url = 'https://aseani.devcamp.space/portfolio/portfolio_blogs?page'
 this.setState({ currentPage: this.state.currentPage + 1 }); 
axios.get( `${url}=${this.state.currentPage}`,
 )
  .then(response => { 
    //   console.log(url , response.data.portfolio_blogs); 
     
      this.setState({ blogItems: this.state.blogItems.concat(response.data.portfolio_blogs), 
     totalCount: response.data.meta.total_records,
     isLoading: false }); }) 
    .catch(error => { console.log("getBlogItems error", error); }); }


componentDidMount() {
    this.getBlogItems();
}

componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
}

render() {
    
   


      
    const blogRecords = this.state.blogItems.map(blogItem => {
        if (this.props.loggedInStatus === 'LOGGIN_SUCCESS') 
                {  
                     return (<div className='admin' key={blogItem.id}>
                         <BlogItem  data={blogItem}/>
                         <a onClick={() => {this.handleDeleteClick(blogItem)}} > <FontAwesomeIcon icon='trash'/></a>

                     </div>)
   
      } else {
        return ( <BlogItem key={blogItem.id} data={blogItem}/>
            
        ) }
    }) 
    
 
   return (
    <div className="blog-container"> 
      <BlogModal handleNewBlogSubmit={this.handleNewBlogSubmit} handleModalClick={this.handleModalClick} isModal={this.state.isModal}/>
       <div className="new-blog-link"> 
       {this.props.loggedInStatus === 'LOGGIN_SUCCESS' ? <a onClick={this.handleModalClick}> <FontAwesomeIcon icon="plus-circle" /> </a> : null} 
       
       
       </div>
       
       
       <div className="content-container"> 
       
       {blogRecords.length > 1 ? blogRecords : 
       <div className='no-blogs'> 
            <h1> No Blogs Yet <FontAwesomeIcon icon='meh' />  </h1> 
       
       </div>}
       
       </div>
       {
       this.state.isLoading ? <div  className="loader"> <FontAwesomeIcon icon='spinner' spin/></div>
        :
        null
        }
      
      </div>
      
      )
    
   }
    
    


}

export default Blogs;