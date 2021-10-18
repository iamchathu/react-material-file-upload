import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import FileUpload, { FileUploadProps } from '..';

export default {
  component: FileUpload,
  title: 'Component/FileUpload',
  argTypes: {},
} as Meta;

const Template: Story<FileUploadProps> = (args) => {
  const [files, setFiles] = useState<File[]>([]);
  return <FileUpload {...args} value={files} onChange={setFiles} />;
};

export const Basic = Template.bind({});
export const ImageUpload = Template.bind({});
export const Disabled = Template.bind({});
export const Custom = Template.bind({});

Basic.args = {
  multiple: true,
  maxSize: 7340032,
};

ImageUpload.args = {
  accept: 'image/*',
  ...Basic.args,
};

Disabled.args = {
  disabled: true,
};

Custom.args = {
  ...Basic.args,
  title: 'Select files or drag them',
  buttonText: 'Upload files',
  buttonProps: {
    variant: 'outlined',
  },
};
