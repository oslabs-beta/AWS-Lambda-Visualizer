import React from "react";
import { Box, Card, CardContent, Divider, Typography, CardHeader, Badge } from "@mui/material"



export default function MetricCard() {
  return (
    <>
    <Box container className="Active-Functions metricCard">
      <div className="metricContainer">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Active Functions</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
      </div>
    </Box>
    <Box container className="Total-Errors metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Total Errors</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
    </Box>
    <Box container className="Avg-Cost metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Avg Cost</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
    </Box>
    <Box container className="Avg-Duration metricCard">
      <div className="cardStats">
       <div className="statsNumber">61</div>
       <div className="cardPercentage">+5%</div>
       <div className="cardTitle">Avg Duration</div>
      </div>
      <div className="cardIcon">
        <div>+</div>
      </div>
    </Box>
    </>
  );
}
