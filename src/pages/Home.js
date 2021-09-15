import CardExampleCard from '../components/Card';
import { Card } from 'semantic-ui-react'
import Backdrop from '../components/Backdrop'

function Home(props) {
  return <div>
    {props.heading}

    <Card.Group>
    <Backdrop>
      <CardExampleCard />
    </Backdrop>
    
    <CardExampleCard />
    <CardExampleCard />
    <CardExampleCard />
    <CardExampleCard />
    <CardExampleCard />
    <CardExampleCard />
    <CardExampleCard />
    </Card.Group>
    </div>;
}

export default Home;
