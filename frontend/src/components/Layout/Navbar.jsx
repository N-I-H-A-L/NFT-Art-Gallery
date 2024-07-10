import { navItems } from "../../../data";
import { FloatingNav } from "../ui/floating-navbar";

function Navbar() {
  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default Navbar;
