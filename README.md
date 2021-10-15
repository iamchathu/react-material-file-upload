# React Material File Upload

[React Dropzone][react-dropzone] based [Material UI][mui] file upload component for React.js. This is created for [Material UI][mui] v5 or later versions.
Written in Typescript. Library exports `commonjs` and `esm` modules.

[![npm](https://img.shields.io/npm/v/react-material-file-upload.svg)](https://www.npmjs.com/package/react-material-file-upload)
[![Known Vulnerabilities](https://snyk.io/test/github/iamchathu/react-material-file-upload/badge.svg)](https://snyk.io/test/github/iamchathu/react-material-file-upload)
[![Code Climate](https://codeclimate.com/github/iamchathu/react-material-file-upload/badges/gpa.svg)](https://codeclimate.com/github/iamchathu/react-material-file-upload)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1327fdb350f84fc7b3dded573c983892)](https://www.codacy.com/gh/iamchathu/react-material-file-upload/dashboard?utm_source=github.com&utm_medium=referral&utm_content=iamchathu/react-material-file-upload&utm_campaign=Badge_Grade)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/iamchathu/react-material-file-upload/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/iamchathu/react-material-file-upload.svg?style=social)](https://twitter.com/intent/tweet?text=Barcode+for+react&url=https%3A%2F%2Fgithub.com%2Fiamchathu%2F/react-material-file-upload)

## Install

```bash
yarn add react-material-file-upload
```

- Peer dependencies.

Library is depends on `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`. These are [Material UI][mui] dependencies. Please refer the [Material UI][mui] guide on configuring it.

## Example

```ts
import { useState } from 'react';
import FileUpload from 'react-material-file-upload';

const App = () => {
  const [files, setFiles] = useState<File[]>([]);
  return <FileUpload value={files} onChange={setFiles} />;
};
```

[![Edit react-material-file-upload](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-material-file-upload-t156i?fontsize=14&hidenavigation=1&theme=dark)

[react-dropzone]: https://react-dropzone.js.org/
[mui]: https://mui.com
