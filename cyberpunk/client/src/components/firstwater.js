import React,{ Component } from "react";




 export default class firstwater extends Component{

 render(){
     return(

      
        <div class="container px-4">
        <div class="row gx-8">
          <div class="col">
          <a href="/bill" style={{textDecoration:'none' ,color:'white'}}> 
           <div class="p-5 border bg-dark">Water bill managing</div>
           </a>
          </div>
          <div class="col">
          <a href="/Allmonth" style={{textDecoration:'none' ,color:'white'}}> 
            <div class="p-5 border bg-dark">water Qualitydetails</div>
            </a>
          </div>
          <div class="col">


          <a href="/announcement" style={{textDecoration:'none' ,color:'white'}}> 
            <div class="p-5 border bg-dark">water intreption notification</div>
         
           </a>

          </div>

        </div>
      </div>
     )
 }
 


 }