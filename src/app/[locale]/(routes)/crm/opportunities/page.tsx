import { Suspense } from "react";

import SuspenseLoading from "@cc/components/loadings/suspense";

import Container from "../../components/ui/Container";
import OpportunitiesView from "../components/OpportunitiesView";
import { getAllCrmData } from "@cc/actions/crm/get-crm-data";
import { getOpportunitiesFull } from "@cc/actions/crm/get-opportunities-with-includes";

const AccountsPage = async () => {
  const crmData = await getAllCrmData();
  const opportunities = await getOpportunitiesFull();

  return (
    <Container
      title="Opportunities"
      description={"Everything you need to know about your opportinities"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <OpportunitiesView crmData={crmData} data={opportunities} />
      </Suspense>
    </Container>
  );
};

export default AccountsPage;
