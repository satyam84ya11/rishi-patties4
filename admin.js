
function adminLogin(){
    let u=document.getElementById('adminUser').value;
    let p=document.getElementById('adminPass').value;

    let saved = JSON.parse(localStorage.getItem('adminLogin')) || {user:'admin', pass:'1234'};

    if(u===saved.user && p===saved.pass){
        document.getElementById('adminPanel').style.display='block';
    } else {
        alert("Wrong login");
    }
}

function changePassword(){
    let newUser=document.getElementById('newUser').value;
    let newPass=document.getElementById('newPass').value;

    if(!newUser || !newPass) return alert("Enter both fields");

    localStorage.setItem('adminLogin', JSON.stringify({user:newUser, pass:newPass}));

    alert("Admin login updated!");
}

function addProduct(){
    let name=document.getElementById('pname').value;
    let price=document.getElementById('pprice').value;
    if(!name || !price) return alert("Enter details");

    let list = JSON.parse(localStorage.getItem('products')) || [];
    list.push({name,price});
    localStorage.setItem('products', JSON.stringify(list));
    alert("Product Added!");
}
