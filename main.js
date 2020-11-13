let output = document.getElementById("output")
let input = document.getElementById("input")
input.oninput=copySecondArea
function copySecondArea(){
    output.innerText=input.value
}
function textTrough(elem){
    output.classList.remove('underline')
    output.classList.toggle('line-trough')
    document.querySelectorAll('.line')[1].classList.remove('active')
    elem.classList.toggle('active')
}




function textUnder(elem){
    output.classList.remove('line-trough')
    output.classList.toggle('underline')
    document.querySelectorAll('.line')[0].classList.remove('active')
    elem.classList.toggle('active')
}





function textItalic(elem){
    output.classList.toggle('italic')
    elem.classList.toggle('active')

}





function textBold(elem){
    output.classList.toggle('bold')
    elem.classList.toggle('active')

}





function textCenter(elem){//////////////////////////////////////////////////////////////////////
    output.style.textAlign="center"
    document.querySelectorAll('.align').forEach((bntAlign)=>{
        bntAlign.classList.remove('active')
    })
    elem.classList.toggle('active')

}





function textLeft(elem){////////////////////////////////////////////////////////
    output.style.textAlign="left"

    document.querySelectorAll('.align').forEach((bntAlign)=>{
        bntAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}





function textRight(elem){
    output.style.textAlign="right"
    document.querySelectorAll('.align').forEach((bntAlign)=>{
        bntAlign.classList.remove('active')
    })
    elem.classList.toggle('active')
}






function redText(elem){ ////////////////////////////////////////////////////////////////
    let colors=['text-primary','text-success']
    colors.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-danger')
    document.querySelectorAll('.color').forEach((bntColor)=>{
        if(elem!==bntColor){
            bntColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}







function blueText(elem){
    let colors=['text-danger','text-success']
    colors.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-primary')
    document.querySelectorAll('.color').forEach((bntColor)=>{
        if(elem!==bntColor){
            bntColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}




function greenText(elem){
    let colors=['text-danger','text-primary']
    colors.forEach((c)=>output.classList.remove(c))
    output.classList.toggle('text-success')
    document.querySelectorAll('.color').forEach((bntColor)=>{
        if(elem!==bntColor){
            bntColor.classList.remove('active')
        }
    })
    elem.classList.toggle('active')
}







