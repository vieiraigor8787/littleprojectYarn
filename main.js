class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)   
    }
}

class TodoList extends List{
    constructor() {
        super();
        
        this.usuario = "diego";
    }
    mostrarUsuario(){
        console.log(this.usuario);
    }
}

const lista = new TodoList();

document.getElementById('btnTodo').onclick = function(){
    lista.add('novo todo');
}

lista.mostrarUsuario();