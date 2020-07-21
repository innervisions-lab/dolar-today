import React from "react";
import "../styles/css/App.css";
import Header from "../components/template/Header";
import Footer from "../components/template/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "../routes/routes";
export default (props) => {
    return (
        <BrowserRouter>
            <section className="app">
                <Header />
                <Router />
                <Footer />
            </section>
        </BrowserRouter>
    );
};
