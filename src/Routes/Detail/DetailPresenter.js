/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousClass": true}] */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";

const Container = styled.div`
 height: calc(100vh);
 position: relative;
 width: 100%;
 margin-top: 5px;
 padding: 50px;
`;

const Backdrop = styled.div`
 background-image: url(${props => props.bgImage});
 position: absolute;
 width: 100%;
 height: 100%;
 background-size: cover;
 top: 0;
 left: 0;
 opacity: 0.5;
 filter: blur(3px);
 background-position: center center;
 z-index: 0;
`
const Content = styled.div`
 display: flex;
 width: 100%;
 height: 100%;
 z-index: 1;
 position: relative;
`;

const Cover = styled.div`
 width: 30%;
 height: 100%;
 background-image: url(${props => props.bgImage});
 background-size: cover;
 border-radius: 5px;
`;

const Data = styled.div`
 width: 70%;
 height: 100%;
 margin: 0 20px;
`;

const Title = styled.h3`
 font-size: 32px;
`;

const TextContainer = styled.div`
 margin: 20px 0;
`;

const Text = styled.span`

`;

const Divider = styled.span`
 margin: 0 10px;
`;

const OverView = styled.div`
 font-size: 12px;
 opacity: 0.5;
 line-height: 1.5; 
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const Video = styled.div`
  width: 100%;
  height: 360;
`;


const DetailPresenter = ({result, error, loading}) => 
   loading ? (
    <>
    <Helmet><title>Loading | Hunlix</title></Helmet>
   <Loader/>
   </>
   ) : (<>
   <Helmet><title>{result.original_name ? result.original_title : result.original_name}</title></Helmet>
    <Container>
        <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover 
         bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Data>
          <Title>{result.original_title ? result.original_title : result.original_name}</Title>
          <TextContainer>
            <Text>{result.release_date ? result.release_date.substring(0, 4) : result.first_air_date.substring(0, 4)}</Text>
            <Divider>•</Divider>
            <Text>{result.runtime ? result.runtime: result.episode_run_time} min</Text>
            <Divider>•</Divider>
            <Text>{result.genres && result.genres.map((genre, index) => index === result.genres.length -1 ? genre.name : `${genre.name}/` )}</Text>
          </TextContainer>
          <OverView>{result.overview}</OverView>
          <VideoContainer>
             <Video>{result.video && `www.youtube.com/watch=v${result.results.key}`}</Video>
          </VideoContainer>
        </Data>
      </Content>
    </Container>
    </>
)


DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresenter;