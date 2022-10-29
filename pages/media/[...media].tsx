import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import Image from 'next/image';

import styled from 'styled-components';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import { fetchApi, fetchApiGiphy } from '../../utils/fetchApi';
import { InterfaceImages, InterfaceImage } from '../../interface/images';
import { LayoutPage } from '../../components/layout/LayoutPage';
import { Container } from '../../styled/globals';
import { IVideo, IVideos } from '../../interface/videos';
import { IGifsId } from '../../interface/gifs';

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

interface Props {
    data: InterfaceImages | IVideos | IGifsId;
    type: "image" | "videos" | "gifs";
}

const MediaPage: NextPage<Props> = ({ data, type }) => {

    console.log(data)
    return (
        <LayoutPage title={ `DOTImages` }>
            <Container>
                <Section>
                    <Fila1>
                        <HeaderImage>
                            {
                                type !== "gifs" &&
                                
                                <>
                                    <Icons>
                                        <IconDiv>
                                            <FontAwesomeIcon style={{ fontSize: "15px" }} icon={ faEye }/>
                                            <p>{ (data as InterfaceImages | IVideos).hits[0].views }</p>
                                        </IconDiv>
                                        <IconDiv>
                                            <FontAwesomeIcon style={{ fontSize: "15px" }} icon={ faThumbsUp }/>
                                            <p>{ (data as InterfaceImages | IVideos).hits[0].likes }</p>
                                        </IconDiv>
                                        <IconDiv>
                                            <FontAwesomeIcon style={{ fontSize: "15px" }} icon={ faArrowDown }/>
                                            <p>{ (data as InterfaceImages | IVideos).hits[0].likes }</p>
                                        </IconDiv>
                                    </Icons>
                                    <Tags>
                                        { (data as InterfaceImages | IVideos).hits[0].tags }
                                    </Tags>
                                </>

                            }
                        </HeaderImage>
                        <ImageContainerSize>
                            {
                                type === "image" ?
                                <img
                                    style={{ width: "100%" }}
                                    src={ (data as InterfaceImages).hits[0]?.pageURL && (data as InterfaceImages).hits[0].largeImageURL }
                                    alt="Imágen"
                                />

                                : type === "videos" ?
                                <video
                                    style={{ width: "100%" }}
                                    src={ (( data as IVideos ).hits[0] as IVideo)?.videos && ( data as IVideos ).hits[0].videos.medium.url }
                                    autoPlay
                                    loop
                                    muted
                                    controls
                                ></video>

                                : 

                                <video
                                    style={{
                                        width: "380px",
                                        objectFit: "contain"
                                    }}
                                    src={ ( data as IGifsId).data.images.hd.mp4 }
                                    loop 
                                    muted
                                    autoPlay={true}
                                ></video>
                            }
                        </ImageContainerSize>
                    </Fila1>
                    <InfoUser>
                        <User>
                            <ImageUser>
                                <Image 
                                    src={ type === "image" || type === "videos" ? ( data as InterfaceImages ).hits[0].userImageURL : ( data as IGifsId ).data.user.avatar_url }
                                    layout="fill"
                                    objectFit='cover'
                                    alt="Imagen"
                                />
                            </ImageUser>
                            <p>{ type === "image" || type === "videos" ? ( data as InterfaceImages ).hits[0].user : ( data as IGifsId ).data.user.username }</p>
                        </User>
                    </InfoUser>
                </Section>
            </Container>
        </LayoutPage>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { media: [ type, id ] } =  params as { media: string[] };
    let data;
    
    if ( type === "gifs" ){
        data = await fetchApiGiphy("", id);
    } else{
        data = await fetchApi( `id=${ id }`, type );
    }
    
    return {
        props: {
            data,
            type
        }
    }
}

export default MediaPage