const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const excerpt = document.getElementById("excerpt");
const date = document.getElementById("date");
const header = document.getElementById("heading");
const title = document.getElementById("title");
const name = document.getElementById("name");
const profile_img = document.getElementById("profile_img");

const getData = () => {
  header.innerHTML =
    '<img src="https://picsum.photos/id/20/500/600" alt="blog artcile" />';
  title.innerHTML = "Great News Are In This Card";
  excerpt.innerHTML =
    "This can be article, product, gallery etc. And description can be right here!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/23.jpg" alt="" />';
  name.innerHTML = "Arielle Mango";
  date.innerHTML = "Apr 02, 2023";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
};

setTimeout(getData, 1900);
