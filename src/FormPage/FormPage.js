class FormPage{
    constructor(){
        this.validateText = this.validateText.bind(this);
        this.cadastrar = this.cadastrar.bind(this);

        this.inputNome = document.getElementById("nome");
        this.buttonCadastrar = document.getElementById("btn-cadastrar");
        this.warningLabel = document.getElementsByClassName("warning-label")[0];

        this.validateText();
        this.inputNome.addEventListener("keydown", this.validateText); 
        this.buttonCadastrar.addEventListener("click", this.cadastrar); 
    }

    validateText(){
        this.nome = document.getElementById("nome").value;
        if(this.nome.length < 3){
            this.inputNome.classList.add("warning-input");
            this.warningLabel.classList.remove("hide");
        }else{
            this.inputNome.classList.remove("warning-input");
            this.warningLabel.classList.add("hide");
        }
    }

    clearForm(){
        document.getElementById("nome").value = "";
        document.getElementById("cpf").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("email").value = "";
        this.validateText();
    }

    cadastrar(){
        this.load = document.getElementById("load");
        this.labelCadastrar = document.getElementById("label-cadastrar");

        this.load.classList.remove("hide");
        this.labelCadastrar.classList.add("hide");

        this.userValue = {
            "name": document.getElementById("nome").value,
            "cpf": document.getElementById("cpf").value,
            "phone": document.getElementById("telefone").value,
            "email": document.getElementById("email").value
        }

        this.users = localStorage.getItem('users');

        if(this.users){
            this.users = JSON.parse(this.users);
            this.users.push(this.userValue);
        }else{
            this.users = [];
            this.users.push(this.userValue);
        }

        localStorage.setItem('users', JSON.stringify(this.users));
        this.clearForm();
        setTimeout(() => {
            this.load.classList.add("hide");
            this.labelCadastrar.classList.remove("hide");
        } , 1000);
        window.location.href = "http://127.0.0.1:8080/ListPage/ListPage.html";
    }
}
