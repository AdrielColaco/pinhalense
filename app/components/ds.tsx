"use client";

// ============================================================
// Pinhalense Design System — React components
// Ported from the Claude Design bundle (Logo, Button,
// SectionLabel, Badge, ImageCard).
// ============================================================

import React, { useState } from "react";

type CSS = React.CSSProperties;

// ---------------- Logo ----------------
// Official Pinhalense lockup: the symbol and the "Pinhalense" wordmark are a
// single path. Cropping the viewBox to the symbol gives the mark-only variant.
const LOGO_PATH =
  "M131.723 25.1299C133.389 25.1299 134.753 25.362 135.826 25.8262C136.766 26.2228 137.534 26.7377 138.131 27.3564L138.388 27.6172C139.003 28.3577 139.439 29.1979 139.685 30.1152C139.931 31.0327 140.054 31.9615 140.054 32.8789V44.0986H138.074C136.766 44.0986 135.703 43.0482 135.703 41.7549H135.592C135.122 42.5839 134.361 43.2588 133.332 43.7783C132.303 44.2977 131.118 44.5625 129.799 44.5625C129.05 44.5625 128.267 44.4633 127.45 44.2754C126.634 44.0875 125.874 43.7667 125.191 43.3135C124.509 42.8713 123.939 42.2745 123.48 41.5449C123.022 40.8154 122.798 39.9091 122.798 38.8369C122.798 37.4551 123.189 36.3493 123.983 35.5312C124.777 34.7134 125.795 34.0834 127.036 33.6523C128.277 33.2213 129.653 32.9338 131.174 32.79C132.684 32.6463 134.171 32.5801 135.625 32.5801V32.1162C135.625 30.9666 135.2 30.1152 134.361 29.5625C133.511 29.0098 132.505 28.7334 131.342 28.7334C130.358 28.7334 129.407 28.9436 128.501 29.3525C127.584 29.7615 126.835 30.2697 126.242 30.8555L123.827 28.0479C124.889 27.0752 126.119 26.3457 127.506 25.8594C128.893 25.373 130.302 25.1299 131.723 25.1299ZM160.155 25.1299C161.432 25.1299 162.609 25.3389 163.698 25.7568C164.652 26.1226 165.487 26.6478 166.212 27.3262L166.504 27.6152C167.296 28.4511 167.913 29.485 168.364 30.7168C168.815 31.9594 169.035 33.4001 169.035 35.0605V35.6768C169.035 35.8857 169.013 36.0841 168.991 36.293H155.027C155.082 36.9527 155.248 37.5577 155.545 38.1074C155.842 38.6571 156.227 39.1296 156.711 39.5254C157.195 39.9213 157.746 40.23 158.362 40.4609C158.978 40.6918 159.616 40.8018 160.276 40.8018C161.421 40.8018 162.389 40.5927 163.182 40.1748C163.974 39.7569 164.623 39.1741 165.129 38.4375L168.188 40.8896C166.383 43.342 163.753 44.5625 160.31 44.5625C158.879 44.5625 157.569 44.3315 156.37 43.8916C155.171 43.4517 154.136 42.8138 153.256 42C152.376 41.1862 151.683 40.1856 151.188 38.998C150.692 37.8103 150.439 36.4466 150.439 34.9619C150.439 33.4773 150.692 32.1355 151.188 30.9258C151.683 29.716 152.365 28.6821 153.234 27.8242C154.104 26.9664 155.127 26.3069 156.315 25.834C157.493 25.3611 158.78 25.1299 160.155 25.1299ZM199.234 25.1299C200.553 25.1299 201.829 25.3609 203.082 25.8232C204.336 26.2857 205.328 26.9799 206.059 27.9268L203.104 30.5684C202.701 30.029 202.145 29.5672 201.437 29.1709C200.728 28.7745 199.954 28.5762 199.125 28.5762C198.486 28.5762 197.897 28.6937 197.351 28.9297L197.119 29.0166C196.509 29.3249 196.203 29.8422 196.203 30.5469C196.203 31.2513 196.541 31.7574 197.206 32.0547C197.882 32.3519 198.863 32.6497 200.149 32.958C200.836 33.1121 201.523 33.3211 202.221 33.5742C202.918 33.8275 203.551 34.1695 204.118 34.5879C204.685 35.0173 205.154 35.5346 205.503 36.1621C205.863 36.7897 206.037 37.5497 206.037 38.4414C206.037 39.5643 205.829 40.5113 205.415 41.293C205.001 42.0746 204.445 42.7021 203.747 43.1865C203.049 43.6709 202.243 44.023 201.316 44.2432C200.39 44.4523 199.43 44.5625 198.449 44.5625C197.032 44.5625 195.658 44.2987 194.317 43.7812C192.976 43.2638 191.865 42.5148 190.981 41.5459L193.979 38.7168C194.492 39.3882 195.146 39.9389 195.952 40.3682C196.759 40.7976 197.664 41.0176 198.646 41.0176C198.973 41.0176 199.311 40.9843 199.648 40.9072C199.986 40.8302 200.302 40.7091 200.597 40.5439C200.88 40.3788 201.12 40.1473 201.295 39.8721C201.469 39.586 201.557 39.2449 201.557 38.8379C201.557 38.0672 201.207 37.5159 200.51 37.1855C199.812 36.8553 198.776 36.5256 197.381 36.1953C196.705 36.0412 196.04 35.8428 195.396 35.6006C194.753 35.3584 194.175 35.0389 193.674 34.6426C193.172 34.2462 192.769 33.7505 192.464 33.167C192.159 32.5835 192.006 31.857 192.006 30.9873C192.006 29.9635 192.213 29.0824 192.627 28.3447C193.041 27.6071 193.587 27.0017 194.273 26.5283C194.96 26.0549 195.724 25.7019 196.585 25.4707C197.435 25.2395 198.319 25.1299 199.234 25.1299ZM218.126 25.1299C219.403 25.1299 220.581 25.339 221.671 25.7568C222.761 26.1748 223.698 26.8011 224.49 27.626C225.184 28.3574 225.743 29.2407 226.174 30.2754L226.328 30.7168C226.779 31.9595 227 33.4 227 35.0605V35.6768C227 35.8857 226.989 36.0841 226.967 36.293H212.996C213.051 36.9526 213.216 37.5577 213.513 38.1074C213.81 38.6571 214.196 39.1296 214.68 39.5254C215.175 39.9213 215.715 40.23 216.332 40.4609C216.948 40.6917 217.587 40.8017 218.247 40.8018C219.392 40.8018 220.362 40.5927 221.154 40.1748C221.947 39.757 222.596 39.1741 223.103 38.4375L226.163 40.8896C224.357 43.3421 221.726 44.5625 218.28 44.5625C216.849 44.5625 215.539 44.3315 214.339 43.8916C213.139 43.4517 212.103 42.8138 211.223 42C210.342 41.1863 209.649 40.1856 209.153 38.998C208.658 37.8103 208.404 36.4466 208.404 34.9619C208.404 33.4773 208.658 32.1355 209.153 30.9258C209.649 29.716 210.331 28.6821 211.201 27.8242C212.071 26.9664 213.095 26.3069 214.284 25.834C215.462 25.3612 216.75 25.1299 218.126 25.1299ZM22.2676 0C28.4388 2.77285e-05 34.1683 2.4365 38.4297 6.8252C46.8971 15.6684 46.5551 29.7116 37.6572 38.127C33.4952 42.0549 28.0412 44.2275 22.3115 44.2275H21.749C16.9578 44.1178 12.4423 42.5159 8.67773 39.6084C8.01534 39.1147 7.63965 38.3248 7.63965 37.502V34.0459C8.37928 34.397 9.54939 34.7705 10.6533 34.7705C12.8833 34.7705 14.9592 33.6732 16.2178 31.8301L16.251 31.7744C16.3612 31.5991 16.4606 31.4457 16.5488 31.2812C17.0787 30.3158 17.3545 29.2184 17.3545 28.1104C17.3545 25.7734 16.1512 23.6449 14.1309 22.416L14.0537 22.3721C13.016 21.7577 11.8348 21.4395 10.6426 21.4395H10.543C10.3113 21.4504 10.1238 21.4507 9.94727 21.4727C9.90372 21.4835 9.81687 21.5043 9.81445 21.5049H9.74805C9.56052 21.5268 9.41714 21.5491 9.2627 21.582L9.19629 21.6035C7.19809 22.0424 5.48701 23.4033 4.59277 25.2246L4.57031 25.2686C4.50409 25.4112 4.43829 25.565 4.37207 25.7295L4.34961 25.7734C4.28342 25.927 4.22831 26.1029 4.16211 26.2783V26.333C4.0959 26.5743 4.02979 26.8814 3.97461 27.1885V27.2871C3.97461 27.342 3.95215 27.3973 3.95215 27.4521V27.4736C3.93007 27.6711 3.91895 27.8582 3.91895 28.0557V44.1729C2.77085 43.2183 1.68886 42.1757 0.695312 41.0566C0.242818 40.552 0 39.8938 0 39.2246V22.1309C0 16.0086 2.45101 10.314 6.91113 6.08984C11.0732 2.16198 16.5158 0 22.2676 0ZM62.2002 17.5908C63.7788 17.5908 65.1907 17.7238 66.458 18.0107C67.5571 18.2522 68.5285 18.6369 69.3574 19.1582L69.7158 19.4014C70.6161 20.0415 71.3166 20.8691 71.8057 21.8623C72.2948 22.8667 72.539 24.07 72.5391 25.4717C72.5391 26.9729 72.2496 28.243 71.6826 29.2695C71.1157 30.2848 70.3489 31.1131 69.3818 31.7422C68.4147 32.3602 67.2914 32.8126 66.002 33.0996C64.7126 33.3755 63.3454 33.5185 61.9004 33.5186H58.1533V44.0605H55.6299C54.3294 44.0604 53.2734 43.0111 53.2734 41.7197V17.5908H62.2002ZM80.0781 41.7197C80.078 43.0114 79.0094 44.0605 77.6934 44.0605H75.3877V25.6318H80.0781V41.7197ZM93.2725 25.1299C94.4968 25.1299 95.5418 25.3392 96.418 25.7578C97.1748 26.1242 97.82 26.5918 98.3457 27.168L98.5645 27.4326C99.1148 28.1267 99.5297 28.9202 99.7881 29.8125C100.046 30.705 100.182 31.6198 100.182 32.5674V44.0605H97.8672C96.553 44.0603 95.4971 43.0134 95.4971 41.7354V33.8682C95.4971 33.3282 95.4634 32.7656 95.3848 32.1816C95.3061 31.5977 95.1373 31.0685 94.8789 30.5947C94.6093 30.1211 94.2612 29.7352 93.8008 29.4268C93.3403 29.1184 92.7338 28.9639 91.9814 28.9639C91.2288 28.9639 90.5768 29.1078 90.0264 29.4053C89.4759 29.7028 89.026 30.0772 88.6777 30.54C88.3296 30.9918 88.0606 31.532 87.8809 32.127C87.7011 32.7219 87.6113 33.3283 87.6113 33.9453V44.0605H82.96C82.9386 44.0604 82.9278 44.0302 82.9268 44.0273V25.6699H87.375V28.623H87.4541C87.8698 27.6975 88.5998 26.8927 89.6221 26.1875C90.6442 25.4824 91.8685 25.13 93.2725 25.1299ZM107.669 28.1826H107.747C107.925 27.7958 108.191 27.4197 108.536 27.0439C108.881 26.6791 109.282 26.3474 109.749 26.0488C110.216 25.7614 110.75 25.5187 111.34 25.3418C111.929 25.1649 112.575 25.0762 113.275 25.0762C114.488 25.0762 115.523 25.286 116.391 25.7061C117.14 26.0737 117.779 26.543 118.3 27.1211L118.516 27.3652C119.061 28.0617 119.473 28.8575 119.729 29.7529C119.984 30.6485 120.117 31.5667 120.117 32.5176V44.0488H117.837C116.535 44.0488 115.479 42.9987 115.479 41.7051V33.8994C115.479 33.3687 115.445 32.8044 115.367 32.2295C115.289 31.6548 115.133 31.1354 114.889 30.6602C114.644 30.1847 114.299 29.7969 113.843 29.4873C113.387 29.1779 112.786 29.0235 112.041 29.0234C111.296 29.0234 110.651 29.156 110.105 29.4434C109.56 29.7308 109.104 30.1067 108.748 30.582C108.381 31.0575 108.114 31.5888 107.936 32.1748C107.758 32.7716 107.669 33.3684 107.669 33.9873V44.0605H103.029V17.5908H107.669V28.1826ZM147.592 41.7158C147.592 43.0093 146.524 44.0603 145.208 44.0605H142.936C142.914 44.0605 142.902 44.0299 142.901 44.0273V17.5908H147.592V41.7158ZM181.962 25.1299C183.174 25.1299 184.209 25.3391 185.077 25.7578C185.826 26.1241 186.465 26.5919 186.985 27.168L187.201 27.4326C187.746 28.1267 188.158 28.9201 188.414 29.8125C188.67 30.705 188.804 31.6198 188.804 32.5674V44.0605H186.523C185.222 44.0605 184.164 43.0137 184.164 41.7246V33.8682C184.164 33.3282 184.132 32.7656 184.054 32.1816C183.976 31.5977 183.809 31.0685 183.553 30.5947C183.286 30.121 182.94 29.7352 182.484 29.4268C182.028 29.1184 181.428 28.9639 180.683 28.9639C179.937 28.9639 179.292 29.1078 178.747 29.4053C178.202 29.7027 177.757 30.0773 177.412 30.54C177.067 30.9918 176.8 31.5319 176.622 32.127C176.444 32.7219 176.354 33.3283 176.354 33.9453V44.0605H171.716V25.6699H176.121V28.623H176.199C176.611 27.6975 177.334 26.8927 178.346 26.1875C179.358 25.4823 180.571 25.1299 181.962 25.1299ZM134.574 35.6865C133.825 35.6865 133.031 35.7198 132.203 35.7861C131.376 35.8525 130.615 35.985 129.91 36.2061C129.206 36.4271 128.625 36.7369 128.155 37.1348C127.686 37.5327 127.45 38.0741 127.45 38.7705C127.45 39.2016 127.551 39.5668 127.741 39.8652C127.942 40.1524 128.188 40.3955 128.501 40.5723C128.814 40.7602 129.161 40.8816 129.553 40.959C129.933 41.0364 130.324 41.0811 130.716 41.0811C132.326 41.081 133.545 40.6495 134.372 39.8096C135.2 38.9584 135.614 37.8088 135.614 36.3496L135.625 36.3389V35.6865H134.574ZM22.2451 3.84082C16.1734 3.84091 10.7858 6.76982 7.42969 11.29C9.99088 9.63335 13.0491 8.65726 16.3389 8.65723C25.3253 8.65723 32.6123 15.899 32.6123 24.8301C32.6123 25.971 32.4903 27.0899 32.2695 28.165V28.1982C32.2254 28.3847 32.1809 28.5714 32.1367 28.7578C32.1257 28.7906 32.1046 28.8343 32.1045 28.8779C32.0493 29.0535 32.0044 29.2405 31.9492 29.416C31.9382 29.4489 31.927 29.4926 31.916 29.5254C31.618 30.5347 31.2097 31.5003 30.7129 32.4219C30.7019 32.4438 30.6907 32.4663 30.6797 32.4883C30.5915 32.6527 30.4918 32.8278 30.3926 32.9922C30.3815 33.0141 30.3597 33.0474 30.3486 33.0693C30.0506 33.552 29.7416 34.0239 29.3994 34.4736C29.3553 34.5395 29.3108 34.5946 29.2666 34.6494C29.1783 34.7481 29.101 34.8474 29.0127 34.957C28.9466 35.0555 28.8691 35.1429 28.792 35.2305C28.7148 35.3182 28.6378 35.4064 28.5605 35.4941C28.4722 35.6038 28.3728 35.7028 28.2734 35.8125C28.2072 35.8783 28.1404 35.9547 28.0742 36.0205C27.9197 36.1741 27.7649 36.3278 27.6104 36.4814C27.456 36.6239 27.3019 36.7667 27.1475 36.9092C27.1364 36.9311 27.1139 36.9429 27.0918 36.9648C26.9374 37.0964 26.7718 37.2386 26.6064 37.3701C24.9394 38.7196 22.9956 39.751 20.876 40.3545C21.3397 40.3874 21.8039 40.4092 22.2676 40.4092C32.4353 40.4091 40.6709 32.2241 40.6709 22.1191C40.6707 12.1721 32.6902 4.08598 22.7422 3.83594L22.2451 3.84082ZM16.2725 12.4648C13.1043 12.4649 10.0907 13.6712 7.77246 15.8652C7.16527 16.4358 6.62345 17.0724 6.1377 17.7637L6.14941 17.7422L5.39844 18.8174L6.61328 18.3232C7.90484 17.7967 9.25168 17.5332 10.6426 17.5332C16.5047 17.5333 21.2734 22.2736 21.2734 28.0996C21.2733 31.325 19.8165 34.3199 17.2666 36.3496L16.251 37.1621L17.542 37.041C20.313 36.7777 22.8417 35.6261 24.873 33.7061C27.2687 31.4349 28.6376 28.3735 28.7148 25.082C28.8032 21.7905 27.589 18.6631 25.3037 16.2822C23.0185 13.9014 19.9379 12.5416 16.626 12.4648H16.2725ZM218.093 28.5723C216.717 28.5723 215.55 28.9897 214.592 29.8145C213.634 30.6392 213.106 31.7063 213.007 33.0039L213.018 33.0146H222.431C222.431 32.4319 222.343 31.8708 222.178 31.332C222.013 30.7935 221.749 30.3208 221.396 29.9141C221.033 29.5072 220.582 29.1765 220.031 28.9346C219.481 28.6926 218.83 28.5723 218.093 28.5723ZM160.122 28.5605C158.747 28.5606 157.58 28.9789 156.623 29.8037C155.666 30.6285 155.138 31.6955 155.039 32.9932L155.05 33.0039H164.458C164.458 32.4211 164.369 31.8601 164.204 31.3213C164.039 30.7825 163.775 30.3092 163.423 29.9023C163.06 29.4956 162.609 29.1657 162.059 28.9238C161.508 28.682 160.859 28.5605 160.122 28.5605ZM58.1426 29.457H61.5449C62.3451 29.457 63.1008 29.4016 63.8232 29.2803C64.5458 29.1589 65.1908 28.9601 65.7578 28.6621C66.2539 28.4013 66.665 28.0562 66.9834 27.6338L67.1143 27.4697C67.4476 26.951 67.6143 26.2663 67.6143 25.4717C67.6142 24.6771 67.4477 24.0259 67.1143 23.5293C66.7808 23.0326 66.336 22.6464 65.7803 22.3594C65.2355 22.0724 64.6011 21.8852 63.8896 21.7969C63.1783 21.7086 62.4449 21.6641 61.7002 21.6641H58.1426V29.457ZM77.5654 17.5908C79.2369 17.5909 80.5808 19.0091 80.5811 20.7734C80.5811 22.538 79.2371 23.9569 77.5654 23.957C75.8937 23.957 74.5498 22.5381 74.5498 20.7734C74.5501 19.009 75.9044 17.5908 77.5654 17.5908Z";

