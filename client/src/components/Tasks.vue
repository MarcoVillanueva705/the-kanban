<template>
  <div class="task">
    {{task.description}}
   
    <select @change="moveTask(task, newListId)" v-model="newListId">
      <option :value="list.id" v-for="list in lists" :key="list.id">{{list.title}}</option>
    </select>
    <button @click="removeTask(task)" class="btn btn-danger">X</button>
    <button @click="addComment()" class="btn btn-success">Add Comment</button>
    
    <div>
      <form @submit.prevent="addComment">
        <input type="text" placeholder="Comment..." v-model="newComment.content" required />
        <button type="submit">Comment</button>
      </form>
    </div>

    <comments v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";
export default {
  name: "task",
  props: ["task"],

  data() {
    return {
      newListId: "",

      newComment: {
        name: "",
        taskId: this.task._id
      }
    };
  },

  mounted() {
    this.$store.dispatch("getComments", this.task._id);
  },

  methods: {
    moveTask(task, newListId) {
      let oldListId = task.listId;
      task.listId = newListId;
      this.$store.dispatch("changeTaskList", { task, oldListId });
    },
    
    addComment() {
      let comment = { ...this.newComment };
      this.$store.dispatch("createComment", comment);
      
      this.newComment = {
        content: "",
        taskId: this.task._id
      };
    },

    removeTask(task) {
      this.$store.dispatch("deleteTask", task);
    }
  },

  computed: {
    comments() {
      return this.$store.state.comments[this.task._id];
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  
  components: {
    Comments
  }
};
</script>

<style>
</style>