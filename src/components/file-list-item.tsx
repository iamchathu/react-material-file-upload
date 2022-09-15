import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Chip, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface LoadingFile extends File {
  isLoading?: boolean
}

export interface FileListItemProps {
  file: LoadingFile;
  onDelete: (file: LoadingFile) => void;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const FileListItem = ({ file, onDelete }: FileListItemProps) => (
  <ListItem>
    <Chip label={file.name} icon={!file.isLoading ? <CircularProgress size={20} /> : <UploadFileIcon />} variant="outlined" sx={{ maxWidth: 200 }} onDelete={() => onDelete(file)} />
  </ListItem>
);

export default FileListItem;
