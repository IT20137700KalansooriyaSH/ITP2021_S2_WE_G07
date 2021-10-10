import React,{ Component } from 'react';
import axios from 'axios';



 export default class editTelephone extends Component{

    constructor(props){
        super(props);
        this.state={  
          PID:"",
          PhoneNumber:"",
          BID:"",
          SID:"",
          month:"",
          Date:"",
        
        }
        
        }
        
        
        
        handleInputChange = (e) =>{
        
            const {name,value}=e.target;
        
            this.setState({
           ...this.state,
           [name]:value
        
        
            })
        
        }
        
    
        onUpdate=() =>{
          //axios.delete(`/phone/delete/${id}`).then((res)=>{
           alert("Updated Successfully!!");
              //this.retrievePhones();
            //})
            
       }
    onSubmit=(e)=>{
          
          e.preventDefault();
          const id=this.props.match.params.id;
          const{PID,PhoneNumber,BID,SID,month,Date}=this.state;
          
          const data={
              PID:PID,
              PhoneNumber:PhoneNumber,
              BID:BID,
              SID:SID,
              month:month,
              Date:Date,
          }
        
        console.log(data);

        axios.put(`/phone/update/${id}`,data).then((res)=>{
          if(res.data.success){
            alert("You Can Update");
              this.setState(
              {
                PID:"",
                PhoneNumber:"",
                BID:"",
                SID:"",
                month:"",
                Date:""

        
              }
        
              )
          }
        
        })
        
          }

    componentDidMount(){

        const id=this.props.match.params.id;
        axios.get(`/phone/${id}`).then((res)=>{
    
        if (res.data.success){
            
            this.setState({
              PID:res.data.post.PID,
              PhoneNumber:res.data.post.PhoneNumber,
              BID:res.data.post.BID,
              SID:res.data.post.SID,
              month:res.data.post.month,
              Date:res.data.post.Date,
            });
            console.log(this.state.post); //post or phones
        }
    
    
        })
    }



 render(){
    return(


     <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" > ADD TELEPHONES</h1>
        <form  onSubmit={this.onSubmit}>
           <div className="form-group"  style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}> PID </label>
             <input type="text"
             className="form-control"
             name="PID"
             placeholder="enter phoneID" 
             value={this.state.PID}
             onChange={this.handleInputChange}required/>
             
             </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Telephone Number</label>
                <input type ="tel"
                className="form-control"
                name="PhoneNumber"
                placeholder="Enter [0][0-9]{9} this format"
                pattern="[0][0-9]{9}"
                value={this.state.PhoneNumber}
                maxlength = "10"
                minLength ="10"
                onChange={this.handleInputChange}required/>
           
            </div>
            
            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>BID</label>
                <input type="text"
                className="form-control"
                name="BID"
                placeholder="Enter Description"
                value={this.state.BID}
                onChange={this.handleInputChange}required/>
               
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>SID</label>
                <input type="text"
                className="form-control"
                name="SID"
                placeholder="Enter ShopID"
                value={this.state.SID}
                onChange={this.handleInputChange}required/>
              
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Month</label>
                <input type="Date"
                className="form-control"
                name="month"
                placeholder="Enter Month you add the phone"
                min="1" max="12"
                value={this.state.month}
                onChange={this.handleInputChange}required/>
                 
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Time</label>
                <input type="time"
                className="form-control"
                name="Date"
                placeholder="Enter Date you add the phone"
                min="1" max="31"
                value={this.state.Date}
                onChange={this.handleInputChange}required/>
               
            </div>

           
            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'} }  onClick={()=>this.onUpdate()} >
            <i className="far fa-check-square"></i>
             &nbsp; Update
            </button>
            </form>

        </div>
    )
 }
 

 }
 
 