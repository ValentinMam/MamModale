/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { styled } from "styled-components"

const StyledOverlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  backdrop-filter: blur(5px);
`

const StyledModale = styled.div`position: relative;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: -25px;
  right: -25px;
  box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.5),
    inset 5px 5px 5px rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  &:hover {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.5),
      inset -5px -5px 5px rgba(255, 255, 255, 0.5);
  }
`

const StyledText = styled.h1`
  text-align: center;
  user-select: none;
`
/**
 * Fenêtre modale
 * @param {function} setIsOpen - Hook gérant l'affichage de la modale
 * @param {string} buttonColor - Couleur du bouton de fermeture
 * @param {string} modalWidth - largeur de la fenètre modale
 * @param {string} modalHeight - Hauteur de la fenêtre modale
 * @param {string} textColor - Couleur du texte de la modale
 * @param {string} modalBG - Couleur du fond de la modale
 * @param {string} textSize - Taille du texte de la modale
 * @returns component
 */
function Modal(props) {
  /**
   * Valeurs par défaut
   */
  const [buttonColor, setButtonColor] = useState("#f00")
  const [modalWidth, setModalWidth] = useState("50%")
  const [modalHeight, setModalHeight] = useState("200px")
  const [textColor, setTextColor] = useState("#000")
  const [modalBG, setModalBG] = useState("#fff")
  const [textSize, setTextSize] = useState("3rem")

  useEffect(() => {
    /** Ajout de l'événement "keydown" pour gestion de la touche "Echap" */
    document.addEventListener("keydown", detectKeyDown, true)

    if (props.buttonColor) {
      setButtonColor(props.buttonColor)
    }
    if (props.modalWidth) {
      setModalWidth(props.modalWidth)
    }
    if (props.modalHeight) {
      if (props.modalHeight.endsWith("px")) {
        setModalHeight(props.modalHeight)
      }
    }
    if (props.textColor) {
      setTextColor(props.textColor)
    }
    if (props.modalBG) {
      setModalBG(props.modalBG)
    }
    if (props.textSize) {
      setTextSize(props.textSize)
    }
  }, [])

  /**
   * Fermeture de la modale sur "Echap"
   * @param {event} e
   */
  const detectKeyDown = (e) => {
    if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
      props.setIsOpen(false)
      /** Retrait de l'event "keydown" */
      document.removeEventListener("keydown", detectKeyDown, true)
    }
  }

  return (
    <StyledOverlay id="overlay" onClick={() => props.setIsOpen(false)}>
      <StyledModale
        id="modale"
        style={{
          width: modalWidth,
          height: modalHeight,
          backgroundColor: modalBG,
        }}
      >
        <StyledText
          id="modalText"
          style={{
            lineHeight: modalHeight,
            color: textColor,
            fontSize: textSize,
          }}
        >
          {props.text ? props.text : "Texte par défaut"}
        </StyledText>
        <StyledButton
          id="bouton"
          onClick={() => props.setIsOpen(false)}
          style={{
            backgroundColor: buttonColor,
          }}
        >
          X
        </StyledButton>
      </StyledModale>
    </StyledOverlay>
  )
}

export default Modal
