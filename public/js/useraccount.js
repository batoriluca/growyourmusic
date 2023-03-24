var postsOn = true;

const postsBtn = document.getElementById('posts');
const prodsBtn = document.getElementById('prods');
const productsDiv = document.getElementById('productsDiv');
const postsDiv = document.getElementById('postsDiv');


prodsBtn.addEventListener("click", () => {
    if (postsOn === true) {

        postsBtn.style.backgroundColor = "transparent";
        postsBtn.style.cursor = "pointer";
        prodsBtn.style.backgroundColor = "#6657DA";
        prodsBtn.style.cursor = "default";
        productsDiv.style.display = "grid";
        postsDiv.style.display = "none";
        postsOn = false;
    }

})

postsBtn.addEventListener("click", () => {
    if (postsOn === false) {
        productsDiv.style.display = "none";
        postsDiv.style.display = "grid";
        prodsBtn.style.backgroundColor = "transparent";
        prodsBtn.style.cursor = "pointer";
        postsBtn.style.backgroundColor = "#6657DA";
        postsBtn.style.cursor = "default";
        postsOn = true;
    }

})