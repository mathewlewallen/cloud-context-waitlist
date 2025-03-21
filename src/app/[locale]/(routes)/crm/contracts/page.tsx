import React, { Suspense } from "react";
import Container from "../../components/ui/Container";
import SuspenseLoading from "@cc/components/loadings/suspense";
import { getAllCrmData } from "@cc/actions/crm/get-crm-data";
import { getContractsWithIncludes } from "@cc/actions/crm/get-contracts";
import ContractsView from "../components/ContractsView";

const ContractsPage = async () => {
  const crmData = await getAllCrmData();
  const contracts = await getContractsWithIncludes();
  return (
    <Container
      title="Contracts"
      description={"Everything you need to know about your contracts"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <ContractsView crmData={crmData} data={contracts} />
      </Suspense>
    </Container>
  );
};

export default ContractsPage;
