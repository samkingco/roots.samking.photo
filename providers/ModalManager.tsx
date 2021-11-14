import { createContext, useCallback, useState } from "react";
import Web3ConnectModal from "components/Web3ConnectModal";
import MintModal from "components/MintModal";
import { Modal } from "components/Modal";

export enum ModalType {
  NONE,
  WEB3_CONNECT,
}

const modalA11yLabel: Record<ModalType, string> = {
  [ModalType.NONE]: "Empty modal",
  [ModalType.WEB3_CONNECT]: "Connect to Web3",
};

export interface ModalContext {
  modalType: ModalType;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
}

export const ModalManagerContext = createContext<ModalContext>(
  {} as ModalContext
);

export default function ModalManager({ children }: { children: any }) {
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);

  const openModal = useCallback((mt: ModalType) => {
    setModalType(mt);
  }, []);

  const closeModal = useCallback(() => {
    setModalType(ModalType.NONE);
  }, []);

  const modalMap: Record<ModalType, JSX.Element | null> = {
    [ModalType.NONE]: null,
    [ModalType.WEB3_CONNECT]: <Web3ConnectModal />,
  };

  return (
    <ModalManagerContext.Provider
      value={{
        modalType,
        openModal,
        closeModal,
      }}
    >
      <Modal
        isOpen={modalType !== ModalType.NONE}
        onClose={closeModal}
        a11yLabel={modalA11yLabel[modalType]}
      >
        {modalMap[modalType]}
      </Modal>
      {children}
    </ModalManagerContext.Provider>
  );
}
