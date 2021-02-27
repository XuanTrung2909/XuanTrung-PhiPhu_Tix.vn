
// SHOWTIMES HIDE AND SHOW CONTENT

document.getElementById("playing").addEventListener("click", function(){
    document.getElementById("playing__content").style.display = "block";
    document.getElementById("playing").className = "active";
    document.getElementById("upcoming__content").style.display = "none";
    document.getElementById("upcoming").className = "";

})
document.getElementById("upcoming").addEventListener("click", function(){
    document.getElementById("playing__content").style.display = "none";
    document.getElementById("upcoming__content").style.display = "block";
    document.getElementById("upcoming").className = "active";
    document.getElementById("playing").className = "";
})