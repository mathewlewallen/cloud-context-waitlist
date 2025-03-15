import React, { Suspense } from "react";

import AccountsView from "../components/AccountsView";
import Container from "../../components/ui/Container";
import SuspenseLoading from "@cc/components/loadings/suspense";
import { getAllCrmData } from "@cc/actions/crm/get-crm-data";
import { getAccounts } from "@cc/actions/crm/get-accounts";

const AccountsPage = async () => {
  const crmData = await getAllCrmData();
  const accounts = await getAccounts();

  return (
    <Container
      title="Accounts"
      description={"Everything you need to know about your accounts"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <AccountsView crmData={crmData} data={accounts} />
      </Suspense>
    </Container>
  );
};

export default AccountsPage;
