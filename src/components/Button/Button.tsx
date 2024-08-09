import React from 'react';
import {
  Button as FluentButton,
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components';
import { brandThemeTokens } from '../ThemeProvider/theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}
  

const useStyles = makeStyles({
  buttonBrand: {
    height: brandThemeTokens.lineHeightBase600,
    borderRadius: brandThemeTokens.borderRadiusSmall,
    padding: `${brandThemeTokens.spacingVerticalXS} ${brandThemeTokens.spacingHorizontalL}`,
    fontSize: brandThemeTokens.fontSizeBase300,
  },
  buttonPrimary: {},
  buttonSecondary: {},
});

const Button = ({ variant, ...props }) => {
  const classes = useStyles();

  return (
    <FluentButton
      {...props}
      appearance={variant}
      className={mergeClasses(
        classes.buttonBrand,
        variant === 'primary' && classes.buttonPrimary,
        variant === 'secondary' && classes.buttonSecondary,
      )}
    >
      {props.children}
    </FluentButton>
  );
};

export default Button;
