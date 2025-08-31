import { NavbarData } from "./NavbarData";
import logo from "/timeline-logo.png";

const Navbar = () => {
  return (
    <div className="flex bg-[#597B86] text-white gap-4 items-center laptop:px-16">
      <div>
        <img height={40} width={50} src={logo} />
      </div>

      {NavbarData?.map((e, index) => (
        <div className="text-[0.90rem]" key={index}>{e.name}</div>
      ))}
    </div>
  );
};

export default Navbar;
