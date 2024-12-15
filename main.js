//get value
document.querySelectorAll('input[type=color]').forEach(function(picker){
  var targetLabel=document.createElement(span);
colorArea=document.createElement(span);
colorArea.innerHTML=picker.value;
targetLabel.appendChild(colorArea);

//now addeventListner
picker.addEventListener('change',function(){
  colorArea.innerHTML=picker.value;
  targetLabel.appendChild(colorArea);
});
});