import styled from 'styled-components'

export const ImageContainer = styled.div`
    position: relative;
    width: ${ ({ auto }: { auto?: boolean }) => auto ? "100%" : "350px"  } ;
    cursor: pointer;
    transition: .3s all ease;
    overflow: hidden; 
    margin-bottom: 30px;
    overflow: hidden;

&:hover{
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
    transition: .3s all ease;
}

.zoom{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    column-gap: 10px;
    visibility: hidden;
    transition: .3s all ease-in;
    background: rgba(255, 255, 255, 0.57);
    padding: 5px;
    border-radius: 6px;
}

.headerImage{
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,0.5) 35%, rgba(4,0,0,0.3) 70%, transparent 100%); 
    overflow: hidden;
    z-index: 2;
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9;
}

&:hover .zoom{
    bottom: 25px;
    visibility: visible;
    transition: .3s all ease;
    color: #000
}

&:hover .headerImage{
    height: 50px;
    padding: 20px 15px 0 15px;
    overflow: visible;
}
.icono{
    font-size: 16px;
}
`

export const Iconos = styled.div`
    display: flex;
    column-gap: 15px;
`

export const BtnIcono = styled.div`
    background: rgba(255, 255, 255, 0.57);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30px;
    height: 30px;
    font-size: 17px;
    color: #000;
    .icono {
        color: #F2EA77;
    }
`