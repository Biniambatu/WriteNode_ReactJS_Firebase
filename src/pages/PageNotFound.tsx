import { Link } from 'react-router-dom'
import notFound from '../assets/image/page-not-found.jpg'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <p>404 / Page Not Found</p>
      <img src={notFound} alt='notFound'/>
      <Link to='/'>
         <button>Back To Home</button>
      </Link>
    </div>
  )
}

export default PageNotFound