import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

function Header(props) {
  return (
    <Menu>
      <Menu.Item name='Home'>
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item name='New Meetup'>
        <Link to="/new">New Meetup</Link>
      </Menu.Item>

    </Menu>
  )

}

export default Header;
