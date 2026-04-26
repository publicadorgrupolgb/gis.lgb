// ================= script.js =================

// 🔹 Definición de rutas
const routes = {
    mapa1: 'maps/instalaciones/index.html',
    mapa2: 'maps/hfc/index.html',
    mapa3: 'maps/fibra_optica/index.html',
    mapa4: 'maps/obra_civil/index.html',
    mapa5: 'maps/gpon/index.html'
};

// 🔹 Función de navegación
function goToMap(mapName) {
    if (routes[mapName]) {
        window.location.href = routes[mapName];
    } else {
        alert("Ruta no definida para " + mapName);
    }
}

// 🔹 Función opcional: animación de carga
window.addEventListener('load', () => {
    console.log('SIG cargado correctamente');
});