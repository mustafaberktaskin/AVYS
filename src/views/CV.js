import React, { Fragment, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import { DownloadCloud } from 'react-feather';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import { FileText } from 'react-feather';
import ExtensionsHeader from '@components/extensions-header';

import { Buffer } from 'buffer';

import '@styles/react/libs/file-uploader/file-uploader.scss';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV = () => {
  const [tableData, setTableData] = useState(null);
  const [name, setName] = useState('');
  const [numPages, setNumPages] = useState(null);

  const getTableData = (file) => {
    setTableData(file);
    setName(file.name);
    toast.success(`Successfully uploaded ${file.name}`);
  };

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file && file.name.endsWith('.pdf')) {
        getTableData(file);
        // Get number of pages in the PDF file
        const reader = new FileReader();
        reader.onload = function (event) {
          const buffer = event.target.result;
          pdfjs.getDocument({ data: new Uint8Array(buffer) }).promise.then((pdf) => {
            setNumPages(pdf.numPages);
          });
        };
        reader.readAsArrayBuffer(file);
      } else {
        toast.error(
          () => (
            <p className='mb-0'>
              You can only upload <span className='fw-bolder'>.pdf</span> files!.
            </p>
          ),
          {
            style: {
              minWidth: '380px',
            },
          }
        );
      }
    },
  });

  const renderPDFContent = () => {
    if (tableData) {
      return (
        <Document file={tableData}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <ExtensionsHeader title='PDF' />
      <Row className='import-component'>
        <Col sm='12'>
          <Card>
            <CardBody>
              <Row>
                <Col sm='12'>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div className='d-flex align-items-center justify-content-center flex-column'>
                      <DownloadCloud size={64} />
                      <h5>Drop Files here or click to upload</h5>
                      <p className='text-secondary'>
                        Drop PDF files here or click{' '}
                        <a href='/' onClick={(e) => e.preventDefault()}>
                          browse
                        </a>{' '}
                        through your machine
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {tableData && (
          <Col sm='12'>
            <Card className='justify-content-center align-items-center'>
              <CardHeader>
                <CardTitle tag='h4'>{name}</CardTitle>
              </CardHeader>
              <CardBody>{renderPDFContent()}</CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </Fragment>
  );
};

export default CV;
