import Heading from "@cc/components/ui/heading";
import { Separator } from "@cc/components/ui/separator";
import React from "react";
import Container from "../components/ui/Container";

type Props = {};

const CrmPage = (props: Props) => {
  return (
    <Container
      title="Employees"
      description={"Everything you need to know about Human Resources"}
    >
      <div>Module content here</div>
    </Container>
  );
};

export default CrmPage;
