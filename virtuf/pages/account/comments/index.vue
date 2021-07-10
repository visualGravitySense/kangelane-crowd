<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span> {{ comment.name }} </span></td>
        <td><span> {{ comment.text }} </span></td>
        <td>
          <span v-if="comment.status" class="status true"> Publish </span>
          <span v-else class="status false"> Hidden </span>
        </td>
        <td><span @click="changeComment(comment.id)" class="text-theme-color2"> Change Status </span></td>
        <td><span @click="deleteComment(comment.id)" class="text-theme-color"> Delete </span></td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import axios from "axios";


export default {
  name: "comments",
  components: {
    commentTable: () => import('@/components/Admin/CommentTable'),
  },
  layout: 'admin',

  data () {
    return {
      comments: [
        { id: 1, name: 'Alex Cvintion', text: 'Lorem Ipsum dolor sit amet, consectetur', status: true },
        { id: 2, name: 'Alex2 Troploiuy', text: '22 Lorem Ipsum dolor sit amet, consectetur 22', status: false },
      ]
      // comments: {
      //   id: 1,
      //   title: '1 post',
      //   email: 'email@email.co',
      //   excerpt: 'Lorem ... Lorem ... ',
      // },
    }
  },

  // async asyncData (context) {
  //   let [post] = await Promise.all([
  //     axios.get(`http://localhost:1337/jobs/${context.params.id}`)
  //   ])
  //   return {
  //     post: post.data
  //   }
  // },

  methods: {
    changeComment (id) {
      console.log(`Change comment id - ${id}`)
    },
    deleteComment (id) {
      console.log(`Delete comment id - ${id}`)
    },
  }
}
</script>

<style scoped>

</style>
