import './style/style.css';
import './style/common.scss';

document.getElementById('main_container').style.display = 'none';
document.getElementById('exploreSection').style.display = 'flex';
document.getElementById('explore_food').addEventListener('click', () => {
    document.getElementById('main_container').style.display = 'flex';
})


console.log('asd', document.getElementById('item1').src)
document.getElementById('item1').src = 'https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg'
document.getElementById('item2').src = 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/noodle-stir-fry-with-crunchy-peanuts-9783ab5.jpg'
document.getElementById('item3').src = 'https://www.bettycrocker.com/-/media/GMI/Core-Sites/BC/Images/Shared/myaccount/footer-acq-landing-page-2025/09-2025_EmailSignUp_Cookies.jpg?sc_lang=en'
document.getElementById('item4').src = 'https://skinnyspatula.com/wp-content/uploads/2022/10/Creamy_Garlic_Chicken_Pasta_0-735x735.jpg'