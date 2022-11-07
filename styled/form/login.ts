import styled from "styled-components"

export const BackgroundForm = styled.div`
    background: #fff;
    padding: 40px 60px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    border-radius: 15px;
    box-shadow: 0px 0px 40px rgb(0 0 0 / 25%);

    h3{
        font-size: 28px;
        font-family: "Inter", sans-serif;
        font-weight: 400;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
`

export const CampoDiv = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-bottom: 45px;
`

export const Label = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 18px;
    color: #000;
    margin-left: 12px;
`

export const Input = styled.input`
    background: #222C40;
    border-radius: 50px;
    padding: 15px 20px;
    font-size: 16px;
    outline: none;
    width: 400px;
    color: #fff;
`

export const ButtonSubmit = styled.div`
    margin: 0 auto;
    background: #DFE5F2;
    border-radius: 50px;
    padding: 15px 45px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 185px;
    text-align: center;
`

export const TextLight = styled.p`
    font-size: 18px;
    color: #6A5B5B;
    font-family: "Inter", sans-serif;
    margin-top: 60px;
    cursor: pointer;
`

export const ButtonClose = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    &:hover{
        color: #F2EA77;
    }
`

export const Error = styled.p`
    margin-bottom: 20px;
    color: red;
    visibility: ${ ({ isError }: { isError: boolean }) => isError ? "visibility" : "hidden" };
`