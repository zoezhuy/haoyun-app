import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  as: Component = 'button',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const classNames = [
    styles.btn,
    styles[variant],
    size === 'lg' ? styles.sizeLg : styles.sizeMd,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </>
  );

  if (Component === 'a' && href) {
    const anchorProps: AnchorHTMLAttributes<HTMLAnchorElement> = {
      href,
      className: classNames,
      onClick: props.onClick as AnchorHTMLAttributes<HTMLAnchorElement>['onClick'],
    };
    return <a {...anchorProps}>{content}</a>;
  }

  return (
    <button type="button" className={classNames} {...props}>
      {content}
    </button>
  );
}
