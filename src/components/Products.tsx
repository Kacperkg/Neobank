import React, { useEffect, useRef, useState } from "react";
import ProductCSS from "./Products.module.css";

export default function Products() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSelector, setActiveSelector] = useState("Small Business");
    const [displayType, setDisplayType] = useState("smallBiz"); // Added state to control display type
    const productContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (productContainerRef.current) {
                const container = productContainerRef.current;
                const index = Math.round(
                    container.scrollLeft / container.clientWidth
                );
                setActiveIndex(index);
            }
        };

        const container = productContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const handleSelectorClick = (selector: string) => {
        setActiveSelector(selector);
        setDisplayType(selector === "Small Business" ? "smallBiz" : "corp");
    };

    return (
        <>
            <section className={ProductCSS.products}>
                <div className={ProductCSS.purpleBlur}></div>
                <header className={ProductCSS.header}>
                    <h1>Our range of products</h1>
                    <div className={ProductCSS.selector}>
                        <p
                            className={
                                activeSelector === "Small Business"
                                    ? ProductCSS.active
                                    : ""
                            }
                            onClick={() =>
                                handleSelectorClick("Small Business")
                            }>
                            Small Business
                        </p>
                        <p
                            className={
                                activeSelector === "Corporation"
                                    ? ProductCSS.active
                                    : ""
                            }
                            onClick={() => handleSelectorClick("Corporation")}>
                            Corporation
                        </p>
                    </div>
                </header>
                <div
                    className={ProductCSS.productContainer}
                    ref={productContainerRef}>
                    {displayType === "smallBiz" && (
                        <>
                            <div
                                className={`${ProductCSS.productItem} ${ProductCSS.smallBiz}`}>
                                <div className={ProductCSS.productWrapper}>
                                    <h1>
                                        <span className={ProductCSS.purple}>
                                            FREE
                                        </span>{" "}
                                        account and a payment card
                                    </h1>

                                    <div className={ProductCSS.points}>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            $0 for running your first business
                                            account
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Free deposits and withdrawals from
                                            around the world
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Visa Silver platinum card
                                        </p>
                                    </div>

                                    <button>Select</button>
                                </div>
                            </div>

                            <div
                                className={`${ProductCSS.productItem} ${ProductCSS.smallBiz}`}>
                                <div className={ProductCSS.productWrapper}>
                                    <h1>
                                        Business loans up to{" "}
                                        <span className={ProductCSS.yellow}>
                                            $500,000
                                        </span>
                                    </h1>

                                    <div className={ProductCSS.points}>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Use whenever the funds are needed
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Competitive variable interest rates
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Easy monthly payments
                                        </p>
                                    </div>

                                    <button>Select</button>
                                </div>
                            </div>

                            <div
                                className={`${ProductCSS.productItem} ${ProductCSS.smallBiz}`}>
                                <div className={ProductCSS.productWrapper}>
                                    <h1>
                                        <span className={ProductCSS.brown}>
                                            Modern tools
                                        </span>{" "}
                                        to run a business easily
                                    </h1>

                                    <div className={ProductCSS.points}>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            24/7 individual invoice processing
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Your own private online consultant
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            A payment terminal
                                        </p>
                                    </div>

                                    <button>Select</button>
                                </div>
                            </div>
                        </>
                    )}
                    {displayType === "corp" && (
                        <>
                            <div
                                className={`${ProductCSS.productItem} ${ProductCSS.corp}`}>
                                <div className={ProductCSS.productWrapper}>
                                    <h1>
                                        <span className={ProductCSS.purple}>
                                            PREMIUM
                                        </span>{" "}
                                        account and corporate card
                                    </h1>

                                    <div className={ProductCSS.points}>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            $0 monthly fees for managing large
                                            corporate accounts
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Unlimited international transactions
                                            at no cost
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Exclusive Visa Gold corporate card
                                        </p>
                                    </div>

                                    <button>Select</button>
                                </div>
                            </div>

                            <div
                                className={`${ProductCSS.productItem} ${ProductCSS.corp}`}>
                                <div className={ProductCSS.productWrapper}>
                                    <h1>
                                        Corporate loans up to{" "}
                                        <span className={ProductCSS.yellow}>
                                            $5,000,000
                                        </span>
                                    </h1>

                                    <div className={ProductCSS.points}>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Immediate access to large-scale
                                            funding
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Highly competitive fixed interest
                                            rates
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Flexible repayment options
                                        </p>
                                    </div>

                                    <button>Select</button>
                                </div>
                            </div>

                            <div
                                className={`${ProductCSS.productItem} ${ProductCSS.corp}`}>
                                <div className={ProductCSS.productWrapper}>
                                    <h1>
                                        <span className={ProductCSS.brown}>
                                            Advanced solutions
                                        </span>{" "}
                                        for large enterprises
                                    </h1>

                                    <div className={ProductCSS.points}>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            24/7 dedicated account management
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Access to enterprise-level financial
                                            software
                                        </p>

                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="6"
                                                height="10"
                                                viewBox="0 0 6 10"
                                                fill="none">
                                                <path
                                                    d="M1 1L5 5L1 9"
                                                    stroke="#EBDD51"
                                                />
                                            </svg>
                                            Secure, high-volume payment
                                            processing
                                        </p>
                                    </div>

                                    <button>Select</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className={ProductCSS.indicatorsSmall}>
                    {Array(3)
                        .fill(0)
                        .map((_, idx) => (
                            <div
                                key={idx}
                                style={{
                                    opacity: activeIndex === idx ? 1 : 0.5,
                                }}></div>
                        ))}
                </div>
            </section>
        </>
    );
}
