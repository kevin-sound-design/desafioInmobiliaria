import {propiedadesVenta, permisoFumar, permisoMascota } from "./arrayAndFunction.js";

/* lógica ventas */

const tarjetasVentas = document.querySelector(".container-cards-ventas");

for ( let propiedadVenta of propiedadesVenta){

    let permisoParaFumar = permisoFumar(propiedadVenta.smoke);
    let permisoParaMascotas = permisoMascota(propiedadVenta.pets)

    let html=`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedadVenta.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedadVenta.nombre}
                </h5>
                <p class="card-text">
                  ${propiedadVenta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${propiedadVenta.ubicación}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedadVenta.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadVenta.costo}</p>
                ${permisoParaFumar}
                ${permisoParaMascotas}
              </div>
            </div>
        </div>`;
    
    tarjetasVentas.innerHTML+=html;
}