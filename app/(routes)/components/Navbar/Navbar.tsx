import { NavbarProps as Props } from './navbar.type';

const Navbar = ({ user }: Props) => {
  return (
    <div>
      Navbar
      {user}
    </div>
  );
};

export default Navbar;
