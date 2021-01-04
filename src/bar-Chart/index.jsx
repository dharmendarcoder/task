import axios from 'axios';
import React from 'react';

class Api extends React.Component{
constructor(){
    super();
    this.state={
        array:[]
    }
    }

componentDidMount(){
    axios.get('https://restcountries.eu/rest/v2/all').then(
        (positive) =>{
            this.setState({array:positive.data})
        },
        (errors) =>{
            console.log(errors);
        }
    )
}

render(){
    return(
        <div>
          <h5>Getting the data </h5>
        <table>
        <tbody>
                   <thead>
                     
                       <th>S/no</th>
                       <th>name</th>
                       <th>Capital</th>
                       
                     
                   </thead>
               </tbody>
               {
                   this.state.array.map(
                       (el, i)=>(
                           <tr key={i++}>
                               <td>{i++}</td>
                               <td>{el.name}</td>
                               <td>{el.capital}</td>
                               
                           </tr>
            
                       )
                   )
               }
        </table>
      </div>
    )
}
}
export default Api;