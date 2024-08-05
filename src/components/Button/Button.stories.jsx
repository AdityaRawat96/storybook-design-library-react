// import styled from '@emotion/styled';

import { fn } from '@storybook/test';
import Button from './Button';
import { expect, userEvent, within } from '@storybook/test';

// import { Button } from './Button';

// const CustomButton = styled.button`
//   border: 1px solid green;
//   background: lightgreen;
//   color: rebeccapurple;
//   padding: 1em;
//   font-size: 1.2em;
// `;

// function ButtonWrapper(props) {
//   return <CustomButton {...props} />;
// }

// export default {
//   title: 'Design System/Button',
//   component: Button,
// };

// export const AllButtons = {
//   name: 'all buttons',
//   render: () => (
//     <>
//       <Button appearance='primary'>Primary</Button>
//       <Button appearance='secondary'>Secondary</Button>
//       <Button appearance='tertiary'>Tertiary</Button>
//       <Button appearance='outline'>Outline</Button>
//       <Button appearance='primaryOutline'>Outline primary</Button>
//       <Button appearance='secondaryOutline'>Outline secondary</Button>
//       <Button appearance='primary' isDisabled>
//         Disabled
//       </Button>
//       <br />
//       <Button appearance='primary' isLoading>
//         Primary
//       </Button>
//       <Button appearance='secondary' isLoading>
//         Secondary
//       </Button>
//       <Button appearance='tertiary' isLoading>
//         Tertiary
//       </Button>
//       <Button appearance='outline' isLoading>
//         Outline
//       </Button>
//       <Button appearance='outline' isLoading loadingText='Custom...'>
//         Outline
//       </Button>
//       <br />
//       <Button appearance='primary' size='small'>
//         Primary
//       </Button>
//       <Button appearance='secondary' size='small'>
//         Secondary
//       </Button>
//       <Button appearance='tertiary' size='small'>
//         Tertiary
//       </Button>
//       <Button appearance='outline' size='small'>
//         Outline
//       </Button>
//       <Button appearance='primary' isDisabled size='small'>
//         Disabled
//       </Button>
//     </>
//   ),
// };

// export const buttonWrapper = {
//   name: 'button wrapper',
//   render: () => (
//     <div>
//       <ButtonWrapper>Original Button Wrapper</ButtonWrapper>
//       <br />
//       <Button ButtonWrapper={ButtonWrapper} appearance='primary'>
//         Primary
//       </Button>
//       <Button ButtonWrapper={ButtonWrapper} appearance='secondary'>
//         Secondary
//       </Button>
//     </div>
//   ),
// };

// export const AnchorWrapper = {
//   name: 'anchor wrapper',
//   render: () => (
//     <div>
//       <Button appearance='primary' href='http://storybook.js.org'>
//         Primary
//       </Button>
//       <Button appearance='secondary' href='http://storybook.js.org'>
//         Secondary
//       </Button>
//     </div>
//   ),
// };

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
};

export default meta;

// export const PrimaryButton = {
//   name: 'Primary Button',
//   render: () => <Button appearance='primary'>Primary</Button>,
// };

export const PrimaryButton = {
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

export const SecondaryButton = {
  args: {
    children: 'Button',
  },
};
