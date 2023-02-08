c = console.log.bind(document);
var check_actual_princ = getComputedStyle(document.documentElement).getPropertyValue('--color-principal').trim();
var check_actual_second = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
var check_actual_third = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
disable() //pour verifier après un refresh

document.getElementById('principal').value = check_actual_princ;
document.getElementById('secondaire').value = check_actual_second;
document.getElementById('text').value = check_actual_third;


function changeColor(x, elem) {

    let color = elem.value;


    switch (x) {
        case 1: document.querySelector(':root').style.setProperty('--color-principal', color);disable();break;
        case 2: document.querySelector(':root').style.setProperty('--color-accent', color);break;
        case 3: document.querySelector(':root').style.setProperty('--color-text', color); break;
    }

}
function disable() {


    if (document.querySelector("#disable-second").checked == true) {
        document.querySelector("#secondaire").disabled = true;
        check_actual_princ = getComputedStyle(document.documentElement).getPropertyValue('--color-principal').trim();
        document.querySelector(':root').style.setProperty('--color-accent', check_actual_princ);
        document.querySelector("#texteSecondaire").style.textDecoration = "line-through";
    }
    else {

        document.querySelector(':root').style.setProperty('--color-accent', document.getElementById('secondaire').value);

        document.querySelector("#secondaire").disabled = false;
        document.querySelector("#texteSecondaire").style.textDecoration = "none";
        c(check_actual_second)
    }
}
