import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NewsDetails({ news }) {
    const {title , image_url , details , _id} = news;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0,200)} <Link className='text-blue-700 font-bold' to={`/news/${_id}`}>Read More...</Link></p> : <p>{details}</p>
                }
                
            </div>
        </div>
    )
}
NewsDetails.propTypes = {
    news:PropTypes.object
}