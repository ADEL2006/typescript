// 173page
import { Title, Subtitle, Div, Icon } from "../components";
import React from "react";

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      {/* <Div className="text-center text-blue-100 bg-blue-600" style={{ height: "6rem" }}> */}
      <Div className="text-center text-blue-100 bg-blue-600">
        <Icon name="home" className="text-3xl" />
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  );
}
