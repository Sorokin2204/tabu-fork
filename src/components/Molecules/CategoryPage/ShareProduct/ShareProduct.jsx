import { useDispatch, useSelector } from "react-redux";
import { setShareProduct } from "redux/reducers/productReducer";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { sizes } from "../../../../sizes";

const ShareProduct = (props) => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setShareProduct({ link: "", showShare: false }));
  };

   const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <S.Wrapper {...props}>
      <S.Block>
        <S.Left>
          {isMobile && (
            <S.CloseMobile onClick={onClose}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2933 5.2943C15.456 5.13158 15.456 4.86777 15.2933 4.70505C15.1306 4.54233 14.8668 4.54233 14.7041 4.70505L9.9987 9.41042L5.29333 4.70505C5.13061 4.54233 4.86679 4.54233 4.70407 4.70505C4.54135 4.86777 4.54135 5.13158 4.70407 5.2943L9.40944 9.99967L4.70407 14.705C4.54135 14.8678 4.54135 15.1316 4.70407 15.2943C4.86679 15.457 5.13061 15.457 5.29333 15.2943L9.9987 10.5889L14.7041 15.2943C14.8668 15.457 15.1306 15.457 15.2933 15.2943C15.456 15.1316 15.456 14.8678 15.2933 14.705L10.588 9.99967L15.2933 5.2943Z"
                  fill="#717171"
                />
              </svg>
            </S.CloseMobile>
          )}
          <S.Title>Поделиться</S.Title>
          <S.Description>
            Поделитесь данным товаром на других соц.площадках!
          </S.Description>

          <S.MobileSocials>
            <S.MobileSocial>
              <S.MobileSocialIcon>
                <svg
                  width="12"
                  height="23"
                  viewBox="0 0 12 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.48398 12.295V22.2857H8.12929V12.295H11.2266L11.8455 8.45296H8.12929V5.76365C8.12929 4.687 8.51602 3.84205 10.2197 3.84205H12V0.306626C10.9943 0.153313 9.90961 0 8.9039 0C5.72883 0 3.48398 1.92045 3.48398 5.37863V8.45296H0V12.295H3.48398Z"
                    fill="#191919"
                  />
                </svg>
              </S.MobileSocialIcon>
              <S.MobileSocialName>Facebook</S.MobileSocialName>
            </S.MobileSocial>

            <S.MobileSocial>
              <S.MobileSocialIcon>
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 1.92375C19.2562 2.25 18.4638 2.46625 17.6375 2.57125C18.4875 2.06375 19.1362 1.26625 19.4412 0.305C18.6488 0.7775 17.7737 1.11125 16.8412 1.2975C16.0887 0.49625 15.0162 0 13.8462 0C11.5762 0 9.74875 1.8425 9.74875 4.10125C9.74875 4.42625 9.77625 4.73875 9.84375 5.03625C6.435 4.87 3.41875 3.23625 1.3925 0.7475C1.03875 1.36125 0.83125 2.06375 0.83125 2.82C0.83125 4.24 1.5625 5.49875 2.6525 6.2275C1.99375 6.215 1.3475 6.02375 0.8 5.7225C0.8 5.735 0.8 5.75125 0.8 5.7675C0.8 7.76 2.22125 9.415 4.085 9.79625C3.75125 9.8875 3.3875 9.93125 3.01 9.93125C2.7475 9.93125 2.4825 9.91625 2.23375 9.86125C2.765 11.485 4.2725 12.6788 6.065 12.7175C4.67 13.8088 2.89875 14.4663 0.98125 14.4663C0.645 14.4663 0.3225 14.4513 0 14.41C1.81625 15.5813 3.96875 16.25 6.29 16.25C13.835 16.25 17.96 10 17.96 4.5825C17.96 4.40125 17.9538 4.22625 17.945 4.0525C18.7588 3.475 19.4425 2.75375 20 1.92375Z"
                    fill="#191919"
                  />
                </svg>
              </S.MobileSocialIcon>
              <S.MobileSocialName>Twitter</S.MobileSocialName>
            </S.MobileSocial>

            <S.MobileSocial>
              <S.MobileSocialIcon>
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8728 12.5207C23.8437 12.458 23.8166 12.4061 23.7915 12.3644C23.3751 11.6145 22.5793 10.694 21.4047 9.60266L21.3799 9.57767L21.3675 9.56542L21.3549 9.55286H21.3423C20.8093 9.04468 20.4717 8.70299 20.3303 8.52805C20.0716 8.19481 20.0137 7.8575 20.1551 7.51572C20.2549 7.25749 20.6301 6.71216 21.2797 5.87896C21.6214 5.4374 21.892 5.0835 22.0918 4.81687C23.5331 2.90075 24.158 1.67632 23.9663 1.14311L23.8919 1.0185C23.8418 0.943488 23.7127 0.874861 23.5047 0.812274C23.2962 0.749818 23.0297 0.73949 22.7047 0.781112L19.106 0.805971C19.0477 0.785313 18.9645 0.787239 18.856 0.812274C18.7477 0.837308 18.6935 0.84987 18.6935 0.84987L18.6309 0.881163L18.5812 0.918759C18.5395 0.943618 18.4937 0.987342 18.4436 1.04984C18.3939 1.11212 18.3523 1.18521 18.319 1.2685C17.9272 2.2765 17.4817 3.21368 16.9818 4.08001C16.6735 4.59659 16.3904 5.04428 16.1319 5.42335C15.8737 5.80228 15.6571 6.08147 15.4823 6.26044C15.3073 6.43957 15.1493 6.58309 15.0074 6.6915C14.8657 6.79995 14.7575 6.84578 14.6827 6.82901C14.6076 6.81225 14.5369 6.79562 14.47 6.77899C14.3534 6.70397 14.2597 6.60195 14.189 6.47284C14.118 6.34373 14.0702 6.18122 14.0452 5.98545C14.0204 5.78955 14.0057 5.62104 14.0015 5.47937C13.9976 5.33787 13.9994 5.13772 14.0078 4.8795C14.0165 4.62114 14.0204 4.44634 14.0204 4.35469C14.0204 4.03808 14.0265 3.69446 14.0389 3.32376C14.0515 2.95305 14.0617 2.65933 14.0703 2.44295C14.0788 2.22634 14.0827 1.99718 14.0827 1.75558C14.0827 1.51399 14.068 1.32452 14.0389 1.18701C14.0102 1.04967 13.9661 0.916352 13.9081 0.787108C13.8496 0.657995 13.7641 0.558119 13.6519 0.487216C13.5395 0.416401 13.3997 0.360204 13.2333 0.31845C12.7917 0.21853 12.2295 0.164478 11.5462 0.156075C9.99683 0.139443 9.00126 0.239495 8.55974 0.456098C8.3848 0.547614 8.22649 0.672657 8.08495 0.830831C7.93496 1.01417 7.91404 1.11422 8.02232 1.13068C8.52223 1.20556 8.87613 1.3847 9.08442 1.66792L9.15948 1.818C9.21786 1.92628 9.27616 2.11798 9.3345 2.39283C9.39275 2.66769 9.43035 2.97174 9.44689 3.30481C9.48847 3.91304 9.48847 4.43369 9.44689 4.86681C9.40518 5.3001 9.36579 5.63741 9.3282 5.87901C9.2906 6.1206 9.23441 6.31637 9.15948 6.46627C9.08442 6.61622 9.03448 6.70787 9.00944 6.74113C8.98445 6.77439 8.96362 6.79536 8.94708 6.80359C8.8388 6.84508 8.72618 6.86622 8.60963 6.86622C8.4929 6.86622 8.35136 6.80783 8.18478 6.69115C8.01825 6.57446 7.84542 6.41419 7.66628 6.21006C7.48714 6.00589 7.28511 5.72057 7.0601 5.35407C6.83527 4.98756 6.60199 4.5544 6.3604 4.05458L6.16052 3.6921C6.03556 3.45891 5.86487 3.11936 5.64827 2.67377C5.43153 2.22801 5.23996 1.79681 5.07343 1.38028C5.00686 1.20535 4.90685 1.07216 4.77358 0.980515L4.71104 0.942918C4.66946 0.909655 4.60272 0.874335 4.51116 0.836696C4.41946 0.7991 4.32379 0.772139 4.22374 0.755551L0.799886 0.780411C0.450013 0.780411 0.21262 0.859673 0.0876216 1.01798L0.0375959 1.09286C0.0126049 1.13457 0 1.20119 0 1.29288C0 1.38453 0.024991 1.49701 0.0750167 1.63019C0.574836 2.8049 1.11838 3.93781 1.70564 5.0291C2.29291 6.12038 2.80323 6.99944 3.23631 7.66549C3.66947 8.33202 4.11099 8.96108 4.56087 9.55237C5.01076 10.1439 5.30855 10.523 5.45425 10.6895C5.60012 10.8563 5.7147 10.9811 5.79799 11.0643L6.11045 11.3642C6.31037 11.5642 6.60396 11.8037 6.99135 12.0827C7.37882 12.3619 7.80778 12.6367 8.27845 12.9077C8.7492 13.1782 9.29686 13.399 9.92172 13.5697C10.5465 13.7406 11.1546 13.8092 11.7461 13.7761H13.1832C13.4746 13.7509 13.6954 13.6593 13.8455 13.5011L13.8952 13.4385C13.9286 13.3888 13.9599 13.3115 13.9888 13.2076C14.0181 13.1035 14.0326 12.9887 14.0326 12.864C14.0241 12.5058 14.0513 12.183 14.1136 11.8957C14.1759 11.6084 14.2469 11.3918 14.3263 11.2459C14.4057 11.1002 14.4952 10.9772 14.5949 10.8775C14.6947 10.7775 14.7659 10.717 14.8077 10.6962C14.8491 10.6752 14.8823 10.661 14.9073 10.6525C15.1072 10.5858 15.3425 10.6504 15.6135 10.8463C15.8843 11.0421 16.1383 11.2838 16.3758 11.5711C16.6133 11.8586 16.8985 12.1812 17.2317 12.5394C17.5651 12.8977 17.8566 13.164 18.1064 13.3392L18.3562 13.4891C18.523 13.5892 18.7396 13.6808 19.0063 13.7641C19.2724 13.8474 19.5056 13.8682 19.7058 13.8266L22.9046 13.7767C23.221 13.7767 23.4672 13.7243 23.6419 13.6203C23.8168 13.5162 23.9208 13.4015 23.9543 13.2767C23.9877 13.1518 23.9895 13.0101 23.9607 12.8517C23.931 12.6936 23.9018 12.5831 23.8728 12.5207Z"
                    fill="#191919"
                  />
                </svg>
              </S.MobileSocialIcon>
              <S.MobileSocialName>Vk.com</S.MobileSocialName>
            </S.MobileSocial>

            <S.MobileSocial>
              <S.MobileSocialIcon>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0H17C21.1415 0 24.5 3.3585 24.5 7.5V16.5C24.5 20.6415 21.1415 24 17 24H8C3.8585 24 0.5 20.6415 0.5 16.5V7.5C0.5 3.3585 3.8585 0 8 0ZM17 21.75C19.895 21.75 22.25 19.395 22.25 16.5V7.5C22.25 4.605 19.895 2.25 17 2.25H8C5.105 2.25 2.75 4.605 2.75 7.5V16.5C2.75 19.395 5.105 21.75 8 21.75H17Z"
                    fill="#191919"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 12C6.5 8.6865 9.1865 6 12.5 6C15.8135 6 18.5 8.6865 18.5 12C18.5 15.3135 15.8135 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12ZM8.75 12C8.75 14.067 10.433 15.75 12.5 15.75C14.567 15.75 16.25 14.067 16.25 12C16.25 9.9315 14.567 8.25 12.5 8.25C10.433 8.25 8.75 9.9315 8.75 12Z"
                    fill="#191919"
                  />
                  <circle cx="18.9518" cy="5.54999" r="0.7995" fill="#191919" />
                </svg>
              </S.MobileSocialIcon>
              <S.MobileSocialName>Instagram</S.MobileSocialName>
            </S.MobileSocial>
          </S.MobileSocials>

          {!isMobile && (
            <>
              <S.Socials>
                <S.SocialLink href="https://google.com" target={"_blank"}>
                  <S.SocialIcon href="https://google.com" target={"_blank"}>
                    <svg
                      width={12}
                      height={23}
                      viewBox="0 0 12 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.48398 12.295V22.2857H8.12929V12.295H11.2266L11.8455 8.45296H8.12929V5.76365C8.12929 4.687 8.51602 3.84205 10.2197 3.84205H12V0.306626C10.9943 0.153313 9.90961 0 8.9039 0C5.72883 0 3.48398 1.92045 3.48398 5.37863V8.45296H0V12.295H3.48398Z"
                        fill="#191919"
                      />
                    </svg>
                  </S.SocialIcon>
                  <S.SocialName>Facebook</S.SocialName>
                </S.SocialLink>

                <S.SocialLink href="https://google.com" target={"_blank"}>
                  <S.SocialIcon>
                    <svg
                      width={16}
                      height={13}
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 1.539C15.405 1.8 14.771 1.973 14.11 2.057C14.79 1.651 15.309 1.013 15.553 0.244C14.919 0.622 14.219 0.889 13.473 1.038C12.871 0.397 12.013 0 11.077 0C9.261 0 7.799 1.474 7.799 3.281C7.799 3.541 7.821 3.791 7.875 4.029C5.148 3.896 2.735 2.589 1.114 0.598C0.831 1.089 0.665 1.651 0.665 2.256C0.665 3.392 1.25 4.399 2.122 4.982C1.595 4.972 1.078 4.819 0.64 4.578C0.64 4.588 0.64 4.601 0.64 4.614C0.64 6.208 1.777 7.532 3.268 7.837C3.001 7.91 2.71 7.945 2.408 7.945C2.198 7.945 1.986 7.933 1.787 7.889C2.212 9.188 3.418 10.143 4.852 10.174C3.736 11.047 2.319 11.573 0.785 11.573C0.516 11.573 0.258 11.561 0 11.528C1.453 12.465 3.175 13 5.032 13C11.068 13 14.368 8 14.368 3.666C14.368 3.521 14.363 3.381 14.356 3.242C15.007 2.78 15.554 2.203 16 1.539Z"
                        fill="#191919"
                      />
                    </svg>
                  </S.SocialIcon>
                  <S.SocialName>Twitter</S.SocialName>
                </S.SocialLink>

                <S.SocialLink href="https://google.com" target={"_blank"}>
                  <S.SocialIcon>
                    <svg
                      width={20}
                      height={12}
                      viewBox="0 0 20 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.894 10.6007C19.8698 10.5485 19.8472 10.5052 19.8262 10.4705C19.4792 9.84558 18.8161 9.07849 17.8373 8.16905L17.8166 8.14822L17.8063 8.13801L17.7958 8.12754H17.7853C17.341 7.70406 17.0597 7.41932 16.9419 7.27354C16.7264 6.99584 16.6781 6.71474 16.7959 6.42993C16.8791 6.21474 17.1918 5.76029 17.7331 5.06597C18.0178 4.69799 18.2433 4.40308 18.4099 4.18089C19.611 2.58412 20.1317 1.56376 19.9719 1.11942L19.9099 1.01558C19.8682 0.953069 19.7606 0.89588 19.5872 0.843724C19.4135 0.791678 19.1914 0.783071 18.9206 0.817756L15.9217 0.838472C15.8731 0.821257 15.8037 0.822862 15.7134 0.843724C15.6231 0.864586 15.5779 0.875054 15.5779 0.875054L15.5257 0.901132L15.4843 0.932462C15.4496 0.953178 15.4114 0.989615 15.3697 1.0417C15.3282 1.0936 15.2936 1.15451 15.2658 1.22391C14.9393 2.06391 14.5681 2.8449 14.1515 3.56684C13.8946 3.99732 13.6587 4.3704 13.4433 4.68629C13.2281 5.00207 13.0476 5.23472 12.9019 5.38386C12.756 5.53314 12.6244 5.65274 12.5061 5.74308C12.3881 5.83346 12.298 5.87164 12.2355 5.85767C12.173 5.84371 12.1141 5.82985 12.0583 5.81599C11.9612 5.75347 11.8831 5.66846 11.8242 5.56086C11.765 5.45327 11.7252 5.31784 11.7044 5.1547C11.6836 4.99145 11.6714 4.85103 11.6679 4.73297C11.6646 4.61506 11.6661 4.44827 11.6732 4.23308C11.6804 4.01778 11.6836 3.87211 11.6836 3.79574C11.6836 3.5319 11.6888 3.24555 11.6991 2.93663C11.7096 2.6277 11.7181 2.38294 11.7252 2.20262C11.7323 2.02211 11.7356 1.83115 11.7356 1.62982C11.7356 1.42849 11.7233 1.2706 11.6991 1.156C11.6752 1.04155 11.6385 0.930456 11.5901 0.822753C11.5414 0.715159 11.4701 0.631928 11.3766 0.572843C11.2829 0.51383 11.1664 0.467 11.0278 0.432205C10.6598 0.348938 10.1912 0.303895 9.62185 0.296892C8.33069 0.283032 7.50105 0.366408 7.13311 0.546911C6.98733 0.623175 6.85541 0.727377 6.73746 0.859188C6.61247 1.01197 6.59504 1.09535 6.68527 1.10906C7.10186 1.17147 7.39677 1.32075 7.57035 1.55676L7.6329 1.68183C7.68155 1.77206 7.73013 1.93181 7.77875 2.16086C7.8273 2.3899 7.85863 2.64328 7.87241 2.92083C7.90706 3.42769 7.90706 3.86157 7.87241 4.2225C7.83765 4.58358 7.80483 4.86467 7.7735 5.066C7.74217 5.26733 7.69534 5.43047 7.6329 5.55539C7.57035 5.68035 7.52873 5.75672 7.50787 5.78444C7.48704 5.81216 7.46968 5.82963 7.4559 5.83648C7.36566 5.87106 7.27182 5.88868 7.17469 5.88868C7.07742 5.88868 6.95947 5.84002 6.82065 5.74279C6.68188 5.64555 6.53785 5.51199 6.38856 5.34188C6.23928 5.17174 6.07093 4.93397 5.88342 4.62855C5.69606 4.32313 5.50166 3.96216 5.30033 3.54565L5.13376 3.24358C5.02963 3.04925 4.88739 2.7663 4.70689 2.39497C4.52628 2.0235 4.36664 1.66417 4.22786 1.31706C4.17238 1.17128 4.08904 1.0603 3.97799 0.983925L3.92587 0.952595C3.89122 0.924876 3.8356 0.895442 3.7593 0.864076C3.68289 0.832746 3.60316 0.810279 3.51978 0.796456L0.666572 0.817172C0.375011 0.817172 0.177184 0.883224 0.073018 1.01514L0.0313299 1.07755C0.0105041 1.11231 0 1.16782 0 1.24423C0 1.3206 0.0208258 1.41434 0.0625139 1.52532C0.47903 2.50425 0.931983 3.44834 1.42137 4.35774C1.91076 5.26715 2.33603 5.9997 2.69692 6.55474C3.05789 7.11018 3.42583 7.6344 3.80073 8.12714C4.17563 8.62007 4.42379 8.93596 4.54521 9.07473C4.66677 9.21377 4.76225 9.31771 4.83166 9.38712L5.09204 9.63699C5.25865 9.80364 5.5033 10.0032 5.82612 10.2357C6.14901 10.4684 6.50648 10.6974 6.89871 10.9232C7.291 11.1487 7.74739 11.3326 8.2681 11.4749C8.78875 11.6173 9.2955 11.6745 9.78842 11.6469H10.986C11.2288 11.6259 11.4128 11.5496 11.5379 11.4178L11.5793 11.3656C11.6072 11.3241 11.6333 11.2598 11.6573 11.1731C11.6817 11.0864 11.6938 10.9908 11.6938 10.8868C11.6867 10.5883 11.7094 10.3194 11.7614 10.0799C11.8133 9.84047 11.8724 9.65997 11.9386 9.53841C12.0047 9.41695 12.0793 9.31447 12.1624 9.23138C12.2456 9.14812 12.3049 9.09767 12.3397 9.08031C12.3743 9.06284 12.4019 9.05099 12.4227 9.04388C12.5893 8.98837 12.7854 9.04213 13.0112 9.20541C13.2369 9.36856 13.4486 9.56999 13.6465 9.8094C13.8444 10.049 14.0821 10.3179 14.3597 10.6163C14.6376 10.9149 14.8805 11.1368 15.0886 11.2828L15.2968 11.4078C15.4359 11.4911 15.6164 11.5675 15.8386 11.6369C16.0604 11.7063 16.2547 11.7237 16.4215 11.689L19.0872 11.6474C19.3509 11.6474 19.556 11.6037 19.7015 11.5171C19.8474 11.4303 19.934 11.3348 19.9619 11.2308C19.9898 11.1267 19.9913 11.0086 19.9672 10.8765C19.9425 10.7448 19.9182 10.6528 19.894 10.6007Z"
                        fill="#191919"
                      />
                    </svg>
                  </S.SocialIcon>
                  <S.SocialName>vk.com</S.SocialName>
                </S.SocialLink>

                <S.SocialLink href="https://google.com" target={"_blank"}>
                  <S.SocialIcon>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11Z"
                        fill="#191919"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8Z"
                        fill="#191919"
                      />
                      <circle
                        cx="12.3006"
                        cy="3.69999"
                        r="0.533"
                        fill="#191919"
                      />
                    </svg>
                  </S.SocialIcon>
                  <S.SocialName>Instagram</S.SocialName>
                </S.SocialLink>
              </S.Socials>

              <S.Line />
            </>
          )}

          <S.LinkBlock>
            <S.Label>Или скопируйте ссылку :</S.Label>
            <S.Input>
              <S.InputText>https://Taabu.kz/kg49mTJxRhs</S.InputText>
              <S.InputCopy>
                <svg
                  width={20}
                  height={24}
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 20H6.66667C6.00363 20 5.36774 19.6839 4.8989 19.1213C4.43006 18.5587 4.16667 17.7956 4.16667 17V7C4.16667 6.73478 4.07887 6.48043 3.92259 6.29289C3.76631 6.10536 3.55435 6 3.33333 6C3.11232 6 2.90036 6.10536 2.74408 6.29289C2.5878 6.48043 2.5 6.73478 2.5 7V17C2.5 18.3261 2.93899 19.5979 3.72039 20.5355C4.50179 21.4732 5.5616 22 6.66667 22H13.3333C13.5543 22 13.7663 21.8946 13.9226 21.7071C14.0789 21.5196 14.1667 21.2652 14.1667 21C14.1667 20.7348 14.0789 20.4804 13.9226 20.2929C13.7663 20.1054 13.5543 20 13.3333 20ZM17.5 8.94C17.4913 8.84813 17.4746 8.75763 17.45 8.67V8.58C17.4099 8.47718 17.3565 8.38267 17.2917 8.3L12.2917 2.3C12.2228 2.22222 12.144 2.15808 12.0583 2.11H11.9833L11.7167 2H8.33333C7.67029 2 7.03441 2.31607 6.56557 2.87868C6.09673 3.44129 5.83333 4.20435 5.83333 5V15C5.83333 15.7956 6.09673 16.5587 6.56557 17.1213C7.03441 17.6839 7.67029 18 8.33333 18H15C15.663 18 16.2989 17.6839 16.7678 17.1213C17.2366 16.5587 17.5 15.7956 17.5 15V9C17.5 9 17.5 9 17.5 8.94ZM12.5 5.41L14.6583 8H13.3333C13.1123 8 12.9004 7.89464 12.7441 7.70711C12.5878 7.51957 12.5 7.26522 12.5 7V5.41ZM15.8333 15C15.8333 15.2652 15.7455 15.5196 15.5893 15.7071C15.433 15.8946 15.221 16 15 16H8.33333C8.11232 16 7.90036 15.8946 7.74408 15.7071C7.5878 15.5196 7.5 15.2652 7.5 15V5C7.5 4.73478 7.5878 4.48043 7.74408 4.29289C7.90036 4.10536 8.11232 4 8.33333 4H10.8333V7C10.8333 7.79565 11.0967 8.55871 11.5656 9.12132C12.0344 9.68393 12.6703 10 13.3333 10H15.8333V15Z"
                    fill="#1F1F1F"
                  />
                </svg>
              </S.InputCopy>
            </S.Input>
          </S.LinkBlock>
        </S.Left>
        {!isMobile && (
          <S.Close onClick={onClose}>
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.4701 8.47108C24.7305 8.21073 24.7305 7.78862 24.4701 7.52827C24.2098 7.26792 23.7876 7.26792 23.5273 7.52827L15.9987 15.0569L8.4701 7.52827C8.20975 7.26792 7.78764 7.26792 7.52729 7.52827C7.26694 7.78862 7.26694 8.21073 7.52729 8.47108L15.0559 15.9997L7.52729 23.5283C7.26694 23.7886 7.26694 24.2107 7.52729 24.4711C7.78764 24.7314 8.20975 24.7314 8.4701 24.4711L15.9987 16.9425L23.5273 24.4711C23.7876 24.7314 24.2098 24.7314 24.4701 24.4711C24.7305 24.2107 24.7305 23.7886 24.4701 23.5283L16.9415 15.9997L24.4701 8.47108Z"
                fill="white"
              />
            </svg>
          </S.Close>
        )}
      </S.Block>
    </S.Wrapper>
  );
};

export default ShareProduct;
