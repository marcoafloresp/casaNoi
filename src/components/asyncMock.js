const products = [
    {
        "id": "1",
        "category": "Almohadones",
        "name": "ABC",
        "image": "/imagenes/abc.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "2",
        "category": "Almohadones",
        "name": "ABSTRACT (gris claro)",
        "image": "/imagenes/abstract.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "3",
        "category": "Almohadones",
        "name": "ABSTRACT (ocre)",
        "image": "/imagenes/abstracto.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "4",
        "category": "Almohadones",
        "name": "ABSTARCT (graffito-brick)",
        "image": "/imagenes/abstractgb.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "5",
        "category": "Almohadones",
        "name": "ATTRAVERSIAMO",
        "image": "/imagenes/attraversiamo.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "6",
        "category": "Almohadones",
        "name": "BE FELIZ / AMORE FA BENE AL CUORE",
        "image": "/imagenes/befeliz.webp",
        "size": "50 x 35 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "7",
        "category": "Almohadones",
        "name": "BE A NICE HUMAN",
        "image": "/imagenes/beanice.webp",
        "size": "60 x 60 cm.",
        "made":"100 % Lienzo tenido."
    },
    {
        "id": "8",
        "category": "Almohadones",
        "name": "BI COLOR / DUO",
        "image": "/imagenes/duogrey.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "9",
        "category": "Almohadones",
        "name": "BUONGIORNO",
        "image": "/imagenes/buongiorno.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },



    
    {
        "id": "11",
        "category": "Almohadones",
        "name": "COPACABANA (pintado a mano)",
        "image": "/imagenes/copacabana.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "12",
        "category": "Almohadones",
        "name": "COMO ME GUSTA LA NOCHE",
        "image": "/imagenes/comomegusta.webp",
        "size": "80 x 50 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "13",
        "category": "Almohadones",
        "name": "CONEJITO - OSITO",
        "image": "/imagenes/conejoosito.webp",
        "size": "50 x 50 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "14",
        "category": "Almohadones",
        "name": "CUORE",
        "image": "/imagenes/cuore.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "15",
        "category": "Almohadones",
        "name": "CUPIDO",
        "image": "/imagenes/cupido.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "16",
        "category": "Almohadones",
        "name": "DISTINGUISHED GUESTS",
        "image": "/imagenes/distinguished.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "17",
        "category": "Almohadones",
        "name": "EVERY SUMMER",
        "image": "/imagenes/everysummer.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "18",
        "category": "Almohadones",
        "name": "EVERYONE",
        "image": "/imagenes/everyone.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "19",
        "category": "Almohadones",
        "name": "FLOWERS",
        "image": "/imagenes/flowers.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "20",
        "category": "Almohadones",
        "name": "GREY / LIGHT BLUE",
        "image": "/imagenes/grey.webp",
        "size": "60 x 60 cm. - 70 x 70 cm. - 90 x 60 cm. - 1.20 x 0.50 mts.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "21",
        "category": "Almohadones",
        "name": "GREY DUO",
        "image": "/imagenes/greyduo.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "22",
        "category": "Almohadones",
        "name": "HOJA",
        "image": "/imagenes/hoja.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "23",
        "category": "Almohadones",
        "name": "HOJA (ocre)",
        "image": "/imagenes/hojaocre.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "24",
        "category": "Almohadones",
        "name": "HOJA (esquinada)",
        "image": "/imagenes/hojaesquinada.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "25",
        "category": "Almohadones",
        "name": "KEEPING IT SIMPLE",
        "image": "/imagenes/keeping.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "26",
        "category": "Almohadones",
        "name": "LEGENDS",
        "image": "/imagenes/legends.webp",
        "size": "80 x 50 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "27",
        "category": "Almohadones",
        "name": "LENNON",
        "image": "/imagenes/lennon.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "28",
        "category": "Almohadones",
        "name": "LUNARES - `MOL`",
        "image": "/imagenes/lunares.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "29",
        "category": "Almohadones",
        "name": "MANHATTAN",
        "image": "/imagenes/manhattan.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "30",
        "category": "Almohadones",
        "name": "MAP",
        "image": "/imagenes/map.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "31",
        "category": "Almohadones",
        "name": "MERECES",
        "image": "/imagenes/mereces.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "32",
        "category": "Almohadones",
        "name": "NEW YORK OR NOWHERE",
        "image": "/imagenes/newyork.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "33",
        "category": "Almohadones",
        "name": "OLI (gris, verde, marron)",
        "image": "/imagenes/oly.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "34",
        "category": "Almohadones",
        "name": "ONE DAY AT A TIME",
        "image": "/imagenes/oneday.webp",
        "size": "50 x 35 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "35",
        "category": "Almohadones",
        "name": "PALM",
        "image": "/imagenes/palm.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "36",
        "category": "Almohadones",
        "name": "PAUL - MANHATTAN - ROMA",
        "image": "/imagenes/paul.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "37",
        "category": "Almohadones",
        "name": "PLAIN",
        "image": "/imagenes/plain.webp",
        "size": " 60 X 60 cm. - 70 X 70 cm. - 90 x 60 cm. - 1.40 x 0.40 mts.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "38",
        "category": "Almohadones",
        "name": "PLANETS",
        "image": "/imagenes/planets.webp",
        "size": "70 x 70 cm. - 90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "39",
        "category": "Almohadones",
        "name": "PLEASED",
        "image": "/imagenes/pleased.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "40",
        "category": "Almohadones",
        "name": "POLLOCK + KANDINSKY (stock limitado)",
        "image": "/imagenes/pollock.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "41",
        "category": "Almohadones",
        "name": "RAYAS COPEN",
        "image": "/imagenes/copen.webp",
        "size": "70 x 70 cm. - 90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "42",
        "category": "Almohadones",
        "name": "RAYAS OSLO",
        "image": "/imagenes/oslo.webp",
        "size": "70 x 70 cm. - 90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "43",
        "category": "Almohadones",
        "name": "REST HERE",
        "image": "/imagenes/resthere.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "44",
        "category": "Almohadones",
        "name": "RIO (stock limitado)",
        "image": "/imagenes/rio.webp",
        "size": "90 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "45",
        "category": "Almohadones",
        "name": "SUNDAY",
        "image": "/imagenes/sunday.webp",
        "size": "70 x 70 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "46",
        "category": "Almohadones",
        "name": "TIJUCA (stock limitado)",
        "image": "/imagenes/tijuca.webp",
        "size": "60 x 60 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "47",
        "category": "Almohadones",
        "name": "TOCA TOCA",
        "image": "/imagenes/tocatoca.webp",
        "size": "80 x 40 cm.",
        "made":"Lienzo 100 % Algodon."
    },
    {
        "id": "48",
        "category": "Almohadones",
        "name": "VIAGGIARE",
        "image": "/imagenes/viaggiare.webp",
        "size": "80 x 50 cm.",
        "made":"Lienzo 100 % Algodon."
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)
        }, 0)
    })
}

