import React ,{useState} from "react";
import { Form } from "react-bootstrap/";
import states_names from "../static_data/states_names";
import Button from "@material-ui/core/Button";
import axios from "axios";



//AIzaSyAEq-OyHRzCJ1pvQKV9Qwq0INafDci8G3A

const LocationsToVote  = () => {
  const list = states_names.map((state) => <option key={state}>{state}</option>);
  const [state, changeState] = useState (null); 
  const getState = async () => {
    try {
    const {data} = await axios.get("https://voterapppennapps.herokuapp.com/api/state/getstate/" + state) ;
    
    if (data.pollingLocation) window.open(data.pollingLocation, "_blank");
    
      } catch (error) {
        console.log(error);
      }
  }

  const handleChange = (event) => {
    changeState(event.target.value);
  }
  return ( 
    <div>
      <h6> One of the most important things to a smooth voting experience, especially
          with the tumultous times that we as a nation are dealing with as we speak, is  
          knowing precisely where and when you need to go on Election Day, whether
          to vote in person or drop off your ballot. Hence, select your state and you
          will be linked to the State's page where you can see your voting place for
          November 3, 2020. </h6>
        <Form>
          <Form.Group controlId="stateSelector">
            <Form.Label>Select your state:</Form.Label>
            <Form.Control as="select" size="lg" onChange={handleChange}>
              {list}
            </Form.Control>
          </Form.Group>
        </Form>
        <Button
        variant="contained"
        onClick={() => {
          getState();
        }}
        target="_blank"
        color="primary"
      >
        Find your voting location in {state ?? "your state"}!
      </Button>

      </div>
   );
}
 
export default LocationsToVote ;

