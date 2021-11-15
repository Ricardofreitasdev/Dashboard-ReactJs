import React from "react";
import useStyles from "./style";
import MUIDataTable from "mui-datatables";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import defaultImage from "../../assets/images/user.png";
export default function Table(props) {
  const styles = useStyles();

  const history = useHistory();

  const usersArray = props.data;
  const loggedUser = props.user;
  let columns = [];

  loggedUser.role === "admin"
    ? (columns = [
        {
          name: "avatar",
          label: "Avatar",
          options: {
            filter: false,
            sort: false,
            customBodyRender: (val) => {
              return (
                <img alt="avatar"
                  className={styles.avatar}
                  src={val ? val : defaultImage}
                ></img>
              );
            },
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
        {
          name: "Ações",
          label: "Ações",
          options: {
            filter: true,
            sort: true,
            customBodyRender: (val) => {
              return (
                <div>
                  <Button
                    className={styles.button__actions}
                    variant="contained"
                    color="secondary"
                    onClick={() => editUser(val)}
                  >
                    <ModeEditIcon />
                  </Button>
                  <DeleteModal user={val} />
                </div>
              );
            },
          },
        },
      ])
    : (columns = [
        {
          name: "avatar",
          label: "Avatar",
          options: {
            filter: false,
            sort: false,
            customBodyRender: (val) => {
              return (
                <img alt="avatar"
                  className={styles.avatar}
                  src={val ? val : defaultImage}
                ></img>
              );
            },
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
      ]);

  const editUser = (id) => {
    const userId = id;
    history.push(`/app/user/edit/${userId}`);
  };

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
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
