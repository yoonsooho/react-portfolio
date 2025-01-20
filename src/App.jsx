import React from "react";
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
            title: "firebase와 react를 이용한 음식 주문 사이트",
            github: "https://github.com/yoonsooho/foodOrder",
            demo: "https://timely-cheesecake-261d4f.netlify.app/",
            project: project1,
            review: "음식 주문 웹사이트로, 원하는 음식을 주문 후 알맞은 정보를 입력하면 form을 통해 전달하는 웹 사이트를 구현하였습니다.",
        },
        {
            id: 2,
            image: IMG2,
            title: "렌탈전용 사이트 Web App",
            github: "https://github.com/yoonsooho/kkuda",
            demo: "",
            project: project2,
            review: "프론트엔드 개발자 5명, 웹 디자이너 5명과 기업연계 프로젝트를 하여 만든 랜탈 서비스를 하는 웹 사이트 입니다.",
        },
        {
            id: 3,
            image: IMG3,
            title: "New York Times API를 이용한 뉴스 검색 페이지",
            github: "https://github.com/yoonsooho/news-mini-alone",
            project: project3,
            demo: "",
            review: "프론트엔드 개발자5명과 협업하여 만든 New York Times Api를 이용한 검색 웹사이트 입니다.",
        },
        {
            id: 4,
            image: IMG4,
            title: "react를 이용한 가계부 월별 비용 계산기",
            github: "https://github.com/yoonsooho/cost-by-date",
            demo: "https://symphonious-lily-1ce7d5.netlify.app/",
            project: project4,
            review: "매월 얼마나 사용하였는지 등록이 가능하며 지표를 그래프로 확인할 수 있습니다.",
        },
        {
            id: 5,
            image: IMG5,
            title: "타입스크립트와 리액트를 이용한 todoList",
            github: "https://github.com/yoonsooho/todo-list-with-typescript",
            project: project5,
            demo: "https://63a06c9a04318b02ef82409c--stately-twilight-33f42c.netlify.app/",
            review: "타입스크립트와 리액트를 사용하여 만든 todoList입니다.",
        },
    ];

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio data={data} />
            <Testimonials data={data} />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
