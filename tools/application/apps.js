const errorMessage = document.getElementById("demo");
 
function err(no,me){
  return no + me
}
errorMessage.textContent = err("Ali "," me")