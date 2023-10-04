import { Link } from 'react-router-dom'

export default function ErrorHandle() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h2 className="text-4xl">Error (404) </h2><Link className='btn btn-secondary' to="/">Go Home</Link>
    </div>
  )
}
