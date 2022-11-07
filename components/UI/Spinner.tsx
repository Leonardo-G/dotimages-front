import React from 'react'
import styled from 'styled-components'

const Loader = styled.div`
    width: 30px;
    height: 30px;
    border: 3px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;


  &:after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-bottom-color: #e8db21;
  }
  
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`
    
export const Spinner = () => {
    return (
        <Loader></Loader>
    )
}
