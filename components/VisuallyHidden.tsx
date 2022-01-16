import styles from "components/VisuallyHidden.module.css";

interface Props {
  children: React.ReactNode;
  isHidden?: boolean;
}

export function VisuallyHidden({ isHidden = true, children, ...props }: Props) {
  return isHidden ? (
    <div className={styles.visuallyHidden} {...props}>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}
