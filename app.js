
const names=["cat", "dog", "rabbit", "panda", "lion", "elephant", "giraffe", "zebra", "turtle", "fish", "butterfly", "bird", "chicken", "duck", "dolphin", "rose", "sunflower", "tulip", "cactus", "appletree", "coconuttree", "pine", "mushroom", "strawberry", "watermelon", "car", "racecar", "truck", "bus", "ambulance", "policecar", "firetruck", "motorcycle", "bicycle", "train", "ship", "cruise", "airplane", "helicopter", "rocket", "house", "school", "castle", "lighthouse", "tower", "bridge", "sun", "moon", "star", "rainbow", "planet", "astronaut", "apple", "banana", "orange", "icecream", "donut", "pizza", "burger", "cupcake"];
const picker=document.getElementById('picker');
names.forEach(n=>picker.add(new Option(n,n)));
let current='#ff0000';
document.getElementById('colorPicker').oninput=e=>current=e.target.value;

const pictures={};
names.forEach((n,i)=>{
 pictures[n]=`<svg viewBox="0 0 300 300">
 <circle class="part" cx="150" cy="120" r="${40+(i%20)}"/>
 <rect class="part" x="100" y="160" width="100" height="80"/>
 </svg>`;
});

function attach(){document.querySelectorAll('.part').forEach(p=>p.onclick=()=>p.style.fill=current);}
function load(n){document.getElementById('canvas').innerHTML=pictures[n];attach();}
picker.onchange=()=>load(picker.value);
window.resetDrawing=()=>document.querySelectorAll('.part').forEach(p=>p.style.fill='white');
window.savePNG=()=>alert('Demo premium scaffold: tambahkan html2canvas untuk ekspor PNG.');
load(names[0]);
