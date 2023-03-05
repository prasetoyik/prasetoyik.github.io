const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0


const botSay = (data) => {
   return [ `hallo i am bot, whats your name?`,
            `halo ${data?.nama},umur kamu berapa?`,
            `ooooh ${data?.usia}, kalo hobi kamu apa ? `,
            `waah sama dong ${data?.hobi}, btw kamu boleh pacaran?`,
            `ooooh ${data?.pacar},ya udah kalo gitu.Udahan ya?`
]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart(){
    if(jawaban.value.length<1) return alert("Di isi dulu dong kak")
    init++
    
    if(init === 1 ){
        botDelay({nama : jawaban.value})
    }
    else if (init === 2 ){
        botDelay({usia : jawaban.value})
    }
    
    else if (init === 3){
        botDelay({hobi : jawaban.value})
    }
    
    else if (init === 4){
        botDelay({pacar : jawaban.value})
    }
    
    else if (init === 5){
        finising()
    }
    else {
        botEnd()
    }
}

function botDelay(jawabanUser){
    loaders.style.display = "block"
    container[0].style.filter = "blur(9px)"
    console.log({usersData:usersData})
    setTimeout(() =>{
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1500] )
    usersData.push(jawaban.value)
    jawaban.value =""
 
}

function finising(){
pertanyaan.innerHTML ="THANKS FOR COOMING AND SEE YOU LATER"
jawaban.value ="see yaa"
}

function botEnd(){
    alert(`terimakasih ${usersData[0]} sudah pernah singgah`)
  window.location.reload()
}