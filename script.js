let lists = document.getElementsByClassName("list");
let rigthBox = document.getElementById("right"),
leftBox = document.getElementById("left");

for(list of lists){
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        rigthBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rigthBox.addEventListener("drop", function(e){
            rigthBox.appendChild(selected);
            selected=null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected=null;
        })
    })
}