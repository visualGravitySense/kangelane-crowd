<template>
  <div className="blog-page-wrapper">

    <Header/>

    <OffCanvasMobileMenu/>

    <PageTitle title="Build your brand: Logo Design." breadcrumbTitle="Courses"/>

    <CourseDetailsWrapper1/>
    <!--        <BlogDetailsWrapper />-->

    <ContactDevider/>

    <Footer/>

    <client-only>
      <back-to-top className="scroll-top" bottom="30px">
        <i className="arrow-top icofont-rounded-up"></i>
        <i className="arrow-bottom icofont-rounded-up"></i>
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
    BlogDetailsWrapper: () => import('@/components/BlogDetailsWrapper'),
    ContactDevider: () => import('@/components/ContactDevider'),
    Footer: () => import('@/components/Footer'),
  },

  head() {
    return {
      title: 'Blog Details'
    }
  },
};
</script>


