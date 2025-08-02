function myFunction(btn) {
    const container = btn.previousElementSibling;
    const dots = container.querySelector("#dots");
    const moreText = container.querySelector("#more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = "Read more";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = "Read less";
    }
}