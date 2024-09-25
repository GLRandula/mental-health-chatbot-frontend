"use client";

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'; 
import axios from 'axios';
import API_CONFIG from "../API"; 

const DoctorBody = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]); 
  const countDoctors = 100;
  const startCount = 0;


  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}${API_CONFIG.getDoctors}/${startCount}/${countDoctors}`, {
          headers: {
            'Accept': 'application/json',
          },
        });
        setDoctors(response.data);
        setFilteredDoctors(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching doctor data:', error);
        setError('Failed to load doctors. Please try again later.');
        setLoading(false); 
      }
    };
    fetchDoctors();
  }, [startCount, countDoctors]); 

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchValue) ||
      doctor.specialty.toLowerCase().includes(searchValue) ||
      doctor.address.toLowerCase().includes(searchValue)
    );
    
    setFilteredDoctors(filtered);
  };

  return (
    <>
      {/* Search Bar */}
      <TextField
        label="Search Doctor"
          variant="standard"
          placeholder="Name"
          fullWidth
          margin="dense"
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            marginBottom: 8,
            backgroundColor: "#121212",
            color: "#FFFFFF",
            label: {
              color : "#FFFFFF",
              fontSize: "1.6rem",
            } 
          }}
      />

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#121212", 
          color: "#FFFFFF", 
        }}
      >
        <Table
          sx={{
            minWidth: 1400,
            color: "#FFFFFF", 
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#FFFFFF", 
                  fontSize: "1.9rem", 
                }}
              >
                Psychotherapist Name
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.9rem",
                }}
              >
                Address
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.9rem",
                }}
              >
                Speciality
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.9rem",
                }}
              >
                Contact No.
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={10}
                  align="center"
                  sx={{
                    color: "#FFFFFF", 
                    fontSize: "1.5rem", 
                  }}
                >
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{
                    color: "#FFFFFF", 
                    fontSize: "1.5rem", 
                  }}
                >
                  {error}
                </TableCell>
              </TableRow>
            ) : filteredDoctors.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  align="center"
                  sx={{
                    color: "#FFFFFF", 
                    fontSize: "1.5rem", 
                  }}
                >
                  No doctors found
                </TableCell>
              </TableRow>
            ) : (
              filteredDoctors.map((doctor) => (
                <TableRow
                  key={doctor.doctor_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.6rem", 
                    }}
                  >
                    {doctor.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.6rem",
                    }}
                  >
                    {doctor.address}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.6rem",
                    }}
                  >
                    {doctor.specialty}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "1.6rem",
                    }}
                  >
                    {doctor.contact}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DoctorBody;
