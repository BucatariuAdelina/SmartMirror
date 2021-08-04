
const mesajul = document.getElementById("mesaje");


listaDeMesaje = [

 /*0*/   ' Viața este ca mersul pe bicicletă. Pentru a-ți menține echilibrul trebuie să continui să mergi înainte – Albert Einstein',
 /*1*/  ' Nimic nu este permanent în această lume nebună. Nici măcar necazurile noastre – Charlie Chaplin',
 /*2*/   ' Eșecul este doar oportunitatea de a lua totul de la capăt, de data aceasta, într-un mod mai inteligent – Henry Ford',
 /*3*/   ' Fă ce trebuie să faci până poți face ceea ce vrei să faci – Oprah Winfrey',
 /*4*/    ' Nu te lăsa împins de probleme. Lasă-te condus de vise – Ralph Waldo Emerson',
 /*5*/   ' Cea mai mare glorie nu o dobândești atunci când nu ești doborât, ci atunci când te ridici după ce ai căzut – Confucius',
 /*6*/    ' Nu începe niciodată cu nu se poate, ci începe cu să vedem – Nicolae Iorga',
 /*7*/   ' Puterea de a fi tu însuți într-o lume care încearcă în permanență să te schimbe este una dintre cele mai mari realizări din viața ta – Ralph Waldo Emerson',
 /*8*/   ' Cel care nu-și schimbă niciodată opiniile și nu-și corectează greșelile, nu va deveni niciodată mai înțelept -Tryon Edwards',
 /*9*/   ' Nu încerca sa devi o persoană de succes, ci una de valoare – Albert Einstein',
 /*10*/   ' Nu mai aștepta! Momentul potrivit nu vine niciodată – Napoleon Hill',
 /*11*/   ' Dacă nu-ți place situația actuală, atunci fă o schimbare! Nu ești un copac – Jim Rohn',
 /*12*/    ' Dacă vrei să dobândeşti puterea de a suporta viaţa, fii gata să accepţi moartea – Sigmund Freud Nu poţi fi invidios şi fericit în acelaşi timp – Frank Tyger',
 /*13*/   ' Niciodată nu trebuie să te ruşinezi a mărturisi că ai greşit. Înseamnă doar să spui, cu alte cuvinte, că astăzi eşti mai înţelept decât ieri – Marcel Achard',
 /*14*/   ' În viață nu e o tragedie faptul ca nu-ti atingi scopul. Adevărata tragedie e să nu ai unul – Benjamin Mays',
 /*15*/   ' Orice om are dreptul să-și riște viața pentru a și-o păstra -Jean-Jacques Rousseau',
 /*16*/  'Nu mi-e teama... M-am nascut sa fac asta! Ioana d`Arc'
 
]


docHTML.addEventListener('mouseout', function(){
    var oraCurenta = new Date().getHours();
    console.log('Ora cuent[ este:'+oraCurenta);
    if(oraCurenta==7){
        mesajul.innerHTML = listaDeMesaje[16];
    }
    if(oraCurenta==8){
        mesajul.innerHTML = listaDeMesaje[0];
    }
    if(oraCurenta==9){
        mesajul.innerHTML = listaDeMesaje[1];
    }
    if(oraCurenta==10){
        mesajul.innerHTML = listaDeMesaje[2];
    }
    if(oraCurenta==11){
        mesajul.innerHTML = listaDeMesaje[3];
    }
    if(oraCurenta==12){
        mesajul.innerHTML = listaDeMesaje[4];
    }
    if(oraCurenta==13){
        mesajul.innerHTML = listaDeMesaje[5];
    }
    if(oraCurenta==14){
        mesajul.innerHTML = listaDeMesaje[6];
    }
    if(oraCurenta==15){
        mesajul.innerHTML = listaDeMesaje[7];
    }
    if(oraCurenta==16){
        mesajul.innerHTML = listaDeMesaje[8];
    }
    if(oraCurenta==17){
        mesajul.innerHTML = listaDeMesaje[9];
    }
    if(oraCurenta==18){
        mesajul.innerHTML = listaDeMesaje[10];
    }
    if(oraCurenta==19){
        mesajul.innerHTML = listaDeMesaje[11];
    }
    if(oraCurenta==20){
        mesajul.innerHTML = listaDeMesaje[10];
    }
    if(oraCurenta==21){
        mesajul.innerHTML = listaDeMesaje[13];
    }
    if(oraCurenta==22){
        mesajul.innerHTML = listaDeMesaje[14];
    }
    if(oraCurenta==23){
        mesajul.innerHTML = listaDeMesaje[15];
    }


})

