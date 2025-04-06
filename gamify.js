function help(){
    window.location.assign("products.html");
}

function aboutus(){
    window.location.href = "about_us.html";
}


window.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");
    const authLink = document.getElementById("auth-link");

    if (username && authLink) {
        authLink.innerHTML = `<a href="profile.html">${username}</a>`;
    }
});
