let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight, .1,100);
camera.position.z=5;
scene.add(camera);

let box =new THREE.BoxGeometry(1, 1, 1);
let material=new THREE.MeshBasicMaterial({color :"green" });
let mesh=new THREE.Mesh(box,material);

mesh.scale.x=3;
scene.add(mesh);

const canvas = document.querySelector('canvas');
let renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
let clock =new THREE.Clock();
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
    mesh.rotation.y=clock.getElapsedTime()* 2;
    mesh.rotation.x=clock.getElapsedTime()*2;
    mesh.rotation.z=clock.getElapsedTime()*2;


}
animate();
