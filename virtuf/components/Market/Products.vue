<template>
  <section class="portfolio-area">
    <div class="container">
      <div class="row">

        <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="title">Marketplace on  <span class="bottom-style">Kangelane</span></h2>
          <div class="desc">
            <p class="mt-20" >On Kangelane, you can find your business needs and be
              <u class="text-theme-color2">a part of creative community in Estonia.</u>
              You get access to exclusive content, classes, community, and insight into creative process of creators.</p>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
            <div class="portfolio-filter-menu mb-0">
              <button data-filter="all">All ProjectS</button>
              <button data-filter=".template">Web Templates</button>
              <button data-filter=".code">Code</button>
              <button data-filter=".video">Video</button>
              <button data-filter=".audio">Audio</button>
              <button data-filter=".graphics">Graphics</button>
              <button data-filter=".photos">Photos</button>
              <button data-filter=".models">3D Models</button>
              <button data-filter=".book">Book</button>
            </div>
          </div>
        </div>
      </div>

<!--      PRODUCT WITH STORE NEW VERSION-->
      <div class="row portfolio-grid gutter-50 box" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-md-6 portfolio-item mix" :class="product.category" v-for="(product, index) in products" :key="index">
                  <div class="inner-content">
                    <div class="thumb">
                      <n-link to="">
                        <img :src="product.imgSrc" :alt="product.title"/>
                      </n-link>
                    </div>
                    <div class="portfolio-info">
                      <div class="content">
                        <img class="shape-line-img" src="/images/shape/line-s1.png" alt="shape image">
                        <h3 class="title">
                          <n-link to="">{{ product.title }}</n-link>
                        </h3>
                        <n-link to="" class="category">{{ product.category }}</n-link>
                      </div>
                      <a href="mailto:kangelaneshop@deepfatsnail.eu" class="btn btn-theme btn-border btn-gray">Buy item <i class="icon icofont-long-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>

<!--      PRODUCTS WITHOUT STORE-->
<!--      <div class="row portfolio-grid gutter-50 box" data-aos="fade-up" data-aos-duration="1000">-->
<!--        <div class="col-md-6 portfolio-item mix" :class="portfolio.category" v-for="(portfolio, index) in portfolios" :key="index">-->
<!--          <div class="inner-content">-->
<!--            <div class="thumb">-->
<!--              <n-link to="/service">-->
<!--                <img :src="portfolio.imgSrc" :alt="portfolio.title"/>-->
<!--              </n-link>-->
<!--            </div>-->
<!--            <div class="portfolio-info">-->
<!--              <div class="content">-->
<!--                <img class="shape-line-img" src="/images/shape/line-s1.png" alt="shape image">-->
<!--                <h3 class="title">-->
<!--                  <n-link to="/project-details">{{ portfolio.title }}</n-link>-->
<!--                </h3>-->
<!--                <n-link to="/project-details" class="category">{{ portfolio.category }}</n-link>-->
<!--              </div>-->
<!--              <a href="mailto:kangelaneshop@deepfatsnail.eu" class="btn btn-theme btn-border btn-gray">Buy item <i class="icon icofont-long-arrow-right"></i></a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

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

      products: [
        {
          imgSrc: "/images/portfolio/1.jpg",
          title: "Management Illustrations",
          category: "graphics"
        },
        {
          imgSrc: "/images/portfolio/2.jpg",
          title: "Product Mockup",
          category: "video"
        },
        {
          imgSrc: "/images/portfolio/3.jpg",
          title: "Constructions",
          category: "book"
        },
        {
          imgSrc: "/images/portfolio/4.jpg",
          title: "Product Page",
          category: "template"
        },
        {
          imgSrc: "/images/portfolio/5.jpg",
          title: "Interior Design",
          category: "models"
        },
        {
          imgSrc: "/images/portfolio/6.jpg",
          title: "Digital Marketing Hacks",
          category: "book"
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
