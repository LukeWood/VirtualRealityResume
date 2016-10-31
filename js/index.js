Vue.component('project', {
  template: '<a-box></a-box>'
})
var v = new Vue({
  el:"#layout",
  data:{
    projects:[]
  }
});

$.getJSON("projects.json",function(data){
  v.projects = data;
});
