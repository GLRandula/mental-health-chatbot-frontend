// components/PdfViewer.jsx
"use client";

import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styles from './Pdf.module.css'; // Import the CSS module

const PdfViewer = ({ url }) => {
  const [pdfFile, setPdfFile] = useState(url);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPdfFile(e.target.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const clearPdf = () => {
    setPdfFile(null);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropzoneClass = windowWidth >= 500 ? styles.pdfDrop : styles.pdfDropMob;
  const dropzoneText = windowWidth >= 500 ? "Click here to select a PDF" : "View Pdf";

  return (
    <div style={{ display: 'flex' }}>
      <div {...getRootProps()} className={dropzoneClass}> {/* Apply the style */}
        <input {...getInputProps()} />
        <div>{dropzoneText}</div>
      </div>
      {pdfFile && (
        <button
          onClick={clearPdf}
          className={styles.clearButton}
        >
          Clear
        </button>
      )}

      {pdfFile && (
        <div className={styles.pdfViewer}>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer
              fileUrl={pdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
