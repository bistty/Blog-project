const toggleIcons = document.querySelector('.toggle-icons');
const nav = document.querySelector('.nav');
toggleIcons.addEventListener('click', function(){
    nav.classList.toggle('show')
})

const hero = [
    {
        id: '1',
        image: './assets/images/blog3.jpg',
        title:'Nepotism: Stop stigmatising Buhari, Lai Muhammed cautions Kukah',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis aliquid reprehenderit incidunt nobis fugiat iusto, ex, dolores doloremque recusandae magnam corporis odit, sit maxime dicta impedit vero. Amet architecto explicabo doloremque officia repudiandae aspernatur perferendis deleniti non velit voluptas!',
        comment: '2comments'
    },
    {
        id: '2',
        image: './assets/images/blog2.jpg',
        title:'UK, EU release full text of  post-Brexit trade deal',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis aliquid reprehenderit incidunt nobis fugiat iusto, ex, dolores doloremque recusandae magnam corporis odit, sit maxime dicta impedit vero. Amet architecto explicabo doloremque officia repudiandae aspernatur perferendis deleniti non velit voluptas!',
        comment: '5comments'
    },
    {
        id: '3',
        image: './assets/images/blog1.jpg',
        title:'Fire guts Gwarimpa Market in Abuja on Christmas Day',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis aliquid reprehenderit incidunt nobis fugiat iusto, ex, dolores doloremque recusandae magnam corporis odit, sit maxime dicta impedit vero. Amet architecto explicabo doloremque officia repudiandae aspernatur perferendis deleniti non velit voluptas!',
        comment: '3comments'
    },
    {
        id: '4',
        image: './assets/images/blog4.jpg',
        title:'Agriculture in Nigeria needs more attention, Expert warns',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis aliquid reprehenderit incidunt nobis fugiat iusto, ex, dolores doloremque recusandae magnam corporis odit, sit maxime dicta impedit vero. Amet architecto explicabo doloremque officia repudiandae aspernatur perferendis deleniti non velit voluptas!',
        comment: '6comments'
    },
    {
        id: '5',
        image: './assets/images/blog6.jpg',
        title:'45-Year-Old Popular Nollywood Actress, Rita Dominic finally reveals her lover ',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis aliquid reprehenderit incidunt nobis fugiat iusto, ex, dolores doloremque recusandae magnam corporis odit, sit maxime dicta impedit vero. Amet architecto explicabo doloremque officia repudiandae aspernatur perferendis deleniti non velit voluptas!',
        comment: '4comments'
    },
    {
        id: '6',
        image: './assets/images/blog5.jpg',
        title:'Akinsete seeks support for sickel cell patients hit the News nation wide',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non perferendis aliquid reprehenderit incidunt nobis fugiat iusto, ex, dolores doloremque recusandae magnam corporis odit, sit maxime dicta impedit vero. Amet architecto explicabo doloremque officia repudiandae aspernatur perferendis deleniti non velit voluptas!',
        comment: '1comment'
    },
]

const side =[
    {
        id: '1',
        image: './assets/images/health.jpg',
        title:'New data of recording accidents has been found in an uncompleted buiding', 
        comment: '3 comments',
        time:'200'
    },
    {
        id: '2',
        image: './assets/images/finance.jpg',
        title:'Nigeria number one finance news and anything related to finance', 
        comment: '5 comments',
        time:'300'
    },
    {
        id: '3',
        image: './assets/images/shoe5.png',
        title:'Nigeria number one fashion news show and anything related to fashion', 
        comment: '10 comments',
        time:'400'
    },
    {
        id: '4',
        image: './assets/images/pexels-startup-stock-photos-7102.jpg',
        title:'CNN has discovered new evidence on the end sars protest, in Nigeria. A blessing indeed .', 
        comment: '15 comments',
        time:'500'
    },
]

















window.addEventListener('DOMContentLoaded', function(){
   
    heroLoading();
    mainLoading();
    sideLoading()
    
})

function heroLoading(){
    let heroImage = document.querySelector('.image');
    let heroTitle = document.querySelector('.title');
    let heroText = document.querySelector('.text');
    let i = 0;
    let load = setInterval(frame, 3000);
    function frame(){
   

    let heroContainer = hero[i];
     heroImage.src = heroContainer.image;
     heroTitle.textContent = heroContainer.title;
    
      
    i++;
      if (i> hero.length -1){
          i=0;
      }      
    }
}
function mainLoading(){
    const siteContainer = document.querySelector('.site-container');
    const mainCon = hero.map(function(items){
        return `<div class="post-content" data-aos="zoom-in" data-aos-delay="200">
        <div class="post-image">
         <div class='img'>   <img src="${items.image}" alt="" id="image" height='320px' width="350px"></div> 
       
        <div class="post-clue">
            <span><i class="fas fa-users"></i>&nbsp; Admin</span>
            <span><i class="fas fa-calendar-alt"></i>&nbsp;December 02, 2020</span>
            <span>${items.comment}</span>
        </div>
        </div> 
        <div class="post-body">
           <div class="post-title">
               <a href="#">${items.title}</a> 
           </div>
           <div class="post-text">
               <p>${items.text}</p>
           </div>
       </div>
       <button class="btn">Read More <i class="fas fa-arrow-right"></i></button>
       <hr>
   </div>`
    }).join('')
    siteContainer.innerHTML = mainCon;
}

function sideLoading(){
    const sideContainer = document.querySelector('.popular-content');
    const sideCon = side.map(function(items){
        return `<div class="post-content" data-aos="flip-up" data-aos-delay="${items.time}">
        <div class="post-image">
         <div class='img'>   <img src="${items.image}" alt="" id="image" height='280px' width="350px"></div> 
       
        <div class="post-clue">
            <span><i class="fas fa-calendar-alt"></i>&nbsp;December 02, 2020</span>
            <span>${items.comment}</span>
        </div>
        </div> 
        <div class="post-body">
           <div class="post-title">
               <a href="#">${items.title}</a> 
           </div>
       </div>
       <hr>
   </div>`
    }).join('')
    sideContainer.innerHTML = sideCon;
}

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



const dateSen = document.querySelector('.date');
const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const date2 = date.getDate();
const year = date.getFullYear();
dateSen.innerHTML = `${days[day]}, ${date2} ${months[month]} ${year} `;














$(document).ready(function(){
    $('.move-up').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },1000)  ;
      }) 
    AOS.init();
})