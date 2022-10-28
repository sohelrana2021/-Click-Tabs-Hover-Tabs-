// clickr Tab-----------------------------------------------

function mybtnfun(langName, opEve, color ) {
    //variable create
    let i, content;
    //content create
    content = document.getElementsByClassName('c-content');
    for(i= 0; i< content.length; i++) {
        content[i].style.display = 'none';
    }
    //link for
    cllLink = document.getElementsByClassName('btnlink');
    for(i= 0; i< cllLink.length; i++) {
        cllLink[i].style.backgroundColor = "";
    }
    
    //content display block
    document.getElementById(langName).style.display = "block";
    opEve.style.backgroundColor = color;
}
document.getElementById('defults').click();


// Hover Tab-----------------------------------------------

function opencity(cityName, elmnt, color) {
    let i, tabcontant, tablink;
    tabcontant = document.getElementsByClassName('tabcontant');
    for(i = 0; i< tabcontant.length; i++ ) {
        tabcontant[i].style.display = "none";
     }
     tablink = document.getElementsByClassName('tablink');
    for(i = 0; i< tabcontant.length; i++ ) {
        tablink[i].style.background = "";
     }

     document.getElementById(cityName).style.display = "block";
     elmnt.style.backgroundColor = color;
}
document.getElementById('defaultOpen').onmouseover();