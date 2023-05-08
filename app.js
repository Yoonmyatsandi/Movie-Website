
const rightarrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


// rightarrow.forEach((arrow,i)=>{   
//     const movieLength = movieLists[i].querySelectorAll("img").length;
//     let click = 0;
//     arrow.addEventListener("click",()=>{
//         click++;
//         if(movieLength - (2 + click)>0){
//             movieLists[i].style.transform = `translateX(${
//                 movieLists[i].computedStyleMap().get("transform")[0].x.value -300
//                }px)`;
//         }else{
//             movieLists[i].style.transform = "translateX(0)";
//             click=0;
//         }
      
//        console.log( movieLists[i].querySelectorAll("img").length)
//     })
// })

const arrows = Array.from(document.querySelectorAll('.arrow'));

arrows.forEach((arrow, i) => {
  const movieList = document.querySelectorAll('.movie-list')[i];
  const movieImgs = movieList.querySelectorAll('img');
  let clickCount = 0;

  arrow.addEventListener('click', () => {
    clickCount++;
    const offset = clickCount * -300;

    if (movieImgs.length > 2 + clickCount) {
      movieList.style.transform = `translateX(${offset}px)`;
    } else {
      movieList.style.transform = 'translateX(0)';
      clickCount = 0;
    }

    console.log(movieImgs.length);
  });
});





const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;
const navbarBlackClass = 'navbar-black';

window.addEventListener('scroll', () => {
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollPos >= navbarHeight) {
    navbar.classList.add(navbarBlackClass);
  } else {
    navbar.classList.remove(navbarBlackClass);
  }
});



// Get all the "Watch" buttons
const watchButtons = document.querySelectorAll('.movie-list-item-button');

// Attach a click event listener to each "Watch" button
watchButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the page URL from the "href" attribute of the clicked button
    const pageUrl = button.getAttribute('href');

    // Navigate to the page URL
    window.location.href = pageUrl;
  });
});


const signupBtn = document.getElementById("signup-btn");
const signinBtn = document.getElementById("signin-btn");

// Add click event listeners to the buttons
signupBtn.addEventListener("click", function() {
   // Redirect the user to the sign-up page
   window.location.href = "./signup.html";
});

signinBtn.addEventListener("click", function() {
   // Redirect the user to the sign-in page
   window.location.href = "./signin.html";
});


// const btnContainer = document.querySelector('.btn-container');
// const btnGroup = document.querySelector('.btn-group');
// const eparrow = document.querySelector('.eparrow');
// const eparrowLeft = document.querySelector('.eparrow-left');


// let maxBtnNum = Math.floor(document.documentElement.clientWidth / 48);
// let btnWidth = document.documentElement.clientWidth / maxBtnNum;

// window.addEventListener('resize', () => {
//   maxBtnNum = Math.floor(document.documentElement.clientWidth / 48);
//   btnWidth = document.documentElement.clientWidth / maxBtnNum;
// });

// if (btnGroup.offsetWidth > maxBtnNum * btnWidth) {
//   eparrow.style.display = 'block';
// }

// eparrow.addEventListener('click', () => {
//   const btns = btnGroup.querySelectorAll('.btn');
//   const lastVisibleBtn = btns[maxBtnNum-1];
//   const lastVisibleBtnRight = lastVisibleBtn.getBoundingClientRect().right - btnContainer.getBoundingClientRect().left;
//   const btnGroupRight = btnGroup.getBoundingClientRect().right - btnContainer.getBoundingClientRect().left;
//   const diff = lastVisibleBtnRight - btnContainer.offsetWidth;
  
//   if (diff > 0) {
//     btnGroup.style.transform = `translateX(${-diff}px)`;
//   } else if (btnGroupRight > btnContainer.offsetWidth) {
//     btnGroup.style.transform = `translateX(${-btnGroupRight + btnContainer.offsetWidth}px)`;
//   }
// });

// eparrowLeft.addEventListener('click', () => {
//   btnGroup.style.transform = 'translateX(0)';
// });



