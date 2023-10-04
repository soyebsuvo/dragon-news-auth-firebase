import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function LeftSideNav() {
    const [categories , setCategories ] = useState([])

    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
  return (
    <div>
      <h2 className="text-2xl">All Categories</h2>
      <h2 className="text-xl my-3 btn normal-case bg-[#E7E7E7] text-center w-full py-3 rounded">National News</h2>
      {
        categories.map(category => <Link className="block my-3 hover:underline" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
      }
    </div>
  )
}
