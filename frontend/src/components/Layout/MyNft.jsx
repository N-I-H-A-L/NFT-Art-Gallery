import { card_data } from "../../../data";
import { Lamp } from "../ui/lamp";
import { NftCard } from "../ui/nft-card";

function MyNft() {
  return (
    <>
      <Lamp title="My NFTs" />
      <div className="flex flex-wrap justify-center gap-10 relative -top-24 max-md:-top-36">
        {card_data.length ? (
          card_data.map((card, index) => {
            if (card.owned) {
              return <NftCard key={index} {...card} />;
            }
          })
        ) : (
          <p className="text-2xl font-bold text-center">No NFTs found</p>
        )}
      </div>
    </>
  );
}

export default MyNft;
