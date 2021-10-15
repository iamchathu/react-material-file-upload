import UploadFileIcon from '@mui/icons-material/UploadFile';
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface FileListItemProps {
  name: string;
  onDelete: () => void;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const FileListItem = ({ name, onDelete }: FileListItemProps) => (
  <ListItem>
    <Chip label={name} icon={<UploadFileIcon />} variant="outlined" sx={{ maxWidth: 200 }} onDelete={onDelete} />
  </ListItem>
);

export default FileListItem;
