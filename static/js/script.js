const phrases = [
  "Are we alone in deep sky?",
  "Could you find a friend inspace?",
  "Have you ever wondered about observing the twinkling stars??",
  "What makes an exoplanet Earth-like?",
  "Could we find life on a frozen exoplanet?",
  "What if exoplanets had floating continents?",
]; // Add more phrases as needed
const typingSpeed = 50; // Adjust typing speed in milliseconds
const deleteSpeed = 50; // Adjust deletion speed in milliseconds
const pauseBetweenPhrases = 800; // Adjust pause between phrases in milliseconds

const typingTextElement = document.getElementById("typing-text");

let currentPhraseIndex = 0;
let isDeleting = false;
let currentText = "";

function typeAndDeleteText() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (!isDeleting && currentText.length < currentPhrase.length) {
    currentText = currentPhrase.substring(0, currentText.length + 1);
    typingTextElement.innerHTML = currentText;
    setTimeout(typeAndDeleteText, typingSpeed);
  } else if (isDeleting && currentText.length > 0) {
    currentText = currentText.substring(0, currentText.length - 1);
    typingTextElement.innerHTML = currentText;
    setTimeout(typeAndDeleteText, deleteSpeed);
  } else if (currentText.length === 0) {
    isDeleting = false;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(typeAndDeleteText, typingSpeed);
  } else {
    isDeleting = true;
    setTimeout(typeAndDeleteText, pauseBetweenPhrases);
  }
}

typeAndDeleteText();
//Sliders
const slides = document.querySelectorAll(".slide");
const slides2 = document.querySelectorAll(".slide2");
let counter = 0;
let counter2 = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
slides2.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const slideImage2 = () => {
  slides2.forEach((slide) => {
    slide.style.transform = `translateX(-${counter2 * 100}%)`;
  });
};

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slide_len1; //It's the len of the certs I earned It will come direct from the database
  }
  // console.log(counter);
  slideImage();
};
const goNext = () => {
  counter++;
  if (counter > slide_len1) {
    counter = 0; //It's the len of the certs I earned It will come direct from the database
  }
  slideImage();
};
const goPrev2 = () => {
  counter2--;
  if (counter2 < 0) {
    counter2 = slide_len2; //It's the len of the certs I earned It will come direct from the database
  }
  // console.log(counter);
  slideImage2();
};
const goNext2 = () => {
  counter2++;
  if (counter2 > slide_len2) {
    counter2 = 0; //It's the len of the certs I earned It will come direct from the database
  }
  slideImage2();
};
//Image fadein effect
document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".fade-image");
  var index = 0;

  function fadeOut() {
    images[index].style.opacity = 0;
  }

  function fadeIn() {
    index = (index + 1) % images.length;
    images[index].style.opacity = 1;
  }

  // Initial fade-in
  images[index].style.opacity = 1;

  // Set an interval to fade in and out images
  setInterval(function () {
    fadeOut();
    setTimeout(fadeIn, 1000); // Change image after 1 second (1000 milliseconds)
  }, 3000); // Change image every 3 seconds (3000 milliseconds)
});


//Fixed navBar

const navbar = document.getElementById("navBar");

// Function to update classes based on scroll position
function updateNavbarClasses() {
    if (window.scrollY > 80) { // Adjust the scroll position as needed
        navbar.classList.add("myNavBar");
        
    } else {
        navbar.classList.remove("myNavBar");
    }
}
//Navbar Scroll off
// window.addEventListener("scroll", updateNavbarClasses);

