import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav id='navbar-container'>
            <Link to = '/' className='navbar-item'>Home</Link>
            <Link to = '/create' className='navbar-item'>Create</Link>
        </nav>
    )
}

export default Navigation;