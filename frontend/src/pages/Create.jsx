import React from "react";
import Container from "../components/Layout/Container";
import MoodForm from "../components/MoodForm";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <IoArrowBack onClick={() => navigate("/")} />
        <h2 className="text-3xl font-bold">How is your mood?</h2>
        <MoodForm />
      </Container>
    </div>
  );
}
