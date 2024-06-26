import React from "react";
import MUIDataTable, {
  MUIDataTableOptions,
  MUIDataTableColumnDef,
} from "mui-datatables";
import { createTheme, ThemeProvider, Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";
import styled from "styled-components";

interface CustomMUIDataTableOptions extends MUIDataTableOptions {
  displayToolbar?: boolean;
}

interface GlobalTableProps {
  options?: CustomMUIDataTableOptions;
  title?: string;
  data: any[];
  columns: MUIDataTableColumnDef[];
  components?: any;
}

const GlobalTable: React.FC<GlobalTableProps> = ({
  options,
  title,
  data,
  columns,
  components,
}) => {
  const tableTheme: Theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: "#fff",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
          },
        },
      },
      MUIDataTableToolbar: {
        styleOverrides: {
          root: (props) => {
            const { displayToolbar = true } =
              (props.ownerState as CustomMUIDataTableOptions) || {};
            return {
              display: displayToolbar ? "flex" : "none",
            };
          },
        },
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
          },
        },
      },
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
          },
        },
      },
      MUIDataTablePagination: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
            color: "#fff",
          },
        },
      },
    } as Components,
  });

  return (
    <TableContainer>
      <ThemeProvider theme={tableTheme}>
        <MUIDataTable
          options={{
            elevation: 0,
            rowsPerPage: 20,
            rowsPerPageOptions: [20, 50, 100],
            selectableRows: "none",
            responsive: "standard",
            ...options,
          }}
          title={title}
          data={data}
          columns={columns}
          components={components}
        />
      </ThemeProvider>
    </TableContainer>
  );
};

export default GlobalTable;

const TableContainer = styled.div`
  margin: 1.5rem;
  @media (max-width: 768px) {
    margin: 1.5rem;
    .MuiTableCell-root {
      display: block;
      width: 100%;
    }
    .MuiTableRow-root {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  }
`;
