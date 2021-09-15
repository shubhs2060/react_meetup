import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='https://cdna.artstation.com/p/assets/images/images/021/642/742/large/ian-singh-naruto-and-sasuke-logo.jpg?1572436450' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <b>
        <Icon nbme='user' />
        22 Friends
      </b>
    </Card.Content>
  </Card>
)

export default CardExampleCard