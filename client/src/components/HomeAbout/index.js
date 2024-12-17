import React from "react";
import { Header, Divider, Image } from "semantic-ui-react";

const HomeAbout = () => {
    return (
        <div id="home-about-container">
            <div id="home-about">
                <div className="home-about-col">
                    <Image src="#" />
                </div>
                <div className="home-about-col">
                    <Header as="h3">Full-Stack Web Developer</Header>
                    <Divider />
                    <p>
                        Hello, and thank you for visiting my corner of the web! My name is James Geib,
                        a Full-Stack React Developer with over 4 years of experience crafting intuitive
                        and responsive web applications. My passion lies in creating seamless digital experiences,
                        blending technical expertise with creativity to bring ideas to life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
