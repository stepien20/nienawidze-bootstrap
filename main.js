// import {users as users} from "data.js";
const but=document.querySelector(`#but`);
let created=false;
console.log(users);
but.addEventListener(`click`,()=>{
    but.classList.toggle('btn-danger')
    const table=document.querySelector(`#table`)
    if(created){
        table.innerHTML='';
        created=false;
        but.innerHTML="Generuj tabelę"
    }else{
        users.forEach(element => {
            let row=document.createElement(`tr`);
            row.classList.add("table-primary");
            row.classList.add("w-100");

            element.forEach(col => {
                let e=document.createElement(`td`);
                e.innerHTML=`${col}`
                e.classList.add(`table-primary`)
                row.appendChild(e)
            });
            table.appendChild(row);
        });
    created=true;
    but.innerHTML="Usuń tabelę"
    }
})
