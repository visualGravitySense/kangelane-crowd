<template>
  <newPostForm
    :blogEdit="blog"
    @submit="onSubmit" />
</template>

<script>
  import axios from "axios"

  export default {
    name: "editPost",
    components: {
      newPostForm: () => import('@/components/NewPostForm'),
    },
    layout: 'admin',

    data () {
      return {
        blog: {
          id: 1,
          title: '1 post',
          email: 'email@email.co',
          excerpt: 'Lorem ... Lorem ... ',
        },
      }
    },

    // asyncData(contex) {
    //   return axios.get(`http://localhost:1337/jobs/${contex.params.postId}`)
    //         .then(res => {
    //           return {
    //             blog: {...res.data, id: contex.params.postId}
    //           }
    //         })
    //           .catch(e => contex.error(e))
    // },


    // async asyncData (contex) {
    //   let [post] = await Promise.all([
    //     axios.get(`http://localhost:1337/jobs/${contex.params.id}`)
    //   ])
    //   return {
    //     post: post.data
    //   }
    // },

    methods: {
      onSubmit (post) {
        console.log('post editing')
        console.log(post)
      }
    }
  }
</script>

<style scoped>

</style>
