import styled from "styled-components";
import Grid from "../../../Atoms/Grid";
import DivImage from "../../../Atoms/DivImage";
import Text from "../../../Atoms/Text";
import InstImage1 from "assets/img/instagram/1.png";
import InstImage2 from "assets/img/instagram/2.png";
import InstImage3 from "assets/img/instagram/3.png";
import InstImage4 from "assets/img/instagram/4.png";
import InstImage5 from "assets/img/instagram/5.png";
import InstImage6 from "assets/img/instagram/6.png";
import FavoriteIcon from "../../../Atoms/Icons/FavoriteIcon";
import BlackInstIcon from "components/Atoms/Icons/BlackInstIcon";
import WhiteInstIcon from "components/Atoms/Icons/WhiteInstIcon";

const InstIcon = styled.div`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 33.33px;
  left: 33.33px;
`;

const Instagram = () => {
  return (
    <Grid padding="80px 0" margin="20px 0 0 0">
      <Text
        color="#191919"
        fontFamily="Gilroy"
        fontWeight="400"
        fontSize="32px"
        textAlign="center"
        textTransform="uppercase"
      >
        Наш инстаграм
      </Text>
      <Grid
        name="Gallery"
        margin="64px 0 0 0"
        columns="1fr 1fr"
        gap="2px"
        height="612px !important"
      >
        <Grid name="Left" columns="2fr 1fr" gap="2px">
          <DivImage backgroundSize="cover" src={InstImage1}>
            <InstIcon>
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0002 15.6667C13.5775 15.6667 15.6668 13.5774 15.6668 11C15.6668 8.42271 13.5775 6.33337 11.0002 6.33337C8.42283 6.33337 6.3335 8.42271 6.3335 11C6.3335 13.5774 8.42283 15.6667 11.0002 15.6667ZM11.0002 14.3334C12.8411 14.3334 14.3335 12.841 14.3335 11C14.3335 9.15909 12.8411 7.66671 11.0002 7.66671C9.15921 7.66671 7.66683 9.15909 7.66683 11C7.66683 12.841 9.15921 14.3334 11.0002 14.3334Z"
                  fill="#191919"
                />
                <path
                  d="M17.0002 6.33337C17.3684 6.33337 17.6668 6.0349 17.6668 5.66671C17.6668 5.29852 17.3684 5.00004 17.0002 5.00004C16.632 5.00004 16.3335 5.29852 16.3335 5.66671C16.3335 6.0349 16.632 6.33337 17.0002 6.33337Z"
                  fill="#191919"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3335 0.333374C3.01979 0.333374 0.333496 3.01967 0.333496 6.33337V15.6667C0.333496 18.9804 3.01979 21.6667 6.3335 21.6667H15.6668C18.9805 21.6667 21.6668 18.9804 21.6668 15.6667V6.33337C21.6668 3.01967 18.9805 0.333374 15.6668 0.333374H6.3335ZM15.6668 1.66671H6.3335C3.75617 1.66671 1.66683 3.75605 1.66683 6.33337V15.6667C1.66683 18.244 3.75617 20.3334 6.3335 20.3334H15.6668C18.2442 20.3334 20.3335 18.244 20.3335 15.6667V6.33337C20.3335 3.75605 18.2442 1.66671 15.6668 1.66671Z"
                  fill="#191919"
                />
              </svg>
            </InstIcon>
          </DivImage>
          <Grid gap="2px">
            <DivImage backgroundSize="cover" src={InstImage2}>
              <InstIcon>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0002 15.6667C13.5775 15.6667 15.6668 13.5774 15.6668 11C15.6668 8.42271 13.5775 6.33337 11.0002 6.33337C8.42283 6.33337 6.3335 8.42271 6.3335 11C6.3335 13.5774 8.42283 15.6667 11.0002 15.6667ZM11.0002 14.3334C12.8411 14.3334 14.3335 12.841 14.3335 11C14.3335 9.15909 12.8411 7.66671 11.0002 7.66671C9.15921 7.66671 7.66683 9.15909 7.66683 11C7.66683 12.841 9.15921 14.3334 11.0002 14.3334Z"
                    fill="white"
                  />
                  <path
                    d="M17.0002 6.33337C17.3684 6.33337 17.6668 6.0349 17.6668 5.66671C17.6668 5.29852 17.3684 5.00004 17.0002 5.00004C16.632 5.00004 16.3335 5.29852 16.3335 5.66671C16.3335 6.0349 16.632 6.33337 17.0002 6.33337Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.3335 0.333374C3.01979 0.333374 0.333496 3.01967 0.333496 6.33337V15.6667C0.333496 18.9804 3.01979 21.6667 6.3335 21.6667H15.6668C18.9805 21.6667 21.6668 18.9804 21.6668 15.6667V6.33337C21.6668 3.01967 18.9805 0.333374 15.6668 0.333374H6.3335ZM15.6668 1.66671H6.3335C3.75617 1.66671 1.66683 3.75605 1.66683 6.33337V15.6667C1.66683 18.244 3.75617 20.3334 6.3335 20.3334H15.6668C18.2442 20.3334 20.3335 18.244 20.3335 15.6667V6.33337C20.3335 3.75605 18.2442 1.66671 15.6668 1.66671Z"
                    fill="white"
                  />
                </svg>
              </InstIcon>
            </DivImage>
            <DivImage
              backgroundSize="cover"
              backgroundPosition="center 0%"
              src={InstImage3}
            >
              <InstIcon>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0002 15.6667C13.5775 15.6667 15.6668 13.5774 15.6668 11C15.6668 8.42271 13.5775 6.33337 11.0002 6.33337C8.42283 6.33337 6.3335 8.42271 6.3335 11C6.3335 13.5774 8.42283 15.6667 11.0002 15.6667ZM11.0002 14.3334C12.8411 14.3334 14.3335 12.841 14.3335 11C14.3335 9.15909 12.8411 7.66671 11.0002 7.66671C9.15921 7.66671 7.66683 9.15909 7.66683 11C7.66683 12.841 9.15921 14.3334 11.0002 14.3334Z"
                    fill="white"
                  />
                  <path
                    d="M17.0002 6.33337C17.3684 6.33337 17.6668 6.0349 17.6668 5.66671C17.6668 5.29852 17.3684 5.00004 17.0002 5.00004C16.632 5.00004 16.3335 5.29852 16.3335 5.66671C16.3335 6.0349 16.632 6.33337 17.0002 6.33337Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.3335 0.333374C3.01979 0.333374 0.333496 3.01967 0.333496 6.33337V15.6667C0.333496 18.9804 3.01979 21.6667 6.3335 21.6667H15.6668C18.9805 21.6667 21.6668 18.9804 21.6668 15.6667V6.33337C21.6668 3.01967 18.9805 0.333374 15.6668 0.333374H6.3335ZM15.6668 1.66671H6.3335C3.75617 1.66671 1.66683 3.75605 1.66683 6.33337V15.6667C1.66683 18.244 3.75617 20.3334 6.3335 20.3334H15.6668C18.2442 20.3334 20.3335 18.244 20.3335 15.6667V6.33337C20.3335 3.75605 18.2442 1.66671 15.6668 1.66671Z"
                    fill="white"
                  />
                </svg>
              </InstIcon>
            </DivImage>
          </Grid>
        </Grid>
        <Grid name="Right" columns="2fr 1fr" gap="2px">
          <DivImage backgroundSize="cover" src={InstImage4}>
            <InstIcon>
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0002 15.6667C13.5775 15.6667 15.6668 13.5774 15.6668 11C15.6668 8.42271 13.5775 6.33337 11.0002 6.33337C8.42283 6.33337 6.3335 8.42271 6.3335 11C6.3335 13.5774 8.42283 15.6667 11.0002 15.6667ZM11.0002 14.3334C12.8411 14.3334 14.3335 12.841 14.3335 11C14.3335 9.15909 12.8411 7.66671 11.0002 7.66671C9.15921 7.66671 7.66683 9.15909 7.66683 11C7.66683 12.841 9.15921 14.3334 11.0002 14.3334Z"
                  fill="white"
                />
                <path
                  d="M17.0002 6.33337C17.3684 6.33337 17.6668 6.0349 17.6668 5.66671C17.6668 5.29852 17.3684 5.00004 17.0002 5.00004C16.632 5.00004 16.3335 5.29852 16.3335 5.66671C16.3335 6.0349 16.632 6.33337 17.0002 6.33337Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3335 0.333374C3.01979 0.333374 0.333496 3.01967 0.333496 6.33337V15.6667C0.333496 18.9804 3.01979 21.6667 6.3335 21.6667H15.6668C18.9805 21.6667 21.6668 18.9804 21.6668 15.6667V6.33337C21.6668 3.01967 18.9805 0.333374 15.6668 0.333374H6.3335ZM15.6668 1.66671H6.3335C3.75617 1.66671 1.66683 3.75605 1.66683 6.33337V15.6667C1.66683 18.244 3.75617 20.3334 6.3335 20.3334H15.6668C18.2442 20.3334 20.3335 18.244 20.3335 15.6667V6.33337C20.3335 3.75605 18.2442 1.66671 15.6668 1.66671Z"
                  fill="white"
                />
              </svg>
            </InstIcon>
          </DivImage>
          <Grid gap="2px">
            <DivImage backgroundSize="cover" src={InstImage5}>
              <InstIcon>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0002 15.6667C13.5775 15.6667 15.6668 13.5774 15.6668 11C15.6668 8.42271 13.5775 6.33337 11.0002 6.33337C8.42283 6.33337 6.3335 8.42271 6.3335 11C6.3335 13.5774 8.42283 15.6667 11.0002 15.6667ZM11.0002 14.3334C12.8411 14.3334 14.3335 12.841 14.3335 11C14.3335 9.15909 12.8411 7.66671 11.0002 7.66671C9.15921 7.66671 7.66683 9.15909 7.66683 11C7.66683 12.841 9.15921 14.3334 11.0002 14.3334Z"
                    fill="#191919"
                  />
                  <path
                    d="M17.0002 6.33337C17.3684 6.33337 17.6668 6.0349 17.6668 5.66671C17.6668 5.29852 17.3684 5.00004 17.0002 5.00004C16.632 5.00004 16.3335 5.29852 16.3335 5.66671C16.3335 6.0349 16.632 6.33337 17.0002 6.33337Z"
                    fill="#191919"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.3335 0.333374C3.01979 0.333374 0.333496 3.01967 0.333496 6.33337V15.6667C0.333496 18.9804 3.01979 21.6667 6.3335 21.6667H15.6668C18.9805 21.6667 21.6668 18.9804 21.6668 15.6667V6.33337C21.6668 3.01967 18.9805 0.333374 15.6668 0.333374H6.3335ZM15.6668 1.66671H6.3335C3.75617 1.66671 1.66683 3.75605 1.66683 6.33337V15.6667C1.66683 18.244 3.75617 20.3334 6.3335 20.3334H15.6668C18.2442 20.3334 20.3335 18.244 20.3335 15.6667V6.33337C20.3335 3.75605 18.2442 1.66671 15.6668 1.66671Z"
                    fill="#191919"
                  />
                </svg>
              </InstIcon>
            </DivImage>
            <DivImage backgroundSize="cover" src={InstImage6}>
              <InstIcon>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0002 15.6667C13.5775 15.6667 15.6668 13.5774 15.6668 11C15.6668 8.42271 13.5775 6.33337 11.0002 6.33337C8.42283 6.33337 6.3335 8.42271 6.3335 11C6.3335 13.5774 8.42283 15.6667 11.0002 15.6667ZM11.0002 14.3334C12.8411 14.3334 14.3335 12.841 14.3335 11C14.3335 9.15909 12.8411 7.66671 11.0002 7.66671C9.15921 7.66671 7.66683 9.15909 7.66683 11C7.66683 12.841 9.15921 14.3334 11.0002 14.3334Z"
                    fill="white"
                  />
                  <path
                    d="M17.0002 6.33337C17.3684 6.33337 17.6668 6.0349 17.6668 5.66671C17.6668 5.29852 17.3684 5.00004 17.0002 5.00004C16.632 5.00004 16.3335 5.29852 16.3335 5.66671C16.3335 6.0349 16.632 6.33337 17.0002 6.33337Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.3335 0.333374C3.01979 0.333374 0.333496 3.01967 0.333496 6.33337V15.6667C0.333496 18.9804 3.01979 21.6667 6.3335 21.6667H15.6668C18.9805 21.6667 21.6668 18.9804 21.6668 15.6667V6.33337C21.6668 3.01967 18.9805 0.333374 15.6668 0.333374H6.3335ZM15.6668 1.66671H6.3335C3.75617 1.66671 1.66683 3.75605 1.66683 6.33337V15.6667C1.66683 18.244 3.75617 20.3334 6.3335 20.3334H15.6668C18.2442 20.3334 20.3335 18.244 20.3335 15.6667V6.33337C20.3335 3.75605 18.2442 1.66671 15.6668 1.66671Z"
                    fill="white"
                  />
                </svg>
              </InstIcon>
            </DivImage>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Instagram;
