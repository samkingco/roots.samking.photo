import React from "react";
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from "@reach/dialog";
import styles from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  a11yLabel: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, a11yLabel, isOpen, onClose }: ModalProps) {
  return (
    <ReachDialogOverlay
      className={styles.overlay}
      isOpen={isOpen}
      onDismiss={onClose}
    >
      <ReachDialogContent className={styles.content} aria-label={a11yLabel}>
        <div>{children}</div>
      </ReachDialogContent>
    </ReachDialogOverlay>
  );
}
