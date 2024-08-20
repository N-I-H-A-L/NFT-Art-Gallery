import { useState } from "react";
import { card_data, search_placeholders } from "../../../data";
import { Label } from "../ui/label";
import { SearchBar } from "../ui/search-bar";
import { Switch } from "../ui/switch";
import { NftCard } from "../ui/nft-card";

function MarketPlace() {
  const [checked, setChecked] = useState(false);

  function onCheckedChange() {
    setChecked(!checked);
  }

  const onSubmit = (value) => {
    console.log(value);
  };

  const filteredData = checked
    ? card_data.filter((item) => item.owned)
    : card_data;

  return (
    <div className="h-full w-full flex flex-col justify-center items-center px-4 ">
      <h1 className="text-3xl font-bold mt-32 max-md:mt-36 mb-12">Marketplace</h1>
      <div className="flex w-auto justify-center items-center gap-5">
        <SearchBar placeholders={search_placeholders} onSubmit={onSubmit} />
        <div className="flex items-center gap-2 my-5">
          <Switch
            id="owned"
            checked={checked}
            onCheckedChange={onCheckedChange}
          />
          <Label htmlFor="owned">Owned NFTs</Label>
        </div>
      </div>
      <div className="mt-8 w-full flex flex-wrap justify-center gap-10">
        {filteredData.length ? (
          filteredData.map((card, index) => <NftCard key={index} {...card} />)
        ) : (
          <p className="text-2xl font-bold text-center">No NFTs found</p>
        )}
      </div>
    </div>
  );
}

export default MarketPlace;
