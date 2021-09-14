
import React,{Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';


import addbill from "./components/addbill";
import AllBills from "./components/AllBills";

import Announcement from "./components/announcement";
import Createmonth from "./components/Createmonth";
import Editebill from "./components/Editebill";
import Editmonth from "./components/Editmonth";

import month from "./components/month";


import Qualitydetails from "./components/Qualitydetails";
import Allmonths from "./components/Allmonths";


import firstwater from "./components/firstwater";
import AdminSideBar from "./components/Adminsidebar";



export default class App extends Component{
render(){
return(
 <BrowserRouter> 
 

 <AdminSideBar/>
  

  
   <div class="content">
    
  
<Route path="/waterResourse" exact component={firstwater}></Route>
<Route path="/monthUsers" exact component={month}></Route>
 <Route path="/editbill/:id" exact component={Editebill}></Route>
 <Route path="/bill" exact component={AllBills}></Route>
 <Route path="/billcreate" exact component={addbill}></Route>
 <Route path="/Allmonth" exact component={Allmonths}></Route>
 <Route path="/addmonthsdetails" component={Createmonth}></Route>
 <Route path="/editmonth/:id" component={Editmonth}></Route>
 <Route path="/month/:id" component={Qualitydetails}></Route>
 <Route path="/announcement" component={Announcement}></Route>
 
 </div>
 </BrowserRouter>

 
)



}


}