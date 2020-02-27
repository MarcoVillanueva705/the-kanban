<template>
  <div class="task text-center position-relative task-color"><b>
    {{task.description}}</b>
    <button @click="removeTask(task)" class="btn btn-danger btn-sm">Remove Task</button>

    <p>Move Task</p>
    <select @change="moveTask(task, newListId)" v-model="newListId">
      <option :value="list.id" v-for="list in lists" :key="list.id">{{list.title}}</option>
    </select>
    <button @click="addComment()" class="btn btn-success btn-sm">Add Comment</button>
    
    <div>
      <form @submit.prevent="addComment">
        <input type="text" placeholder="Comment..." v-model="newComment.content" required />
      </form>
    </div>

    <comments v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<script>
import Comments from "@/components/Comments.vue";
import Swal from "sweetalert2";

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
Swal.fire({
        title: "Are you sure you want to move this task?",
        text: "This task will be moved to another list.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085D6",
        cancelButtonColor: "#D33",
        confirmButtonText: "Yes, move task."
      }).then(result => {
        if (result.value) {
          let oldListId = task.listId;
          task.listId = newListId;
          this.$store.dispatch("changeTaskList", { task, oldListId });
          Swal.fire("Task moved!", "Success");
        }
      });
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
      Swal.fire({
        title: "Are you sure you want to delete this task?",
        text: "You will not be able to undo this delete.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085D6",
        cancelButtonColor: "#D33",
        confirmButtonText: "Yes, Delete Task"
      }).then(result => {
        if (result.value) { 
          this.$store.dispatch("deleteTask", task);
          Swal.fire("Deleted!", "Your task has been deleted.", "Success");
        }
      });
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
.task-color {
  background-color: #FF6347
}
</style>