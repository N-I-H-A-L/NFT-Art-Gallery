import { words_smooth } from "../data";
import { CanvasCards } from "./ui/Card";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function Services() {
  return (
    <div className="mb-2">
      <div className="flex flex-col items-center justify-center pb-20 bg-black">
        <TypewriterEffectSmooth words={words_smooth} />
      </div>
      <CanvasCards />
    </div>
  );
}

export default Services;
