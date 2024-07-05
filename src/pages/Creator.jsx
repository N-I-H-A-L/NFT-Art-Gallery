import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className='container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default Dashboard;