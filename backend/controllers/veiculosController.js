import { listarVeiculos } from "../models/veiculosModel.js";

export async function getVeiculos(req, res) {
  try {
    const veiculos = await listarVeiculos();
    res.status(200).json({ sucesso: true, veiculos });
  } catch (e) {
    res.status(500).json({ sucesso: false, erro: e.message });
  }
}
