import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import classes from "./Services.module.css";
import { AnimatePresence, motion } from "framer-motion";
const data = [
    {
        id: Math.random(),
        content: "아파트모아",
        description: [
            {
                title: "로그인 기능 구현",
                content: [
                    "로그인 기능을 쿠키를 httponly하여 사용하려 했으나 로그인 api자체에서 데이터를 body로 받게 설계 되어 있기 때문에 스토리지로 변경",
                    "세션스토리지와 로컬스토리를 이용하여 자동로그인도 구현",
                ],
                isOpen: false,
            },
            {
                title: "아파트 공지사항 및 개인글과 이미지 및 파일(엑셀 한글)을 올릴 수 있는 게시판 기능 구현",
                content: [
                    "게시판을 사용하게 된다면 다른 사람과 공유할때 같은 검색어와 페이지가 있어야 된다고 생각했기 때문에 게시판 검색어 및 현재 페이지, 게시판 detail페이지를 쿼리스트링으로 저장",
                    "초기 화면 렌더링시 약간의 깜빡임으로 인한 문제를 useLayoutEffect로 해결",
                ],
                isOpen: false,
            },
            {
                title: "각 페이지의 로그인 검사 기능 추가",
                content: [
                    "각페이지 접근시 로그인 유무 및 현재 아파트 id를 확인해야 되는 절차 발생으로 인해 HOC를 사용하여 특정 페이지 로그인 유무 및 아파트 id 확인하는 api요청 코드 작성",
                ],
                isOpen: false,
            },
            {
                title: "사이드메뉴바 생성 및 drag and drop을 활용한 메뉴수정 기능 구현",
                content: [
                    "관리자의 편의성을 위해 사이트 메뉴바 순서 변경 기능을 라이브러리 없이 자체적으로 만든 DND로 구현",
                ],
                isOpen: false,
            },
            {
                title: "도커를 활용한 내부 nginx와 연결 후 배포",
                content: ["도커, 도커 컴포즈, nginx를 활용한 특정 ip( 외부 ip와 nginx로 연결되어 있는 ip )에 배포"],
                isOpen: false,
            },
            {
                title: "code split 진행",
                content: [
                    "초기 렌더링 속도를 향상을 위한 lazy loading을 활용한 code split 진행 (초기 번들 크기 1.5MB → 1.2MB)로 향상",
                ],
                isOpen: false,
            },
            {
                title: "전역상태관리 렌더링 문제해결",
                content: [
                    "문제점: 전역 상태 관리 객체가 지나치게 커져 복잡성과 유지보수 비용 증가 문제 발생",
                    "해결 방법: 전역 상태 관리 로직을 모듈화하여 상태를 관련 기능 단위로 분리 및 객체 사용시 사용 요소만 변수 할당 진행",
                ],
                isOpen: false,
            },
            {
                title: "컴포넌트 재사용을 위한 커스텀 훅 생성",
                content: [
                    "문제점: 게시판 형태의 컴포넌트마다 동일한 상태(state)와 구조를 반복적으로 관리하며 코드량이 증가",
                    "해결 방법: 공통 상태 관리 로직을 커스텀 훅으로 추출하여 재사용성을 높이고 코드 중복을 제거",
                ],
                isOpen: false,
            },
            {
                title: "게시판 공용 컴포넌트 생성 및 관리",
                content: [
                    "문제점: 여러 곳에서 비슷한 게시판 컴포넌트를 각각 생성하며 발생하는 비효율성과 개발 시간 증가",
                    "해결 방법: 공용으로 사용할 수 있는 게시판 컴포넌트를 설계하고, 다양한 요구사항에 맞게 커스터마이징이 가능하도록 변경",
                ],
                isOpen: false,
            },
        ],
        usedSkill: ["js", "react", "react-query", "css-module", "redux-toolkit"],
    },
    {
        id: Math.random(),
        content: "골프존 CS 사이트 진행",
        description: [
            {
                title: "로그인 기능 구현",
                content: ["일정 시간이 지나면 로그아웃 되는 기능을 구현하기 위해 쿠키를 이용하여 유효시간 설정"],
                isOpen: false,
            },
            {
                title: "회원 정보리스트 생성 및 디테일 페이지 완성",
                content: [
                    "mui 선택 이유 : 자세한 디자인이 없고 마무리를 빠르게 지어야 되는 프로젝트였기에 빠르게 ui를 만들 수 있는 mui를 선택",
                    "mui를 활용한 각 유저정보 리스트 생성",
                    "mui를 활용한 각유저의 디테일 정보 및 공통 모달 생성",
                ],
                isOpen: false,
            },
            {
                title: "centos 환경에서 도커 및 nginx를 사용한 웹서버 구축",
                content: ["dockercompose를 이용해 nginx 와 프로젝트 빌드 후 port 3000번에 띄운 nextjs를 연결"],
                isOpen: false,
            },
        ],
        usedSkill: ["ts", "nextjs", "tailwindcss", "docker", "docker-compose", "nginx", "mui"],
    },
    {
        id: Math.random(),
        content: "GTM 사이트(점주,프로,매니저의 레슨 및 근무시간 등록 사이트) 유지보수 및 신규개발",
        description: [
            {
                title: "drag and drop을 활용한 레슨 시간 변경",
            },
            {
                title: "근무시간 등록과 레슨등록 페이지의 일원화 진행",
            },
            {
                title: "입력기간 중 특정요일만 근무를 등록하는 기능 추가",
            },
            {
                title: "타임라인(현재 시간 바) 실시간 업로드 기능 추가",
            },
            {
                title: "레슨의 현상태(예약완료, 이용완료, 이용취소) 변경 기능 추가",
            },
            {
                title: "특수근무를 등록할 수 있는 근무등록 모달 및 페이지 추가",
            },
            {
                title: "레슨 휴게시간 등록기능 추가",
            },
            {
                title: "레슨 상태변경 기능 추가",
            },
            {
                title: "오퍼레이터 와 GTM사이트 공지사항 기능 추가",
            },
        ],
        usedSkill: ["vue", "vuex", "typescript", "rxjs", "bootstrap", "vuetify"],
    },
];

