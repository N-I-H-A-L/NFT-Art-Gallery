import React from "react";

const Card = () => {

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={"/logo512.png"} style={{width: "10vw", margin: "auto"}} className="card-img-top" alt="NFT" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
            </div>
        </>
    );
}

export default Card;