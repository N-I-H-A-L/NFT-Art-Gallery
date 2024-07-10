import React from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import { canvas_cards } from "../../../data";
import { useNavigate } from "react-router-dom";

export function CanvasCards() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
      {canvas_cards.map((card, index) => (
        <Card title={card.title} key={index} icon={<HoverIcon />} onClick={() => navigate(card.link)} >
          <CanvasRevealEffect
            animationSpeed={card.animationSpeed}
            containerClassName={card.containerClassName}
            colors={card.colors}
          />
        </Card>
      ))}
    </div>
  );
}

const Card = ({ title, icon, children, onClick }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative hover:cursor-pointer"
      onClick={onClick}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const HoverIcon = () => {
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="64px"
      height="64px"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path d="M48.294,26.119c-3.184-0.565-3.855,2.001-3.855,2.001s0.126-3.404-3.276-4.154c-2.987-0.659-3.98,2.318-3.98,2.318	s0.205-3.681-3.206-3.861c-3.131-0.165-3.501,2.845-3.501,2.845c-0.066-0.481-1.906-16.398-1.995-16.999	c-0.242-1.62-1.767-2.334-2.716-2.349c-1.225-0.019-2.573,1.235-2.554,2.616c0.004,0.339-0.039,20.824-0.057,29.256	C22.123,35.478,20.121,32.04,17,31c-3-1-5,1-5,1c6,11,9.017,21.024,18,25l-0.13-0.368c0.089,0.059,0.17,0.12,0.261,0.178	l17.704-3.404c0,0,1.626-3.228,2.482-7.616c0.871-4.467,1.087-9.023,1.036-11.186C51.273,31.264,50.976,26.595,48.294,26.119z" />
    </svg>
  );
};
