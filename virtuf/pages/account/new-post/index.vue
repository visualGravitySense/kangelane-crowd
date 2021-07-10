<template>
  <commentForm @submit="onSubmit" />

</template>

<script>
export default {
  name: "newPost",
  components: {
    commentForm: () => import('@/components/CommentForm'),
  },
  layout: 'admin',
  methods: {
    onSubmit (blog) {
      console.log('post added new-post/index.vue page worked!')
      // console.log(blog)
      this.$store.dispatch('addPost', blog)
        .then(()=>{
          this.$router.push('/')
        })
    }
  }
};
</script>

<style scoped>

</style>
