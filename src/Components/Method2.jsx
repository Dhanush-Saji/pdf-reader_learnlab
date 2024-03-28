import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import PDFFile from '..//assets/test.pdf'

const Method2 = () => {
    const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }){
        setNumPages(numPages);
      }
  return (
    <div>
    <Document file={'https://rusanmed.s3.eu-north-1.amazonaws.com/uploads/pdf/Comparison+of+Nalbuphine+versus+fentanyl+as+intrathecal+adjuvant+to+bupivacaine+for+orthopedic+surgeries+RCT_2022.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
  </div>
  )
}

export default Method2