// Full lockup is 227×45; the symbol alone occupies the first 47 units.
const LOGO_RATIO = 227 / 45;
const SYMBOL_RATIO = 47 / 45;

export function Logo({
  color = "var(--branco)",
  height = 34,
  showWordmark = true,
  style = {},
  ...rest
}: {
  color?: string;
  height?: number;
  showWordmark?: boolean;
  style?: CSS;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const ratio = showWordmark ? LOGO_RATIO : SYMBOL_RATIO;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        color,
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      <svg
        width={height * ratio}
        height={height}
        viewBox={showWordmark ? "0 0 227 45" : "0 0 47 45"}
        fill="none"
        role="img"
        aria-label="Pinhalense"
      >
        <path d={LOGO_PATH} fill="currentColor" />
      </svg>
    </span>
  );
}

// ---------------- Button ----------------
type ButtonVariant = "primary" | "dark" | "light" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  style?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const palette = {
    primary: { bg: "var(--action-primary)", bgHover: "var(--action-primary-hover)", fg: "var(--branco)" },
    dark: { bg: "var(--action-dark)", bgHover: "var(--action-dark-hover)", fg: "var(--branco)" },
    light: { bg: "var(--branco)", bgHover: "var(--cinza-3)", fg: "var(--preto)" },
    outline: { bg: "transparent", bgHover: "rgba(112,29,70,0.08)", fg: "var(--vermelho)" },
  }[variant];
  const sizes = {
    sm: { height: 38, padding: "0 18px", font: "14px" },
    md: { height: 45, padding: "0 25px", font: "var(--fs-body)" },
    lg: { height: 54, padding: "0 32px", font: "var(--fs-lead)" },
  }[size];
  const [hover, setHover] = useState(false);
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        width: fullWidth ? "100%" : "auto",
        height: sizes.height,
        padding: sizes.padding,
        border: variant === "outline" ? "1px solid var(--vermelho)" : "none",
        borderRadius: "var(--radius-md)",
        background: disabled ? "var(--cinza-borda)" : hover ? palette.bgHover : palette.bg,
        color: disabled ? "var(--cinza-texto)" : palette.fg,
        fontFamily: "var(--font-sans)",
        fontSize: sizes.font,
        fontWeight: "var(--weight-medium)" as unknown as number,
        lineHeight: 1,
        textDecoration: "none",
        textAlign: "center",
        whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background var(--dur-fast) var(--ease-standard)",
        boxSizing: "border-box",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

