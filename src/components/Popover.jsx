import {
  Popover as MuiPopover,
  Box,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button' 


const useStyles = makeStyles({
  popoverPaper: {
    marginTop: '10px',
    overflowX: "unset",
    overflowY: "unset",
    width: '310px',
    
    "&::before": {
        boxShadow: '20px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 1px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        opacity: 0.9,
        content: '""',
        position: "absolute",
        top: 0,
        left: 155,
        marginTop: '-10px',
        width: 10,
        height: 10,
        backgroundColor: 'white',
        transform: "translate(-50%, 50%) rotate(-45deg)",
        clipPath: "polygon(-5px -5px, calc(100% + 5px) -5px, calc(100% + 5px) calc(100% + 5px))",
    },
  }
});


const Popover = ({ anchor, onClose, nodeData }) => {
  const classes = useStyles();
  if (!nodeData) return (<div></div>);
  const { data } = nodeData;
  const notReachedValue = data.data.potentialTarget - data.data.target;
  const formatDecimal = (value) => +parseFloat(value).toFixed(2);
  const handleButtonClick = () => {
    console.log(data.data.projeto);
  };
  return (
    <div style={{overflowX: "100%"}}>
    <MuiPopover
      open={anchor !== null}
      anchorEl={anchor}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      classes={{
        paper: classes.popoverPaper,
      }}
    >
      <Paper
        style={{
          padding: 10,
          minWidth: 230,  
          opacity: 0.8,
        }}
      >
        <Box >
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Mais Detalhes
      </Button>
    </Box>
        <Box>
       
          <Typography variant="h6" title={data.contentName}>
            { data.name }
        
          </Typography>
        </Box>
        <Box>

        </Box>
        { typeof(data.date) === 'object' && (
          <Box mb={1}>
            <Typography variant="body1">
              From { data.date.from } to { data.date.to}
            </Typography>
          </Box>
        )}
        { typeof(data.date) === 'string' && (
          <Box mb={1}>
            <Typography variant="body1">
              { data.date }
            </Typography>
          </Box>
        )}
        <Box mb={1}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '11px' }}>
                Potential target
              </Typography>
              <Typography variant="body1">
                { data.data.potentialTarget }
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center"}}>
              <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '11px' }}>
                Target
              </Typography>
              <Typography variant="body1">
                { data.data.target }
              </Typography>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "right"}}>
              <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '11px' }}>
                { data.data.percentOK.label }
              </Typography>
              <Typography variant="body1">
                { data.data.percentOK.value } %
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Typography variant="body1">
            Details
          </Typography>
        </Box>
        <TableContainer style={{ marginTop: 10 }}>
          <Table size="small">
            <TableBody >
              { data.data.analytics.map(({ value, label, color }, index) => (
                <TableRow key={index}>
                  <TableCell style={{ padding: 0}}>
                    <div style={{
                      border: `5px solid ${color}`,
                      borderRadius: 5
                    }}/>
                  </TableCell>
                  <TableCell>{label}</TableCell>
                  <TableCell style={{ textAlign: 'right'}}>{value}</TableCell>
                  <TableCell style={{ textAlign: 'right'}}>{formatDecimal(value / data.data.potentialTarget * 100)} %</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell style={{ padding: 0}}>
                  <div style={{
                    border: `5px solid #cccccc`,
                    borderRadius: 5
                  }}/>
                </TableCell>
                <TableCell>Not Reached</TableCell>
                <TableCell style={{ textAlign: 'right'}}>{ notReachedValue }</TableCell>
                <TableCell style={{ textAlign: 'right'}}>{formatDecimal(notReachedValue / data.data.potentialTarget * 100)} %</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </MuiPopover>
    </div>
  );
};

export default Popover;
