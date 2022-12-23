import { Viewer, Worker } from '@react-pdf-viewer/core'

type PdfReaderDocumentTypes = {
  base64FileUrl: string
}

export const PdfReaderComponent = ({
  base64FileUrl,
}: PdfReaderDocumentTypes) => {
  return (
    <div
      style={{
        height: '450px',
        border: '1px solid var(--gray)',
      }}
    >
      {base64FileUrl && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
          <Viewer fileUrl={base64FileUrl} />
        </Worker>
      )}
    </div>
  )
}
