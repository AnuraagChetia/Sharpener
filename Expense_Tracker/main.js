const form = document.getElementById('myForm');
const amouunt = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');
form.addEventListener('submit', onSubmit);
//load from localStorage
window.addEventListener("DOMContentLoaded",()=>{
    const local = localStorage;
    const localKeys = Object.keys(local);

    for (let i = 0; i < localKeys.length; i++) {
        const key = localKeys[i];
        const expenseDetailsString = local[key];
        const expenseDetailsObj = JSON.parse(expenseDetailsString);
        display(expenseDetailsObj);
    }
})

//function to run on form submit
function onSubmit(e){
    e.preventDefault();
    if(amouunt.value === '' || description.value === '' || category.value === ''){
        alert('Please enter all fields');
    }else{
        let newData = {
            expense: amouunt.value,
            desc: description.value,
            categ: category.value,
        }
        //add to local storage
        localStorage.setItem(`${newData.expense}${newData.desc}`, JSON.stringify(newData));
        display(newData);
        amouunt.value='';
        description.value='';
        category.value='';
    }
    //displays on screen
}
function display(data){
    const parentNode = document.getElementById('display');
    const childHTML = `<li id="${data.desc}">${data.expense}-${data.desc}-${data.categ} <button onclick = "deleteExpense('${data.expense}','${data.desc}')">Delete Expense</button> <button onclick = "editExpense('${data.expense}','${data.desc}','${data.categ}')">Edit Expense</button> </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
//remove user from screen
function deleteExpense(amount,uniqueId){
    const node = document.getElementById(uniqueId);
    node.remove();
    localDel(amount+uniqueId);
}
//edit user
const editExpense = (expense,desc,categ) => {
    amouunt.value = expense;
    description.value = desc;
    category.value = categ;
    deleteExpense(expense,desc);
}
//remove expense from localStorage
function localDel(key){
    localStorage.removeItem(key);
}