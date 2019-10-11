import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import CheckBox from '../components/CheckBox/CheckBox';
// import { StylesProvider } from '@material-ui/styles';
// import styles from './ListView.module.css';
// import ListViewItem from '../ListViewItem/ListViewItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const columns = ["checkbox", "bodyContent", "moreOptions"];

const bodyContent = () => (
  <div>
    <div className="d-flex">
      <a rel="noopener noreferrer" target="_blank" href="javacript:void(0)">
        <i className="icon-size">
          <img src="/assets/images/aws_logo.png" alt="connector logo" className="connector" />
        </i>
      </a>
      <div className="d-flex flex-column pt-1">
        <span className="text-content">CloudPAM-Dev-TestInstances-2</span>
        <div className="d-flex sub-header">
          <span className="sub-content">ec2-user</span>
          <span className="dot">.</span>
          <span className="text-color">Instance</span>
          <span className="dot">.</span>
          <span className="text-color">1110874</span>
        </div>
      </div>
    </div>
  </div>
);

const moreOptions = () => (
  <div className="list-inline-view pt-1">
    <div className="d-flex flex-column future-new">New</div>
    <div className="pt-2">
      <span className="label-left">not active yet</span>
      <span className="label-left"> </span>
    </div>
    <button className="btn  btn-access mt-1 future-disabled" type="submit" disabled="">
      Launch
    </button>
    <div className="more-options">
      <svg
        className="mt-2 mr-2 "
        width="18px"
        height="18px"
        viewBox="0 0 408 408"
        style="fill: rgb(180, 180, 180);"
      >
        <g>
          <g id="keyboard-control">
            <path
              d="M51,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S79.05,153,51,153z M357,153c-28.05,0-51,22.95-51,51
s22.95,51,51,51s51-22.95,51-51S385.05,153,357,153z M204,153c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
S232.05,153,204,153z"
            />
          </g>
        </g>
      </svg>
      <div className="btnbox future">
        <button className="btn btn-ingrid btn-outline-primary" type="submit">
          End
        </button>
        <button className="btn btn-ingrid btn-outline-primary" type="submit">
          Extend
        </button>
        <button className="btn btn-ingrid btn-outline-primary" type="submit">
          Template
        </button>
      </div>
    </div>
  </div>
);

const data = [{},{}]

const ListView = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody className="">
          {data.map(row => (
            <TableRow className="" key={`${row.requestId}${row.instanceId}`}>
            	<CheckBox />
              {columns.map(col => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

ListView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      requestId: PropTypes.string.isRequired,
      instanceId: PropTypes.func.isRequired,
    })
  ).isRequired,
  columns: PropTypes.oneOf.isRequired,
};

// const ListView = ({ data, columns }) => (
//   <div className="list_view_container h-100">
//     <div className="container p-0 h-100">
//       {data.map(row => (
//         <div className="content d-flex bd-highlight" key={`${row.requestId}${row.instanceId}`}>
//           {columns.map(col => (
//             <div className="d-flex list-content" key={col}>
//               {row[col]}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// );

export default ListView;
