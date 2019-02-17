import React from 'react'
import styled from 'styled-components'
import { content } from '../../content/content'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  width: 200px;
  padding: 10px 20px 10px 20px;
  border: solid #ffffff 2px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Lato;
  background: #ffffff;
  color: #1f3238;
  font-size: 1em;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border: solid #d64527 2px;
    background: #d64527;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const ButtonLight = ({ handleClick, text = content.buttonText.default }) => {
  return <Button onClick={handleClick}>{text}</Button>
}

export default ButtonLight
