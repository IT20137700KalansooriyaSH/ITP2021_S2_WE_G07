import React,{ Component } from "react";
import axios from "axios";


 export default class Editebill extends Component{


constructor(props){
super(props);
this.state={
    BuildingId:"",
    NoOfUnit:"",
    Amount:"",
 


}

}



handleInputChange = (e) =>{

    const {name,value}=e.target;

    this.setState({
   ...this.state,
   [name]:value


    })

}





  onSubmit=(e)=>{
  e.preventDefault();
  const id=this.props.match.params.id;
  const{BuildingId,NoOfUnit,Amount}=this.state;
  const data={
    BuildingId:BuildingId,
    NoOfUnit:NoOfUnit,
    Amount:Amount
  }

console.log(data);
axios.put(`/waterbill/update/${id}`,data).then((res)=>{
  

if(res.data.success){
      this.setState(
      {
        BuildingId:"",
        NoOfUnit:"",
        Amount:""


      }

      )
  }

})

  }
  componentDidMount(){

      const id=this.props.match.params.id;
      axios.get(`/waterbill/${id}`).then((res)=>{
  
      if (res.data.success){
          this.setState({
            BuildingId:res.data.waterbill.BuildingId,
            NoOfUnit:res.data.waterbill.NoOfUnit,
            Amount:res.data.waterbill.Amount
          });
          console.log(this.state.waterbill);
      }
  
  
      })
  }


 render(){
     return(


      <div class="content">
         <div className="col-md-8 mt-4 mx-auto">
             <h1 className="h3 mb-3 font-weight-normal">Edit  bill </h1>
       <form className="need-validation" noValidate>
    

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>BuildingId</label>
    <input type="text" 
    className="form-control" 
    name="BuildingId"
    placeholder="Enter the buildingid"
    value={this.state.BuildingId}
    onChange={this.handleInputChange}/>
   
  </div>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}> No of unites used</label>
    <input type="text" 
    className="form-control" 
    name="NoOfUnit"
    placeholder="Enter the NoOfUnit"
    value={this.state.NoOfUnit}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Amount</label>
    <input type="text" 
    className="form-control" 
    name="Amount"
    placeholder="Enter the Amount"
    value={this.state.Amount}
    onChange={this.handleInputChange}/>
   
  </div>
  


  <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
      <i className="far fa-check-square"></i>
      &nbsp;
      Save</button>
</form>

         </div>

         </div>
     )
 }
 


 }




   
