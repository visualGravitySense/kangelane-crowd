<template>
    <section class="portfolio-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <div class="portfolio-filter-menu mb-0">
                            <button data-filter="all">All ProjectS</button>
                            <button data-filter=".business">Business</button>
                            <button data-filter=".tech">Programming & Tech</button>
                            <button data-filter=".marketing">Digital Marketing</button>
                            <button data-filter=".design">Graphics & Design</button>
                            <button data-filter=".data">Data</button>
                            <button data-filter=".music">Music & Audio</button>
                            <button data-filter=".video">Video & Animation</button>
                            <button data-filter=".writing">Writing & Translation</button>
                            <button data-filter=".consulting">Consulting</button>
                            <button data-filter=".lifestyle">Lifestyle</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row portfolio-grid gutter-50 box" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-md-6 portfolio-item mix" :class="portfolio.category" v-for="(portfolio, index) in portfolios" :key="index">
                    <div class="inner-content">
                        <div class="thumb">
                            <n-link to="/service">
                                <img :src="portfolio.imgSrc" :alt="portfolio.title"/>
                            </n-link>
                        </div>
                        <div class="portfolio-info">
                            <div class="content">
                                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="shape image">
                                <h3 class="title">
                                    <n-link to="/project-details">{{ portfolio.title }}</n-link>
                                </h3>
                                <n-link to="/project-details" class="category">{{ portfolio.category }}</n-link>
                            </div>
                            <n-link to="/project-details" class="btn-icon">
                                <i class="icofont-long-arrow-right"></i>
                            </n-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="portfolio-footer text-center" data-aos="fade-up" data-aos-duration="1300">
                <n-link to="" class="btn btn-theme btn-lg mb-1">Load More</n-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                mixer: null,

                portfolios: [
                    {
                        imgSrc: "/images/portfolio/1.jpg",
                        title: "Business Management",
                        category: "business"
                    },
                    {
                        imgSrc: "/images/portfolio/2.jpg",
                        title: "Market Statics & Analysis.",
                        category: "marketing"
                    },
                    {
                        imgSrc: "/images/portfolio/3.jpg",
                        title: "Digital Marketing",
                        category: "consulting"
                    },
                    {
                        imgSrc: "/images/portfolio/4.jpg",
                        title: "Business Consultation",
                        category: "digital"
                    },
                    {
                        imgSrc: "/images/portfolio/5.jpg",
                        title: "Link Building Services",
                        category: "tech"
                    },
                    {
                        imgSrc: "/images/portfolio/6.jpg",
                        title: "Social Media Marketing",
                        category: "data"
                    },
                ]
            }
        },

        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl)
            })
        },
    };
</script>
