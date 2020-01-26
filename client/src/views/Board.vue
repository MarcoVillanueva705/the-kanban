<template>
<!-- <router-link :to="{name: 'boards'}"> -->
  <!-- <div class="board standout">
    {{board.title}} -->
    <div class="board">
<router-link :to="{name: 'boards'}" class="standout">{{board.title}}</router-link>

    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required />
      <button type="submit">New List</button>
    </form>
    <div class="card-deck">
      <lists v-for="list in lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script>
import Lists from "@/components/Lists.vue";
export default {
name: "board",

  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId
      }
    };
  },

  mounted() {
    this.$store.dispatch("getLists", this.$route.params.boardId);
    this.$store.dispatch("getBoards");
  },

methods: {
  addList() {
    let list = { ...this.newList };
    this.$store.dispatch("createList", list);
    this.newList = {
      title: "",
      boardId: this.$route.params.boardId
    };
  }
},
computed: {
  board() {
    return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    },// NOTE //Remove board method?

  activeBoard() {
    return this.$store.state.activeBoard;
  },
  lists() {
    return this.$store.state.lists;
  }
  },
  components: {
  Lists
  },

  props: ["boardId"] //NOTE //What is baordId doing here?
};
</script>
<style>
.board {
  background-image: url("https://wallpapercave.com/wp/57nW0Mz.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
