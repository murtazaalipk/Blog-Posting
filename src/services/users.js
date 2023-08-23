import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcryptjs';

const filePath = path.join(process.cwd(), "src", "data", "users.json");

export function getAll(){
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}

export function getByEmail (email) {
    const data =  getAll()
    return data.find(p => p.email.toLowerCase() === email.toLowerCase());
}
export async function verifyPassword (HashPassword, password) {
    const isValid = await compare(password, HashPassword);
    return isValid;
}

export async function save (email, password){


    const found = getByEmail(email);
    if(found){
        throw new Error("user Already Exist.")
    }
    const HashPassword = await hash(password, 12)
    const data = getAll();
    data.push({
        id: data.length + 1,
        email, 
        password: HashPassword
    });
    fs.writeFileSync(filePath, JSON.stringify(data)); 
}

