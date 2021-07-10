<template>
  <div class="blog-page-wrapper">

    <!--<h2 class="title">Add a new <span>Job Vacancy</span></h2>-->


    <JobsWrapper :admin="true" :posts="posts"/>

  </div>


</template>

<script>
export default {

  components: {
    // Header: () => import('@/components/Header'),
    // OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    // PageTitle: () => import('@/components/PageTitle'),
    JobsWrapper: () => import('@/components/JobsWrapper'),
    // JobsForm: () => import('@/components/JobsForm'),
    // ContactDevider: () => import('@/components/ContactDevider'),
    // Footer: () => import('@/components/Footer'),
    commentForm: () => import('@/components/CommentForm'),
  },

  layout: 'admin',


  // head() {
  //   return {
  //     title: 'Blog'
  //   }
  // },

  methods: {
    onSubmit (blog) {
      // this.$emit('submit', this.blog)
      console.log('Post added!!! from Admin Page')
      // console.log(blog)
      this.$store.dispatch('addPost', blog)
              .then(()=>{
                this.$router.push('/admin')
              })
      // this.$store.dispatch('addPost', post)
      //   .then(()=>{
      //     this.$router.push('/')
      //   })
    }
  },


  // methods: {
  //   onSubmit () {
  //     this.message = 'Submited'
  //     // Reset
  //     // this.user.name = ''
  //     // this.user.email = ''
  //     // this.user.text = ''
  //     // console.log(this.user)
  //   }
  // },


  // computed: {
  //   postsLoaded () {
  //     // console.log(postsLoaded ())
  //     return this.$store.getters.getPostsLoaded
  //   }
  // },

  // props: {
  //   blogs: {
  //     type: Array,
  //     required: true
  //   },
  //   admin: {
  //     type: Boolean,
  //     default: false§
  //   }
  // }
};
</script>

<style scoped>
.title {
  text-align: center;
}
.contact-area {
  padding: 50px 0px 50px;
}

</style>