// ---------------- SectionLabel ----------------
type LabelTone = "brand" | "brick" | "light" | "white";

export function SectionLabel({
  children,
  tone = "brand",
  rulePosition = "after",
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  tone?: LabelTone;
  rulePosition?: "before" | "after";
  style?: CSS;
} & React.HTMLAttributes<HTMLDivElement>) {
  const color = {
    brand: "var(--vermelho)",
    brick: "var(--tijolo)",
    light: "var(--cinza-3)",
    white: "var(--branco)",
  }[tone];
  const textColor = tone === "light" || tone === "white" ? "var(--branco)" : color;
  const ruleColor = tone === "light" ? "var(--cinza-3)" : tone === "white" ? "var(--branco)" : color;
  const rule = (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "var(--rule-width)",
        height: "var(--rule-height)",
        borderRadius: "var(--radius-pill)",
        background: ruleColor,
        flexShrink: 0,
      }}
    />
  );
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-4)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: "var(--weight-semibold)" as unknown as number,
        letterSpacing: "var(--ls-eyebrow)",
        textTransform: "uppercase",
        color: textColor,
        ...style,
      }}
      {...rest}
    >
      {rulePosition === "before" && rule}
      <span>{children}</span>
      {rulePosition === "after" && rule}
    </div>
  );
}

