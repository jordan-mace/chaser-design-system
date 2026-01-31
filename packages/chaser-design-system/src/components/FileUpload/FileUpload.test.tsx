import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-react';
import FileUpload from './FileUpload';
import React from 'react';

describe('FileUpload', () => {
  it('renders correctly in default state', async () => {
    const { container } = await render(
      <FileUpload label="Upload Files" dropzoneText="Drop files here or click to upload" />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with files list', async () => {
    const files = [
      { 
        id: '1', 
        file: new File(['content'], 'document.pdf', { type: 'application/pdf' }), 
        name: 'document.pdf', 
        size: 1024, 
        progress: 100, 
        status: 'success' as const 
      },
      { 
        id: '2', 
        file: new File(['content'], 'image.png', { type: 'image/png' }), 
        name: 'image.png', 
        size: 2048, 
        progress: 50, 
        status: 'uploading' as const 
      },
    ];
    
    const { container } = await render(
      <FileUpload label="Upload" files={files} />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders with hint text', async () => {
    const { container } = await render(
      <FileUpload 
        label="Upload Documents" 
        hint="Maximum file size: 10MB. Supported formats: PDF, PNG, JPG" 
      />
    );
    expect(container).toMatchScreenshot();
  });

  it('renders disabled state', async () => {
    const { container } = await render(
      <FileUpload label="Upload" disabled={true} />
    );
    expect(container).toMatchScreenshot();
  });
});