const productsAlfombras = [
    {
        "id": "1",
        "category": "Alfombras",
        "name": "ALFOMBRA LISA",
        "image": "/imagenes/alfombralisa.webp",
        "size": "1 x 0.60 m. (cruda o gris)",
        "made":"Hilo de Algodon."
    },
    {
        "id": "2",
        "category": "Alfombras",
        "name": "ALFOMBRA LISA 2m",
        "image": "/imagenes/alfombralisa2m.webp",
        "size": "2 x 0.60 m. (cruda o gris)",
        "made":"Hilo de Algodon."
    },
    {
        "id": "3",
        "category": "Alfombras",
        "name": "ALFOMBRA RAYA DOBLE (negro)",
        "image": "/imagenes/alfombrarayadoble.webp",
        "size": "1.10 x 0.60 m. - 2.00 x 0.60 m.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "4",
        "category": "Alfombras",
        "name": "ALFOMBRA RAYA DOBLE (gris)",
        "image": "/imagenes/alfombrarayadobleg.webp",
        "size": "1.10 x 0.60 m. - 2.00 x 0.60 m.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "5",
        "category": "Alfombras",
        "name": "ALFOMBRA RAYA ANCHA (blanca)",
        "image": "/imagenes/alfombrarayaanchab.webp",
        "size": "1.10 x 0.60 m. - 2.00 x 0.60 m.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "6",
        "category": "Alfombras",
        "name": "ALFOMBRA RAYA ANCHA (negra)",
        "image": "/imagenes/alfombrarayaanchan.webp",
        "size": "1.10 x 0.60 m. - 2.00 x 0.60 m.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "7",
        "category": "Alfombras",
        "name": "ALFOMBRA GEOMETRICA",
        "image": "/imagenes/alfombrageo.webp",
        "size": "1.10 x 0.60 m. - 2.00 x 0.60 m.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "8",
        "category": "Alfombras",
        "name": "ALFOMBRA RAYUELA",
        "image": "/imagenes/alfombrarayuela.webp",
        "size": "2.00 x 0.60 m.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "9",
        "category": "Alfombras",
        "name": "ALFOMBRA REDONDA",
        "image": "/imagenes/alfombraredonda.webp",
        "size": "1 mt. - 1.50 mt. - 2.00 mts.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "10",
        "category": "Alfombras",
        "name": "ALFOMBRA MARRUECOS",
        "image": "/imagenes/alfombramarrueco.webp",
        "size": "1.10 mt. x 0.60 mts - 2.00 mts. x 0.60 mts.",
        "made":"Hilo de Algodon."
    },
    {
        "id": "10",
        "category": "Alfombras",
        "name": "ALFOMBRA RAYUELA",
        "image": "/imagenes/alfombrarayuela.webp",
        "size": "2.00 mts. x 0.60 mts.",
        "made":"Hilo de Algodon."
    },
]

