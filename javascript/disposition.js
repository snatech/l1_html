
const btns = document.querySelectorAll("#position div")
const card = document.querySelector("#card")

btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        card.classList.value = ""
        card.classList.add("card"+(i+1))

        console.log(card.classList)
    })
})