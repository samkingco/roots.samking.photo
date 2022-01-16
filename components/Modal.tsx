import React from "react";
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from "@reach/dialog";
import styles from "components/Modal.module.css";

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
      allowPinchZoom={true}
    >
      <ReachDialogContent className={styles.content} aria-label={a11yLabel}>
        {children}
      </ReachDialogContent>
    </ReachDialogOverlay>
  );
}
