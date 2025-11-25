import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params; // este é o part_number do veículo

  try {
    // Pega todos os veículos da auditoria (porta 3001)
    const response = await axios.get("http://localhost:3001/api/auditoriasveiculos");
    const veiculos = response.data; // sua API retorna um array diretamente

    // Filtra pelo part_number
    const veiculo = veiculos.find(v => v.part_number === id);

    if (!veiculo) {
      return res.status(404).json({ message: "Veículo não encontrado" });
    }

    res.json(veiculo); // devolve o veículo correto
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar veículo" });
  }
});

export default router;
