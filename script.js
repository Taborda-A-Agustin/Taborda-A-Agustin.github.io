function hideDiv () {
    welcome.style.display = "none";
}
setTimeout("hideDiv()", 4000);

let welcome = document.getElementById("welcome");

function hideDiv1 () {
    starsBody.style.display = "none";
}
setTimeout("hideDiv1()", 4000);

let starsBody = document.getElementById("starsBody");

function showDiv () {
    all.style.display= "block"
}
setTimeout("showDiv()", 4000);

$(function(){
    setTimeout(function(){
      $('html, body')
      .css({
        'overflow': 'auto'
      })
      .animate({
        scrollTop: $('.myDiv').offset()
      }, 4000);
    }, 4000);
  });

let all = document.getElementById("all");

var dynamicWordsToAnimate = ["Desarrollador.", "Programador.","Freelancer."];
var startReversAnimationAfter = 500;

function reverseAnimation(dynamicWIndex){
  var i = dynamicWordsToAnimate[dynamicWIndex].length -1, delay = 0;
  for (; i >= 0 ; i--, delay++) {
    let string = dynamicWordsToAnimate[dynamicWIndex].substr(0, i);
    setTimeout('document.getElementById("dynamic-words").innerHTML = \'' + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateWords(dynamicWIndex + 1)}, 100 * delay + startReversAnimationAfter);
}
function animateWords(dynamicWIndex){
  var i =0;
  if(dynamicWIndex ==  dynamicWordsToAnimate.length){
    dynamicWIndex = 0;
  }
  for (; i < dynamicWordsToAnimate[dynamicWIndex].length; i++) {
    let string = dynamicWordsToAnimate[dynamicWIndex][i]
    setTimeout('document.getElementById("dynamic-words").innerHTML += \'' + string + '\';', 100 * i);
  }
 
 setTimeout(function(){ reverseAnimation(dynamicWIndex)}, 100 * i + startReversAnimationAfter);
}

animateWords(0)

let homeNav = document.querySelector("#homeNav");
let home = document.querySelector ("#home");
let aboutNav = document.querySelector ("#aboutNav");
let about = document.querySelector ("#about");
let contactNav = document.querySelector ("#contactNav");
let contact = document.querySelector ("#contact");

homeNav.addEventListener("click", scrollHome, false);
aboutNav.addEventListener("click", scrollAbout, false);
contactNav.addEventListener("click", scrollContact, false);

function scrollHome (e) {
    home.scrollIntoView ({behavior: "smooth"});
};

function scrollAbout (e) {
    about.scrollIntoView ({behavior: "smooth"});
};

function scrollContact (e) {
    contact.scrollIntoView ({behavior: "smooth"});
};

let linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("click", goLinkedin);

let github = document.querySelector(".github");
github.addEventListener("click", goGithub);

let whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click", goWhatsapp);

function goLinkedin (e) {
    window.open("https://www.linkedin.com/in/albertoagustintaborda/")
};

function goGithub (e) {
    window.open("https://github.com/Taborda-A-Agustin")
};

function goWhatsapp (e) {
    window.open("https://wa.me/+5493442641913")
};

function htmlbyn () {
    let image = document.getElementById('html');
    if (image.src.match("byn")) {
        image.src = "./imgs/htmlcolor.png";
    }
}

function htmlcolor () {
    let image = document.getElementById('html');
    if (image.src.match("color")) {
        image.src = "./imgs/htmlbyn.png";
    }
}

function cssbyn () {
    let imagecss = document.getElementById('css');
    if (imagecss.src.match("byn")) {
        imagecss.src = "./imgs/csscolor.png";
    }
}

function csscolor () {
    let imagecss = document.getElementById('css');
    if (imagecss.src.match("color")) {
        imagecss.src = "./imgs/cssbyn.png";
    }
}

function jsbyn () {
    let imagejs = document.getElementById('js');
    if (imagejs.src.match("byn")) {
        imagejs.src = "./imgs/jscolor.png";
    }
}

function jscolor () {
    let imagecss = document.getElementById('js');
    if (imagecss.src.match("color")) {
        imagecss.src = "./imgs/jsbyn.png";
    }
}

function bbyn () {
    let imageb = document.getElementById('b');
    if (imageb.src.match("byn")) {
        imageb.src = "./imgs/bcolor.png";
    }
}

function bcolor () {
    let imageb = document.getElementById('b');
    if (imageb.src.match("color")) {
        imageb.src = "./imgs/bbyn.png";
    }
}

function jquerybyn () {
    let imagejquery = document.getElementById('jquery');
    if (imagejquery.src.match("byn")) {
        imagejquery.src = "./imgs/jquerycolor.png";
    }
}

function jquerycolor () {
    let imagejquery = document.getElementById('jquery');
    if (imagejquery.src.match("color")) {
        imagejquery.src = "./imgs/jquerybyn.png";
    }
}

