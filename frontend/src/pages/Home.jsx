import React from "react";
import Container from "../components/Layout/Container";
import MoodForm from "../components/MoodForm";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      <Container>
        <div className="">
          <Link to="/create">Create mood</Link>
        </div>
        <div className="">List of moods</div>
      </Container>
    </div>
  );
}
