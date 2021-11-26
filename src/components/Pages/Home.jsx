import React from 'react'
import { Link } from "react-router-dom";
import { HomeCss } from '../../Reference-import'
// import '../../styles/Home.css'

const Home = () => {
    const BannerImg = "https://www.freepik.com/blog/app/uploads/2018/02/raw-pasta-with-tomatoes-and-cheese-on-a-black-table-making-a-circle_1309-53.jpg"
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImg})` }}>
         <h1 style={{ fontWeight: "bold" }}>Food Corner</h1>
         <p> Food by culture</p>
         <Link to="/menu">
          <button> Order now </button>
        </Link>
        </div>
    )
}

export default Home
