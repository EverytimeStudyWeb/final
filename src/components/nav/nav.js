import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav()
{
    return(
    <nav className='nav'>
        <Link to={'/'}><img src='/it.png' alt='...'/></Link>
        <h1><Link to={'/'} className='nav-link'>
        IT 대학교
        </Link></h1>
    </nav>
    )
}