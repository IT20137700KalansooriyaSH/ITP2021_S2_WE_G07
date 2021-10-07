import React,{ Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {Link} from 'react-router'
import axios from 'axios';



           




export default class sendMessage extends Component{    
     render(){
          return(

            


      
              <div>
              <div>
              <h1 className="h3 mb-3 font-weight-normal">WELCOME TO OUR CONTACT US PAGE </h1>
              
              <h5>ASK ANY THING FROM US WE WILL RESPONCE YOU WITHING 1 HOUR  YOU</h5>
              
              <center><img src={process.env.PUBLIC_URL +"/fb.png"} widthe="500" alt="Logo" /></center>
               <br/>

              </div>
              <h3><center><a href="https://www.facebook.com/Cyberpunk-SMART-City-112074117906429/?ref=pages_you_manage">Click this  Link to contact Us. </a></center></h3>
              
              <h4></h4>


              </div>
              
          );
       }

       }
      