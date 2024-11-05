export const invoice = {
    id:10,
    name: "Componentes RCX",
    client: {
        name: "Juan",
        lastname: "Perez",
        address:{
            country: "USA",
            city: "Los Angeles",
            street:"One street",
            number: 12
        }
    },
    items:[
        {
            id:1,
            product: 'CPU intel i7',
            price:7000,
            quantity:1
        },
        {
            id:2,
            product: 'Corsair keyboard mecanico',
            price:1500,
            quantity:1
        },
        {
            id:3,
            product: 'macboock pro 2018',
            price:5000,
            quantity:1
        },
        {
            id:4,
            product: 'watch',
            price:900,
            quantity:1
        }
    ],
    company:{
        name: "Componentes RCX",
        fisicalNumber: 8394827
    }

}