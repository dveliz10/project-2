  document.addEventListener('DOMContentLoaded', function() {
   var tasks=[];
    
    var myNodeList=document.getElementsByTagName("li")
    var i;
    for (i = 0; i< myNodeList.length; i++) {
    
      function newElement() {
        var li=document.createElement('li');
        var myPriority=document.getElementById("myInput")value;
    document.querySelector("new-task").onsubmit = function() {
      
      li.innerHTML=document.querySelector('#task').value;
      
      document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = ' ';
      
      return false;
    }
      var myPriority=document.getElementById("myPriority').value;
           var t=document.createTextNode(inputValue);
      var p=document.createTextNode(priorityValue
                                   );
     var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
} 
             return false;
                      
      let tast_text=document.querySelector('#task').value;
      let new_task_html=
                              <span> ${task_text} </span>
                              <button class="remove"> Remove </button>
      li.innerHTML=new_task_hmtl
      document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = ' ';
      return false;
    }
      document.addEventListener('click', function(event) {
        element=event.target;
      if(element.className === 'remove') {
        element.parentElement.remove();
      }
      for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    });
                      
      </script>
      </head>
      <body>
      <h1>Task List</h1>
<ul id="tasks_list">
  </ul>
<form id="new-task">
  <input id="task" autocomplete="off" autofocusc placeholder="New Task" type="text">
    <input id="submit" type="submit">
      
      
  
      <form id="form">
        <input id="message" type="text"/>
          <input type="submit">
            </form>
      </body>
  </html>
