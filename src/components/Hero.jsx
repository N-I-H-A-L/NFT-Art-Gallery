import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/button";
import Sparkles from "./ui/Sparkles";
import { words } from "../data";

function Hero() {
  return (
    <div className="h-full w-full flex justify-center flex-col items-center px-4">
      <div className="text-4xl mx-auto mt-32 font-normal text-neutral-600 dark:text-neutral-400 text-center">
        <span className="text-5xl line-height leading-loose font-bold">
          Welcome to <span className="text-green-500">NFT</span> Art Gallery.
        </span>{" "}
        <br />
        Here you can <FlipWords words={words} />.
      </div>
      <div className="text-white my-8 flex gap-6">
        <Button variant="outline" size="default">
          Login
        </Button>
        <Button variant="default" size="default">
          Signup
        </Button>
      </div>
      <Sparkles />
    </div>
  );
}

export default Hero;
