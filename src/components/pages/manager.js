import React,{Component} from 'react';
import axios from 'axios';
import ManagerSideBar from './manager-sideBar';
import ManagerForm from './manager-page';

export default class Manager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems:[],
      portfolioEdit: {} 
    }
    this.handleNewSubmission = this.handleNewSubmission.bind(this)
    this.handleUnsucessfulSubmission = this.handleUnsuccessfulSubmission.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleCleartoEdit = this.handleCleartoEdit.bind(this)
    this.handleEditSubmission = this.handleEditSubmission.bind(this)
}

handleEditSubmission() {
  this.getPortfolioItems();

}


handleCleartoEdit() {
  this.setState({
    portfolioEdit:{}
  })
}

   getPortfolioItems() {
     axios.get('https://aseani.devcamp.space/portfolio/portfolio_items')
     .then(response => {
       this.setState({
         portfolioItems:[...response.data.portfolio_items]})
         
       })
       .catch(error => {
        console.log('an error has occured', error)
     })
   }

   handleEdit(portItem) {
     this.setState({
       portfolioEdit: portItem
     })
   }
   
  componentDidMount() {
    this.getPortfolioItems();
  } 
  handleNewSubmission(item) {
    this.setState({
      portfolioItems:[item].concat(this.state.portfolioItems)
      })

  }
  handleDelete(object) {
    axios.delete(`https://aseani.devcamp.space/portfolio/portfolio_items/${object.id}`, {withCredentials: true})
    .then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id != object.id
          })
        });
        return response 
    })
    .catch(error => {console.log('an error has occured ', error); console.log(object)})

  }
  handleUnsuccessfulSubmission(error) {
    console.log('An error has occured ', error)
  }
 
  render() {
    return (
    <div className='portfolio-manager-wrapper'>
      
      <div className='left-column-manager'>
      <ManagerForm

         handleEditSubmission={this.handleEditSubmission}
         portfolioToEdit={this.state.portfolioEdit}
         handleCleartoEdit={this.handleCleartoEdit}
         handleNewSubmission={this.handleNewSubmission}/>
      
      </div>
    <div className='right-column-manager'>
    <ManagerSideBar 
                    data={this.state.portfolioItems}
                    handleNewSubmission={this.handleNewSubmission}
                    handleUnsucessfulSubmission={this.handleUnsuccessfulSubmission}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}                               />
   
    </div>
    
    </div>)
     }

}