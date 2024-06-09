import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav()
{
    return(
    <nav className='nav'>
        <Link to={'/'}><img src='/it.png' alt='...'/></Link>
        <p><Link to={'/'} className='nav-link'>
        IT 대학교
        </Link></p>
    </nav>
    )
}