document.addEventListener('DOMContentLoaded', (event) => {
  const paragraph = document.getElementById('exo_type');
  const exo_name = document.getElementById('exo_type_name');
  const gas_giant = document.getElementById('gas_giant');
  const neptune = document.getElementById('neptune');
  const super_earth = document.getElementById('super_earth');
  const terrestrial = document.getElementById('terrestrial');
  const types_of_planet = document.getElementById('types_of_planet');


  gas_giant.addEventListener('click', () => {
      paragraph.textContent = "Gas giants are planets the size of Saturn or Jupiter, the largest planet in our solar system, or much, much larger.More variety is hidden within these broad categories. Hot Jupiters, for instance, were among the first planet types found – gas giants orbiting so closely to their stars that their temperatures soar into the thousands of degrees (Fahrenheit or Celsius)."
      exo_name.textContent= "Gas Giants"
      types_of_planet.style.backgroundImage = "url('/static/img/gas_giant.jpg')";
  });
  neptune.addEventListener('click', () => {
      paragraph.textContent = "Neptunian planets are similar in size to Neptune or Uranus in our solar system. They likely have varied interiors but predominantly hydrogen-helium atmospheres and rocky cores. We’re also discovering mini-Neptunes, planets smaller than Neptune and bigger than Earth. No planets of this size or type exist in our solar system."
      exo_name.textContent= "Neptunian planets"
      types_of_planet.style.backgroundImage = "url('/static/img/neptunian2.jpeg')";

  });
  super_earth.addEventListener('click', () => {
      paragraph.textContent = "Super-Earths a class of planets unlike any in our solar system are more massive than Earth yet lighter than ice giants like Neptune and Uranus, and can be made of gas, rock or a combination of both. They are between twice the size of Earth and up to 10 times its mass.Super-Earth is a reference only to an exoplanet’s size larger than Earth and smaller than Neptune."
      exo_name.textContent= "Super-Earths"
      types_of_planet.style.backgroundImage = "url('/static/img/super_earth.jpeg')";

  });
  terrestrial.addEventListener('click', () => {
      paragraph.textContent = "Terrestrial planets (Earth sized and smaller) are rocky worlds, composed of rock, silicate, water and/or carbon. To determine if some of these worlds have atmospheres, oceans or other signs of habitability, it takes more investigation. Larger terrestrial exoplanets (those at least twice as massive as Earth) are classified as super-Earths."
      exo_name.textContent= "Terrestrial planets"
      types_of_planet.style.backgroundImage = "url('/static/img/terrestrial.jpg')";

  });


});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider-section .slider');
  const list = document.querySelector('.slider-section .slider .list');
  const items = document.querySelectorAll('.slider-section .slider .list .item');
  const thumbnails = document.querySelectorAll('.slider-section .slider .thumbnail .item');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;

  function showSlide(index) {
      items.forEach((item, i) => {
          if (i === index) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });

      thumbnails.forEach((thumb, i) => {
          if (i === index) {
              thumb.classList.add('active');
          } else {
              thumb.classList.remove('active');
          }
      });
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
  });

  thumbnails.forEach((thumb, i) => {
      thumb.addEventListener('click', () => {
          currentIndex = i;
          showSlide(currentIndex);
      });
  });

  // Initialize the first slide
  showSlide(currentIndex);
});
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
// let refreshInterval = setInterval(() => {
//     next.click();
// }, 5000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})


// RoadMap


$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
    
});
function triggerOnDelay() {
$(document).ready(function() {
    var steps = [".step02", ".step03", ".step04", ".step05", ".step06", ".step07"];
    var delay = 1500; // Adjust the delay as needed
    steps.forEach(function(step, index) {
        setTimeout(function() {
            $(step).trigger("click");
        }, delay  * (index + 1));
    });
});
}
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the animated element
    // const animatedElement = document.querySelector(".animated-element");

    // Get a reference to the trigger section
    const triggerSection = document.querySelector("#RoadMap");

    // Function to check if the element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to add the "animate" class if the element is in the viewport
    function checkAnimation() {
      if (isInViewport(triggerSection)) {
        //Run a for loop accrording to the class_name and select it change the style to width according to the databases.
        triggerOnDelay()
        // animatedElement.classList.add("animate");
        // animatedElement.style
        // Remove the scroll event listener once the animation is triggered
        window.removeEventListener("scroll", checkAnimation);
      }
    }

    // Add a scroll event listener to check for animation trigger
    window.addEventListener("scroll", checkAnimation);

    // Initial check to see if the element is already in the viewport
    checkAnimation();
  });


// Example usage:
// runFunctionWhenVisible('.step', triggerOnDelay());

// triggerOnDelay();

$(".step01").click( function() {    
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "17%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "34%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "50%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "66%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});
$(".step06").click( function() {
	$("#line-progress").css("width", "84%");
	$(".extra1").addClass("active").siblings().removeClass("active");
});
$(".step07").click( function() {
	$("#line-progress").css("width", "100%");
	$(".extra2").addClass("active").siblings().removeClass("active");
});

//Scrollbar color
document.addEventListener('scroll', function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  const scrollPercent = scrollTop / (scrollHeight - clientHeight);
  const gradientOpacity = scrollPercent * 1.5; // Adjust the multiplier to control the gradient effect

  const gradient = `linear-gradient(to bottom, rgba(67, 105, 230, ${gradientOpacity}), transparent)`;

  // Apply the gradient to the scrollbar track
  document.styleSheets[0].addRule('::-webkit-scrollbar-track', `background: ${gradient}`);
});


//Show Model

function showModal() {
  const modal = document.getElementById('modal');
  // modal.classList.remove('hidden');
  // modal.classList.add('flex');
  setTimeout(() => {
      modal.classList.remove('invisible', 'scale-90');
      modal.classList.add('visible', 'scale-100');
  }, 10);
}

