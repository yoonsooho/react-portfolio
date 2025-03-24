import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Loading from "./component/loading/Loading";

import apimanager from "./assets/apimanager.png";
import ems from "./assets/ems.png";
import journey from "./assets/journey.png";
import MyBlog from "./component/myblog/MyBlog";

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 페이지 로드 시뮬레이션 (실제로는 필요한 데이터 로드 후에 false로 설정)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2초간 로딩 화면 표시

        return () => clearTimeout(timer);
    }, []);

    let data = [
        {
            id: 1,
            image: ems,
            title: "EMS 사이트",
            github: "",
            demo: "https://ems-dev.vercel.app",
            review: "기기 예약 관리자 웹사이트로, 기기등록, 예약, 예약 확인, 예약 취소 등의 기능을 구현하였습니다. nextjs로 구현하였습니다.(testId : admin, pw : 1)",
            descriptionUrl: "https://perfect-volcano-440.notion.site/EMS-1a78f8bdc8748077a225de5866e62811?pvs=4",
        },
        {
            id: 2,
            image: apimanager,
            title: "API매니저 사이트",
            github: "https://github.com/yoonsooho/apimanager",
            demo: "https://apimanager-z5tr.vercel.app",
            review: "api매니저 사이트로 api를 메모처럼 간단하게 저장할 수 있는 웹사이트 입니다. nextjs, supabase로 db설계부터 디자인 기획까지 개발한 풀스택 웹사이트 입니다.(testId : a@naver.com, pw : 1)",
            descriptionUrl: "https://perfect-volcano-440.notion.site/API-1a78f8bdc8748081a8b1eb749fe45ca5?pvs=4",
        },
        {
            id: 3,
            image: journey,
            title: "여정 사이트",
            github: "",
            demo: "https://dxkiwmo9p9ise.cloudfront.net",
            review: "여행 동행자 모집 및 각 여행지의 정보를 공유할 수 있는 웹사이트 입니다.react로 개발하였고 aws s3 및 cloudfront를 사용하여 배포하였습니다.",
            descriptionUrl: "https://perfect-volcano-440.notion.site/Journey-1a78f8bdc87480eeb493f22a7a3f0471?pvs=4",
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

    // 로딩 중일 때 로딩 컴포넌트 렌더링
    if (loading) {
        return <Loading />;
    }

    // 기존 컴포넌트 렌더링
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
                <MyBlog />
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
                <Portfolio data={data} sectionVariants={sectionVariants} />
            </motion.div>
            {/* 불필요한 정보로 판단 주석처리 진행 */}
            {/* <motion.div
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Testimonials data={data} />
            </motion.div> */}

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
