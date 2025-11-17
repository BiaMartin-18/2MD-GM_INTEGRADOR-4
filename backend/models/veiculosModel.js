import { read } from "../config/database.js";

export async function listarVeiculos() {
    return await read("veiculos"); 
}
