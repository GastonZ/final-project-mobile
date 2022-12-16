let admin = [
    {
        name: "Maria",
        lastName:  "Pérez",
        role:  "admin",
        photo:   "https://thispersondoesnotexist.com/image",
        age: "36",
        email: "mariaperez@gmail.com",
        password: "hola1234",
        code: "administratorTwo",
        verified: true,
        logged: true,
    },
    {
        name: "Juan",
        lastName:  "Gómez",
        role:  "admin",
        photo:   "https://thispersondoesnotexist.com/image",
        age: "26",
        email: "juangomez@gmail.com",
        password: "hola1234",
        code: "administratorOne",
        verified: true,
        logged: true,
    },
]

require ('dotenv').config()
require('../../config/database')
const User = require('../Users')

admin.forEach(elemento =>{
    User.create({
    name:elemento.name,
    lastName: elemento.lastName,
    role:elemento.role,
    photo:elemento.photo,
    age: elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged
})
})