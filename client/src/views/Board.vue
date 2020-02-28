<template>

    <div class="board">
<router-link :to="{name: 'boards'}" class="standout"><b>{{board.title}}</b></router-link>

    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required />
      <button class=" btn btn-primary btn-sm">New List</button>
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

  props: ["boardId"],
  
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
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    },

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

};
</script>
<style>
.board {
  background-image: url("https://wallpapercave.com/wp/57nW0Mz.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.card-deck{
  padding-left: 55px;
}
</style>
