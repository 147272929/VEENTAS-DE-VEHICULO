<!-- src/views/Acerca.vue -->
<template>
  <div class="acerca-page">
    <div class="acerca-container">
      <h1>Acerca de Nosotros</h1>
      <nav>
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/catalogo" class="nav-link">Catálogo</router-link>
        <router-link to="/contacto" class="nav-link">Contacto</router-link>
        <router-link to="/registro" class="nav-link">Registro</router-link>
      </nav>
      <section class="contenido">
        <h2>Nuestra Historia</h2>
        <p>
          Somos una empresa dedicada a la venta de autos de calidad. Desde 2010 nos esforzamos por ofrecer a nuestros
          clientes la mejor experiencia de compra y un servicio posventa excepcional.
        </p>
        <h2>Visión y Misión</h2>
        <p><strong>Visión:</strong> Ser líderes en el mercado automotriz, reconocidos por nuestra transparencia y atención al cliente.</p>
        <p><strong>Misión:</strong> Proveer vehículos confiables y un proceso de compra fácil y seguro.</p>
        <h2>Equipo</h2>
        <ul>
          <li>Ramon Valencia – Gerente General</li>
          <li>Melanie Anahi – Director de Ventas</li>
          <li>Diego – Atención al Cliente</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Acerca'
}
</script>

<style scoped>
.acerca-page {
  /* Fondo de pantalla completo */
  background: url('c:\Users\RJDV\OneDrive - ULEAM\Escritorio\Trabajo-MDR\VENTAS\public\IMAGENES\d.png') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.acerca-container {
  /* Caja semitransparente sobre el fondo */
  background: rgba(142, 138, 204, 0.85);
  max-width: 800px;
  margin: 40px;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.acerca-container h1 {
  margin-bottom: 1rem;
  text-align: center;
}

.nav-link {
  margin-right: 1rem;
  color: #000000;
  text-decoration: none;
  font-weight: bold;
}

.nav-link.router-link-active {
  color: #000000;
}

.contenido h2 {
  margin-top: 1.5rem;
  color: #070101;
}

.contenido p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.contenido ul {
  list-style: disc;
  padding-left: 1.5rem;
}
</style>
