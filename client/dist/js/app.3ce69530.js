(function(t){function e(e){for(var a,r,i=e[0],d=e[1],c=e[2],m=0,u=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);l&&l(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var d=s[i];0!==n[d]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"158c":function(t,e,s){"use strict";var a=s("ce1b"),n=s.n(a);n.a},"17ea":function(t,e,s){"use strict";var a=s("beae"),n=s.n(a);n.a},3712:function(t,e,s){},"3b8a":function(t,e,s){"use strict";var a=s("3712"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"row logout"},[t._m(0),t._v(" "),s("div",{staticClass:"col-6"},[s("button",{staticClass:"float-right btn btn-warning btn-sm",on:{click:function(e){t.logOff()}}},[t._v("Logout")])])]),t._v(" "),s("router-view")],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6"},[s("i",{staticClass:"fas fa-umbrella-beach float-left"},[s("b",[t._v("KanBanz")])])])}],r={name:"App",methods:{logOff(){this.$store.dispatch("logout")}}},i=r,d=(s("034f"),s("2877")),c=Object(d["a"])(i,n,o,!1,null,null,null),l=c.exports,m=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards font-weight-bold standout"},[t._v("\n  WELCOME TO THE BOARDS!!!\n  "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),t._l(t.boards,(function(e){return s("div",{key:e._id},[s("router-link",{staticClass:"standout",attrs:{to:{name:"board",params:{boardId:e._id}}}},[t._v(t._s(e.title))]),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(s){t.close(e)}}},[t._v("Delete Board")])],1)}))],2)},p=[],v={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},close(t){this.$store.dispatch("deleteBoard",t._id)}}},h=v,f=(s("3b8a"),Object(d["a"])(h,u,p,!1,null,null,null)),b=f.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("router-link",{staticClass:"standout",attrs:{to:{name:"boards"}}},[s("b",[t._v(t._s(t.board.title))])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),t._v(" "),s("button",{staticClass:" btn btn-primary btn-sm"},[t._v("New List")])]),t._v(" "),s("div",{staticClass:"card-deck"},t._l(t.lists,(function(t){return s("lists",{key:t.id,attrs:{list:t}})})))],1)},g=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list text-center position-relative col-md-6-lg-4"},[s("div",{staticClass:"card",staticStyle:{width:"18rem"}},[s("div",{staticClass:"card-body sea"},[s("div",[s("h5",{staticClass:"card-title"},[t._v(t._s(t.list.title))]),t._v(" "),s("button",{staticClass:" btn btn-danger btn-sm",on:{click:function(e){t.removeList(t.list)}}},[t._v("Delete List")])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],attrs:{type:"text",placeholder:"Task Title",required:""},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-secondary btn-sm"},[t._v("New Task")])])]),t._v(" "),t._l(t.tasks,(function(t){return s("tasks",{key:t.id,attrs:{task:t}})}))],2)])},k=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task task-color"},[s("b",[t._v("\r\n    "+t._s(t.task.description))]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.newListId,expression:"newListId"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.newListId=e.target.multiple?s:s[0]},function(e){t.moveTask(t.task,t.newListId)}]}},t._l(t.lists,(function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])}))),t._v(" "),s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){t.removeTask(t.task)}}},[t._v("Remove Task")]),t._v(" "),s("button",{staticClass:"btn btn-success btn-sm",on:{click:function(e){t.addComment()}}},[t._v("Add Comment")]),t._v(" "),s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],attrs:{type:"text",placeholder:"Comment...",required:""},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}})])]),t._v(" "),t._l(t.comments,(function(t){return s("comments",{key:t.id,attrs:{comment:t}})}))],2)},C=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[t._v("\r\n    "+t._s(t.comment.content)+"\r\n    "),s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(e){t.removeComment(t.comment)}}},[t._v("Remove Comment")])])},L=[],T={name:"Comment",props:["comment"],methods:{removeComment(t){this.$store.dispatch("deleteComment",t)}}},I=T,x=Object(d["a"])(I,$,L,!1,null,null,null),B=x.exports,O={name:"task",props:["task"],data(){return{newListId:"",newComment:{name:"",taskId:this.task._id}}},mounted(){this.$store.dispatch("getComments",this.task._id)},methods:{moveTask(t,e){let s=t.listId;t.listId=e,this.$store.dispatch("changeTaskList",{task:t,oldListId:s})},addComment(){let t={...this.newComment};this.$store.dispatch("createComment",t),this.newComment={content:"",taskId:this.task._id}},removeTask(t){this.$store.dispatch("deleteTask",t)}},computed:{comments(){return this.$store.state.comments[this.task._id]},lists(){return this.$store.state.lists}},components:{Comments:B}},U=O,N=(s("17ea"),Object(d["a"])(U,y,C,!1,null,null,null)),P=N.exports,j={name:"List",props:["list"],data(){return{newTask:{description:"",listId:this.list._id,boardId:this.$route.params.boardId}}},mounted(){this.$store.dispatch("getTasks",this.list._id)},methods:{addTask(){let t={...this.newTask};this.$store.dispatch("createTask",t),this.newTask={description:"",listId:this.list._id,boardId:this.$route.params.boardId}},removeList(t){this.$store.dispatch("deleteList",t)}},computed:{tasks(){return this.$store.state.tasks[this.list._id]}},components:{Tasks:P}},E=j,S=(s("bb72"),Object(d["a"])(E,_,k,!1,null,"d3319e60",null)),A=S.exports,D={name:"board",data(){return{newList:{title:"",boardId:this.$route.params.boardId}}},mounted(){this.$store.dispatch("getLists",this.$route.params.boardId),this.$store.dispatch("getBoards")},methods:{addList(){let t={...this.newList};this.$store.dispatch("createList",t),this.newList={title:"",boardId:this.$route.params.boardId}}},computed:{board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||{title:"Loading..."}},activeBoard(){return this.$store.state.activeBoard},lists(){return this.$store.state.lists}},components:{Lists:A},props:["boardId"]},R=D,F=(s("158c"),Object(d["a"])(R,w,g,!1,null,null,null)),M=F.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),t._v(" "),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},J=[],z={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},H=z,K=(s("d6db"),Object(d["a"])(H,q,J,!1,null,null,null)),W=K.exports;a["a"].use(m["a"]);var G=new m["a"]({routes:[{path:"/",name:"boards",component:b},{path:"/boards/:boardId",name:"board",props:!0,component:M},{path:"/login",name:"login",component:W},{path:"*",redirect:"/"}]}),Q=s("2f62"),V=s("bc3a"),X=s.n(V);let Y=location.host.includes("localhost")?"//localhost:3000/":"/",Z=X.a.create({baseURL:Y+"account/",timeout:3e3,withCredentials:!0});class tt{static async Login(t){try{let e=await Z.post("login",t);return e.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let e=await Z.post("register",t);return e.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await Z.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await Z.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}a["a"].use(Q["a"]);let et=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",st=X.a.create({baseURL:et+"api/",timeout:3e3,withCredentials:!0});var at=new Q["a"].Store({state:{lists:[],user:{},boards:[],activeBoard:{},activeList:{},tasks:[],comments:[]},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setLists(t,e){t.lists=e},addLists(t,e){t.lists.push(e)},addTasks(t,e){t.tasks.push(e)},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},setComments(t,e){a["a"].set(t.comments,e.taskId,e.comments)},resetState(t,e){t.user={}}},actions:{async register({commit:t,dispatch:e},s){try{let e=await tt.Register(s);t("setUser",e),G.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await tt.Login(s);t("setUser",e),G.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await tt.Logout();t("resetState"),G.push({name:"login"})}catch(s){console.warn(s.message)}},getBoards({commit:t,dispatch:e}){st.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){st.post("boards",s).then(t=>{e("getBoards")})},async deleteBoard({commit:t,dispatch:e},s){await st.delete("boards/"+s);e("getBoards")},async getLists({commit:t,dispatch:e},s){let a=await st.get(`boards/${s}/lists`);t("setLists",a.data)},async createList({commit:t,dispatch:e},s){let a=await st.post("lists",s);t("addLists",a.data)},async deleteList({commit:t,dispatch:e},s){await st.delete("lists/"+s.id);e("getLists",s.boardId)},async createTask({commit:t,dispatch:e},s){let a=await st.post("tasks",s);e("getTasks",a.data.listId)},async getTasks({commit:t,dispatch:e},s){let a=await st.get("lists/"+s+"/tasks");t("setTasks",{tasks:a.data,listId:s})},async deleteTask({commit:t,dispatch:e},s){await st.delete("tasks/"+s.id);e("getTasks",s.listId)},async changeTaskList({commit:t,dispatch:e},s){await st.put("tasks/"+s.task.id,s.task);e("getTasks",s.task.listId),e("getTasks",s.oldListId)},async createComment({commit:t,dispatch:e},s){let a=await st.post("comments",s);e("getComments",a.data.taskId)},async getComments({commit:t,dispatch:e},s){let a=await st.get("tasks/"+s+"/comments");t("setComments",{comments:a.data,taskId:s})},async deleteComment({commit:t,dispatch:e},s){await st.delete("comments/"+s.id);e("getComments",s.taskId)}}});async function nt(){let t=await tt.Authenticate();t?at.commit("setUser",t):G.push({name:"login"}),new a["a"]({router:G,store:at,render:t=>t(l)}).$mount("#app")}nt()},"85ec":function(t,e,s){},bb72:function(t,e,s){"use strict";var a=s("fe26"),n=s.n(a);n.a},beae:function(t,e,s){},ce1b:function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("e67a"),n=s.n(a);n.a},e67a:function(t,e,s){},fe26:function(t,e,s){}});
//# sourceMappingURL=app.3ce69530.js.map