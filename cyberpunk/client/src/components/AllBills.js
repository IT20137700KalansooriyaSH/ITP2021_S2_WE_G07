import React ,{Component} from 'react'
import axios from 'axios';


export default class AllBills extends Component{
constructor(props){
super(props);

this.state={
waterbills:[]
};

}

componentDidMount(){
  this.retriveWaterbills();
}

retriveWaterbills(){
axios.get("/waterbill").then(res=>{
  if(res.data.success){
  this.setState({
    waterbills:res.data.existingWaterbills
  });
  console.log(this.state.waterbills)

  }
});

}

onDelete= (id) =>{
    axios.delete(`/waterbill/delete/${id}`).then((res)=>{
        alert("Delete successfully");
        this.retriveWaterbills();
    })
}


filterData(waterbills,searchKey){

const result = waterbills.filter((waterbill)=>
waterbill.BuildingId.toLowerCase().includes(searchKey)
)
this.setState({waterbills:result})
}

handleserchArea=(e)=>{
const searchKey=e.currentTarget.value;
axios.get("/waterbill").then(res=>{
  if(res.data.success){
  this.filterData(res.data.existingWaterbills,searchKey)
    
  }
});
}



render(){
  return(
<div className="container">
    <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
  <h2>All Building  water usage</h2>
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
      <th scope="col">BuildingId</th>
      <th scope="col">No of unites</th>
      <th scope="col"> Bill amount</th>
      <th scope="col"> Action</th>
     
    </tr>
  </thead>
  <tbody>
{this.state.waterbills.map((waterbills,index)=>(
 <tr key={index}>
 <th scope="row">{index+1}</th> 
 <td>{waterbills.BuildingId}</td>
 <td>{waterbills.NoOfUnit}</td>
 <td>{waterbills.Amount}</td>

 
 

 <td>
<a className="btn btn-warning" href={`/editbill/${waterbills._id}`}>
     <i className="fas fa-edit"></i>&nbsp;Edit
   </a>
   &nbsp;
   <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(waterbills._id)}>
     <i className="far fa-trash-alt"></i>&nbsp;Delete
   </a>
 </td>
</tr>

))}




   
  
  </tbody>
</table>
</div>

<button className="btn btn-success"><a href="/billcreate" style={{textDecoration:'none' ,color:'white'}}> Add another bill </a></button>



<p1>


</p1>
</div>

  )

}


}