let hhh = document.getElementById ("hhh");
hhh.addEventListener ("mousemove", mohhh);
hhh.addEventListener ("mouseleave", mlhhh);
let hho = document.getElementById ("hho");
hho.addEventListener ("mousemove", mohho);
hho.addEventListener ("mouseleave", mlhho);
let hhl = document.getElementById ("hhl");
hhl.addEventListener ("mousemove", mohhl);
hhl.addEventListener ("mouseleave", mlhhl);
let hha = document.getElementById ("hha");
hha.addEventListener ("mousemove", mohha);
hha.addEventListener ("mouseleave", mlhha);
let hhcoma = document.getElementById ("hhcoma");
hhcoma.addEventListener ("mousemove", mohhcoma);
hhcoma.addEventListener ("mouseleave", mlhhcoma);
let hhs = document.getElementById ("hhs");
hhs.addEventListener ("mousemove", mohhs);
hhs.addEventListener ("mouseleave", mlhhs);
let hho2 = document.getElementById ("hho2");
hho2.addEventListener ("mousemove", mohho2);
hho2.addEventListener ("mouseleave", mlhho2);
let hhy = document.getElementById ("hhy");
hhy.addEventListener ("mousemove", mohhy);
hhy.addEventListener ("mouseleave", mlhhy);
let hha2 = document.getElementById ("hha2");
hha2.addEventListener ("mousemove", mohha2);
hha2.addEventListener ("mouseleave", mlhha2);
let hhg = document.getElementById ("hhg");
hhg.addEventListener ("mousemove", mohhg);
hhg.addEventListener ("mouseleave", mlhhg);
let hhu = document.getElementById ("hhu");
hhu.addEventListener ("mousemove", mohhu);
hhu.addEventListener ("mouseleave", mlhhu);
let hhs2 = document.getElementById ("hhs2");
hhs2.addEventListener ("mousemove", mohhs2);
hhs2.addEventListener ("mouseleave", mlhhs2);
let hhexcla = document.getElementById ("hhexcla");
hhexcla.addEventListener ("mousemove", mohhexcla);
hhexcla.addEventListener ("mouseleave", mlhhexcla);

function mohhh (e) {
    hhh.style.color = "#000000";
};
function mlhhh (e) {
    hhh.style.color = "#FFFFFF";
};
function mohho (e) {
    hho.style.color = "#000000";
};
function mlhho (e) {
    hho.style.color = "#FFFFFF";
};
function mohhl (e) {
    hhl.style.color = "#000000";
    hhl.style.borderBottom = "2px solid #000";
};
function mlhhl (e) {
    hhl.style.color = "#FFFFFF";
    hhl.style.borderBottom = "2px solid #FFFFFF";
};
function mohha (e) {
    hha.style.color = "#000000";
    hha.style.borderBottom = "2px solid #000";
};
function mlhha (e) {
    hha.style.color = "#FFFFFF";
    hha.style.borderBottom = "2px solid #FFFFFF";
};
function mohhcoma (e) {
    hhcoma.style.color = "#000000";
    hhcoma.style.borderBottom = "2px solid #000";
};
function mlhhcoma (e) {
    hhcoma.style.color = "#FFFFFF";
    hhcoma.style.borderBottom = "2px solid #FFFFFF";
};

function mohhs (e) {
    hhs.style.color = "#000000";
    hhs.style.borderBottom = "2px solid #000";
};
function mlhhs (e) {
    hhs.style.color = "#FFFFFF";
    hhs.style.borderBottom = "2px solid #FFFFFF";
};

function mohho2 (e) {
    hho2.style.color = "#000000";
    hho2.style.borderBottom = "2px solid #000";
};
function mlhho2 (e) {
    hho2.style.color = "#FFFFFF";
    hho2.style.borderBottom = "2px solid #FFFFFF";
};

function mohhy (e) {
    hhy.style.color = "#000000";
    hhy.style.borderBottom = "2px solid #000";
};

function mlhhy (e) {
    hhy.style.color = "#FFFFFF";
    hhy.style.borderBottom = "2px solid #FFFFFF";
};

function mohha2 (e) {
    hha2.style.color = "#000000";
    hha2.style.borderBottom = "2px solid #000";
};

function mlhha2 (e) {
    hha2.style.color = "#FFFFFF";
    hha2.style.borderBottom = "2px solid #FFFFFF";
};

function mohhg (e) {
    hhg.style.color = "#000000";
    hhg.style.borderBottom = "2px solid #000";
};

function mlhhg (e) {
    hhg.style.color = "#FFFFFF";
    hhg.style.borderBottom = "2px solid #FFFFFF";
};

function mohhu (e) {
    hhu.style.color = "#000000";
};

function mlhhu (e) {
    hhu.style.color = "#FFFFFF";
};

function mohhs2 (e) {
    hhs2.style.color = "#000000";
};

function mlhhs2 (e) {
    hhs2.style.color = "#FFFFFF";
};

function mohhexcla (e) {
    hhexcla.style.color = "#000000";
};

function mlhhexcla (e) {
    hhexcla.style.color = "#FFFFFF";
};






