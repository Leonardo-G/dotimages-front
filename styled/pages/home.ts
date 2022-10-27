import styled from "styled-components";

export const PosInitial = styled.div`
    position: relative;
    height: 630px;
`

export const PosCenter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    display: flex;
    align-items: center;
    h1{
      width: 50%
    }
`

export const BarraBusqueda = styled.div`
    position: relative;
    margin-left: 50px;
    background: #222C40;
    width: 400px;
    padding: 10px 20px;
    border-radius: 50px;
    display: flex;
    column-gap: 20px;
`

export const InputSearch = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;
`