import { Card, CardActionArea, CardContent, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Rupriken({ artikel, seite }) {
  return (
    <Link to={`/${seite}`}>
      <Card>
        <CardActionArea>
          <CardContent>
            <img
              width={300}
              src={artikel}
              style={{ objectFit: "cover" }}
              alt="images"
            ></img>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
