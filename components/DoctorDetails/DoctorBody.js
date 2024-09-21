"use client";

// import React from 'react'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [];

const DoctorBody = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#121212", // Dark background for the table container
        color: "#FFFFFF", // White text color for dark mode
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          color: "#FFFFFF", // White text for the table content
        }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#FFFFFF", // White text for headers
                fontSize: "1.2rem", // Increased font size for headers
              }}
            >
              Psychotherapist Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#FFFFFF",
                fontSize: "1.2rem",
              }}
            >
              Address
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#FFFFFF",
                fontSize: "1.2rem",
              }}
            >
              Speciality
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#FFFFFF",
                fontSize: "1.2rem",
              }}
            >
              Contact No.
            </TableCell>
            {/* <TableCell 
              align="right" 
              sx={{ 
                color: '#FFFFFF',
                fontSize: '1.2rem'
              }}
            >
              Protein&nbsp;(g)
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
                sx={{
                  color: "#FFFFFF", // White text for empty state message
                  fontSize: "1.1rem", // Increased font size for the message
                }}
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem", // Increased font size for row data
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                  }}
                >
                  {row.calories}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                  }}
                >
                  {row.fat}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                  }}
                >
                  {row.carbs}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                  }}
                >
                  {row.protein}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DoctorBody
