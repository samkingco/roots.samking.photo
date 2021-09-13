import clsx from "clsx";
import styles from "./TextButton.module.css";

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  showUnderline?: boolean;
}

export function TextButton({
  className,
  showUnderline = true,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        className,
        styles.textButton,
        showUnderline && styles.underlined
      )}
      {...props}
    />
  );
}
