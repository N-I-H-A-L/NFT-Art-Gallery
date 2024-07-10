import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/button";
import Sparkles from "../ui/sparkles";
import { words } from "../../../data";
import { Spotlight } from "../ui/spotlight";

function Hero() {
  return (
    <div className="h-full w-full flex justify-center flex-col items-center px-4">
      <div className="text-4xl max-md:text-2xl max-md:mt-44 mx-auto mt-32 font-normal text-neutral-600 dark:text-neutral-400 text-center">
        <div>
          <Spotlight
            className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="blue"
          />
          <Spotlight
            className="-top-40 left-0 md:-left-15 md:-top-40 h-screen"
            fill="white"
          />
        </div>
        <span className="text-5xl leading-loose font-bold max-md:text-3xl max-md:leading-relaxed">
          Welcome to <span className="text-green-500">NFT</span> Art Gallery.
        </span>{" "}
        <br />
        Here you can <FlipWords words={words} />.
      </div>

      <div className="text-white my-10 flex gap-6">
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
