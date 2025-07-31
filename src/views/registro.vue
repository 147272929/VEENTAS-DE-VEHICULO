<template>
  <div class="form-container">
    <h2>Registro</h2>
    <form @submit.prevent="validarRegistro">
      <input type="text" v-model.trim="nombre" placeholder="Nombre Completo" />
      <div class="error">{{ errores.nombre }}</div>

      <input type="text" v-model.trim="usuario" placeholder="Nombre de Usuario" />
      <div class="error">{{ errores.usuario }}</div>

      <input type="email" v-model.trim="correo" placeholder="Correo Electrónico" />
      <div class="error">{{ errores.correo }}</div>

      <input type="password" v-model="contrasena" @input="verificarFuerza" placeholder="Contraseña" />
      <div class="error">{{ errores.contrasena }}</div>

      <div id="strengthMeter">
        <div class="strength-bar" :style="barraEstilo"></div>
        <span>{{ fuerzaTexto }}</span>
        <div v-if="sugerencia" class="suggestions">{{ sugerencia }}</div>
      </div>

      <input type="password" v-model="confirmar" placeholder="Confirmar Contraseña" />
      <div class="error">{{ errores.confirmar }}</div>

      <button type="submit">Registrarse</button>
    </form>
    <div class="new-account">
      <router-link to="/">¿Ya tienes cuenta? Iniciar sesión</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      usuario: '',
      correo: '',
      contrasena: '',
      confirmar: '',
      errores: {},
      fuerza: 0,
      sugerencia: ''
    }
  },
  computed: {
    fuerzaTexto() {
      return ['Muy débil', 'Débil', 'Media', 'Fuerte'][this.fuerza] || ''
    },
    barraEstilo() {
      const colores = ['red', 'orange', 'gold', 'green']
      const porcentajes = ['25%', '50%', '75%', '100%']
      return {
        width: porcentajes[this.fuerza] || '0%',
        background: colores[this.fuerza] || 'transparent',
        height: '5px',
        transition: 'width 0.3s'
      }
    }
  },
  methods: {
    verificarFuerza() {
      let s = 0;
      if (this.contrasena.length >= 8) s++
      if (/[A-Z]/.test(this.contrasena)) s++
      if (/[0-9]/.test(this.contrasena)) s++
      if (/[^A-Za-z0-9]/.test(this.contrasena)) s++
      this.fuerza = s
      this.sugerencia = s < 3
        ? 'Usa mayúsculas, números y símbolos para una contraseña más segura.'
        : ''
    },
    validarRegistro() {
      this.errores = {}
      if (!this.nombre)   this.errores.nombre   = 'Nombre requerido.'
      if (!this.usuario)  this.errores.usuario  = 'Usuario requerido.'
      if (!this.correo.includes('@')) this.errores.correo = 'Correo inválido.'
      if (this.contrasena.length < 6) this.errores.contrasena = 'Mínimo 6 caracteres.'
      if (this.contrasena !== this.confirmar) this.errores.confirmar = 'Las contraseñas no coinciden.'

      if (Object.keys(this.errores).length === 0) {
        alert('¡Registro exitoso!')
        localStorage.setItem('usuario', JSON.stringify({ nombre: this.nombre, usuario: this.usuario }))
        this.$router.push('/')
      }
    }
  }
}
</script>