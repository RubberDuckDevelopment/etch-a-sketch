function generateGrid(columnCount=16){

    //get user input
    const columnInput = parseInt(document.getElementById("columns").value)
    let columns = 0
    if (columnInput){
        columns = columnInput
    } else {
        columns = columnCount
    }

    const container = document.querySelector(".container")
    //format the grid
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }

    container.style.gridTemplateColumns=`repeat(${columns},1fr)`


    //generate the cells per column
    for (let i =0;i<columns*columns;i++){

        const cell = document.createElement('div')
        
        cell.className="cell"
        cell.id=i
        cell.setAttribute("name","cell")
        cell.addEventListener("mouseover",handleHover)


        container.appendChild(cell)
    }
}

function getColorPicked(){
    const colorPicker = document.getElementById("colorpicker")

    return colorPicker.value
}


function handleHover(e){
    const target = document.getElementById(e.target.id)
    target.className += " hovered"

    target.style.backgroundColor = getColorPicked()

    let targetOpacity=0;
    if (target.style.opacity ===""){
        targetOpacity = 0.1
    }
    else {
        targetOpacity=parseFloat(target.style.opacity) + 0.1
    }
    target.style.opacity = targetOpacity

}

function resetGrid(){
    const container = document.querySelector(".container")
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    generateGrid()
}