import image  from './assets/perfume1.jpg';
import image2 from './assets/Screenshot.png';
import perfume2 from './assets/perfume2.jpg';
import './style/style.css';
import './style/common.scss';


const title = document.getElementById('title');
const toast = document.getElementById('toast');
const perfumeDiv = document.getElementById('perfume');
const secondImgDiv = document.getElementById('secondImg');
const section = document.getElementById('section');


toast.style.display = 'none';

perfume.src = image;
perfumeDiv.style.display = 'block';

secondImgDiv.src = perfume2;

if (secondImg && section) {
  section.style.backgroundImage = `url('${secondImgDiv.src}')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
}

title.addEventListener('click', () => {
  toast.style.display = 'block';
})