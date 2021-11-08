import React, { useContext, useEffect, useState } from "react";
import useStyles from "../style";
import MUIDataTable from "mui-datatables";
import { useHistory } from "react-router-dom";
import { Alert } from "@mui/material";
import UserContext from "../../../context/UserContext";
import api from "../../../services/api";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from "@material-ui/core";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Table(props) {
  const styles = useStyles();
  
  const { token } = useContext(UserContext);
  const history = useHistory();

  const [deleted, setdeleted] = useState("");
  const [errors, setErrors] = useState(false);

  const usersArray = props.data;
  const loggedUser = props.user;

  
  const columns = [
    {
      name: "código do cliente",
      label: "código do cliente",
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

  const deleteUser = (Row, Data) => {
    const id = identifyId(Row, Data);

    api.delete(`delete/${id}`, { headers: { token: token } }).then((res) => {
      if (res.data === 1) {
        setdeleted(true);
        return;
      }
      if (res.data.error) {
        setErrors(res.data.error);
        return;
      }
    });
  };

  const editUser = (Row, Data) => {
    const id = identifyId(Row, Data);
    history.push(`/app/user/edit/${id}`);
  };

  const identifyId = (Row, Data) => {
    const rowDataIndexes = Object.keys(Row.lookup);
    const transformedRowDataIndexes = rowDataIndexes.map((index) =>
      parseInt(index)
    );
    const rowIds = Data.reduce((prev, cur) => {
      if (transformedRowDataIndexes.includes(cur.dataIndex)) {
        prev.push(cur.data[0]);
        return prev;
      }
      return prev;
    }, []);
    return rowIds[0];
  };

  const options = {
    filterType: "checkbox",
    selectableRows: loggedUser.role === "admin" ? "single" : "none",
    customToolbarSelect: (selectedRows, displayData) => (
      <div>
        <Button
        variant="contained"
        size="large"
        color="primary"
        startIcon={<DeleteForeverIcon />}
        onClick={() => deleteUser(selectedRows, displayData)}
        >Excluir usuario
        </Button>

        <Button
        size="large"

        variant="contained"
        color="secondary"
        startIcon={<ModeEditIcon />}
        onClick={() => editUser(selectedRows, displayData)}
        >Editar usuario
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

  console.log(loggedUser.role);
  return (
    <>
      {errors && <Alert severity="error">Você não pode se excluir</Alert>}

      {deleted && (
        <Alert severity="success">Usuario excluído com sucesso</Alert>
      )}

      <MUIDataTable
        className={styles.table}
        title={loggedUser.role === "admin" ? "Gerenciar usuários" : "Lista de usuários"}
        data={usersArray}
        columns={columns}
        options={options}
      />
    </>
  );
}
