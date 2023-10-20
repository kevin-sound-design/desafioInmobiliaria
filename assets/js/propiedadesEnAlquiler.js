import { propiedadesAlquiler, permisoFumar, permisoMascota} from "./arrayAndFunction.js";

/* logica arriendo */

const tarjetasAlquiler = document.querySelector(".container-cards-alquiler");

for ( let propiedadAlquiler of propiedadesAlquiler){

    let permisoParaFumar = permisoFumar(propiedadAlquiler.smoke);
    let permisoParaMascotas = permisoMascota(propiedadAlquiler.pets)

    let html=`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedadAlquiler.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedadAlquiler.nombre}
                </h5>
                <p class="card-text">
                  ${propiedadAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 
                  ${propiedadAlquiler.ubicación}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedadAlquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedadAlquiler.costo}</p>
                ${permisoParaFumar}
                ${permisoParaMascotas}
              </div>
            </div>
        </div>`;
    
    tarjetasAlquiler.innerHTML+=html;
}
