import {
  Button as FluentButton,
  makeStyles,
  mergeClasses,
} from '@fluentui/react-components';
import { brandThemeTokens } from '../ThemeProvider/theme';

const useStyles = makeStyles({
  buttonBrand: {
    height: brandThemeTokens.lineHeightBase600,
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
