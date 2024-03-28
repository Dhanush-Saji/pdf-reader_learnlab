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
    <Document file={PDFFile} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
  </div>
  )
}

export default Method2