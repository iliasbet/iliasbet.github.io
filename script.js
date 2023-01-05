var subtitle = "I am Ilias, a French engineering student interested in artificial intelligence. I want to help advance this field and make the world a better place.";

var delay = 40;

var subtitleElement = document.getElementById("subtitle");

function writeTitle() {

  subtitleElement.innerHTML += subtitle[0];

  subtitle = subtitle.substr(1);

  if (subtitle.length > 0) {
    setTimeout(writeTitle, delay);
  }
}

writeTitle();

function scrollToElement(navbarButtonId, targetElementId) {

const navbarButton = document.querySelector(`#${navbarButtonId}`);

const targetElement = document.querySelector(`#${targetElementId}`);

navbarButton.addEventListener('click', () => {

    targetElement.scrollIntoView({ behavior: 'smooth'});
});
}

scrollToElement('about-me-button','about-me-target');
scrollToElement('home-button','home-target');
scrollToElement('projects-button','contact-target');
scrollToElement('contact-button','contact-target');

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