// ---------------- Badge ----------------
export function Badge({
  children,
  tone = "dark",
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  tone?: "dark" | "brand" | "light";
  style?: CSS;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const palette = {
    dark: { bg: "var(--preto)", fg: "var(--branco)" },
    brand: { bg: "var(--vermelho)", fg: "var(--branco)" },
    light: { bg: "var(--cinza-3)", fg: "var(--preto)" },
  }[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "9px 14px",
        borderRadius: "var(--radius-md)",
        background: palette.bg,
        color: palette.fg,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-eyebrow)",
        fontWeight: "var(--weight-regular)" as unknown as number,
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

// ---------------- ImageCard ----------------
export function ImageCard({
  image,
  title,
  caption,
  badge,
  height = 370,
  radius = "var(--radius-lg)",
  onClick,
  style = {},
}: {
  image: string;
  title: string;
  caption?: string;
  badge?: string;
  height?: number;
  radius?: string;
  onClick?: () => void;
  style?: CSS;
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        display: "block",
        height,
        borderRadius: radius,
        overflow: "hidden",
        textDecoration: "none",
        cursor: onClick ? "pointer" : "default",
        boxShadow: hover ? "var(--shadow-card)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url(${image}) center / cover no-repeat`,
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform var(--dur-slow) var(--ease-standard)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      {badge && (
        <div style={{ position: "absolute", top: "var(--space-4)", right: "var(--space-4)" }}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          left: "var(--space-8)",
          right: "var(--space-8)",
          bottom: "var(--space-6)",
          fontFamily: "var(--font-sans)",
          color: "var(--branco)",
        }}
      >
        <div style={{ fontSize: "var(--fs-card-title)", fontWeight: "var(--weight-bold)" as unknown as number, lineHeight: 1.1 }}>
          {title}
        </div>
        {caption && (
          <div
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--fs-body)",
              fontWeight: "var(--weight-regular)" as unknown as number,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------- LanguageSelector ----------------
// Flags are inline SVG rather than emoji: flag emoji do not render on
// Chrome/Windows, which would leave the control blank for many users.
export type LangCode = "pt-BR" | "en" | "es";

const FLAGS: Record<LangCode, React.ReactNode> = {
  "pt-BR": (
    <>
      <rect width="20" height="20" fill="#009B3A" />
      <path d="M10 3.4 17 10l-7 6.6L3 10Z" fill="#FEDF00" />
      <circle cx="10" cy="10" r="3.1" fill="#002776" />
    </>
  ),
  en: (
    <>
      <rect width="20" height="20" fill="#FFF" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="20" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="9" height={(20 / 13) * 7} fill="#3C3B6E" />
    </>
  ),
  es: (
    <>
      <rect width="20" height="20" fill="#AA151B" />
      <rect y="5" width="20" height="10" fill="#F1BF00" />
    </>
  ),
};

export const LANGUAGES: { code: LangCode; label: string; short: string }[] = [
  { code: "pt-BR", label: "Português (BR)", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

function Flag({ code, size = 20 }: { code: LangCode; size?: number }) {
  const id = "flagclip-" + code;
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" style={{ flexShrink: 0, display: "block" }}>
      <defs>
        <clipPath id={id}>
          <circle cx="10" cy="10" r="10" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>{FLAGS[code]}</g>
      <circle cx="10" cy="10" r="9.5" fill="none" stroke="rgba(0,0,0,.16)" />
    </svg>
  );
}

export function LanguageSelector({
  value,
  onChange,
  compact = false,
}: {
  value: LangCode;
  onChange: (code: LangCode) => void;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrap = React.useRef<HTMLDivElement>(null);
  const active = LANGUAGES.find((l) => l.code === value) || LANGUAGES[0];

  // Close on outside click or Escape so the menu never strands the user.
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrap} style={{ position: "relative", flexShrink: 0 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Idioma: ${active.label}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          height: 36,
          padding: compact ? "0 8px" : "0 10px",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--cinza-borda)",
          background: open ? "var(--cinza-2)" : "transparent",
          cursor: "pointer",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-strong)",
          lineHeight: 1,
        }}
      >
        <Flag code={active.code} />
        {!compact && <span>{active.short}</span>}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-base) var(--ease-standard)" }}>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Selecionar idioma"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            right: 0,
            zIndex: 60,
            margin: 0,
            padding: 6,
            listStyle: "none",
            minWidth: 186,
            borderRadius: "var(--radius-md)",
            background: "#fff",
            border: "1px solid var(--cinza-3)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {LANGUAGES.map((l) => {
            const selected = l.code === value;
            return (
              <li key={l.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(l.code);
                    setOpen(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    padding: "9px 10px",
                    border: "none",
                    borderRadius: "var(--radius-sm)",
                    background: selected ? "var(--cinza-2)" : "transparent",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: selected ? 600 : 500,
                    color: "var(--text-strong)",
                    textAlign: "left",
                  }}
                >
                  <Flag code={l.code} />
                  <span style={{ flex: 1, whiteSpace: "nowrap" }}>{l.label}</span>
                  {selected && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" stroke="var(--vinho)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
