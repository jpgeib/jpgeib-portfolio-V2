import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import HomeAbout from "../../components/HomeAbout";
import { axiosInstance } from "../../utils/api";

import "./style.css";

const Home = () => {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get("/auth/test");
                console.log(res.data);
            } catch (error) {
                console.error(error);
            };
        };
        fetchData();
    });

    return (
        <>
            <HomeAbout />
        </>
    );
};

export default Home;