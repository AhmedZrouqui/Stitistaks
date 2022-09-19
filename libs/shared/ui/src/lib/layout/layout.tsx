import styles from './layout.module.scss';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: React.ReactNode,
  styles?: string,
}

export function Layout(props: LayoutProps) {
  return (
    <div className={`max-w-screen-xl bg-none mx-auto ${props.styles}`}>
      {props.children}
    </div>
  );
}

export default Layout;
