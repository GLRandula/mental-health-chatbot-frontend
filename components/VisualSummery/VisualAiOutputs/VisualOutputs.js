// VisualOutputs.js
"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import sal from "sal.js";
import "./Outputs.css";
import VisualTopBar from "./VisualTopBar";
import VisualManageomBar from "./VisualManageomBar";
import Enlarge from "./Enlarge";

import { clearGraphAndSummaryHistory as clearGraphs, removeSpecificChat } from "@/app/store/Slices/graphAndSummarySlice";

const MermaidRenderer = dynamic(
  () => import("../../MermaidRenderer/MermaidRenderer"),
  {
    ssr: false,
  }
);

const VisualOutputs = () => {
  const graphHistory = useSelector(
    (state) => state.graph.graphAndSummaryHistory
  );

  useEffect(() => {
    sal();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false); //enlarge modal
  const [modalContent, setModalContent] = useState(null); //enlarge modal
  const dispatch = useDispatch();

  const openModal = (content) => {  //enlarge modal
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {  //enlarge modal
    setModalIsOpen(false);
    setModalContent(null);
  };

  const clearHistory = () => {
    dispatch(clearGraphs());
  };

  const handleDeleteChat = (index) => {
    dispatch(removeSpecificChat(index));
  };

  return (
    <>
      <VisualManageomBar
        clearFullHistory={() => clearHistory()}
      />
      <div style={{ padding: "30px 0 100px 0" }}>
        <div className="graph-container">
          {graphHistory.map((graph, index) => (
            <div key={graph.date_created}> {/* Ensure each graph has a unique id */}
              <VisualTopBar
                // time={graph.date_created.split('T')[0]}
                type={
                  graph.type === "graph"
                    ? "Graph"
                    : graph.type === "summary"
                      ? "Summary"
                      : "Graph and Summary"
                }
                handleDelete={() => handleDeleteChat(index)}
              />

              <div className="graph-wrapper" onClick={() => openModal(graph)}>
                {graph.type === "summary" ? (
                  <div className="out-text">{graph.response}</div>
                ) : graph.type === "graph" ? (
                  <MermaidRenderer key={graph.date_created} chart={graph.response} />
                ) : graph.type === "graphAndSummary" ? (
                  <>
                    <div className="out-text">{graph.response.summary}</div>
                    <MermaidRenderer key={graph.date_created} chart={graph.response.graph_notation} />
                  </>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>


     
      <Enlarge isOpen={modalIsOpen} onClose={closeModal}>
        {modalContent &&
        (modalContent.type === "summary" ? (
          <div className="out-text">{modalContent.response}</div>
          ) : modalContent.type === "graph" ? (
        <MermaidRenderer chart={modalContent.response} />
        ) : (
        modalContent.type === "graphAndSummary" && (
        <>
          <div className="out-text">{modalContent.response.summary}</div>
          <MermaidRenderer chart={modalContent.response.graph_notation} />
        </>
      )
      ))}
    </Enlarge>

    </>
  );
};

export default VisualOutputs;
