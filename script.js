document.body.innerHTML = "<h2>Hello Czechitas!</h2>"

// + - * /
// %
document.body.innerHTML += "<p>" + (1 + 1) + "</p>"
document.body.innerHTML += "<p>" + (10 * 10) + "</p>"
document.body.innerHTML += "<p>" + (3 % 2) + "</p>"

/*
Toto
je 
blok
komentare
*/
document.body.innerHTML += "<p>Michal" + " Kucera</p>"

document.body.innerHTML += "<p>" + (Math.ceil(2.2)) + "</p>"
document.body.innerHTML += "<p>" + (Math.floor(2.9)) + "</p>"
document.body.innerHTML += "<p>" + (Math.floor(Math.random() * 100)) + "</p>"