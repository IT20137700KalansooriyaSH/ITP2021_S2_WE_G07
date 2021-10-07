
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

//Telecommunications

import search from './components/search';
import addTelephone from './components/addTelephone';
import deletePhone from './components/deletePhone';
import editTelephone from './components/editTelephone';
import TelephoneDetails from './components/TelephoneDetails';
import list from './components/list';
import page from './components/page';
import NavBar from './components/NavBar';
import report from "./components/report";
import sendMessage from "./components/sendMessage";


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
 
 




 
          


         <Route path ="/telecommunication" exact component={page}></Route>
         <Route path ="/list" exact component={list}></Route>
         <Route path="/add" component ={addTelephone}></Route>
         <Route path ="/delete" component={deletePhone}></Route>
         <Route path = "/edit/:id" component={editTelephone}></Route>
         <Route path = "/phone/:id" component={TelephoneDetails}></Route>
         <Route path = "/search" component={search}></Route>
         <Route path = "/report" component={report}></Route>
         <Route path = "/sendMessage" component={sendMessage}></Route>
        
        
       
  
         </div>
      </BrowserRouter>


    )




}


}

