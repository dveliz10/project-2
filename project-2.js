  document.addEventListener('DOMContentLoaded', function() {
   let tasks=[];
    
    var myNodeList=document.getElementsByTagName("li")
    var i;
    for (i = 0; i< myNodeList.length; i++) {
      
    document.querySelector("new-task").onsubmit = function() {
      const li=document.createElement('li');
      li.innerHTML=document.querySelector('#task').value;
      
      document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = ' ';
      
      return false;
    }
      let priority_level=document.querySelector('#priority').value-1;
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
