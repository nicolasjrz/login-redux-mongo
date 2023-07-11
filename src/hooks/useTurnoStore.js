import { useSelector } from "react-redux";

export const useTurnoStore = () => {
  const { fecha, turno, usuario, servicio } = useSelector(
    (state) => state.turno
  );

  return {
    ///propiedades
    fecha,
    turno,
    usuario,
    servicio,
  };
};
