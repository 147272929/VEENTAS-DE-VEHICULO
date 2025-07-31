<!-- src/views/Catalogo.vue -->
<template>
  <div class="catalogo-page">
    <header>
      <h1 class="titulo">CATÁLOGO</h1>
      <nav>
        <router-link to="/acerca">Acerca de</router-link>
        <router-link to="/contacto">Contacto</router-link>
        <a href="#" @click.prevent="logout">Cerrar Sesión</a>
      </nav>
    </header>

    <section class="filtros">
      <select v-model="filtroMarca">
        <option value="">Todas las marcas</option>
        <option v-for="marca in marcasUnicas" :key="marca" :value="marca">
          {{ marca }}
        </option>
      </select>
    </section>

    <main class="catalogo container">
      <div
        v-for="(auto, i) in autosFiltrados"
        :key="i"
        class="vehiculo"
      >
        <img :src="auto.imagen" :alt="auto.modelo" />
        <h3>{{ auto.marca }} {{ auto.modelo }}</h3>
        <p><strong>Precio:</strong> ${{ auto.precio.toLocaleString() }}</p>
        <button @click="seleccionarAuto(auto)">Comprar</button>
      </div>
    </main>

    <!-- Overlay de compra -->
    <div v-if="mostrarFormulario" class="form-overlay">
      <div class="form-compra">
        <h3>Formulario de Compra – Pago Seguro</h3>
        <p>
          <strong>Vehículo:</strong>
          {{ vehiculoSeleccionado.marca }}
          {{ vehiculoSeleccionado.modelo }} –
          ${{ vehiculoSeleccionado.precio.toLocaleString() }}
        </p>
        <form @submit.prevent="validarCompra" novalidate>
          <fieldset>
            <legend>Datos del Comprador</legend>
            <input
              type="text"
              v-model.trim="form.nombre"
              placeholder="Nombre completo"
            />
            <span class="error">{{ errores.nombre }}</span>

            <input
              type="email"
              v-model.trim="form.correo"
              placeholder="Correo electrónico"
            />
            <span class="error">{{ errores.correo }}</span>

            <input
              type="tel"
              v-model.trim="form.telefono"
              placeholder="Teléfono"
            />
            <span class="error">{{ errores.telefono }}</span>

            <input
              type="text"
              v-model.trim="form.direccion"
              placeholder="Dirección"
            />
            <span class="error">{{ errores.direccion }}</span>
          </fieldset>

          <fieldset>
            <legend>Datos de Pago</legend>
            <input
              type="text"
              v-model.trim="form.tarjeta"
              placeholder="Número de tarjeta"
            />
            <span class="error">{{ errores.tarjeta }}</span>

            <input
              type="text"
              v-model.trim="form.fecha"
              placeholder="Fecha expiración (MM/AA)"
            />
            <span class="error">{{ errores.fecha }}</span>

            <input
              type="password"
              v-model.trim="form.cvv"
              placeholder="CVV"
            />
            <span class="error">{{ errores.cvv }}</span>
          </fieldset>

          <div class="botones">
            <button type="submit">Realizar Pago</button>
            <button type="button" @click="cerrarFormulario">Cancelar</button>
          </div>
        </form>
      </div>
    </div>

    <footer>
      &copy; 2025 Venta de Carros. Todos los derechos reservados.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Catalogo',
  data() {
    return {
      autos: [
        { marca: 'Toyota', modelo: 'Corolla', precio: 18000, imagen: '/IMAGENES/IMAGEN 1.webp' },
        { marca: 'Ford',   modelo: 'Focus',   precio: 22000, imagen: '/IMAGENES/IMAGEN 2.jpg' },
        { marca: 'Chevrolet', modelo: 'Sail',  precio: 17000, imagen: '/IMAGENES/IMAGEN 3.jpg' },
        { marca: 'Toyota', modelo: 'Yaris',   precio: 16000, imagen: '/IMAGENES/IMAGEN 4.jpg' },
        { marca: 'Honda',  modelo: 'Civic',   precio: 21000, imagen: '/IMAGENES/imagen 6.jpg' },
        { marca: 'Nissan', modelo: 'Sentra',  precio: 19000, imagen: '/IMAGENES/imagen 7.avif' },
        { marca: 'Mazda',  modelo: '3',       precio: 23000, imagen: '/IMAGENES/imagen 8.avif' },
        { marca: 'Hyundai', modelo: 'Elantra',precio: 18000, imagen: '/IMAGENES/imagen 9.jpg' },
        { marca: 'Kia',    modelo: 'Rio',     precio: 17000, imagen: '/IMAGENES/imagen 10.png' },
      ],
      filtroMarca: '',
      vehiculoSeleccionado: {},
      mostrarFormulario: false,
      form: {
        nombre: '',
        correo: '',
        telefono: '',
        direccion: '',
        tarjeta: '',
        fecha: '',
        cvv: ''
      },
      errores: {}
    }
  },
  computed: {
    autosFiltrados() {
      return this.filtroMarca
        ? this.autos.filter(a => a.marca === this.filtroMarca)
        : this.autos;
    },
    marcasUnicas() {
      return [...new Set(this.autos.map(a => a.marca))].sort();
    }
  },
  methods: {
    seleccionarAuto(auto) {
      this.vehiculoSeleccionado = auto;
      this.mostrarFormulario = true;
      this.form = { nombre:'', correo:'', telefono:'', direccion:'', tarjeta:'', fecha:'', cvv:'' };
      this.errores = {};
    },
    cerrarFormulario() {
      this.mostrarFormulario = false;
    },
    validarCompra() {
      this.errores = {};
      if (!this.form.nombre)   this.errores.nombre = 'Nombre requerido.';
      if (!this.form.correo || !this.form.correo.includes('@')) this.errores.correo = 'Correo inválido.';
      if (!/^\d{7,15}$/.test(this.form.telefono)) this.errores.telefono = 'Teléfono inválido.';
      if (!this.form.direccion) this.errores.direccion = 'Dirección requerida.';
      if (!/^\d{13,19}$/.test(this.form.tarjeta.replace(/\s/g,''))) this.errores.tarjeta = 'Número inválido.';
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(this.form.fecha)) this.errores.fecha = 'Fecha inválida.';
      if (!/^\d{3,4}$/.test(this.form.cvv)) this.errores.cvv = 'CVV inválido.';

      if (Object.keys(this.errores).length === 0) {
        alert('¡Compra realizada con éxito!');
        this.cerrarFormulario();
      }
    },
    logout() {
      localStorage.removeItem('usuario');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.catalogo-page {
  background: #0800ff;
  min-height: 100vh;
}
header {
  background: #0707f5;
  color: #f9f9f9;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.titulo {
  margin: 0;
}
nav a {
  color: #ffffff;
  margin-left: 1rem;
  text-decoration: none;
}
.filtros {
  padding: 1rem;
  text-align: center;
}
.catalogo.container {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  gap: 1rem;
  padding: 1rem;
}
.vehiculo {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  text-align: center;
}
.vehiculo img {
  max-width: 100%;
  border-radius: 4px;
}
.vehiculo button {
  margin-top: 0.5rem;
  padding: 8px 12px;
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.form-overlay {
  position: fixed;
  top:0; left:0; right:0; bottom:0;
  background: rgba(4, 49, 226, 0.967);
  display:flex;
  align-items:center;
  justify-content:center;
}
.form-compra {
  background:#000dff;
  padding:20px;
  border-radius:8px;
  width:90%;
  max-width:500px;
}
.form-compra fieldset {
  border:1px solid #0000ff;
  margin-bottom:1rem;
  padding:1rem;
}
.form-compra legend {
  font-weight:bold;
}
.form-compra input {
  width:100%;
  padding:8px;
  margin-top:0.5rem;
  border:1px solid #1100ff;
  border-radius:4px;
}
.error {
  color:rgb(54, 0, 249);
  font-size:0.9rem;
}
.botones {
  display:flex;
  justify-content: space-between;
  margin-top:1rem;
}
.botones button {
  flex:1;
  margin:0 0.25rem;
  padding:10px;
  border:none;
  border-radius:4px;
  cursor:pointer;
}
.botones button:first-child {
  background:#0206ff;
  color:#fff;
}
.botones button:last-child {
  background:#0c00f9;
  color:#f7f7f7;
}
footer {
  text-align:center;
  padding:1rem;
  background:#1900ff;
}
</style>
