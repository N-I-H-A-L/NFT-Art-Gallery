import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../utils/cn";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { HoverBorderGradient } from "./hover-border-gradient";
import { navIcons } from "../../../data";

export const FloatingNav = ({ navItems, className }) => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navStyles = cn(
    "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-5 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
    className,
    { "flex-col md:flex-row": menuOpen }
  );

  const navBgStyles = {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };

  return (
    <>
      <div className="max-md:hidden flex gap-4 absolute top-10 left-10 z-10">
        {navIcons.map((item, index) => (
          <Button key={index} variant="outline" size="icon">
            <img src={item.img} alt={item.alt} />
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={navStyles}
          style={navBgStyles}
        >
          <div className="flex flex-row md:flex-row gap-4 items-center justify-between w-full">
            {navItems.map((navItem, idx) => (
              <div
                key={`link=${idx}`}
                onClick={() => navigate(navItem.link)}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-xs"
                )}
              >
                <span className="text-sm !cursor-pointer">{navItem.name}</span>
              </div>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              className="ml-auto md:hidden"
            >
              <img src="hamburger.svg" alt="Menu" />
            </Button>
          </div>

          {menuOpen && (
            <div className="flex gap-4 w-full justify-evenly items-center mt-4 md:hidden">
              <div className="flex gap-4">
                {navIcons.map((navItem, idx) => (
                  <Button key={idx} variant="outline" size="icon">
                    <img src={navItem.img} alt={navItem.alt} />
                  </Button>
                ))}
              </div>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                onClick={() => navigate("/profile")}
              >
                <img src="user.svg" alt="User" className="h-6" />
                <span className="mx-2 text-xs">Profile</span>
              </HoverBorderGradient>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="max-md:hidden absolute top-10 right-10 text-center z-10">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          onClick={() => navigate("/profile")}
        >
          <img src="user.svg" alt="User" className="h-6" />
          <span className="mx-2">Profile</span>
        </HoverBorderGradient>
      </div>
    </>
  );
};
