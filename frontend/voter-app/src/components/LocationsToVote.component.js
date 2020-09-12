import React  from "react";
import  GoogleApiWrapper  from "./GoogleApiWrapper" ;
import Iframe from 'react-iframe'

//AIzaSyAEq-OyHRzCJ1pvQKV9Qwq0INafDci8G3A

const LocationsToVote  = () => {


  return ( 
    <div>
        <p>You are on the LocationsToVote component!</p>  
       
<Iframe url="https://voterlookup.elections.ny.gov/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
       
      </div>
   );
}
 
export default LocationsToVote ;

