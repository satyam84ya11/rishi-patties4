
function loadProducts(){
    let list = JSON.parse(localStorage.getItem('products')) || [];
    let box = document.getElementById('product-list');
    if(!box) return;
    box.innerHTML="";
    list.forEach((p,i)=>{
        box.innerHTML += `<div class='menu-item'>
             <h3>${p.name}</h3>
             <p>Price: ₹${p.price}</p>
        </div>`;
    });
}
