import React from "react";
import Navbar from "../components/navbar";

const Seller = () => {

    return (
        <>
            <Navbar />
            <form style={{width: "80%", margin: "20px auto"}}>
                <div className="mb-3">
                    <label htmlFor="nftName" className="form-label">NFT Name</label>
                    <input type="text" className="form-control" id="nftName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nftDesc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="nftDesc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nftPrice" className="form-label">NFT Price</label>
                    <input type="number" className="form-control" id="nftPrice" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nftFile" className="form-label">Upload NFT</label>
                    <input type="file" className="form-control" id="nftFile" />
                </div>

                <button type="submit" className="btn btn-primary">Create NFT</button>
            </form>
        </>
    );
}

export default Seller;