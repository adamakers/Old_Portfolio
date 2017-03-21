const projectBox = document.querySelectorAll('.project-box');


projectBox.forEach(function(box){
  box.addEventListener('click', function(e){
    let boxSummary = box.querySelector('.project-box-summary');
    let target = e.target;

    //onsole.log(target);
    if (target && target.nodeName === 'I') {
      boxSummary.classList.toggle('box-open');
    }
    // var summary = document.querySelector('.project-box-summary');
    // summary.classList.toggle('box-open');
  });
})



