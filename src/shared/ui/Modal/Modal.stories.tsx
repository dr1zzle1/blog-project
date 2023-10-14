import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Button',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus perferendis natus eos quod nemo aspernatur et! Excepturi voluptate molestias nihil voluptatum illum. Animi sed placeat quae facilis quia quasi.',
    },
};
export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus perferendis natus eos quod nemo aspernatur et! Excepturi voluptate molestias nihil voluptatum illum. Animi sed placeat quae facilis quia quasi.',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
