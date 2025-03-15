"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import UploadFileModal from "@cc/components/modals/upload-file-modal";
import { Button } from "@cc/components/ui/button";
import { FileUploaderDropzone } from "@cc/components/ui/file-uploader-dropzone";

type Props = {
  buttonLabel: string;
  fileType:
    | "pdfUploader"
    | "imageUploader"
    | "docUploader"
    | "profilePhotoUploader";
};

const ModalDropzone = ({ buttonLabel, fileType }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => setOpen(true)}>{buttonLabel}</Button>
      <UploadFileModal
        isOpen={open}
        onClose={() => {
          setOpen(false);
          router.refresh();
        }}
      >
        <FileUploaderDropzone uploader={fileType} />
      </UploadFileModal>
    </div>
  );
};

export default ModalDropzone;
