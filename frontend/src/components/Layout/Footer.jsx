const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10 max-md:pt-0 bg-black footer-light-effect">
      <div className="flex mt-16 justify-center items-center">
        <p className="md:text-base text-sm md:font-normal text-center font-bold">
          Copyright © {date} NFT Art Gallery
        </p>
      </div>
    </footer>
  );
};

export default Footer;
