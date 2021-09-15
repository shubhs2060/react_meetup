import { Form } from "semantic-ui-react";
import Backdrop from "../components/Backdrop";

function NewMeet(props) {
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  function handleSubmit(event){
    event.preventDefault();
    fetch("https://react-refresher-a8d20-default-rtdb.firebaseio.com/movies.json", { headers: {
      'Content-Type': 'application/json'
    },method: "POST", body: JSON.stringify({"f_name": "Ryan"})}).then((response) => { console.log(response) })
    alert("asa")
  }
  return (
    <Backdrop>
    <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Select
            fluid
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Backdrop>
  );
}

export default NewMeet;