export const getProductsAlfombras = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productsAlfombras)
        }, 0)
    })
}

const productsBags = [
    {
        "id": "1",
        "category": "Bags",
        "name": "BE FELIZ",
        "image": "/imagenes/bagbefeliz.webp",
        "size": " ",
        "made":"Lienzo 100% algodon."
    },
    {
        "id": "2",
        "category": "Bags",
        "name": "LAUNDRY BAG",
        "image": "/imagenes/baglaundry.webp",
        "size": "50 x 70 x 30 cm.",
        "made":"Gabardina, capacidad 8 Kg."
    },
    {
        "id": "3",
        "category": "Bags",
        "name": "ROCK AND TOYS",
        "image": "/imagenes/bagrock.webp",
        "size": "50 x 70 x 30 cm.",
        "made":"Gabardina."
    },
]

export const getProductsBags = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productsBags)
        }, 0)
    })
}

const productsOtros = [
    {
        "id": "1",
        "category": "Otros",
        "name": "CAMINO",
        "image": "/imagenes/otros/camino.webp",
        "size": "150 x 60 cm.",
        "made":"Lienzo 100% algodon."
    },
    {
        "id": "2",
        "category": "Otros",
        "name": "COLCHONETA",
        "image": "/imagenes/otros/colchoneta.webp",
        "size": "80 x 185 cms.",
        "made":"100% algodon."
    },
    {
        "id": "3",
        "category": "Otros",
        "name": "CUBRE EDREDON",
        "image": "/imagenes/otros/cubreedredon.webp",
        "size": "twin: 220 x 160 cms. - king: 220 x 260 cms",
        "made":"100% algodon."
    },
    {
        "id": "4",
        "category": "Otros",
        "name": "MANTA RAYADA",
        "image": "/imagenes/otros/mantarayada.webp",
        "size": "200 x 140 cms.",
        "made":"100% algodon."
    },
    {
        "id": "5",
        "category": "Otros",
        "name": "HANGING ABC",
        "image": "/imagenes/otros/hangingabc.webp",
        "size": "90 x 60 cms.",
        "made":"Lienzo 100% algodon."
    },
    {
        "id": "6",
        "category": "Otros",
        "name": "HANGING MAP",
        "image": "/imagenes/otros/hangingmap.webp",
        "size": "90 x 60 cms.",
        "made":"Lienzo 100% algodon."
    },
]
export const getProductsOtros =() =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productsOtros)
        }, 0)
    })
}

const productsxl = [
    {
        "id": "1",
        "category": "Almohadones Xl",
        "name": "BILBAO",
        "image": "/imagenes/bilbao.webp",
        "size": "120 x 100 cm.",
        "made":"Lienzo 100% algodon."
    },
    {
        "id": "2",
        "category": "Almohadones Xl",
        "name": "ONE LOVE",
        "image": "/imagenes/onelove.webp",
        "size": "140 x 40 cms.",
        "made":"100% algodon."
    },
    {
        "id": "3",
        "category": "Almohadones Xl",
        "name": "NUNCA SEREMOS",
        "image": "/imagenes/nuncaseremos.webp",
        "size": "120 x 50 cms.",
        "made":"100% algodon."
    },
    {
        "id": "4",
        "category": "Almohadones Xl",
        "name": "REMEMBER THAT DAY",
        "image": "/imagenes/remember.webp",
        "size": "120 x 50 cms.",
        "made":"100% algodon."
    },
    {
        "id": "5",
        "category": "Almohadones Xl",
        "name": "SANCTUARY",
        "image": "/imagenes/sanctuary.webp",
        "size": "120 x 50 cms.",
        "made":"Lienzo 100% algodon."
    },
    {
        "id": "6",
        "category": "Almohadones Xl",
        "name": "XL",
        "image": "/imagenes/xl.webp",
        "size": "90 x 60 cms.",
        "made":"Lienzo 100% algodon."
    },
]
export const getProductsxl =() =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productsxl)
        }, 0)
    })
}
