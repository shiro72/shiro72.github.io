const node_for_click_all = document.getElementById("click")

function find_edit_all(){

    document.getElementsByTagName('p')[3].innerText='Surname: Kramarenko'
    document.getElementsByTagName('p')[4].innerText='Name: Polina'
    document.getElementsByTagName('p')[7].innerHTML='Date of birth: 04/27/2004'

}
node_for_click_all.addEventListener("click",find_edit_all)