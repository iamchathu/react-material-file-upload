import { Meta, Story } from '@storybook/react';
import React from 'react';
import FileUpload, { FileUploadProps } from '..';

export default {
  component: FileUpload,
  title: 'Component/FileUpload',
  argTypes: {
    onDropAccepted: { action: 'onDropAccepted' },
  },
} as Meta;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args} />;

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
};
