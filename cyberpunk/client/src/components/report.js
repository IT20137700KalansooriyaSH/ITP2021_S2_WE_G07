
import React,{ Component } from 'react';
import axios from 'axios';
//import 
import jspdf from 'jspdf'
import "jspdf-autotable"



export default class report extends Component{
  constructor(props){
     super(props);
    this.state={
 
	
      phones:[]
    };
  }
  componentDidMount(){
     this.retrievePhones();

  }
  retrievePhones(){
    axios.get("/phone/ret").then(res =>{
        if(res.data.success){
          alert("You Can Generate reports By using the Button");
          this.setState({
            phones:res.data.existingPhones
          
          });
            console.log(this.state.phones);
        }
    });
  }

 


  render(){

    //generate report
    const generatePDF = PhoneR => {

      const doc = new jspdf();
      const tableColumn = ["PID","SID","Phone", "month","Time"]; 
      const tableRows = [];
      const date = Date().split(" ");
      const dateStr = date[1] + "-" + date[2] + "-" + date[3];
  
      PhoneR.map(Phoneticket => {
          const PhoneticketData = [
			 Phoneticket.PID,
			 Phoneticket.SID,
              Phoneticket.PhoneNumber,
              Phoneticket.month,
              Phoneticket.Date,

            
             
          ];
          tableRows.push(PhoneticketData);
      })
      doc.text("ALL ADDED PHONES", 70, 8).setFontSize(13);
      doc.text("Telephone Detail Report", 14, 16).setFontSize(13);
      doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
	 
	

      
      //right down width height
      //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
      doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
      doc.save("Telephone Details Report.pdf");
   
    };




    return(


  
      <div className ="container">
         
    <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
     <h2>Telephones In the Buidling</h2>
     <br/>
     </div>
         <p> Telephone Numbers </p>
        
          <table className = "table">
            <thead>
              
              <tr> 
                <th scope = "col"># </th>
                <th scope = "col">PID</th>
                <th scope = "col">PhoneNumber</th>
                <th scope = "col">BID</th>
                <th scope = "col">SID </th>
                <th scope = "col">month</th>
                <th scope = "col">Time</th>
               

              </tr>
            </thead>
            <tbody>
              {this.state.phones.map((phones,index) =>(
                <tr>
                  <th scope = "row"> {index +1}</th>
                  <td>
                      <a href ={`/phone/${phones._id}`}  style ={{textDecoration:'none'}}>
                      
                      {phones.PID}
                      </a>
                      </td>
                  <td>{phones.PhoneNumber}</td>
                  <td>{phones.BID}</td>
                  <td>{phones.SID}</td>
                  <td>{phones.month}</td>
                  <td>{phones.Date}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          </div>

           <div><h4>click the below Button TO GENERATE REPORT</h4></div>
          <center><button type="Print" class="btn btn-primary" onClick={() => generatePDF(this.state.phones)}>Generate Report</button></center>

          
       
      </div>
    )
  }
}

