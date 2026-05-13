const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

});

const hiddenElements = document.querySelectorAll('.card, .heartbeat-card, .please-card, .sorry-card, .message-card, .promise-card');

hiddenElements.forEach(el => observer.observe(el));
