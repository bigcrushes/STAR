import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { TableHead } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Link } from 'react-router-dom';
import { Checkbox } from "@material-ui/core";
import { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, useAuth } from "../../hooks/useAuth";


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, difficulty, completion, pageid) {
  return { name, difficulty, completion , pageid};
}

const rows = [
  createData('Short Route - East', 'Easy', 65, "1"),
  createData('Short Route - North', 'Easy', 50, "2"),
  createData('Short Route - South', 'Easy', 49, "3"),
  createData('Short Route - West', 'Medium', 25, "4"),
  createData('Long Route - East/West', 'Hard', 10, "5"),
  createData('Long Route - North/South', 'Hard', 9, "6"),
].sort((a, b) => (a.completion > b.completion ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /* Firebase storing stuff */
  const [tasks, setTasksState] = useState([{description: "Short Route - East", isComplete: false, timeCompleted: false },
  {description: "Short Route - North", isComplete: false, timeCompleted: false },
  {description: "Short Route - South", isComplete: false, timeCompleted: false },
  {description: "Short Route - West", isComplete: false, timeCompleted: false },
  {description: "Long Route - East/West", isComplete: false, timeCompleted: false },
  {description: "Long Route - North/South", isComplete: false, timeCompleted: false }]);

  const { user } = useAuth();

  function setTasks(newTasks) {
    setTasksState(newTasks);
    setDoc(doc(db, "tasks", user?.uid), { tasks: newTasks });
  }

  function handleTaskCompletionToggled(toToggleTask, toToggleTaskIndex) {
    const newTasks = [
      // Once again, this is the spread operator
      ...tasks.slice(0, toToggleTaskIndex),
      {
        description: toToggleTask.description,
        isComplete: !toToggleTask.isComplete,
        timeCompleted: Date().toLocaleString()
      },
      ...tasks.slice(toToggleTaskIndex + 1)
    ];
    if(newTasks[toToggleTaskIndex].isComplete){
      completions[toToggleTaskIndex] += 1;
    } else {
      completions[toToggleTaskIndex] -= 1;
    }
    setCompletion(completions);
    setTasks(newTasks);
  }

  useEffect(() => {
    async function fetchData() {
      const docSnapshot = await getDoc(doc(db, "tasks", user?.uid));
      if (docSnapshot.exists()) {
        setTasksState(docSnapshot.data().tasks);
      } else {
        setTasksState([{description: "Short Route - East", isComplete: false, timeCompleted: false },
                       {description: "Short Route - North", isComplete: false, timeCompleted: false },
                       {description: "Short Route - South", isComplete: false, timeCompleted: false },
                       {description: "Short Route - West", isComplete: false, timeCompleted: false },
                       {description: "Long Route - East/West", isComplete: false, timeCompleted: false },
                       {description: "Long Route - North/South", isComplete: false, timeCompleted: false }]);
      }
    }
    fetchData();
  }, [user.uid]);

  /* Firebase storing stuff */

  /* Firebase storing number of completions*/
  const [completions, setCompletions] = useState([0,0,0,0,0,0]);

  function setCompletion(newCompletion) {
    setCompletions(newCompletion);
    // db, collection, document
    setDoc(doc(db, "CompletionCollection", 'CompletionDocument'), { completions: newCompletion });
  }

  useEffect(() => {
    async function fetchData() {
      const docSnapshot2 = await getDoc(doc(db, "CompletionCollection", 'CompletionDocument'));
      if (docSnapshot2.exists()) {
        setCompletions(docSnapshot2.data().completions);
      } else {
        setCompletions([0,0,0,0,0,0]);
      }
    }
    fetchData();
  }, [user.uid]);




  return (
    <div>
    <div><h1>Missions</h1></div>  
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
            <TableCell>Route</TableCell>
            <TableCell align="right">Difficulty</TableCell>
            <TableCell align="right">No. of Completions</TableCell>
            <TableCell align="right">Completed</TableCell>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name} style={{ textDecoration: 'none' }}>
              <TableCell component="th" scope="row">
                <Link to={`/${row.pageid}`}>{row.name}</Link>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.difficulty}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {completions[Number(row.pageid) - 1]}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Checkbox 
                  checked={tasks[Number(row.pageid) - 1].isComplete}
                  onChange={() => handleTaskCompletionToggled(tasks[Number(row.pageid) - 1], Number(row.pageid) - 1)}/>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </div>
  );
}
