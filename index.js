var pi = "3.1415926535897932384626433832795028841971693993751082097494459230781640628620899862803482534211706782148086513282306647093844609550582231725359408124811174502841027019385211055596446229489549303819442881097566593344612847564823378678316527120190945648566923460348610454326648213393607260249141277245870066063155881748815209209628292540917153643789259036001133053054882046652138414695194151160933057270365759591953092186117381932611793105118540744623799627495673518857527248912279381830119491983367336244065664308602139494639522473719070217960943702770539217176293176752384674818467669405130005681271452635608277857713427577896091736371787146844090122495343014654958537105079227968925892342019956112129021960864034418159813629774771309965187072113499999983729780499510597317328160963185502445945534690830264252230825334468503526193118871010003137838752886587"
var rest = "53320838142061717766914730598253490428755468731159562863882353787593751957718577805321712268066130019278766111959092164201989380952"

var piText = document.getElementById('textPi')

// piText.innerHTML = pi


// piArray = Array.from(pi)

// piArray.forEach(char => {
//     console.log(char)
//     var charSpan = document.createElement('span')
//     charSpan.innerHTML = char
//     piText.appendChild(charSpan)
// });

for(var i = 0; i < pi.length; i++){
    var charSpan = document.createElement('span')

    charSpan.innerHTML = pi[i]
    charSpan.id = i

    piText.appendChild(charSpan)
}

randomCharSpanID = Math.floor(Math.random() * pi.length)


randomCharSpan = document.getElementById(String(randomCharSpanID))

randomCharSpan.classList.add('nonHighlightable')
randomCharSpan.classList.add('secretChar')

randomCharSpan.addEventListener('click', function(){
    $('#aboutModal').modal('toggle')
})


// randomCharSpan.dataset.toggle = "modal"
// randomCharSpan.dataset.target = "#aboutModal"


console.log(randomCharSpan)

