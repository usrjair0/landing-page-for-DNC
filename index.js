var leftarrow = window.document.getElementById("leftarrow")
var Leonardocard = window.document.getElementById("Leonardocard")
var Samanthacard = window.document.getElementById("Samanthacard")
var Brunacard = window.document.getElementById("Brunacard")
var rightarrow = window.document.getElementById("rightarrow")
/*aqui estou denominando as variáveis, estou dizendo que a var Leonardocard
deve ser acessada pelo windows acessando o documentro e pegando o elemento
do html pelo id*/

function scrollright(){
Leonardocard.style ="display:none"
Brunacard.style ="display:flex"
rightarrow.style ="display:none"
leftarrow.style ="display:flex;"
}
function scrollleft(){
Leonardocard.style ="display:flex"
Brunacard.style ="display:none"
rightarrow.style ="display:flex;"
leftarrow.style ="display:none"
}