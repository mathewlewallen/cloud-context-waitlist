import React from "react";

import { getAccounts } from "@cc/actions/crm/get-accounts";
import { getContacts } from "@cc/actions/crm/get-contacts";
import { getAllCrmData } from "@cc/actions/crm/get-crm-data";
import { getLeads } from "@cc/actions/crm/get-leads";
import { getContractsWithIncludes } from "@cc/actions/crm/get-contracts";
import { getOpportunitiesFull } from "@cc/actions/crm/get-opportunities-with-includes";

import AccountsView from "./AccountsView";
import ContactsView from "./ContactsView";
import OpportunitiesView from "./OpportunitiesView";
import LeadsView from "./LeadsView";
import ContractsView from "./ContractsView";

const MainPageView = async () => {
  const crmData = await getAllCrmData();
  const accounts = await getAccounts();
  const contacts = await getContacts();
  const opportunities = await getOpportunitiesFull();
  const leads = await getLeads();
  const contracts = await getContractsWithIncludes();
  return (
    <>
      <AccountsView crmData={crmData} data={accounts} />
      <OpportunitiesView crmData={crmData} data={opportunities} />
      <ContactsView crmData={crmData} data={contacts} />
      <LeadsView crmData={crmData} data={leads} />
      <ContractsView crmData={crmData} data={contracts} />
    </>
  );
};

export default MainPageView;