function hideModal() {
  const modal = document.getElementById('modal');

  setTimeout(() => {
      modal.classList.remove('visible', 'scale-100');
      modal.classList.add('invisible', 'scale-90');
  }, 300);
}

document.querySelectorAll('#main-list > li').forEach(item => {
  item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      const sublist = document.getElementById(target);

      // Hide all sublists
      document.querySelectorAll('#main-list > li > ul').forEach(list => {
          if (list !== sublist) {
              list.querySelectorAll('li').forEach(subitem => {
                  subitem.classList.add('translate-x-[-50px]', 'opacity-0');
                  subitem.classList.remove('translate-x-0', 'opacity-100');
              });
              list.classList.add('hidden');
          }
      });

      // Toggle the current sublist
      if (sublist.classList.contains('hidden')) {
          sublist.classList.remove('hidden');
          sublist.querySelectorAll('li').forEach((subitem, index) => {
              setTimeout(() => {
                  subitem.classList.remove('translate-x-[-50px]', 'opacity-0');
                  subitem.classList.add('translate-x-0', 'opacity-100');
              }, index * 100); // Delay for each sub-item
          });
      } else {
          sublist.querySelectorAll('li').forEach(subitem => {
              subitem.classList.add('translate-x-[-50px]', 'opacity-0');
              subitem.classList.remove('translate-x-0', 'opacity-100');
          });
          setTimeout(() => {
              sublist.classList.add('hidden');
          }, 300); // Delay hiding the sublist to match the animation duration
      }
  });
});
function showModal2() {
  const modal = document.getElementById('modal2');
  // modal.classList.remove('hidden');
  // modal.classList.add('flex');
  setTimeout(() => {
      modal.classList.remove('invisible', 'scale-90');
      modal.classList.add('visible', 'scale-100');
  }, 10);
}

function hideModal2() {
  const modal = document.getElementById('modal2');

  setTimeout(() => {
      modal.classList.remove('visible', 'scale-100');
      modal.classList.add('invisible', 'scale-90');
  }, 300);
}
function showModal3() {
  const modal = document.getElementById('modal3');
  // modal.classList.remove('hidden');
  // modal.classList.add('flex');
  setTimeout(() => {
      modal.classList.remove('invisible', 'scale-90');
      modal.classList.add('visible', 'scale-100');
  }, 10);
}

function hideModal3() {
  const modal = document.getElementById('modal3');

  setTimeout(() => {
      modal.classList.remove('visible', 'scale-100');
      modal.classList.add('invisible', 'scale-90');
  }, 300);
}

// Slider 2

// Updated JavaScript for the Slider and Roadmap

// Variables for the slider functionality
let customSlides = document.querySelectorAll('.slide-item');
let customThumbnails = document.querySelectorAll('.thumbnail-item');
let customCurrentSlide = 0;
let customSlideInterval;

// Function to activate a specific slide
function activateCustomSlide(index) {
  customSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    customThumbnails[i].classList.toggle('active', i === index);
  });
  customCurrentSlide = index;
}

// Function to show the next slide
function showCustomNextSlide() {
  let nextSlideIndex = (customCurrentSlide + 1) % customSlides.length;
  activateCustomSlide(nextSlideIndex);
}

// Function to show the previous slide
function showCustomPrevSlide() {
  let prevSlideIndex = (customCurrentSlide - 1 + customSlides.length) % customSlides.length;
  activateCustomSlide(prevSlideIndex);
}

// Event listeners for the arrows
document.getElementById('prevSlide').addEventListener('click', showCustomPrevSlide);
document.getElementById('nextSlide').addEventListener('click', showCustomNextSlide);

// Automatic slide show with a set interval
customSlideInterval = setInterval(showCustomNextSlide, 6000);

// Variables for the roadmap functionality
let customRoadmapSteps = document.querySelectorAll('.roadmap-step');
let customRoadmapContentSections = document.querySelectorAll('.roadmap-section-content');
let customProgressBar = document.getElementById('progress-bar');

// Function to activate a roadmap step and show corresponding content
function activateCustomRoadmapStep(index) {
  customRoadmapSteps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
    customRoadmapContentSections[i].classList.toggle('active', i === index);
  });
  let progressBarWidth = (index / (customRoadmapSteps.length - 1)) * 100;
  customProgressBar.style.width = `${progressBarWidth}%`;
}

// Event listeners for clicking on roadmap steps
customRoadmapSteps.forEach((step, index) => {
  step.addEventListener('click', () => activateCustomRoadmapStep(index));
});
