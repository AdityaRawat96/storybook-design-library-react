import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';
import { expect, userEvent, within } from '@storybook/test';


const meta = {
  title: 'Design System/Button',
  component: Button,
  parmaeters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    expect(canvas.getByRole('button')).toHaveFocus();
  },
};

export const SecondaryButton: Story = {
  args: {
    children: 'Button',
  },
};
