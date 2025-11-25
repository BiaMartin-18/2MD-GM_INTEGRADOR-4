import DetalhesVeiculo from "./detalheveiculo";

export default async function VeiculoDetails({ params }) {
  const { id } = await params; // Next 16 exige isso
  return <DetalhesVeiculo vehicleId={id} />;
}
