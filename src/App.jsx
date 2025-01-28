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

import IMG1 from "./assets/portfolio1.png";
import IMG2 from "./assets/portfolio2.gif";
import IMG3 from "./assets/portfolio3.png";
import IMG4 from "./assets/portfolio4.png";
import IMG5 from "./assets/portfolio5.png";
import ems from "./assets/ems.png";

import project1 from "./assets/portfolio1.png";
import project2 from "./assets/portfolio2.gif";
import project3 from "./assets/portfolio3.png";
import project4 from "./assets/portfolio4.png";
import project5 from "./assets/portfolio5.png";

const App = () => {
    let data = [
        {
            id: 1,
            image: IMG1,
            title: "음식예약사이트",
            github: "https://github.com/yoonsooho/foodOrder",
            demo: "https://timely-cheesecake-261d4f.netlify.app/",
            review: "음식 주문 웹사이트로, 원하는 음식을 주문 후 알맞은 정보를 입력하면 form을 통해 전달하는 웹 사이트를 구현하였습니다.",
            descriptionUrl: "https://perfect-volcano-440.notion.site/EMS-1708f8bdc874805ebbebf3aadd56a286?pvs=4",
        },
        {
            id: 2,
            image: ems,
            title: "EMS 사이트",
            github: "",
            demo: "https://ems-dev.vercel.app",
            review: "기기 예약 관리자 웹사이트로, 기기등록, 예약, 예약 확인, 예약 취소 등의 기능을 구현하였습니다.",
            descriptionUrl: "https://perfect-volcano-440.notion.site/EMS-1708f8bdc874805ebbebf3aadd56a286?pvs=4",
        },
        {
            id: 3,
            image: ems,
            title: "API메모 사이트",
            github: "",
            demo: "https://ems-dev.vercel.app",
            review: "api메모 사이트로 api를 메모처럼 간단하게 저장할 수 있는 웹사이트 입니다. (추후 업데이트 예정)",
            descriptionUrl: "https://perfect-volcano-440.notion.site/EMS-1708f8bdc874805ebbebf3aadd56a286?pvs=4",
        },
    ];

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
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
