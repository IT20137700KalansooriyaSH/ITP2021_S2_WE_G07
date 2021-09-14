import React ,{Component} from 'react'
import axios from 'axios';


export default class Allmonths extends Component{
constructor(props){
super(props);

this.state={
months:[]
};

}

componentDidMount(){
  this.retriveMonths();
}

retriveMonths(){
axios.get("/month").then(res=>{
  if(res.data.success){
  this.setState({
    months:res.data.existingMonths
  });
  console.log(this.state.months)

  }
});

}

onDelete= (id) =>{
    axios.delete(`/month/delete/${id}`).then((res)=>{
        alert("Delete successfully");
        this.retriveMonths();
    })
}


filterData(months,searchKey){

const result = months.filter((month)=>
month.month.toLowerCase().includes(searchKey)||
month.PH_vale.toLowerCase().includes(searchKey)||
month.Temperature.toLowerCase().includes(searchKey)||
month.Turbidity_level.toLowerCase().includes(searchKey)||
month.BOD_value.toLowerCase().includes(searchKey)||
month.Hardness.toLowerCase().includes(searchKey)

)
this.setState({months:result})
}

handleserchArea=(e)=>{
const searchKey=e.currentTarget.value;
axios.get("/month").then(res=>{
  if(res.data.success){
  this.filterData(res.data.existingMonths,searchKey)
    
  }
});
}



render(){
  return(
<div className="container">
    <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
  <h2>All Month drinking water Qulity levels</h2>
  <br/>
  </div>

<div className="col-lg-3 mt-2 mb-2">
<input
className="form-control"
type="search"
placeholder="search"
onChange={this.handleserchArea}>

</input>

</div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      
      <th scope="col">month</th>
     
      <th scope="col">ph value</th>
      <th scope="col">temperature</th>
      <th scope="col">turbidity</th>
      <th scope="col">BOD value</th>
      <th scope="col">hardness</th>
      <th scope="col">chloride</th>
      <th scope="col">dissolved Oxygen</th>
      <th scope="col">Ammonium</th>
   



      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>


{this.state.months.map((months,index)=>(
 <tr key={index}>
 <th scope="row">{index+1}</th>   
 <td>
     <a href={`/month/${months._id}`}style={{textDecoration:'none'}}>
     {months.month}  
     </a>
     
     </td>
  
 <td>{months.PH_vale}</td>
 <td>{months.Temperature}</td>
 <td>{months.Turbidity_level}</td>
 <td>{months.BOD_value}</td>
 <td>{months.Hardness}</td>
 <td>{months.Chloride}</td>
 <td>{months.DissolvedOxygen}</td>
 <td>{months.Ammonium}</td>
 
 <td>


<a className="btn btn-warning" href={`/editmonth/${months._id}`}>
     <i className="fas fa-edit"></i>&nbsp;Edit
   </a>
   &nbsp;

   <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(months._id)}>
     <i className="far fa-trash-alt"></i>&nbsp;Delete
   </a>
 </td>
</tr>

))}




   
  
  </tbody>
</table>




</div>





<button className="btn btn-success"><a href="/addmonthsdetails" style={{textDecoration:'none' ,color:'white'}}> Add new month </a></button>
<br/>
<br/>

<button className="btn btn-info"><a href="/monthUsers" style={{textDecoration:'none' ,color:'white'}}>Users Page</a></button>





















</div>

  )

}


}