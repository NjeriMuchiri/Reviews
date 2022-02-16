const reviews = [
    {
        id:1,
        name:"Wanjiru Muchiri",
        job:"Nurse & Trader",
        img: "./Images/Kashii.jpg",
        text:"Ann offers the best web services and she delivers on time.I love her work and I hope you all can give her a chance to serve you.",
    },
    {
        id:2,
        name:"kaggie Muchiri",
        job:"Data Analyst",
        img: "./Images/Kaggy.jpg",
        text:"I have been working with her for three years now and she is best business partner I got. Our customers are served well and we get very many referrals due to the great customer services we offer. Welcome y'all!",
    },
    {
        id:3,
        name:"Wambui Muchiri",
        job:"Fashion Designer",
        img: "./Images/Kawambo.jpg",
        text:"I have been working with Ann ever since she started her career.All I have had, is the best services when working with her and the advice she gives you regarding your vision to what you want once you work with her.You will love her!",
    },
    {
        id:4,
        name:"Cynthia Cynthie",
        job:"Enterpreneur",
        img: "./Images/Cynthie.jpg",
        text:"Where do I begin?Because what she offers is the best customer experience and services.I love her work.",
    },
    {
        id:5,
        name:"Ashley Ashley",
        job:"Fashion Stylist",
        img: "./Images/Ash.jpg",
        text:"Her services are supper amazing and I really enjoy working with her everytime I get the chance to.",
    },
    {
        id:5,
        name:"Njeri Muchiri",
        job:"Web Designer & Developer",
        img: "./Images/Kashee.jpg",
        text:"Welcome one welcome all! I offer web design and developing websites services.Get a chance to work with me and I will offer a great customer experience  not to be forgotten. I appreciate referrals and in return you get a discount.Thank you!",
    }
];

// select items
const img = document.getElementById('person-image');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item(html)
window.addEventListener('DOMContentLoaded',function() {
     showPerson(currentItem);
});

//show person based on items

function showPerson(){
     const item = reviews[currentItem];
      img.src = item.img;
      author.textContent = item.name;
      job.textContent = item.job;
      info.textContent = item.text;
}
//show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1 ){
        currentItem = 0;
    }
    showPerson();
});
// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0 ){
        currentItem = reviews.length - 1;
    }
    showPerson();
});
// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});




