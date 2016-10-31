Vue.component('project', {
  props:['project'],
  template: `
  <a-box src="#background" onClick="location.href=this.href">
  </a-box>
  `
})
var v = new Vue({
  el:"#project_layout",
  data:{
    projects:[]
  }
});

$.getJSON("projects.json",function(data){
  v.projects = data;
});
