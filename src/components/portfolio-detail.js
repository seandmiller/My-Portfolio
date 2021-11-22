// import axios from 'axios';
// import React, { PureComponent } from 'react';


// export default class PortfolioDetail extends PureComponent {
// constructor(props) {
//  super(props);
//      this.state = {
//          item:""
//      }
//      this.getItem = this.getItem.bind(this)

// };


//      getItem() {
//         axios.get(`https://aseani.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`)
//          .then(response => {
//              this.setState({
//                  item:response.data.portfolio_item
//              })
//             console.log(this.state.item)
//          })
//          .catch(error => console.log(error))
//     }
// componentDidMount() {
//     this.getItem();
// }
//      render() {
   
//          const {
//              name, 
//              description,
//              thumb_image_url

//          } = this.state.item;
           

//         return (
//             <div className='item-details-wrapper'>
                  
//                   <div className='content-detail'>
//                   <div className='img-wrapper'>
//                       <img src={thumb_image_url}/>
//                   </div>
                  
//                   <h1>{name}</h1>
//                 <div className='descr'>  <h4>{description}</h4> </div>
                 
//                   </div>
//             </div>
//         )
//      }





// }