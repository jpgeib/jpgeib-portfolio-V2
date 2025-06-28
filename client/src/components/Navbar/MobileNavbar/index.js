import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MobileNavbar = (props) => {
    return (
        <Menu id="mobile-navbar" secondary>
            <Menu.Item as={Link} to="/" name="home" />
            <Menu.Item as={Link} to="/about" name="about" />
            <Menu.Item as={Link} to="/contact" name="contact" />
            <Menu.Item as={Link} to="/login" name="login" />
            <Menu.Item as={Link} to="/register" name="register" />
            <Menu.Item as={Link} to="/profile" name="profile" />
        </Menu>
    );
};

export default MobileNavbar;