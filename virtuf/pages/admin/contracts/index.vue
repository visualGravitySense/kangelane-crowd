<template>
  <contracts :thead="['Company Name', 'Reg. nmr', 'Bill Status', 'Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="contract in contracts" :key="contract.id">
        <td><span> {{ contract.name }} </span></td>
        <td><span> {{ contract.text }} </span></td>
        <td>
          <span v-if="contract.status" class="status true"> Bill quarterly </span>
          <span v-else class="status false"> Bill monthly </span>
        </td>
        <td><span @click="changeComment(contract.id)" class="text-theme-color2"> Change Status </span></td>
        <td><span @click="deleteComment(contract.id)" class="text-theme-color"> Delete </span></td>
      </tr>
    </tbody>
  </contracts>
</template>

<script>
import axios from "axios";


export default {
  name: "comments",
  components: {
    contracts: () => import('@/components/Admin/Contracts'),
  },
  layout: 'admin',

  data () {
    return {
      contracts: [
        { id: 1, name: 'Microsoft', text: '32345677', status: true },
        { id: 2, name: 'Apple', text: '11232221', status: false },
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
