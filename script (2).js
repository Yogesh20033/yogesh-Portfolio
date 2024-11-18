// Toggle Sidebar visibility when 3 dots menu is clicked
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});

// Close sidebar if clicked outside
document.addEventListener('click', function(event) {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('active');
  }
});

// Initialize Three.js for the 3D interaction in Hero section
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threejs-canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a rotating cube for the 3D effect
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00aaff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// Parallax Scrolling Effect
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  document.getElementById('hero').style.backgroundPositionY = scrollY * 0.5 + 'px';
});

// Make the 3D canvas resize with the window
window.addEventListener('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
