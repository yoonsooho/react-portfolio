import React from "react";
import { motion } from "framer-motion";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import About from "./component/about/About";
import Experience from "./component/experience/Experience";
import Services from "./component/services/Services";
import Portfolio from "./component/portfolio/Portfolio";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

import ems from "./assets/ems.png";
import apimanager from "./assets/apimanager.png";

const App = () => {
    let data = [
        {
            id: 1,
            image: ems,
            title: "EMS 사이트",
            github: "",
            demo: "https://ems-dev.vercel.app",
            review: "기기 예약 관리자 웹사이트로, 기기등록, 예약, 예약 확인, 예약 취소 등의 기능을 구현하였습니다.",
            descriptionUrl: "https://perfect-volcano-440.notion.site/EMS-1708f8bdc874805ebbebf3aadd56a286?pvs=4",
        },
        {
            id: 2,
            image: apimanager,
            title: "API매니저 사이트",
            github: "https://github.com/yoonsooho/apimanager",
            demo: "https://ems-dev.vercel.app",
            review: "api매니저 사이트로 api를 메모처럼 간단하게 저장할 수 있는 웹사이트 입니다.",
            descriptionUrl: "https://perfect-volcano-440.notion.site/api-18d8f8bdc87480e49cc7e1003c18f1ff?pvs=4",
        },
    ];

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "linear",
            },
        },
    };

    return (
        <>
            <Header />
            <Nav />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <About />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Experience />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Services />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Portfolio data={data} />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Testimonials data={data} />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Contact />
            </motion.div>
            <Footer />
        </>
    );
};

export default App;
