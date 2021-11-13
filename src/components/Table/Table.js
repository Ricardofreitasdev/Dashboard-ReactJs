import React, { useContext, useEffect, useState } from "react";
import useStyles from "./style";
import MUIDataTable from "mui-datatables";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import identifyId  from "../../utils/identifyId"
export default function Table(props) {
  const styles = useStyles();

  const history = useHistory();

  const usersArray = props.data;
  const loggedUser = props.user;

  const columns = [
    {
      name: "Id",
      label: "Id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Nome",
      label: "Nome",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Perfil",
      label: "Perfil",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const editUser = (Row, Data) => {
    const id = identifyId(Row, Data);
    history.push(`/app/user/edit/${id}`);
  };
  

  const options = {
    filterType: "checkbox",
    selectableRows: loggedUser.role === "admin" ? "single" : "none",
    customToolbarSelect: (selectedRows, displayData) => (
      <div className={styles.button__list}>
        
        <DeleteModal selectedRows={selectedRows} displayData={displayData} />
      
        <Button
          className={styles.button__actions}
          variant="contained"
          color="secondary"
          startIcon={<ModeEditIcon />}
          onClick={() => editUser(selectedRows, displayData)}
        >
          Editar usuario
        </Button>
      </div>
    ),
    textLabels: {
      body: {
        noMatch: "Nenhum resultado encontrado",
        toolTip: "Sort",
        columnHeaderTooltip: (column) => `Sort for ${column.label}`,
      },
      pagination: {
        next: "Próxima pagina",
        previous: "Página anterior",
        rowsPerPage: "Linhas por pagina:",
        displayRows: "de",
      },
      toolbar: {
        search: "Pesquisar",
        downloadCsv: "Exportar CSV",
        print: "Imprimir",
        viewColumns: "Ver colunas",
        filterTable: "Filtrar",
      },
      filter: {
        all: "Todos",
        title: "Filtros",
        reset: "limpar",
      },
      viewColumns: {
        title: "Ver colunas",
        titleAria: "ver/esconder colunas",
      },
      selectedRows: {
        text: "Linha(s) selecionadas",
        delete: "Deletar",
        deleteAria: "Linhas selecionadas",
      },
    },
  };

  return (
    <>
      <MUIDataTable
        className={styles.table}
        title={
          loggedUser.role === "admin"
            ? "Gerenciar usuários"
            : "Lista de usuários"
        }
        data={usersArray}
        columns={columns}
        options={options}
      />
    </>
  );
}
