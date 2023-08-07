import { Link } from "react-router-dom";

const Header = () => {
    const navItem=<>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/'>About us</Link></li>
     <li><Link to='/'>View Hospitals</Link></li>
     <li><Link to='/'>Contact us</Link></li>
    </>
    return (
        <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src="https://s3-alpha-sig.figma.com/img/7aff/313c/1fdad0e29dca16618cd104e8b63219da?Expires=1691971200&Signature=mIGHeLA7HMp2e5VYPBwR9mSSQbfjduhTRdpnENH6WIE-zloiC7T~bqL1q9SBIt3ZOO9q460X1roC0IYTGf02j30t6RCbBxJvakqY5RBUCeqN8jfxw45l60sTfPPNfYhywrlmWRlvugCwMuMGXtRbT4q1vxcoWts-y30YO8fj5ke6rOYTAp~Gf-QOC5iwWUOgMIRE~uLGeKC3GYLc7YU-YKhWWH~M-kldXclMO3maPvxXKz4MyBalP2HtLUFKQeW1m6khyKrDjKLzq8g~5s32J7iPYr6RS9aPM0BH7J-A1g-ThWbZk~Z7iP7PVd1q3dLvn1AEDdAOLWIr1bULzPLpTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="w-[214px] h-[63px]" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    );
};

export default Header;