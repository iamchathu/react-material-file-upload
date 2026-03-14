import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FileUpload, type FileUploadProps } from '../index.js';

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  title: 'Component/FileUpload',
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  return <FileUpload {...args} value={files} onChange={setFiles} />;
};

export const Basic: Story = {
  render: Template,
  args: {
    multiple: true,
    maxSize: 7340032,
  },
};

export const ImageUpload: Story = {
  render: Template,
  args: {
    accept: {
      'image/*': [],
    },
    multiple: true,
    maxSize: 7340032,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const Custom: Story = {
  render: Template,
  args: {
    multiple: true,
    maxSize: 7340032,
    title: 'Select files or drag them',
    buttonText: 'Upload files',
    buttonProps: {
      variant: 'outlined',
    },
  },
};
