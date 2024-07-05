import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const redirectDashboard = () => {
        navigate("/dashboard");
    }

    const redirectSeller = () => {
        navigate("/sellnfts");
    }

    return (
        <div className="nav-parent">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand nav-logo" href="#">MintSpace</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-items collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={() => navigate("/")}>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">My NFTs</a>
                            </li>
                            <li className="nav-item" onClick={() => redirectSeller()}>
                                <a className="nav-link active" href="#">Sell NFTs</a>
                            </li>
                            <li className="nav-item" onClick={() => redirectDashboard()}>
                                <a className="nav-link active" href="#">Creator Dashboard</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;