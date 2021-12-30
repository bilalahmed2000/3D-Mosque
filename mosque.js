const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const renderer =new THREE.WebGLRenderer( );
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor("rgb(128,128,128)" )
document.body.appendChild( renderer.domElement );




const geometry = new THREE.BoxGeometry(18 , 0.3, 18 );
const material = new THREE.MeshBasicMaterial( {color: 0xFFDEAD} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.y-=5

/* const geometry1 = new THREE.CylinderGeometry( 0.5, 0.5, 10, 32 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cylinder = new THREE.Mesh( geometry1, material1 );
scene.add( cylinder ); */

const geometry1 = new THREE.BoxGeometry(8 , 7, 8 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xDAA06D} );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.y -= 1.6;


const geometry2 = new THREE.SphereGeometry( 3, 86, 64 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x454B1B } );
const sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );
sphere.position.y += 4

const geometry3 = new THREE.BoxGeometry(6, 0.3, 5 );
const material3 = new THREE.MeshBasicMaterial( {color: 0xE97451} );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.position.y += 2;


const geometry4 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
const material4 = new THREE.MeshBasicMaterial( {color: 0xDAA06D} );
const cylinder4 = new THREE.Mesh( geometry4, material4 );
scene.add( cylinder4 );
cylinder4.position.y -= 2
cylinder4.position.x += 8.5
cylinder4.position.z += 8.7

const geometry5 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
const material5 = new THREE.MeshBasicMaterial( {color: 0xDAA06D} );
const cylinder5 = new THREE.Mesh( geometry5, material5 );
scene.add( cylinder5 );
cylinder5.position.y -= 2
cylinder5.position.x -= 8.5
cylinder5.position.z += 8.7

const geometry6 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
const material6 = new THREE.MeshBasicMaterial( {color: 0xDAA06D} );
const cylinder6 = new THREE.Mesh( geometry6, material6 );
scene.add( cylinder6 );
cylinder6.position.y -= 2
cylinder6.position.x += 8.5
cylinder6.position.z -= 8.7

const geometry7 = new THREE.CylinderGeometry( 0.1, 0.1, 6, 32 );
const material7 = new THREE.MeshBasicMaterial( {color: 0xDAA06D} );
const cylinder7 = new THREE.Mesh( geometry7, material7 );
scene.add( cylinder7 );
cylinder7.position.y -= 2
cylinder7.position.x -= 8.5
cylinder7.position.z -= 8.7

const geometry8 = new THREE.SphereGeometry( 0.2, 64, 41);
const material8 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere8 = new THREE.Mesh( geometry8, material8 );
scene.add( sphere8 );
sphere8.position.z += 8.7
sphere8.position.x += 8.5
sphere8.position.y += 1


const geometry9 = new THREE.SphereGeometry( 0.2, 64, 41);
const material9 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere9 = new THREE.Mesh( geometry9, material9 );
scene.add( sphere9 );
sphere9.position.z += 8.7
sphere9.position.x -= 8.5
sphere9.position.y += 1

const geometry10 = new THREE.SphereGeometry( 0.2, 64, 41);
const material10 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere10 = new THREE.Mesh( geometry10, material10 );
scene.add( sphere10 );
sphere10.position.z -= 8.7
sphere10.position.x += 8.5
sphere10.position.y += 1

const geometry11 = new THREE.SphereGeometry( 0.2, 64, 41);
const material11 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere11 = new THREE.Mesh( geometry11, material11 );
scene.add( sphere11 );
sphere11.position.z -= 8.7
sphere11.position.x -= 8.5
sphere11.position.y += 1

const geometry12 = new THREE.ConeGeometry(0.5, 1, 20 );
const material12 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)"} );
const cone = new THREE.Mesh( geometry12, material12 );
scene.add( cone );
cone.position.y += 7.5


const geometry13 = new THREE.SphereGeometry( 0.5, 67, 46);
const material13 = new THREE.MeshBasicMaterial( { color:  "rgb(255,255,255)"} );
const sphere13 = new THREE.Mesh( geometry13, material13 );
scene.add( sphere13 );
sphere13.position.z += 8.7
sphere13.position.x += 9.5
sphere13.position.y += 1

camera.position.z = 17;



 
 



document.addEventListener('keydown',(e)=>{
if(e.keyCode==38){
  
camera.position.z -= 1
renderer.render(scene,camera)
}
else if(e.keyCode==40){
camera.position.z += 1
renderer.render(scene,camera)
}
else if(e.keyCode==37){
camera.position.x -= 1
renderer.render(scene,camera)
}
else if(e.keyCode==39){
camera.position.x += 1
renderer.render(scene,camera)
}
else if(e.keyCode==87){
  camera.rotation.x -= 0.1
  renderer.render(scene,camera)
  }
  else if(e.keyCode==83){
    camera.rotation.x += 0.1
    renderer.render(scene,camera)
    }
    else if(e.keyCode==65){
      camera.rotation.y += 0.1
      renderer.render(scene,camera)
      }
      else if(e.keyCode==68){
        camera.rotation.y -= 0.1
        renderer.render(scene,camera)
        }

        else if(e.keyCode==80){
          camera.position.y += 1
          renderer.render(scene,camera)
          }
          else if(e.keyCode==76){
            camera.position.y -= 1
            renderer.render(scene,camera)
            }
})

let r=36;
let angle=0;

var Gameloop = function(){
requestAnimationFrame(Gameloop)
  /*sphere13.position.x=Math.cos(angle);
sphere13.position.y=Math.sin(angle);
sphere13.position.z= angle;
angle+=Math.PI/200;*/







renderer.render( scene, camera);





};
Gameloop();	  