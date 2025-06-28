import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import "../style.css";

const Navbar = (props) => {
    return (
        <>
            <DesktopNavbar />
            <MobileNavbar />
        </>
    );
};

export default Navbar;