import { HoverBorderGradient } from "./hover-border-gradient";

function ProfileBar() {
  return (
    <div className="absolute top-10 right-10 text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <img src="user.svg" alt="User" className="h-6" />
        <span className="mx-2">Profile</span>
      </HoverBorderGradient>
    </div>
  );
}

export default ProfileBar;
