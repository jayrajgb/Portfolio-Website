


function main(){
    let getcv = document.body.getElementsByClassName("cv")[0]

    getcv.addEventListener("click", ()=>{
        window.open("http://127.0.0.1:5500/resume/Jayraj_Borate_VIT.pdf", "_blank")
    })
    
    let contact = document.getElementsByClassName("contact")[0]
    contact.addEventListener("click", ()=>{
        window.location.href = "http://127.0.0.1:5500/#footer"
    })
}

main()