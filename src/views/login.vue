<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="validarLogin">
        <input type="text" v-model.trim="usuario" placeholder="Usuario" required />
        <input type="password" v-model="contrasena" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
      <p v-if="mensaje" class="error">{{ mensaje }}</p>
      <div class="new-account">
        <router-link to="/registro">¿No tienes cuenta? Regístrate aquí</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      contrasena: '',
      mensaje: ''
    }
  },
  methods: {
    validarLogin() {
      if (!this.usuario || !this.contrasena) {
        this.mensaje = 'Por favor, complete todos los campos.'
        return
      }
      // Simulación de autenticación
      localStorage.setItem('usuario', this.usuario)
      this.mensaje = ''
      this.$router.push('/catalogo')
    }
  }
}
</script>

<style scoped>
.login-page {
  background: url('c:\Users\RJDV\OneDrive - ULEAM\Escritorio\Trabajo-MDR\VENTAS\public\IMAGENES\d.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  background: rgba(21, 9, 247, 0.9);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 400px;
}
input,
button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #0000009d;
  border-radius: 4px;
}
button {
  background: #0b03ef;
  color: rgb(0, 0, 0);
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 10px;
}
.new-account {
  margin-top: 15px;
  text-align: center;
}
.new-account a {
  color: #000000;
}
</style>