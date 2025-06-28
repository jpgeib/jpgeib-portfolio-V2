import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DesktopNavbar = (props) => {
    return (
        <Menu id="desktop-navbar" secondary>
            <Menu.Item as={Link} to="/" name="home" />
            <Menu.Item as={Link} to="/about" name="about" />
            <Menu.Item as={Link} to="/contact" name="contact" />
            <Menu.Item as={Link} to="/login" name="login" />
            <Menu.Item as={Link} to="/register" name="register" />
        </Menu>
    );
};

export default DesktopNavbar;