<!-- src/views/Contacto.vue -->
<template>
  <div class="contacto-page">
    <div class="contacto-container">
      <h2>Contacto</h2>
      <form @submit.prevent="validarContacto" novalidate>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            v-model.trim="nombre"
            placeholder="Nombre"
            required
          />
        </div>
        <div class="form-group">
          <label for="correo">Correo Electrónico</label>
          <input
            id="correo"
            type="email"
            v-model.trim="correo"
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input
            id="telefono"
            type="text"
            v-model.trim="telefono"
            placeholder="Teléfono"
          />
        </div>
        <div class="form-group">
          <label for="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            v-model.trim="mensaje"
            placeholder="Mensaje"
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacto',
  data() {
    return {
      nombre: '',
      correo: '',
      telefono: '',
      mensaje: ''
    }
  },
  methods: {
    validarContacto() {
      if (!this.nombre || !this.correo || !this.mensaje) {
        alert('Por favor, complete todos los campos obligatorios.')
        return
      }
      const re = /^\S+@\S+\.\S+$/
      if (!re.test(this.correo)) {
        alert('Por favor, ingrese un correo válido.')
        return
      }
      if (this.telefono && !/^\d+$/.test(this.telefono)) {
        alert('Por favor, ingrese un número de teléfono válido.')
        return
      }
      alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!')
      // Limpia el formulario
      this.nombre = ''
      this.correo = ''
      this.telefono = ''
      this.mensaje = ''
    }
  }
}
</script>

<style scoped>
.contacto-page {
  /* Fondo de pantalla completo */
  background: url('c:\Users\RJDV\OneDrive - ULEAM\Escritorio\Trabajo-MDR\VENTAS\public\IMAGENES\d.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contacto-container {
  /* Caja semitransparente sobre el fondo */
  background: rgba(56, 41, 190, 0.9);
  max-width: 500px;
  width: 90%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  width: 100%;
  padding: 10px;
  background: #4821f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #1976D2;
}
</style>
