import React from "react";
import Container from "../../components/ui/Container";
import { getSaleStages } from "@cc/actions/crm/get-sales-stage";
import CRMKanban from "./_components/CRMKanban";
import { getOpportunities } from "@cc/actions/crm/get-opportunities";
import { getAllCrmData } from "@cc/actions/crm/get-crm-data";

const CrmDashboardPage = async () => {
  const salesStages = await getSaleStages();
  const opportunities = await getOpportunities();
  const crmData = await getAllCrmData();

  return (
    <Container
      title="CRM Dashboard"
      description="In development. After this compoment is finished, there will be a optimistic update of the data."
    >
      <div className="w-full h-full  overflow-hidden">
        <CRMKanban
          salesStages={salesStages}
          opportunities={opportunities}
          crmData={crmData}
        />
      </div>

      {/*     <CRMKanbanServer
        salesStages={salesStages}
        opportunities={opportunities}
      /> */}
    </Container>
  );
};

export default CrmDashboardPage;
