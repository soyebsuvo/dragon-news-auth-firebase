import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import SlideNews from "./SlideNews";
import NewsCard from "./NewsDetails/NewsCard";
import { useEffect, useState } from "react";

export default function Home() {
    const [newses , setNewses ] = useState([]);
    useEffect(()=>{
        fetch("news.json")
        .then(res => res.json())
        .then(data => setNewses(data))
    },[])
  return (
    <div>
        <Header></Header>
        <SlideNews></SlideNews>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2">
                {
                    newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    </div>
  )
}
