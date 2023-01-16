import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='navigation'>
      <div className='link'><Link to="/users">Users</Link></div>
      <div className='link'><Link to="/cats">Cats</Link></div>
      <div className='link'><Link to="/dogs">Dogs</Link></div>
      <div className='link'><Link to="/customers">Customers</Link></div>    
    </div>
  )
}
