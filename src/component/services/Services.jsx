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
                title: "로그인 구현 및 보안 강화",
                content: [
                    "HTTP-only 쿠키 기반의 보안 로그인 시스템을 설계했으나, API 구조상 제약으로 인해 보안이 강화된 스토리지 기반 인증 방식으로 전환",
                    "세션스토리지와 로컬스토리지를 활용한 자동 로그인 기능 구현으로 사용자 경험 개선",
                ],
                isOpen: false,
            },
            {
                title: "아파트 통합 게시판 컴포넌트 개발",
                content: [
                    "약 4개의 게시판을 하나의 컴포넌트로 통합하여 관리하는 게시판 컴포넌트 개발",
                    "다양한 파일 형식(이미지, 엑셀, 한글)을 지원하는 통합 게시판 구현",
                    "쿼리스트링 기반의 상태 관리를 통해 검색어, 페이지네이션, 상세 페이지 공유 기능 구현으로 사용자 간 정보 공유 효율성 향상",
                    "useLayoutEffect를 활용한 화면 깜빡임 현상 최적화로 사용자 경험 개선",
                ],
                isOpen: false,
            },
            {
                title: "보안 강화를 위한 인증 시스템 구축",
                content: [
                    "HOC 패턴을 활용한 페이지별 접근 권한 관리 시스템 구축",
                    "로그인 상태 및 아파트 ID 검증 로직을 통합 관리하여 보안성 강화 및 유지보수성 향상",
                ],
                isOpen: false,
            },
            {
                title: "커스텀 DnD 기반 관리자 메뉴 시스템 개발",
                content: ["외부 라이브러리 의존성 없이 순수 JavaScript로 Drag and Drop 기능 구현"],
                isOpen: false,
            },
            {
                title: "인프라 구축 및 배포 자동화",
                content: [
                    "Docker와 Nginx를 활용한 마이크로서비스 아키텍처 구축",
                    "Docker Compose를 통한 다중 서비스 통합 관리로 배포 시간 단축",
                ],
                isOpen: false,
            },
            {
                title: "성능 최적화 및 코드 분할",
                content: [
                    "React.lazy와 Dynamic Import를 활용한 코드 스플리팅 구현",
                    "초기 번들 사이즈 20% 감소로 안한 초기 로딩 속도 개선",
                ],
                isOpen: false,
            },
            {
                title: "전역 상태 관리 시스템 개선",
                content: [
                    "모듈화된 상태 관리 아키텍처 설계로 유지보수 비용 향상",
                    "선택적 상태 구독 방식 도입으로 불필요한 리렌더링 감소",
                ],
                isOpen: false,
            },
            {
                title: "재사용 가능한 커스텀 훅 설계",
                content: [
                    "게시판 로직을 커스텀 훅으로 모듈화하여 코드 재사용성 향상",
                    "중복 코드 제거로 유지보수 시간 향상",
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
                title: "보안 강화된 인증 시스템 구현",
                content: [
                    "쿠키 기반의 세션 타임아웃 로직 구현으로 보안성 강화 및 자동 로그아웃 기능 구현",
                    "사용자 세션 관리를 통한 보안 취약점 개선",
                ],
                isOpen: false,
            },
            {
                title: "MUI 기반 관리자 대시보드 개발",
                content: [
                    "Material-UI를 활용한 반응형 관리자 대시보드 구축으로 개발 생산성 200% 향상",
                    "재사용 가능한 공통 컴포넌트 설계로 유지보수성 향상",
                    "데이터 테이블과 모달을 활용한 직관적인 사용자 정보 관리 시스템 구현",
                ],
                isOpen: false,
            },
            {
                title: "마이크로서비스 아키텍처 기반 배포 환경 구축",
                content: [
                    "CentOS 환경에서 Docker와 Nginx를 활용한 마이크로서비스 아키텍처 설계",
                    "Docker Compose를 통한 서비스 오케스트레이션으로 배포 프로세스 자동화",
                    "Nginx 리버스 프록시 설정을 통한 효율적인 트래픽 관리 구현",
                ],
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
                title: "드래그 앤 드롭 기반 일정 관리 시스템 구현",
                content: [
                    "직관적인 드래그 앤 드롭 인터페이스를 통한 레슨 일정 관리 시스템 개발",
                    "실시간 일정 변경 및 업데이트 기능으로 사용자 편의성 향상",
                ],
                isOpen: false,
            },
            {
                title: "통합 일정 관리 플랫폼 개발",
                content: [
                    "근무 시간 및 레슨 등록 시스템 통합으로 업무 효율성 향상",
                    "요일별 선택적 근무 등록 기능 구현으로 유연한 스케줄 관리 지원",
                ],
                isOpen: false,
            },
            {
                title: "실시간 타임라인 ui 개발",
                content: ["현재 시간 기준 진행 상황 실시간 시각화로 일정 관리 효율성 향상"],
                isOpen: false,
            },
            {
                title: "레슨 상태 관리 시스템 고도화",
                content: [
                    "예약완료, 이용완료, 이용취소 등 다양한 상태 전환 로직 구현",
                    "상태별 자동 알림 시스템 연동으로 사용자 경험 개선",
                ],
                isOpen: false,
            },
            {
                title: "근무 관리 시스템 기능 확장",
                content: [
                    "특수 근무 등록을 위한 모달 기반 인터페이스 개발",
                    "휴게시간 자동 계산 및 관리 기능 구현으로 근무시간 관리 자동화",
                ],
                isOpen: false,
            },
            {
                title: "통합 공지사항 시스템 구축",
                content: [
                    "오퍼레이터와 GTM 사이트 간 통합 공지사항 기능 개발",
                    "실시간 알림 기능 연동으로 정보 전달 효율성 향상",
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
