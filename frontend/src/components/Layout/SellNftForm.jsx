import { useState, useRef } from 'react';
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../../utils/cn";
import { Textarea } from "../ui/textarea";

export function SellNftForm() {
  const [preview, setPreview] = useState(null);
  const [imageName, setImageName] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
      setPreview(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setImageName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative max-w-md w-full mx-auto mt-28 max-md:mt-36 max-md:w-[90vw] rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-50">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Sell your NFT
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-col space-y-1 md:space-y-5 md:space-x-0 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">NFT name</Label>
            <Input id="firstname" placeholder="doge-art" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="description">Description</Label>
            <Textarea placeholder="Type your description here." className="bg-zinc-800" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="price">Price(ETH)</Label>
            <Input id="price" placeholder="Price" type="number" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="file">Upload your NFT</Label>
            <Input
              id="file"
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              onChange={handleImageChange}
              ref={fileInputRef}
              required
            />
          </LabelInputContainer>
        </div>

        {preview && (
          <div className="relative mb-4">
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
            >
              X
            </button>
            <p className="text-gray-500 text-sm mt-2">{imageName}</p>
          </div>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sell &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
