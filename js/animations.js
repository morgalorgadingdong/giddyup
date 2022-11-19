// function animate() {
    
//       var elements;
//       var windowHeight;
    
//       function init() {
        
//         elements = document.querySelectorAll('.hidden');
//         windowHeight = window.innerHeight;
//         console.log(windowHeight)
//       }
    
//       function checkPosition() {
        
//         for (var i = 0; i < elements.length; i++) {
//           var element = elements[i];
//           var positionFromTop = elements[i].getBoundingClientRect().top;
    
//           if (positionFromTop - windowHeight <= 0) {
//             console.log(positionFromTop, windowHeight)
//             element.classList.add('animate__animated');
//             element.classList.remove('hidden');
//           }
//         }
//       }
    
//       window.addEventListener('scroll', checkPosition);
//       window.addEventListener('resize', init);
    
//       init();
//     //   checkPosition();
//     };

// animate()

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal')
    } else {
      entry.target.classList.remove('reveal')
    }
  })
})
const animateElements = document.querySelectorAll('.animate')
// animateElements.append(document.querySelectorAll('animate-top'))
console.log(animateElements)
animateElements.forEach((el) => observer.observe(el));