<template>
  <div class="boards font-weight-bold standout">
    WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div v-for="board in boards" :key="board._id">
      <router-link :to="{name: 'board', params: {boardId: board._id}}" class="standout">{{board.title}}</router-link>
      <button @click="close(board)" type="button" class="btn btn-info">Delete Board</button>
    </div>
  </div>
</template>

<script>
export default {
name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    close(board) {
      this.$store.dispatch("deleteBoard", board._id);
    }
  }
};
</script>

<style>
.boards {
  background-image: url("https://cdn.hipwallpaper.com/i/43/84/EQXj6U.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
.standout{
  color: yellow;
}
</style>