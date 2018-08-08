class ListPage{
    constructor(){
        this.users = JSON.parse(localStorage.getItem("users"));
        this.table = document.querySelector("#table tbody");
        this.loadTable(this.table, this.users);
        this.buttonNovoUsuario = document.getElementById("button-novo-usuario");
        this.changePage = this.changePage.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.buttonNovoUsuario.addEventListener("click", this.changePage);
    }

    loadTable(table, users){
        users.forEach((user, i) => {
            let tr = table.insertRow(i + 1);
            let size = Object.keys(user).length;
            Object.keys(user).forEach((key, index) => {
                let cell = tr.insertCell(index);
                cell.innerHTML = user[key]; 

                if(index + 1 === size){
                    let cell = tr.insertCell(index + 1);
                    cell.innerHTML = `<button onClick="page.removeItem(${i})">Remover</button>`;
                }
            });
            table.appendChild(tr);
        })
    }

    removeItem(index){
        this.users.splice(index, 1);
        let table = document.querySelector("#table tbody");
        table.innerHTML = "<tr></tr>";
        this.loadTable(this.table, this.users);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    changePage(){
        window.location.href = "http://127.0.0.1:8080/FormPage/FormPage.html";
    }
}