const Services = () => {
    const [serviceData, setServiceData] = useState(data);

    const toggleHandler = (itemId, descriptionIndex) => {
        setServiceData((prev) =>
            prev.map((item) => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        description: item.description.map((desc, index) =>
                            index === descriptionIndex ? { ...desc, isOpen: !desc.isOpen } : desc
                        ),
                    };
                }
                return item;
            })
        );
    };
    return (
        <section id="services">
            <h5>projects</h5>
            <h2>진행한 프로젝트</h2>
            <div className={`container ${classes["services__container"]}`}>
                {serviceData.map((item, i) => (
                    <motion.article
                        className={classes.service}
                        key={item.id}
                        viewport={{ once: true, amount: 0.3 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ y: { duration: 0.2, ease: "linear" } }}
                    >
                        <div className={classes["service__head"]}>
                            <h3>{item.content}</h3>
                        </div>
                        <ul className={classes["service__list"]}>
                            {item.description.map((description, index) => (
                                // React.Fragment로 여러 요소를 그룹화 (고유 key 부여)
                                <React.Fragment key={`${item.id}-${index}`}>
                                    {/* 아코디언 헤더 - 클릭 시 토글 */}
                                    <li
                                        onClick={() => {
                                            // content가 있는 경우에만 토글 가능
                                            if (description.content) {
                                                toggleHandler(item.id, index);
                                            }
                                        }}
                                        style={{ cursor: description.content ? "pointer" : "default" }}
                                    >
                                        {/* 아이콘과 제목을 포함하는 컨테이너 */}
                                        <div className={classes["service__list-icon-container"]}>
                                            <BiCheck className={classes["service__list-icon"]} />
                                            <p>{description.title}</p>
                                        </div>
                                        {/* 토글 버튼 - content가 있는 경우에만 표시 */}
                                        {description.content && (
                                            <div className={classes.toggle__btn}>
                                                {description.isOpen ? (
                                                    <div className={classes.toggle__btn}>
                                                        <span>방법숨기기</span>
                                                        <AiOutlineUp />
                                                    </div>
                                                ) : (
                                                    <div className={classes.toggle__btn}>
                                                        <span>방법확인</span>
                                                        <AiOutlineDown />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                    {/* Framer Motion 애니메이션 컨테이너 */}
                                    <AnimatePresence initial={false}>
                                        {/*AnimatePresence - 컴포넌트가 DOM에서 제거될 때도 애니메이션을 적용할 수 있게 해주는 컴포넌트 */}
                                        {/* 초기 마운트 시 애니메이션 비활성화 */}
                                        {description.isOpen && (
                                            // 애니메이션되는 컨테이너
                                            <motion.div
                                                // 각 content에 대한 고유 키
                                                key={`content-${item.id}-${index}`}
                                                // 초기 상태 - 높이 0, 투명
                                                initial={{ height: 0, opacity: 0 }}
                                                // 나타날 때의 애니메이션
                                                animate={{
                                                    height: "auto", // 컨텐츠 높이에 맞게 자동 조절
                                                    opacity: 1,
                                                    transition: {
                                                        height: { duration: 0.3 }, // 높이 변화 시간
                                                        opacity: { duration: 0.3 }, // 투명도 변화 시간
                                                    },
                                                }}
                                                // 사라질 때의 애니메이션
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { duration: 0.3 },
                                                        opacity: { duration: 0.1 }, // 투명도는 더 빠르게 변화
                                                    },
                                                }}
                                                // 높이 변화 시 내용이 넘치지 않도록 설정
                                                style={{ overflow: "hidden" }}
                                            >
                                                {/* 아코디언 컨텐츠 */}
                                                <ul className={classes["service__list-content"]}>
                                                    {description.content.map((content, i) => (
                                                        <li key={i}>
                                                            <p>
                                                                <span>{i + 1}. </span>
                                                                {content}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </React.Fragment>
                            ))}
                        </ul>
                        <div className={classes["service__list-skill"]}>
                            <div>사용 기술</div>
                            {item.usedSkill.map((skill, index) => (
                                <div key={index} className={classes.skill_tag}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Services;
