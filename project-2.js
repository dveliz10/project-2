  document.addEventListener('DOMContentLoaded', function() {
   var tasks=[];
    
    var myNodeList=document.getElementsByTagName("li")
    var i;
    
      function newElement() {
        var li=document.createElement('li');
        var myPriority=document.getElementById("myInput")value;
    document.querySelector("new-task").onsubmit = function() {
      for (i = 0; i< myNodeList.length; i++) 
      {
      let i = document,getElementByName(tasks[i]);
            for(j = 0; j < item.length; j++)
            {
                if (item[j].checked && item[j].value === "complete-task")
                {
                    let text = document.getElementById(tasks[i] + "text");
                    console.log(text);
                    text.style.textDecoration = "line-through";
                  
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
        let i = document.getElementsByName(tasks[i]);
            for(j = 0; j < item.length; j++)
            {
                if (item[j].checked && item[j].value === "complete-task")
                {
                    let text = document.getElementById(tasks[i] + "text");
                    console.log(text);
                    text.style.textDecoration = "line-through";
                  
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
                      
