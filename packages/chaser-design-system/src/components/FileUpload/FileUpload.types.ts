import React from 'react';
import { Sprinkles } from '../../styles/sprinkles.css';

export type FileUploadStatus = 'uploading' | 'success' | 'error';

export interface FileUploadFile {
  id: string;
  file: File;
  name: string;
  size: number;
  progress: number;
  status: FileUploadStatus;
  errorMessage?: string;
}

export type FileUploadProps = React.HTMLAttributes<HTMLDivElement> &
  Sprinkles & {
    label?: string;
    files?: FileUploadFile[];
    onFilesChange?: (files: FileUploadFile[]) => void;
    onFileAdd?: (files: File[]) => void;
    onFileRemove?: (fileId: string) => void;
    accept?: string;
    multiple?: boolean;
    maxFileSize?: number;
    maxFiles?: number;
    disabled?: boolean;
    dropzoneText?: string;
    hint?: string;
    showProgress?: boolean;
  };
