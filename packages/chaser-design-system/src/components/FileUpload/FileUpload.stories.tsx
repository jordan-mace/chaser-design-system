import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import React from 'react';
import { FileUpload } from '.';

const meta = {
  title: 'Components/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Upload Documents',
    dropzoneText: 'Drag and drop files here, or click to browse',
    hint: 'Maximum file size: 10MB',
    onFileAdd: fn(),
    onFileRemove: fn(),
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    dropzoneText: 'Drop multiple files here',
    hint: 'You can upload multiple files at once',
    onFileAdd: fn(),
    onFileRemove: fn(),
  },
};

export const WithFiles: Story = {
  args: {
    label: 'Uploaded Files',
    files: [
      {
        id: '1',
        file: new File(['content'], 'document.pdf', { type: 'application/pdf' }),
        name: 'document.pdf',
        size: 1024000,
        progress: 100,
        status: 'success',
      },
      {
        id: '2',
        file: new File(['content'], 'image.png', { type: 'image/png' }),
        name: 'image.png',
        size: 2048000,
        progress: 50,
        status: 'uploading',
      },
    ],
    onFileRemove: fn(),
  },
};

export const AcceptSpecificTypes: Story = {
  args: {
    label: 'Upload Images',
    accept: 'image/*',
    dropzoneText: 'Drop images here (PNG, JPG, GIF)',
    hint: 'Only image files are accepted',
    onFileAdd: fn(),
  },
};

export const MaxFileSize: Story = {
  args: {
    label: 'Upload Small Files',
    maxFileSize: 1024 * 1024, // 1MB
    dropzoneText: 'Drop files here (max 1MB)',
    hint: 'Files larger than 1MB will be rejected',
    onFileAdd: fn(),
  },
};

export const MaxFiles: Story = {
  args: {
    label: 'Upload Limited Files',
    multiple: true,
    maxFiles: 3,
    dropzoneText: 'Drop up to 3 files',
    files: [
      {
        id: '1',
        file: new File(['content'], 'file1.pdf', { type: 'application/pdf' }),
        name: 'file1.pdf',
        size: 102400,
        progress: 100,
        status: 'success',
      },
    ],
    onFileAdd: fn(),
    onFileRemove: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Upload',
    disabled: true,
    files: [
      {
        id: '1',
        file: new File(['content'], 'readonly.pdf', { type: 'application/pdf' }),
        name: 'readonly.pdf',
        size: 512000,
        progress: 100,
        status: 'success',
      },
    ],
  },
};

export const WithoutProgress: Story = {
  args: {
    label: 'Simple Upload',
    showProgress: false,
    files: [
      {
        id: '1',
        file: new File(['content'], 'simple.pdf', { type: 'application/pdf' }),
        name: 'simple.pdf',
        size: 1024000,
        progress: 75,
        status: 'uploading',
      },
    ],
    onFileRemove: fn(),
  },
};
