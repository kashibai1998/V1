var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);


function addItem(ev){
    ev.preventDefault();
    var newItem = document.getElementById('newitem').value;

    var li = document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger float-right btn-sm delete";

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var price = document.createElement('span');
    price.className = "float-right";
    price.id = "price-item";
    price.style = "margin-right: 100px;";
    
    itemList.appendChild(li);
}

dispDetails=()=>{
    if (document.getElementById("items").style.display === "none")
        document.getElementById("items").style.display="block";
    else
        document.getElementById("items").style.display="none";
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
