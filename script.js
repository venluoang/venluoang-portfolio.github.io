var scrollPosition; // Variable to store the scroll position

function openModal(imageSrc) {
  // Store current scroll position
  scrollPosition = window.pageYOffset;
  
  // Create modal element
  var modal = document.createElement('div');
  modal.classList.add('modal');
  
  // Create image element
  var image = document.createElement('img');
  image.src = imageSrc;
  
  // Create close button
  var closeButton = document.createElement('button');
  closeButton.classList.add('close-btn');
  closeButton.innerHTML = '&times;'; // "x" symbol
  
  // Append image and close button to modal
  modal.appendChild(image);
  modal.appendChild(closeButton);
  
  // Append modal to body
  document.body.appendChild(modal);
  
  // Disable scrolling
  document.body.classList.add('modal-open');
  
  // Close modal when clicking outside the image or the close button
  modal.addEventListener('click', function(event) {
    if (event.target === modal || event.target === closeButton) {
      closeModal();
    }
  });
}

function closeModal() {
  var modal = document.querySelector('.modal');
  document.body.removeChild(modal);
  
  // Enable scrolling
  document.body.classList.remove('modal-open');
  
  // Restore scroll position
  window.scrollTo(0, scrollPosition);
}


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');
  
  // Honor section carousel
  const prevBtnHonors = document.querySelector('#honors-awards .prev-btn');
  console.log('prevBtnHonors:', prevBtnHonors);
  
  const nextBtnHonors = document.querySelector('#honors-awards .next-btn');
  console.log('nextBtnHonors:', nextBtnHonors);
  
  const carouselHonors = document.querySelector('#honors-awards .carousel-container');
  console.log('carouselHonors:', carouselHonors);

  let scrollAmountHonors = 0;

  prevBtnHonors.addEventListener('click', () => {
    console.log('prevBtnHonors clicked');
    scrollAmountHonors -= 300; // Adjust as needed
    carouselHonors.scrollTo({
      top: 0,
      left: scrollAmountHonors,
      behavior: 'smooth'
    });
  });

  nextBtnHonors.addEventListener('click', () => {
    console.log('nextBtnHonors clicked');
    scrollAmountHonors += 300; // Adjust as needed
    carouselHonors.scrollTo({
      top: 0,
      left: scrollAmountHonors,
      behavior: 'smooth'
    });
  });

  // Classroom Innovations section carousel
  const prevBtnClassroom = document.querySelector('#classroom-innovations .prev-btn');
  console.log('prevBtnClassroom:', prevBtnClassroom);
  
  const nextBtnClassroom = document.querySelector('#classroom-innovations .next-btn');
  console.log('nextBtnClassroom:', nextBtnClassroom);
  
  const carouselClassroom = document.querySelector('#classroom-innovations .carousel-container');
  console.log('carouselClassroom:', carouselClassroom);

  let scrollAmountClassroom = 0;

  prevBtnClassroom.addEventListener('click', () => {
    console.log('prevBtnClassroom clicked');
    scrollAmountClassroom -= 300; // Adjust as needed
    carouselClassroom.scrollTo({
      top: 0,
      left: scrollAmountClassroom,
      behavior: 'smooth'
    });
  });

  nextBtnClassroom.addEventListener('click', () => {
    console.log('nextBtnClassroom clicked');
    scrollAmountClassroom += 300; // Adjust as needed
    carouselClassroom.scrollTo({
      top: 0,
      left: scrollAmountClassroom,
      behavior: 'smooth'
    });
  });
});

// Function to create typing animation effect
function typeWriter(text, i, speed, targetElement) {
  if (i < text.length) {
    // Append the next character to the target element
    targetElement.textContent += text.charAt(i);
    // Wait for a specified time before appending the next character
    setTimeout(function() {
      typeWriter(text, i + 1, speed, targetElement);
    }, speed);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Target the h2 element for the typing animation
  var h2Element = document.querySelector('.home-text h2');
  // Clear existing content of h2 element
  h2Element.textContent = '';
  // Text for typing animation
  var text = "Website Developer";
  // Speed of typing animation (in milliseconds)
  var speed = 100;
  // Start the typing animation
  typeWriter(text, 0, speed, h2Element);
});

// Function to animate text elements with fade-in effect
function fadeIn(element) {
  var opacity = 0;
  var timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 100);
}

// Get the h1 and h2 elements
var h1 = document.querySelector('.home-text h1');
var h2 = document.querySelector('.home-text h2');

// Apply fade-in animation to h1 and h2 elements
fadeIn(h1);
fadeIn(h2);

// Select the image element
const homeImage = document.querySelector('.home-photo img');

// Function to animate the image
function animateImage() {
  homeImage.style.transition = 'transform 1s ease-in-out';
  homeImage.style.transform = 'scale(1.1)'; // Adjust scale as needed
}

// Call the function to start the animation
animateImage();

