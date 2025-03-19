import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import classes from "./Services.module.css";
import { AnimatePresence, motion } from "framer-motion";
const data = [
    {
        id: Math.random(),
        content: "사내 자체 프로젝트 아파트모아 진행",
        description: [
            {
                title: "HOC를 활용한 각 페이지의 로그인 검사 기능 추가",
                content: [
                    "도입배경: 각 페이지 접근 시 accessToken 여부 확인이 필요한 절차 발생",
                    "사용이유: HOC(Higher Order Component)는 컴포넌트를 가져와 새로운 컴포넌트를 반환하는 함수로, 토큰 여부 확인 및 재발급과 같은 반복적인 코드가 여러 컴포넌트에 필요하다 판단해 도입하게 되었습니다.",
                    "성과: HOC를 활용해 accessToken 여부 확인 및 미확인 시 자동 재발급 로직을 구현했으며, 재발급 실패 시 로그인 페이지로 redirect하여 코드의 가독성과 유지보수성을 향상시켰습니다.",
                ],
                isOpen: true,
            },
            {
                title: "초기 렌더링 향상을 위한 code split 진행",
                content: [
                    "도입배경 : 프로젝트 규모가 커지면서 초기 렌더링 속도가 느려져 사용자 경험이 저하됨을 확인 했습니다.",
                    "사용이유 : 렌더링 최적화를 시도했지만 효과가 미미하여, 초기 렌더링 속도를 개선할 방법을 찾던 중 Lazy Loading을 활용한 code split이 불필요한 컴포넌트 렌더링을 방지하고 현재 페이지에 필요한 컴포넌트만 로드할 수 있다는 점을 확인 하였습니다.",
                    "성과 : 불필요한 초기 렌더링을 방지하기 위해 Lazy Loading을 적용하여 현재 페이지에서 필요한 컴포넌트만 로드 → 초기 번들 크기 20% 감소",
                ],
                isOpen: false,
            },
            {
                title: "성능 최적화 및 코드 분할",
                content: [
                    "도입배경 : 프로젝트 규모가 커지면서 초기 렌더링 속도가 느려져 사용자 경험이 저하됨을 확인 했습니다.",
                    "사용이유 : 렌더링 최적화를 시도했지만 효과가 미미하여, 초기 렌더링 속도를 개선할 방법을 찾던 중 Lazy Loading을 활용한 code split이 불필요한 컴포넌트 렌더링을 방지하고 현재 페이지에 필요한 컴포넌트만 로드할 수 있다는 점을 확인 하였습니다.",
                    "성과 : 불필요한 초기 렌더링을 방지하기 위해 Lazy Loading을 적용하여 현재 페이지에서 필요한 컴포넌트만 로드 → 초기 번들 크기 20% 감소",
                ],
                isOpen: false,
            },
            {
                title: "스토어 모듈화를 이용한 전역상태관리 렌더링 문제해결",
                content: [
                    "도입배경 : 컴포넌트 리렌더링 시 불필요한 리렌더링이 과도하게 발생하는 문제 발견 했습니다.",
                    "사용이유 : 전역 상태 관리 객체의 크기가 커짐에 따라, 특정 값이 변경될 때 모든 관련 컴포넌트가 리렌더링되는 현상을 확인. 또한, 각 컴포넌트에서 store를 사용할 때 상위 객체를 직접 불러와 사용하고 있는 문제점 발견 했습니다.",
                    "성과 : 전역 상태 객체를 모듈화하고 더 작은 단위의 객체로 분리. 또한, 각 컴포넌트에서 store 사용 시 필요한 범위만 참조하도록 변경하여 리렌더링 횟수를 최대 8회 → 2회로 감소",
                ],
                isOpen: false,
            },
            {
                title: "컴포넌트 재사용을 위한 커스텀 훅 생성",
                content: [
                    "도입배경 : UI 컴포넌트와 비즈니스 로직이 혼재되어 유지보수성이 저하되고, 반복적인 상태 관리 코드가 다수 발생하는 문제를 확인",
                    "사용이유 : 코드의 일관성을 유지하고 가독성을 향상시키며, UI와 비즈니스 로직을 명확히 분리하여 재사용성을 극대화하기 위함",
                    "성과 : 기존에 서버와 연동 중인 비즈니스 로직을 커스텀 훅으로 변환하여, UI 컴포넌트는 렌더링에 집중하고 로직은 별도의 훅에서 관리하도록 구조를 개선하여 비즈니스 로직과 ui로직을 분리해 코드 가독성 증가",
                ],
                isOpen: false,
            },
        ],
        usedSkill: ["js", "react", "react-query", "css-module", "redux-toolkit"],
    },
    {
        id: Math.random(),
        content: "GTM 사이트(점주,프로,매니저의 레슨 및 근무시간 등록 사이트) 유지보수 및 신규개발",
        description: [
            {
                title: "vuetify를 활용한 drag and drop을 활용한 레슨 시간 변경",
                content: [
                    "도입배경 : 현재 등록된 레슨의 이동을 쉽게 변경할 수 있는 기능을 원하는 점주의 요청 발생",
                    "사용이유 : 기존의 레슨 변경은 날짜를 drag and drop이 아닌 삭제 후 재등록을 하여 레슨을 변경, 하지만 사용중인 라이브러리(vuetify)에 스케줄기능중 drag and drop 기능이 있는것을 발견하여 의견 제시 후 도입 결정",
                    "성과 : 기존의 레슨 변경 기능이 아닌 drag and drop을 도입해 마우스로 drag 후 drop하면 레슨 날짜가 변경되는 기능 추가",
                ],
                isOpen: true,
            },
            {
                title: "근무시간 등록과 레슨등록 페이지의 일원화 진행 및 주 단위 레슨 등록 기능 추가",
                content: [
                    "도입배경 : 기존의 강사의 근무시간 등록 페이지와 레슨등록 페이지가 나누어져 있어 불편하다는 의견 발생",
                    "사용이유 : 근무시간과 레슨등록 페이지가 굳이 2개일 필요 없이 하나로 통일하고 레슨등록을 모달로 진행하는 의견 제시",
                    "성과 : 기존의 레슨등록 페이지를 제거 후 근무시간 페이지에 레슨 등록 버튼 생성 후 버튼 클릭시 레슨 등록 모달 생성 및 일주일 단위로 레슨을 등록할 수 있는 기능 추가",
                ],
                isOpen: false,
            },
            {
                title: "실시간 타임라인 ui 개발",
                content: ["현재 시간 기준 진행 상황 실시간 시각화로 일정 관리 효율성 향상"],
                isOpen: false,
            },
            {
                title: "오퍼레이터 와 GTM사이트 공지사항 기능 추가",
                content: [
                    "도입배경 : 기존 오퍼레이터 홈페이지에 공지사항을 등록하길 원하는 의견 발생",
                    "성과 : 오퍼레이터 홈페이지에 에디터를 활용하여 공지사항을 등록하고 오퍼레이터에서 공지사항 등록시 관리자 페이지에서 공지사항을 일주일간 볼 수 있으며 “다시 보지 않기” 버튼 클릭시 local storage에 버튼 클릭 날짜를 저장하여 해당 공지사항이 일주일간 보이지 않는 기능 추가",
                ],
                isOpen: false,
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
                                                        <span>상세보기 닫기</span>
                                                        <AiOutlineUp />
                                                    </div>
                                                ) : (
                                                    <div className={classes.toggle__btn}>
                                                        <span>상세보기</span>
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
                                                            <div className={classes.content_section}>
                                                                <div className={classes.content_header}>
                                                                    {content.split(":")[0]}
                                                                </div>
                                                                <div className={classes.content_body}>
                                                                    {content.split(":")[1]}
                                                                </div>
                                                            </div>
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
