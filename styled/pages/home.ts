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

    @media (max-width: 720px){
        flex-direction: column;
        row-gap: 50px;
        width: 100%;
        h1{
          width: 100%;
          text-align: center;
        }
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
    
    @media (max-width: 720px){
        width: 90%;
        margin: 0;
    }
`

export const InputSearch = styled.input`
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 16px;

    @media (max-width: 720px){
        width: 100%;
    }
`

export const Subtitle = styled.div`
    margin-top: 35px;

    h3{
        font-size: 26px;
    }
`

export const DivBusqueda = styled.div`
    display: flex;
    align-items: center;
    column-gap: 15px;
`

export const Tags = styled.div`
    margin: 20px 0px;
    width: auto;
    padding: 10px 15px;
    border-radius: 20px;
    background: #DFE5F2;
    display: inline-block;
    display: flex;
    align-items: center;
    column-gap: 7px;

    p{
        font-size: 16px;
    }

    .icon{
        visibility: visible;
        cursor: pointer;
        
        &:hover{
            color: #F2EA77;
        }
    }
`

export const PaginationStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    margin: 15px 0;
`

export const Page = styled.div`
    cursor: pointer;
    background: ${ ({color}) => color };
    border-radius: 6px;
    padding: 10px;
    font-size: 16px;
    color: ${ ({color}) => color === "#222C40" ? "#fff" : "#000" };
    &:hover{
        background: #222C40;
        color: #fff
    }
`

export const NextPageStyle = styled.div`
    cursor: pointer;
    background: ${ ({color}) => color };
    border-radius: 50%;
    width: 30px;
    height: 30px;
    position: relative;
    &:hover{
        background: #222C40;
        color: #fff;
    }
`

export const IconPage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`