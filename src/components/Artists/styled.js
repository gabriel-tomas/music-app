import styled from 'styled-components';
import colors from '../../config/colors';
import fontSizes from '../../config/fontSizes';

export const ContainerArtists = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: .7rem;

  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const ContainerArtist = styled.div`
  background-color: ${colors.cardColor};
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color: transparent;
    transition: .2s width, .2s height ;


    @media screen and (min-width: 1200px) {
      width: 155px;
      height: 155px;
    }

    @media screen and (max-width: 1440px) {
      width: 170px;
      height: 170px;
    }

    @media screen and (max-width: 1350px) {
      width: 155px;
      height: 155px;
    }

    @media screen and (max-width: 1043px) {
      width: 140px;
      height: 140px;
    }

    @media screen and (max-width: 976px) {
      width: 130px;
      height: 130px;
    }

    @media screen and (max-width: 921px) {
      width: 168px;
      height: 168px;
    }

    @media screen and (max-width: 880px) {
      width: 158px;
      height: 158px;
    }

    @media screen and (max-width: 832px) {
      width: 150px;
      height: 150px;
    }

    @media screen and (max-width: 832px) {
      width: 140px;
      height: 140px;
    }

    @media screen and (max-width: 772px) {
      width: 130px;
      height: 130px;
    }

    @media screen and (max-width: 736px) {
      width: 128px;
      height: 128px;
    }

    @media screen and (max-width: 732px) {
      width: 170px;
      height: 170px;
    }

    @media screen and (max-width: 660px) {
      width: 150px;
      height: 150px;
    }

    @media screen and (max-width: 600px) {
      width: 130px;
      height: 130px;
    }

    @media screen and (max-width: 520px) {
      width: 175px;
      height: 175px;
    }

    @media screen and (max-width: 455px) {
      width: 160px;
      height: 160px;
    }

    @media screen and (max-width: 433px) {
      width: 140px;
      height: 140px;
    }

    @media screen and (max-width: 379px) {
      width: 130px;
      height: 130px;
    }

    @media screen and (max-width: 341px) {
      width: 200px;
      height: 200px;
    }

    @media screen and (max-width: 256px) {
      width: 170px;
      height: 170px;
    }

    @media screen and (max-width: 231px) {
      width: 140px;
      height: 140px;
    }

    @media screen and (max-width: 195px) {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 5px 5px rgba(0,0,0, 0.17);
    }
  }

  .container-info-bottom {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    width: 100%;

    .artist-name {
      font-size: ${fontSizes.fontSizeBase};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
      color: ${colors.text['950']};
    }

    .type {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${fontSizes.fontSizeBase};
      color: ${colors.text['950']};
    }
  }
`;
