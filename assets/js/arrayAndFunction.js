export {propiedadesAlquiler, propiedadesVenta, permisoFumar, permisoMascota};

/* arreglos de objetos (propiedades en venta y alquiler) */

const propiedadesVenta = [
    {
        nombre: 'Casa de Familia en Suburbio',
        src: 'https://photos.zillowstatic.com/fp/abdd64badc83b9cc119267fbb03c27bd-cc_ft_1536.jpg',
        descripcion: 'Espaciosa casa de 4 dormitorios en un tranquilo suburbio.',
        ubicación: '123 Oak Street, Suburbville',
        habitaciones: 4,
        baños: 2,
        costo: 350000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento en el Centro de la Ciudad',
        src: 'https://static.emol.cl/emol50/Fotos/2018/10/11/file_20181011075859.jpg',
        descripcion: 'Moderno apartamento de 2 habitaciones en el centro de la ciudad.',
        ubicación: '789 Calle Principal, Centro Urbano',
        habitaciones: 2,
        baños: 1,
        costo: 250000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de Playa con Vistas al Océano',
        src: 'https://cdn.listingphotos.sierrastatic.com/pics2x/v1697105592/98/98_ML81934468_01.jpg',
        descripcion: 'Hermosa casa junto a la playa con vistas panorámicas al océano.',
        ubicación: '456 Shoreline Drive, Playavista',
        habitaciones: 3,
        baños: 3,
        costo: 780000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominio de Lujo en el Río',
        src: 'https://ssl.cdn-redfin.com/photo/45/bigphoto/828/IV16008828_2.jpg',
        descripcion: 'Condominio de lujo de 3 habitaciones con acceso al río y amenidades de primera.',
        ubicación: '789 Riverside Avenue, Ciudad Rivertown',
        habitaciones: 3,
        baños: 3,
        costo: 550000,
        smoke: true,
        pets: true
    }
];


const propiedadesAlquiler = [
    {
        nombre: 'Apartamento Amueblado en el Centro',
        src: 'https://resources.estateathome.com/resources/img/6108161/http2.mlstatic.com-D_NQ_NP_806762-MLC45046352204_032021-F-eah.jpg',
        descripcion: 'Elegante apartamento amueblado de 1 habitación en el corazón de la ciudad.',
        ubicación: '456 Calle Principal, Centro Urbano',
        habitaciones: 1,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa Adosada en Comunidad Privada',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/116494112.jpg?k=a77f388106c3cf3c8bec1a9643d4bbe3aae4b1ef9acc5815cc2834887ee7dfe9&o=&hp=1',
        descripcion: 'Casa adosada de 3 habitaciones en una comunidad privada con piscina.',
        ubicación: '123 Pine Street, Urbanización Segura',
        habitaciones: 3,
        baños: 3,
        costo: 2800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento con Vista al Mar',
        src: 'https://resources.estateathome.com/resources/img/5697876/http2.mlstatic.com-D_NQ_NP_786789-MLC42481239133_072020-F-eah.jpg',
        descripcion: 'Acogedor apartamento de 2 habitaciones con impresionantes vistas al mar.',
        ubicación: '789 Oceanview Drive, Frente al Mar',
        habitaciones: 2,
        baños: 4,
        costo: 3500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Loft en el Distrito de Arte',
        src: 'https://cache.enlaceinmobiliario.cl/imagenes_producto_usado/Original/61a87826a19f59-afcc.jpg.png',
        descripcion: 'Moderno loft de 1 habitación en el vibrante Distrito de Arte.',
        ubicación: '101 Gallery Street, Distrito de Arte Creativo',
        habitaciones: 1,
        baños: 1,
        costo: 1800,
        smoke: false,
        pets: true
    }
];

/* funciones */

function permisoFumar(smoke){

    if(smoke === true){
        let permiso1 = `
            <p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
            </p>`;
        return permiso1;      
    }

    else{
        let permiso2 = `
            <p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
            </p>`;
        return permiso2;      
    }

}

function permisoMascota(pets){

    if(pets === true){
        let permiso1 = `
            <p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
            </p>`;
        return permiso1;      
    }

    else{
        let permiso2 = `
            <p class="text-danger">
                <i class="fa-solid fa-ban"></i> No se permiten mascotas
            </p>`;
        return permiso2;      
    }

}    