import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image';

import styled from 'styled-components';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import { fetchApi } from '../../utils/fetchApi';
import { InterfaceImages } from '../../interface/images';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { Container } from '../../styled/globals';

interface Props {
    data: InterfaceImages;
}

const Section = styled.section`
    margin-top: 50px;
    display: flex;
    column-gap: 40px;
`

const Fila1 = styled.div`
    flex: 0.7;
`

const HeaderImage = styled.div`
    display: flex;
    justify-content: space-between;
`

const Icons = styled.div`
    display: flex;
    column-gap: 20px;
`

const IconDiv = styled.div`
    background: #222C40;
    color: #fff;
    border-radius: 20px;
    padding: 5px 15px;
    display: flex;
    width: 80px;
    column-gap: 7px;
    font-size: 14px;
`

const Tags = styled.p`
    font-size: 16px;
`

const InfoUser = styled.div`
    flex: 0.3;
`

const ImageContainerSize = styled.div`
    margin-top: 10px;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: start;
`

const User = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    column-gap: 24px;
    p{
        font-size: 21px;
    }
`

const ImageUser = styled.div`
    position: relative;
    width: 85px;
    height: 84px;
    border-radius: 50px;
    overflow: hidden;
`

const MediaPage: NextPage<Props> = ({ data: { hits } }) => {

    return (
        <LayoutPage title={ `DOTImages` }>
            <Container>
                <Section>
                    <Fila1>
                        <HeaderImage>
                            <Icons>
                                <IconDiv>
                                    <FontAwesomeIcon style={{ fontSize: "15px" }} icon={ faEye }/>
                                    <p>{ hits[0].views }</p>
                                </IconDiv>
                                <IconDiv>
                                    <FontAwesomeIcon style={{ fontSize: "15px" }} icon={ faThumbsUp }/>
                                    <p>{ hits[0].likes }</p>
                                </IconDiv>
                                <IconDiv>
                                    <FontAwesomeIcon style={{ fontSize: "15px" }} icon={ faArrowDown }/>
                                    <p>{ hits[0].likes }</p>
                                </IconDiv>
                            </Icons>
                            <Tags>
                                { hits[0].tags }
                            </Tags>
                        </HeaderImage>
                        <ImageContainerSize>
                            <img
                                style={{ width: "100%" }}
                                src={ hits[0].largeImageURL }
                                alt="Imágen"
                            />
                        </ImageContainerSize>
                    </Fila1>
                    <InfoUser>
                        <User>
                            <ImageUser>
                                <Image 
                                    src={ hits[0].userImageURL }
                                    layout="fill"
                                    objectFit='cover'
                                    alt="Imagen"
                                />
                            </ImageUser>
                            <p>{ hits[0].user }</p>
                        </User>
                    </InfoUser>
                </Section>
            </Container>
        </LayoutPage>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { media: [ type, id ] } =  params as { media: string[] };

    const data = await fetchApi( `id=${ id }` );

    return {
        props: {
            data
        }
    }
}

export default MediaPage