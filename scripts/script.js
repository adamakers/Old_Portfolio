var boxHeader = document.querySelectorAll('.project-box-header');



boxHeader.forEach(function(box){
  box.addEventListener('click', function(){
    var summary = document.querySelector('.project-box-summary');
    summary.classList.toggle('box-open');
  });
})

