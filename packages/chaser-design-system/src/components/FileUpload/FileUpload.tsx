import clsx from 'clsx';
import React, { useState, useRef, useCallback } from 'react';
import {
  fileUploadContainer,
  fileUploadDropzone,
  fileUploadDropzoneVariants,
  fileUploadLabel,
  fileUploadText,
  fileUploadHint,
  fileUploadInput,
  fileUploadList,
  fileUploadItem,
  fileUploadItemInfo,
  fileUploadItemName,
  fileUploadItemSize,
  fileUploadRemoveButton,
  fileUploadError,
  fileUploadIcon,
  fileUploadProgressBar,
  fileUploadProgressFill,
  fileUploadProgressFillVariants,
} from './styles.css';
import Box from '../Box';
import { type FileUploadProps, type FileUploadFile } from './FileUpload.types';

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const FileUpload = ({
  label,
  files = [],
  onFilesChange,
  onFileAdd,
  onFileRemove,
  accept,
  multiple = false,
  maxFileSize,
  maxFiles,
  disabled = false,
  dropzoneText = 'Drag and drop files here, or click to browse',
  hint,
  showProgress = true,
  className,
  ...props
}: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (maxFileSize && file.size > maxFileSize) {
      return `File size exceeds ${formatFileSize(maxFileSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(',').map((type) => type.trim());
      const isAccepted = acceptedTypes.some((type) => {
        if (type.includes('*')) {
          return file.type.startsWith(type.replace('/*', ''));
        }
        return file.type === type || file.name.endsWith(type);
      });
      if (!isAccepted) {
        return `File type not accepted. Allowed: ${accept}`;
      }
    }
    return null;
  };

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || disabled) return;

      const newFiles: File[] = [];
      const errors: string[] = [];

      Array.from(fileList).forEach((file) => {
        const validationError = validateFile(file);
        if (validationError) {
          errors.push(`${file.name}: ${validationError}`);
        } else {
          newFiles.push(file);
        }
      });

      if (maxFiles && files.length + newFiles.length > maxFiles) {
        errors.push(`Maximum ${maxFiles} files allowed`);
        newFiles.splice(maxFiles - files.length);
      }

      if (errors.length > 0) {
        setError(errors.join(', '));
      } else {
        setError(null);
      }

      if (newFiles.length > 0) {
        onFileAdd?.(newFiles);
      }
    },
    [disabled, files.length, maxFileSize, maxFiles, accept, onFileAdd],
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    e.target.value = '';
  };

  const handleRemove = (fileId: string) => {
    onFileRemove?.(fileId);
  };

  const getVariant = () => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (isDragOver) return 'dragOver';
    return 'default';
  };

  return (
    <Box className={clsx(fileUploadContainer, className)} {...props}>
      {label && (
        <Box as="label" className={fileUploadLabel}>
          {label}
        </Box>
      )}

      <Box
        as="div"
        className={clsx(
          fileUploadDropzone,
          fileUploadDropzoneVariants[getVariant()],
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
      >
        <Box className={fileUploadIcon} aria-hidden="true">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17,8 12,3 7,8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </Box>
        <Box as="p" className={fileUploadText}>
          {dropzoneText}
        </Box>
        {hint && (
          <Box as="p" className={fileUploadHint}>
            {hint}
          </Box>
        )}
        <Box
          as="input"
          ref={inputRef}
          type="file"
          className={fileUploadInput}
          onChange={handleInputChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          aria-label="File upload input"
        />
      </Box>

      {error && (
        <Box as="p" className={fileUploadError} role="alert">
          {error}
        </Box>
      )}

      {files.length > 0 && (
        <Box as="ul" className={fileUploadList} aria-label="Uploaded files">
          {files.map((file) => (
            <Box key={file.id} as="li" className={fileUploadItem}>
              <Box className={fileUploadItemInfo}>
                <Box as="p" className={fileUploadItemName} title={file.name}>
                  {file.name}
                </Box>
                <Box as="p" className={fileUploadItemSize}>
                  {formatFileSize(file.size)}
                  {file.status === 'uploading' &&
                    showProgress &&
                    ' • Uploading...'}
                  {file.status === 'success' && ' • Complete'}
                  {file.status === 'error' &&
                    file.errorMessage &&
                    ` • ${file.errorMessage}`}
                </Box>
                {showProgress && file.status === 'uploading' && (
                  <Box className={fileUploadProgressBar}>
                    <Box
                      className={clsx(
                        fileUploadProgressFill,
                        fileUploadProgressFillVariants[file.status],
                      )}
                      style={{ width: `${file.progress}%` }}
                    />
                  </Box>
                )}
              </Box>
              <Box
                as="button"
                className={fileUploadRemoveButton}
                onClick={() => handleRemove(file.id)}
                type="button"
                aria-label={`Remove ${file.name}`}
              >
                ×
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
