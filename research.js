const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  
  let postUrl = encodeURI("https://rohit280309.github.io/WP/");
  let postTitle = encodeURI("Hi everyone, please check this out: ");


  facebookBtn.setAttribute("href",`https://www.facebook.com/sharer.php?u=${postUrl}`);

  twitterBtn.setAttribute("href",`https://twitter.com/share?url=${postUrl}&text=${postTitle}`);

  pinterestBtn.setAttribute("href", `https://pinterest.com/pin/create/bookmarklet/?url=${postUrl}&description=${postTitle}`);

  linkedinBtn.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);

  whatsappBtn.setAttribute("href", `https://api.whatsapp.com/send/?text=${postTitle} ${postUrl}`);
}

init();
