import { Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useReactToPrint } from "react-to-print";

interface billfillporp {
  url: string;
}
export function FileBill({ url }: billfillporp) {
  const [, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const prt = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => prt.current,
  });
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  useEffect(() => {}, []);
  return (
    <>
      <div ref={prt}>
        <Document
          file={`${process.env.REACT_APP_BACKEND_URL}/PDF/` + url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <Button onClick={() => handlePrint()}>Print</Button>
    </>
  );
}
