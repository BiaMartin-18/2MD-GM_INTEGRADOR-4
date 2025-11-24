import DetalhesVeiculos from "./detalheveiculo";

export default async function VeiculoDetails( { params} ) {
    const { id } = params
    return (
        <DetalhesVeiculos vehicleId={id} />
    )
}