<template>
<!-- <section class="container-fluid"> -->
  <div class="comment">
    {{comment.content}}
    <button @click="removeComment(comment)" class="btn btn-danger btn-sm">Remove Comment</button>
  </div>
<!-- </section> -->
</template>

<script>
export default {
  name: "Comment",
  
  props: ["comment"],

  methods: {
    removeComment(comment) {
      this.$store.dispatch("deleteComment", comment);
    }
  }
};
</script>

<style>
</style>