import UploadFileIcon from "@mui/icons-material/UploadFile"
import { Box, Chip, CircularProgress } from "@mui/material"
import { styled } from "@mui/material/styles"

/**
 * Extension of `File` providing optional attributes to display and control a loading file.
 *
 * @param abortController Allows us to control the up/downloading request for this file. See https://developer.mozilla.org/en-US/docs/Web/API/AbortController.
 * @param isLoading If true, the FileListItem shows a spinner to indicate that the file is loading. Spinner details: https://mui.com/material-ui/react-progress/.
 * @param progress If set, we can control the spinner's displayed progress. Should be between `0` and `100`.
 */
export interface LoadingFile extends File {
  abortController?: AbortController
  isLoading?: boolean
  progress?: number
}

export interface FileListItemProps {
  file: LoadingFile
  onDelete: (file: LoadingFile) => void
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

const FileListItem = ({ file, onDelete }: FileListItemProps) => (
    <ListItem>
      <Chip
        label={file.name}
        icon={
          file.isLoading ? (
            <Box>
              <CircularProgress
                variant={file.progress === undefined ? "indeterminate" : "determinate"}
                size={20}
                value={file.progress}
                color="inherit"
                sx={{ mr: 0.5 }}
              />
            </Box>
          ) : (
            <UploadFileIcon />
          )
        }
        variant="outlined"
        sx={{ maxWidth: 200 }}
        onDelete={() => onDelete(file)}
      />
    </ListItem>
  )

export default FileListItem
