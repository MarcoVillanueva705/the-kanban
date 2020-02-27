<template>
  <div class="comment">
    {{comment.content}}
    <button @click="removeComment(comment)" class="btn btn-danger btn-sm">Remove Comment</button>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Comment",
  
  props: ["comment"],

  methods: {
    removeComment(comment) {

    Swal.fire({
        title: "Are you sure you want to delete this comment?",
        text: "You will not be able to undo this delete.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085D6",
        cancelButtonColor: "#D33",
        confirmButtonText: "Yes, Delete Comment"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("deleteComment", comment);
          Swal.fire("Deleted!", "Your comment has been deleted.", "Success");
        }
      });
    }
  }
};
</script>

<style>
</style>