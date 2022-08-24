document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.querrySelector('form').addEventListener('submit', (e)=>{
      e.preventDefault();
      newTask(e.target.new-task.value)
    })
  
  });
  
  function newTask (task){
    let ul=document.getElementById('tasks')
    let li = document.createElement('li')
    ul.appendChild('li')
    li.innerHTML= `${task}`
    
  
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent('x')
    li.appendChild(btn)
  
  }
   function handleDelete(e){
    e.target.parentNode.remove()
   }
});
