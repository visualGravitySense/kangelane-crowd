<template>
  <div class="portfolio-page-wrapper">

    <Header />

    <OffCanvasMobileMenu />

    <PageTitleClasses title="Marketplace" breadcrumbTitle="Market" />

<!--    <PortfolioWrapperClasses />-->
    <PortfolioWrapperMarket />

    <ContactDevider />

    <Footer />

    <client-only>
      <back-to-top class="scroll-top" bottom="30px">
        <i class="arrow-top icofont-rounded-up"></i>
        <i class="arrow-bottom icofont-rounded-up"></i>
      </back-to-top>
    </client-only>

  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    PageTitle: () => import('@/components/PageTitle'),
    PortfolioWrapperClasses: () => import('@/components/PortfolioWrapperClasses'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
  },

  head() {
    return {
      title: 'Project'
    }
  },
};
</script>


