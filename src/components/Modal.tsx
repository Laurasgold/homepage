import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Portal from "./Portal"
import { useScrollFreeze } from "../hooks"
import Icon from "./Icon"

interface ModalAnimationProps {
  isActive: boolean
  maxWidth?: string
  children: ReactNode
  closeAction?: () => void
}

const ModalAnimation = ({
  isActive,
  children,
  maxWidth = `530px`,
  closeAction,
}: ModalAnimationProps) => {
  return (
    <Portal>
      <AnimatePresence>
        {isActive && (
          <Modal
            children={children}
            maxWidth={maxWidth}
            closeAction={closeAction}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </Portal>
  )
}

const Modal = ({
  isActive,
  children,
  maxWidth,
  closeAction,
}: ModalAnimationProps) => {
  useScrollFreeze()
  const pointerEvents = isActive ? `all` : `none`
  return (
    <>
      <ModalWrapper>
        <Transport
          maxWidth={maxWidth}
          exit={{ opacity: 0, y: -40 }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ModalContent style={{ pointerEvents }} data-testid="modal">
            {closeAction && (
              <CloseButton onClick={closeAction}>
                <Icon
                  name="close"
                  color="var(--white)"
                  style={{
                    width: "36px",
                    height: "36px",
                    marginBottom: "var(--halfMargin)",
                  }}
                />
              </CloseButton>
            )}
            <div>{children}</div>
          </ModalContent>
        </Transport>
      </ModalWrapper>
      <Background
        as={motion.div}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeAction || null}
      />
    </>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-y: scroll;
  padding: var(--basePadding);
  pointer-events: none;
  z-index: var(--highestLevel);
`

const ModalContent = styled.div`
  box-shadow: var(--elevation-5);
  > div {
    padding: 0;
    > *:first-child {
      margin-top: 0;
    }
    > *:last-child {
      margin-bottom: 0;
    }
  }
`

const CloseButton = styled.button`
  pointer-events: all;
  z-index: 1;
`

const Background = styled.div`
  background: rgba(2, 11, 14, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: all;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  cursor: pointer;
`

const Transport = styled(motion.div)`
  position: relative;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  min-width: 320px;
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
`

export default ModalAnimation
