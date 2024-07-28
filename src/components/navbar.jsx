import { navItems } from "../data";
import ProfileBar from "./ui/ProfileBar";
import SocialMedia from "./ui/SocialMedia";
import { FloatingNav } from "./ui/floating-navbar";

function Navbar() {
  return (
    <div>
      <SocialMedia />
      <FloatingNav navItems={navItems} />
      <ProfileBar />
    </div>
  );
}

export default Navbar;
