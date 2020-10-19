import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User', 
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Orven Gonzales', 
        email: 'orven@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Juan Dela Cruz', 
        email: 'jdcruz@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users