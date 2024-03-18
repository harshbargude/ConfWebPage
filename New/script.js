window.addEventListener('scroll', revealSection);

function revealSection() {
  var revealSections = document.querySelectorAll('.reveal-section');
  
  for (var i = 0; i < revealSections.length; i++) {
    var revealSection = revealSections[i];
    var revealPosition = revealSection.getBoundingClientRect().top;
    var windowHeight = window.innerHeight / 1.3;
    
    if (revealPosition < windowHeight) {
      revealSection.classList.add('revealed');
    }
  }
}
