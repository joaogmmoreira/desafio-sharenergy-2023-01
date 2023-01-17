import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='navigation'>
      <Link to="/users">Users</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/dogs">Dogs</Link>
      <Link to="/customers">Customers</Link>    
    </div>
  )
}
