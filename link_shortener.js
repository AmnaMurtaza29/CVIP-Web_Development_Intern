let original_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let shorten_link = document.getElementById("shorten_link");
let copy = document.getElementById("copy");


generate.addEventListener("click",() => {
    let url = original_link.value;
    fetch("https://api-ssl.bitly.com/v4/shorten")
})
.then((resp) => resp.json ())
.then((value) => {
    shorten_link.value = value.result.short_link;
})
.cathch((error) => {
    shorten_link.value =  "Something Went Wrong!";

});
// Enabling copy Button

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(shorten_link.value);
    copy.innerHTML = "Copied!";

    setTimeout(() => {
        copy.innerHTML = "copy";
    }, 1000);
});
