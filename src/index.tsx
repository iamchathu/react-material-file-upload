import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import type { ButtonProps, TypographyProps } from '@mui/material';
import { Box, Button, FormControl, FormHelperText, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/system';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import FileListItem from './components/file-list-item';

export interface FileUploadProps extends Omit<DropzoneOptions, 'onDrop' | 'onDropAccepted'> {
  sx?: SxProps<Theme>;
  typographyProps?: TypographyProps;
  buttonProps?: Omit<ButtonProps, 'onClick'>;
  title?: string;
  buttonText?: string;
  value: File[];
  onChange: (files: File[]) => void;
  onDelete?: (file: File) => boolean
}

const FileUpload = ({
  value,
  onChange,
  sx,
  title,
  buttonText,
  typographyProps,
  buttonProps,
  disabled,
  maxSize,
  onDelete = () => true,
  ...options
}: FileUploadProps) => {
  const { fileRejections, getRootProps, getInputProps, open } = useDropzone({
    ...options,
    disabled,
    maxSize,
    onDropAccepted: onChange,
    noClick: true,
    noKeyboard: true,
  });

  const isFileTooLarge = maxSize !== undefined && fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

  const remove = (index: number) => {
    const files = [...value];
    files.splice(index, 1);
    onChange(files);
  };

  const files = value?.map((file, i) => <FileListItem key={file.name} file={file} onDelete={(fileToDelete) => onDelete(fileToDelete) && remove(i)} />);

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: 1,
        borderRadius: 1,
        borderColor: 'rgba(0, 0, 0, 0.23)',
        paddingY: 3,
        paddingX: 1,
        '&:hover': {
          borderColor: disabled ? undefined : 'text.primary',
        },
        '&:focus-within': {
          borderColor: 'primary.main',
          borderWidth: 2,
        },
        ...sx,
      }}>
      <FormControl
        error={isFileTooLarge}
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <input {...getInputProps()} />
        <CloudUploadIcon sx={{ fontSize: 40 }} color={disabled ? 'disabled' : 'primary'} />
        <Typography variant="caption" textAlign="center" sx={{ paddingY: 1 }} {...typographyProps}>
          {title}
        </Typography>
        <Button variant="contained" onClick={open} disabled={disabled} sx={{ marginBottom: 1 }} {...buttonProps}>
          {buttonText}
        </Button>
        <FormHelperText> {fileRejections[0]?.errors[0]?.message} </FormHelperText>
      </FormControl>
      <Box
        component="ul"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          p: 0.5,
          m: 0,
        }}>
        {files}
      </Box>
    </Box>
  );
};

FileUpload.defaultProps = {
  title: "Drag 'n' drop some files here, or click to select files",
  buttonText: 'Upload',
};

export default FileUpload;
