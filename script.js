const resetbutton = document.getElementById('reset');
resetbutton.addEventListener('click',resetGrid);


function createGrid() {
    for (var i=0; i<40; i++) {
        const row = document.createElement('div');
        row.classList.add ="row";
        for(var j=0; j<40; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = "16px";
            box.style.height = "12px";
            row.appendChild(box);
            box.setAttribute("color",50);
            box.addEventListener('mouseover',function(e) {
                currentColor = e.target.getAttribute("color");
                e.target.style.backgroundColor = `hsl(${Math.floor(Math.random()*361)}, 100%, ${currentColor}%)`;
                e.target.setAttribute("color", currentColor-5);
            });
            }
    document.getElementById('container').appendChild(row);
    }
};

function resetGrid() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box)=>{box.remove()});
    createGrid();
}

createGrid();
