import { Suspense } from "react";

import SuspenseLoading from "@cc/components/loadings/suspense";

import Container from "../../components/ui/Container";
import ContactsView from "../components/ContactsView";
import { getContacts } from "@cc/actions/crm/get-contacts";
import { getAllCrmData } from "@cc/actions/crm/get-crm-data";

const AccountsPage = async () => {
  const crmData = await getAllCrmData();
  const contacts = await getContacts();
  return (
    <Container
      title="Contacts"
      description={"Everything you need to know about your contacts"}
    >
      <Suspense fallback={<SuspenseLoading />}>
        <ContactsView crmData={crmData} data={contacts} />
      </Suspense>
    </Container>
  );
};

export default AccountsPage;
