import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@cc/lib/auth";

import { getInvoices } from "@cc/actions/invoice/get-invoices";
import { getAccountSettings } from "@cc/actions/invoice/get-account-settings";

import { columns } from "./data-table/columns";
import { InvoiceDataTable } from "./data-table/data-table";

import Container from "../components/ui/Container";

import ModalDropzone from "./components/modal-dropzone";
import { MyAccountSettingsForm } from "./components/MyAccountSettingsForm";

import { Button } from "@cc/components/ui/button";
import RightViewModal from "@cc/components/modals/right-view-modal";
import { MyAccount } from "@prisma/client";
import { getActiveUsers } from "@cc/actions/get-users";
import { getBoards } from "@cc/actions/projects/get-boards";
import NewTaskDialog from "./dialogs/NewTask";

import CronButton from "./components/cron-button";

const InvoicePage = async () => {
  const session = await getServerSession(authOptions);
  const invoices: any = await getInvoices();
  const myAccountSettings: MyAccount | null = await getAccountSettings();
  const users = await getActiveUsers();
  const boards = await getBoards(session?.user.id!);

  return (
    <Container
      title="Invoices"
      description={"Everything you need to know about invoices and TAX"}
    >
      <NewTaskDialog users={users} boards={boards} />
      <div className="flex justify-between py-5 w-full">
        <div className="flex space-x-2">
          <ModalDropzone buttonLabel="Upload pdf" />
          <Button asChild>
            <Link href={`/invoice/${session?.user.id}`}>My invoices</Link>
          </Button>
          <CronButton />
        </div>
        <div>
          <RightViewModal
            label="Settings"
            title="Your company settings"
            description="This data will be used as default values for your invoices. You can change them at any time. Very important is to set account email which will receive files for import to ERPs"
            width={"w-[900px]"}
          >
            <MyAccountSettingsForm initialData={myAccountSettings} />
          </RightViewModal>
        </div>
      </div>
      <div>
        <InvoiceDataTable data={invoices} columns={columns} />
      </div>
    </Container>
  );
};

export default InvoicePage;
