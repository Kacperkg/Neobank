import ProductCSS from "./Products.module.css";

export default function Products() {
    return (
        <>
            <section className={ProductCSS.products}>
                <header className={ProductCSS.header}>
                    <h1>Our range of products</h1>
                    <div className={ProductCSS.selector}>
                        <p className={ProductCSS.active}>Small Business</p>
                        <p>Corporation</p>
                    </div>
                </header>

                <div className={ProductCSS.productContainer}>
                    <div className={ProductCSS.productItem}>
                        <div className={ProductCSS.productWrapper}>
                            <h1>
                                <span className={ProductCSS.purple}>FREE</span>{" "}
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
                                    $0 for running your first business account
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
                                    Free deposits and withdrawals from around
                                    the world
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

                    <div className={ProductCSS.productItem}>
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

                    <div className={ProductCSS.productItem}>
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
                    <div className={ProductCSS.purpleBlur}></div>
                </div>
            </section>
        </>
    );
}
