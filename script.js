// The title that you want to animate
var subtitle = "Hi! I am Ilias, a French engineering student interested in artificial intelligence. I want to help advance this field and make the world a better place.";

// The delay between each character being written
var delay = 40; // 100ms

// Get a reference to the title element
var subtitleElement = document.getElementById("subtitle");

// This function will add one character to the title and
// then schedule another call to itself after the specified delay
function writeTitle() {
  // Add the next character
  subtitleElement.innerHTML += subtitle[0];
  // Remove the character from the title string
  subtitle = subtitle.substr(1);
  // If there are still characters left in the title,
  // schedule another call to this function
  if (subtitle.length > 0) {
    setTimeout(writeTitle, delay);
  }
}

// Start writing the title
writeTitle();

function scrollToElement(navbarButtonId, targetElementId) {
// Get the navbar button
const navbarButton = document.querySelector(`#${navbarButtonId}`);

// Get the element to scroll to
const targetElement = document.querySelector(`#${targetElementId}`);

// Add an event listener to the navbar button
navbarButton.addEventListener('click', () => {
    // When the navbar button is clicked, scroll to the element
    targetElement.scrollIntoView({ behavior: 'smooth'});
});
}

scrollToElement('about-me-button','about-me-target');
scrollToElement('home-button','home-target');
scrollToElement('projects-button','projects-target');

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}

let collState = false;
const coll2 = document.getElementById('collapsible-element');
coll2.addEventListener('click', function(){
    if (collState){
        coll2.innerHTML = 'Read more...';
    } else {
        coll2.innerHTML = 'Read less';
    }
    collState = !collState;
});

/* 3D CANVAS (PROJECTS) */

var canvas = document.getElementById('canvas');

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, 1, 4, 1000);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z =15;


var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(335, 335);

var points = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

var geometry = new THREE.Geometry();

var sphereGeometry = new THREE.SphereGeometry(10);

for (var i = 0; i < points.length; i++) {
  var point = new THREE.Vector3().fromArray(points[i]);
  geometry.vertices.push(point);
}

var material = new THREE.PointsMaterial({
  color: 0x90ee90,
  size: 10,
  sizeAttenuation: false
});

var points = new THREE.Points(sphereGeometry, material);
scene.add(points);

function onScroll(event) {
  // Récupérer la valeur de scroll de la page
  var scrollTop = window.scrollY;
  console.log(scrollTop);

  points.rotation.y = scrollTop * 0.005;
}

function animate() {
  requestAnimationFrame(animate);
  points.rotation.z +=  0.02;
  points.rotation.x += 0.01;
  renderer.render(scene, camera);
}

window.addEventListener('scroll', onScroll);

animate();

window.onscroll = function() {
  setTimeout(function() {
    document.getElementById("home-target").style.display = "block";
  }, 12000);
}