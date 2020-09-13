import React ,{useState} from "react";
import { Form } from "react-bootstrap/";
import states_names from "../static_data/states_names";
import Button from "@material-ui/core/Button";
import axios from "axios";
import  GoogleApiWrapper  from "./GoogleApiWrapper" ;


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
        <Form>
          <Form.Group controlId="stateSelector">
            <Form.Label>Example select</Form.Label>
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

