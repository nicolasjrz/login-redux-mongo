/* eslint-disable react/prop-types */
import { Grid, Paper, useMediaQuery } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onService } from "../../store/auth/turnoSlice";
import { useEffect } from "react";

const papers = [
  { id: 1, title: "Corte de pelo" },
  { id: 2, title: "Tintura" },
  { id: 3, title: "Claritos" },
  { id: 4, title: "Barberia" },
];

export const Componente3 = ({ servicio, setNext }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    servicio === "" ? setNext(true) : setNext(false);
  }, [servicio, setNext]);

  const handlePaperClick = (paperId) => {
    dispatch(onService(paperId));
    setNext(false);
  };

  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <StepperLayout>
      {/* <Typography>Servicio: {servicio}</Typography>
      <TextField
        type="number"
        onChange={handleServiceChange}
        value={servicio}
      /> */}

      <Grid container spacing={2} direction={isMobile ? "column" : "row"}>
        {papers.map((paper) => (
          <Grid item xs={12} sm={6} md={3} key={paper.id}>
            <Paper
              elevation={3}
              style={{
                padding: "1rem",
                backgroundColor: servicio === paper.id ? "#e0e0e0" : "inherit",
              }}
              onClick={() => handlePaperClick(paper.id)}
            >
              {paper.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </StepperLayout>
  );
};
