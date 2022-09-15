import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface FileListItemProps {
  file: File;
  onDelete: (file: File) => void;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const FileListItem = ({ file, onDelete }: FileListItemProps) => (
  <ListItem>
    <Chip label={file.name} icon={<UploadFileIcon />} variant="outlined" sx={{ maxWidth: 200 }} onDelete={() => onDelete(file)} />
  </ListItem>
);

export default FileListItem;
