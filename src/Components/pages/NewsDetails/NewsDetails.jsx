import { Link, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";

export default function NewsDetails() {
    const [newses , setNewses ] = useState([]);
    const {loading } = useContext(authContext);
    useEffect(()=>{
        fetch("/news.json")
        .then(res => res.json())
        .then(data => setNewses(data))
    },[])
    const params = useParams();
    const news = newses.find(news => news._id == params.id)
    // const { title, image_url, details } = news;
    if(loading) return <p>nothing</p>

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={news?.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{news?.title}</h2>
                            <p>{news?.details}</p>
                            <div className="card-actions">
                                <Link to="/"><button className="btn btn-primary">Go back to Home</button></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    )
}
