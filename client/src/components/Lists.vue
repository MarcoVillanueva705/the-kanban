<template>
  <div class="list">
    <div class="card" style="width: 18rem;">
      
      <div class="card-body sea">
        <div>
         <h5 class="card-title">{{list.title}}</h5> <button @click="removeList(list)" class=" btn btn-danger">X</button>
        </div>
        <form @submit.prevent="addTask">
         <input type="text" placeholder="Task Title" v-model="newTask.description" required>
         <button type="submit" >New Task</button>
       </form>
      </div>
      
       <tasks v-for="task in tasks" :key="task.id" :task="task"/>
    </div>
  </div>
  
</template>

<script>
import Tasks from "@/components/Tasks.vue"
export default {
  name: 'List',
  
  props: ['list'], //NOTE //What is props doing here?

data() {
return {
  newTask: {
  description: "",
  listId: this.list._id,
  boardId: this.$route.params.boardId,
  }
}
  },

mounted(){
 this.$store.dispatch("getTasks", this.list._id)

  },

methods:{
  addTask(){
  let task= {...this.newTask};
      this.$store.dispatch("createTask", task);
      
      this.newTask = {
        description: "",
        listId: this.list._id,
        boardId: this.$route.params.boardId,
      }},

  removeList(list){
  this.$store.dispatch("deleteList", list)

    }
},

computed:{
tasks(){ 
return this.$store.state.tasks[this.list._id]
  }
},

components:{
Tasks
}
};
</script>

<style scoped>
.sea {
  background-color: #9fe2bf
}
</style>
