<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a href="/Operadores" class="navbar-brand">OPERADORES</a>
    </nav>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="enviarTask">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    v-model="task.nombre"
                    placeholder="Nombre Operador"
                  >
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    v-model="task.licencia"
                    cols="30"
                    rows="10"
                    placeholder="Licencia"
                  ></textarea>
                </div>
                  <template v-if="edit === false">
                  <button class="btn btn-primary">Guardar</button>
                  </template>
                  <template v-else>
                    <button class="btn btn-primary">Actualizar</button>
                  </template>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Operador</th>
                <th>Licencia</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task of tasks" :key="task.id">
                <td>{{task.nombre}}</td>
                <td>{{task.licencia}}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteTask(task._id)">Borrar</button>
                  <button class="btn btn-secondary" @click="editTask(task._id)">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

class Task {
  constructor(nombre, licencia) {
    this.nombre = nombre;
    this.licencia = licencia;
  }
}

export default {
  data() {
    return {
      task: new Task(),
      tasks: [],
      edit: false,
      tareAEditar: ""
    }
  },
  //este metodo de VUE se ejecuta apenas la app carga
  created() {
    this.getTasks();
  },
  methods: {
    enviarTask() {
      //solicitar y enviar datos al servidor
        if(this.edit === false){
          fetch("/api/Operadores", {
          method: "POST",
          body: JSON.stringify(this.task),
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
          }
        })
        .then(res => res.json())
        .then(data => {
          this.getTasks();//otener tareas para refrescarlas 
        })
        }else{
          fetch('/api/Operadores/'+this.tareAEditar,{
            method: 'PUT',
            body: JSON.stringify(this.task),
            headers: {
              "Accept": "application/json",
              "Content-type": "application/json"
            }
          })
          .then(res => res.json())
          .then(data => {
            this.getTasks();
            this.edit = false;
          })
        }


      this.task = new Task();
    },
    getTasks() {
      fetch("/api/Operadores")
        .then(res => res.json())
        .then(data =>{
          this.tasks = data;
          console.log(this.tasks);
        });
    },
    deleteTask(id){
      fetch('/api/Operadores/' + id,{
        method: 'DELETE',
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data =>{
        this.getTasks();//refrescar tareas
      });
    },
    editTask(id){
      fetch('/api/Operadores/'+id)
        .then(res => res.json())
        .then(data => {
          this.task = new Task(data.nombre,data.licencia);
          this.edit = true;
          this.tareAEditar = data._id;
        });
    }
  }
};
</script>