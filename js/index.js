
// SHOWTIMES HIDE AND SHOW CONTENT

document.getElementById("playing").addEventListener("click", function(){
    document.getElementById("playing__content").style.display = "block";
    document.getElementById("playing").className = "active";
    document.getElementById("upcoming__content").style.display = "none";
    document.getElementById("upcoming").className = "";
    document.getElementById("slide__prev__playing").style.display = "inline-block";
    document.getElementById("slide__next__playing").style.display = "inline-block";
    document.getElementById("slide__prev__upcoming").style.display = "none";
    document.getElementById("slide__next__upcoming").style.display = "none";
})
document.getElementById("upcoming").addEventListener("click", function(){
    document.getElementById("playing__content").style.display = "none";
    document.getElementById("upcoming__content").style.display = "block";
    document.getElementById("upcoming").className = "active";
    document.getElementById("playing").className = "";
    document.getElementById("slide__prev__playing").style.display = "none";
    document.getElementById("slide__next__playing").style.display = "none";
    document.getElementById("slide__prev__upcoming").style.display = "inline-block";
    document.getElementById("slide__next__upcoming").style.display = "inline-block";
})