const user = {
    "email": "bruno_calixta@email.com",
    "name": "Bruno Calixta Almeida",
    "birthDate": "1997-10-22T00:00:00.000+00:00",
    "sex": "m", 
    "phone": "(11) 99999-8888", 
    "cep": "09993010",
    "address": "Rua Carlos Drummond de Andrade",
    "number": "41",
    "complement": "",
    "neighborhood": "Conceição",
    "city": "Diadema", 
    "uf": "SP",
}

const age = () => { 
    const birth = new Date(user.birthDate)
    const today = new Date();
    var diff = Math.abs(today - birth) 
    user.age = Math.floor(diff / 31536000000)
}

age()
export {user}