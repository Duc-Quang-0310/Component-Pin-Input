import { useState } from "react";
import { COLOR } from "../Mock";

const Six = () => {
  const [opacity, setOpacity] = useState("0.6");
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouse = (action: "enter" | "leave") => (_e: any) => {
    setOpacity(action === "enter" ? "1" : "0.6");
    setMouseIn(action === "enter");
  };
  return (
    <g onMouseEnter={handleMouse("enter")} onMouseLeave={handleMouse("leave")}>
      <path
        d="M73.4316 299.793H77.3828C78.2122 299.793 78.8776 300.03 79.3789 300.504C79.8802 300.978 80.1309 301.778 80.1309 302.903C80.1309 303.692 80.0169 304.316 79.7891 304.776C79.5612 305.237 79.2399 305.567 78.8252 305.768C78.4105 305.964 77.9229 306.062 77.3623 306.062H74.8125V309.678H73.4316V299.793ZM77.3896 305.016C77.7907 305.016 78.0869 304.92 78.2783 304.729C78.4697 304.533 78.5951 304.28 78.6543 303.97C78.7181 303.66 78.75 303.336 78.75 302.999C78.75 302.675 78.7249 302.347 78.6748 302.015C78.6247 301.682 78.5062 301.404 78.3193 301.181C78.137 300.953 77.8385 300.839 77.4238 300.839H74.8125V305.016H77.3896ZM84.7041 309.828C84.1117 309.828 83.6309 309.73 83.2617 309.534C82.8971 309.338 82.6305 309.078 82.4619 308.755C82.2933 308.431 82.209 308.078 82.209 307.695V302.432H83.4941V307.702C83.4941 308.062 83.6263 308.342 83.8906 308.543C84.1549 308.743 84.5104 308.844 84.957 308.844C85.5859 308.844 86.0531 308.707 86.3584 308.434C86.6637 308.16 86.8164 307.871 86.8164 307.565V302.432H88.1016V309.678H86.9531L86.8164 308.769C86.6341 309.092 86.3675 309.35 86.0166 309.541C85.6702 309.732 85.2327 309.828 84.7041 309.828ZM90.6445 302.432H91.9297V303.457C92.0345 303.184 92.2236 302.965 92.4971 302.801C92.7751 302.632 93.0895 302.511 93.4404 302.438C93.7913 302.366 94.1263 302.329 94.4453 302.329L94.4043 303.43C93.9941 303.43 93.5999 303.487 93.2217 303.601C92.8434 303.71 92.5335 303.854 92.292 304.031C92.0505 304.209 91.9297 304.4 91.9297 304.605V309.678H90.6445V302.432ZM98.7861 309.828C98.0661 309.828 97.4896 309.714 97.0566 309.486C96.6283 309.254 96.3184 308.949 96.127 308.57C95.9355 308.188 95.8398 307.773 95.8398 307.326V304.564C95.8398 303.881 96.0996 303.332 96.6191 302.917C97.1432 302.502 97.8542 302.295 98.752 302.295C99.3307 302.295 99.8343 302.363 100.263 302.5C100.691 302.632 101.021 302.874 101.254 303.225C101.491 303.576 101.609 304.077 101.609 304.729L100.386 304.845C100.386 304.403 100.336 304.07 100.235 303.847C100.135 303.623 99.9688 303.473 99.7363 303.396C99.5039 303.318 99.1872 303.279 98.7861 303.279C98.2347 303.279 97.82 303.38 97.542 303.58C97.264 303.776 97.125 304.116 97.125 304.599V307.436C97.125 307.955 97.2708 308.32 97.5625 308.529C97.8587 308.739 98.2666 308.844 98.7861 308.844C99.21 308.844 99.5312 308.814 99.75 308.755C99.9733 308.691 100.131 308.568 100.222 308.386C100.313 308.199 100.374 307.923 100.406 307.559H101.596C101.55 308.115 101.432 308.559 101.24 308.892C101.049 309.224 100.755 309.464 100.358 309.609C99.9665 309.755 99.4424 309.828 98.7861 309.828ZM103.66 299.39H104.945V303.115C105.16 302.869 105.442 302.671 105.793 302.521C106.144 302.37 106.581 302.295 107.105 302.295C107.702 302.295 108.181 302.391 108.541 302.582C108.901 302.769 109.161 303.022 109.32 303.341C109.484 303.66 109.566 304.011 109.566 304.394V309.678H108.281V304.325C108.281 303.965 108.142 303.701 107.864 303.532C107.586 303.364 107.224 303.279 106.777 303.279C106.148 303.279 105.686 303.396 105.39 303.628C105.093 303.856 104.945 304.145 104.945 304.496V309.678H103.66V299.39ZM113.935 309.828C113.401 309.828 112.966 309.737 112.629 309.555C112.296 309.368 112.05 309.124 111.891 308.823C111.736 308.518 111.658 308.192 111.658 307.846C111.658 307.481 111.729 307.176 111.87 306.93C112.016 306.679 112.287 306.453 112.684 306.253C113.085 306.048 113.67 305.834 114.44 305.61C114.841 305.492 115.163 305.387 115.404 305.296C115.646 305.205 115.821 305.089 115.931 304.947C116.04 304.806 116.095 304.603 116.095 304.339C116.095 304.143 116.063 303.965 115.999 303.806C115.94 303.646 115.814 303.519 115.623 303.423C115.436 303.327 115.149 303.279 114.762 303.279C114.279 303.279 113.925 303.329 113.702 303.43C113.479 303.53 113.335 303.662 113.271 303.826C113.212 303.986 113.183 304.163 113.183 304.359V304.681H111.945V304.353C111.945 303.637 112.185 303.115 112.663 302.787C113.142 302.459 113.855 302.295 114.803 302.295C115.76 302.295 116.427 302.518 116.806 302.965C117.188 303.411 117.38 304.008 117.38 304.756V307.846C117.38 308.229 117.428 308.475 117.523 308.584C117.624 308.693 117.829 308.748 118.139 308.748L117.988 309.732H117.729C117.245 309.732 116.897 309.639 116.683 309.452C116.468 309.261 116.307 308.994 116.197 308.652C116.092 308.816 115.947 308.99 115.76 309.172C115.577 309.354 115.338 309.509 115.042 309.637C114.75 309.764 114.381 309.828 113.935 309.828ZM114.092 308.871C114.352 308.871 114.623 308.816 114.905 308.707C115.188 308.593 115.438 308.445 115.657 308.263C115.881 308.076 116.026 307.871 116.095 307.647V305.74C115.994 305.84 115.819 305.973 115.568 306.137C115.322 306.296 114.969 306.442 114.509 306.574C113.948 306.734 113.536 306.898 113.271 307.066C113.012 307.235 112.882 307.481 112.882 307.805C112.882 308.169 112.975 308.438 113.162 308.611C113.354 308.785 113.663 308.871 114.092 308.871ZM119.738 309.24L120.053 308.297C120.212 308.383 120.488 308.497 120.88 308.639C121.272 308.775 121.714 308.844 122.206 308.844C122.776 308.844 123.161 308.739 123.361 308.529C123.562 308.32 123.662 308.062 123.662 307.757C123.662 307.474 123.623 307.251 123.546 307.087C123.473 306.923 123.266 306.777 122.924 306.649L121.201 306.021C120.677 305.829 120.31 305.604 120.101 305.344C119.891 305.084 119.786 304.729 119.786 304.277C119.786 303.667 119.955 303.184 120.292 302.828C120.629 302.473 121.244 302.295 122.138 302.295C122.648 302.295 123.115 302.336 123.539 302.418C123.967 302.495 124.314 302.587 124.578 302.691L124.284 303.676C124.147 303.617 123.967 303.557 123.744 303.498C123.521 303.439 123.288 303.389 123.047 303.348C122.805 303.302 122.582 303.279 122.377 303.279C121.789 303.279 121.409 303.354 121.235 303.505C121.067 303.651 120.982 303.888 120.982 304.216C120.982 304.439 121.023 304.605 121.105 304.715C121.192 304.82 121.358 304.92 121.604 305.016L123.307 305.679C123.712 305.834 124.018 306 124.223 306.178C124.432 306.351 124.574 306.561 124.646 306.807C124.719 307.053 124.756 307.365 124.756 307.743C124.756 308.121 124.676 308.47 124.517 308.789C124.362 309.104 124.109 309.356 123.758 309.548C123.411 309.735 122.951 309.828 122.377 309.828C121.702 309.828 121.135 309.753 120.675 309.603C120.215 309.452 119.902 309.331 119.738 309.24ZM126.957 302.432H128.242V309.678H126.957V302.432ZM126.937 299.39H128.263V300.812H126.937V299.39ZM130.895 302.432H132.18V303.136C132.394 302.89 132.674 302.689 133.021 302.534C133.367 302.375 133.802 302.295 134.326 302.295C134.923 302.295 135.402 302.393 135.762 302.589C136.126 302.78 136.391 303.038 136.555 303.361C136.719 303.68 136.801 304.031 136.801 304.414V309.678H135.516V304.339C135.516 303.979 135.374 303.712 135.092 303.539C134.809 303.366 134.445 303.279 133.998 303.279C133.369 303.279 132.909 303.398 132.617 303.635C132.326 303.872 132.18 304.166 132.18 304.517V309.678H130.895V302.432ZM141.921 312.467C141.433 312.467 141.014 312.446 140.663 312.405C140.312 312.364 140.002 312.294 139.733 312.193L140.021 311.229C140.216 311.302 140.488 311.364 140.834 311.414C141.18 311.464 141.522 311.489 141.859 311.489C142.484 311.489 142.933 311.357 143.206 311.093C143.484 310.828 143.623 310.427 143.623 309.89V308.885C143.486 309.012 143.302 309.115 143.069 309.192C142.841 309.265 142.609 309.32 142.372 309.356C142.135 309.388 141.932 309.404 141.764 309.404C140.839 309.404 140.148 309.206 139.692 308.81C139.241 308.413 139.016 307.839 139.016 307.087V304.701C139.016 303.972 139.237 303.389 139.679 302.951C140.125 302.514 140.82 302.295 141.764 302.295C142.01 302.295 142.263 302.331 142.522 302.404C142.787 302.477 143.019 302.568 143.22 302.678C143.42 302.787 143.555 302.899 143.623 303.013V302.432H144.908V309.507C144.908 310.072 144.815 310.578 144.628 311.024C144.446 311.471 144.136 311.822 143.698 312.077C143.265 312.337 142.673 312.467 141.921 312.467ZM141.962 308.42C142.44 308.42 142.812 308.349 143.076 308.208C143.34 308.067 143.523 307.955 143.623 307.873V304.277C143.623 303.963 143.486 303.719 143.213 303.546C142.944 303.368 142.525 303.279 141.955 303.279C141.449 303.279 141.046 303.382 140.745 303.587C140.449 303.792 140.301 304.118 140.301 304.564V307.285C140.301 307.718 140.46 308.017 140.779 308.181C141.098 308.34 141.493 308.42 141.962 308.42ZM149.646 299.383H150.896L147.8 309.678H146.521L149.646 299.383ZM160.159 309.828C159.353 309.828 158.689 309.739 158.17 309.562C157.655 309.384 157.254 309.14 156.967 308.83C156.68 308.52 156.479 308.162 156.365 307.757C156.256 307.347 156.201 306.909 156.201 306.444V299.793H157.582V306.588C157.582 307.194 157.701 307.65 157.938 307.955C158.179 308.26 158.496 308.465 158.888 308.57C159.28 308.671 159.703 308.721 160.159 308.721C160.624 308.721 161.039 308.671 161.403 308.57C161.772 308.465 162.064 308.26 162.278 307.955C162.493 307.65 162.6 307.194 162.6 306.588V299.793H163.98V306.444C163.98 306.9 163.924 307.333 163.81 307.743C163.7 308.149 163.507 308.509 163.229 308.823C162.951 309.138 162.563 309.384 162.066 309.562C161.57 309.739 160.934 309.828 160.159 309.828ZM166.318 309.24L166.633 308.297C166.792 308.383 167.068 308.497 167.46 308.639C167.852 308.775 168.294 308.844 168.786 308.844C169.356 308.844 169.741 308.739 169.941 308.529C170.142 308.32 170.242 308.062 170.242 307.757C170.242 307.474 170.203 307.251 170.126 307.087C170.053 306.923 169.846 306.777 169.504 306.649L167.781 306.021C167.257 305.829 166.89 305.604 166.681 305.344C166.471 305.084 166.366 304.729 166.366 304.277C166.366 303.667 166.535 303.184 166.872 302.828C167.209 302.473 167.825 302.295 168.718 302.295C169.228 302.295 169.695 302.336 170.119 302.418C170.548 302.495 170.894 302.587 171.158 302.691L170.864 303.676C170.728 303.617 170.548 303.557 170.324 303.498C170.101 303.439 169.868 303.389 169.627 303.348C169.385 303.302 169.162 303.279 168.957 303.279C168.369 303.279 167.989 303.354 167.815 303.505C167.647 303.651 167.562 303.888 167.562 304.216C167.562 304.439 167.604 304.605 167.686 304.715C167.772 304.82 167.938 304.92 168.185 305.016L169.887 305.679C170.292 305.834 170.598 306 170.803 306.178C171.012 306.351 171.154 306.561 171.227 306.807C171.299 307.053 171.336 307.365 171.336 307.743C171.336 308.121 171.256 308.47 171.097 308.789C170.942 309.104 170.689 309.356 170.338 309.548C169.992 309.735 169.531 309.828 168.957 309.828C168.283 309.828 167.715 309.753 167.255 309.603C166.795 309.452 166.482 309.331 166.318 309.24ZM175.308 309.828C174.774 309.828 174.339 309.737 174.002 309.555C173.669 309.368 173.423 309.124 173.264 308.823C173.109 308.518 173.031 308.192 173.031 307.846C173.031 307.481 173.102 307.176 173.243 306.93C173.389 306.679 173.66 306.453 174.057 306.253C174.458 306.048 175.043 305.834 175.813 305.61C176.215 305.492 176.536 305.387 176.777 305.296C177.019 305.205 177.194 305.089 177.304 304.947C177.413 304.806 177.468 304.603 177.468 304.339C177.468 304.143 177.436 303.965 177.372 303.806C177.313 303.646 177.188 303.519 176.996 303.423C176.809 303.327 176.522 303.279 176.135 303.279C175.652 303.279 175.299 303.329 175.075 303.43C174.852 303.53 174.708 303.662 174.645 303.826C174.585 303.986 174.556 304.163 174.556 304.359V304.681H173.318V304.353C173.318 303.637 173.558 303.115 174.036 302.787C174.515 302.459 175.228 302.295 176.176 302.295C177.133 302.295 177.8 302.518 178.179 302.965C178.562 303.411 178.753 304.008 178.753 304.756V307.846C178.753 308.229 178.801 308.475 178.896 308.584C178.997 308.693 179.202 308.748 179.512 308.748L179.361 309.732H179.102C178.618 309.732 178.27 309.639 178.056 309.452C177.841 309.261 177.68 308.994 177.57 308.652C177.465 308.816 177.32 308.99 177.133 309.172C176.951 309.354 176.711 309.509 176.415 309.637C176.123 309.764 175.754 309.828 175.308 309.828ZM175.465 308.871C175.725 308.871 175.996 308.816 176.278 308.707C176.561 308.593 176.812 308.445 177.03 308.263C177.254 308.076 177.399 307.871 177.468 307.647V305.74C177.368 305.84 177.192 305.973 176.941 306.137C176.695 306.296 176.342 306.442 175.882 306.574C175.321 306.734 174.909 306.898 174.645 307.066C174.385 307.235 174.255 307.481 174.255 307.805C174.255 308.169 174.348 308.438 174.535 308.611C174.727 308.785 175.036 308.871 175.465 308.871ZM184.058 312.467C183.57 312.467 183.151 312.446 182.8 312.405C182.449 312.364 182.139 312.294 181.87 312.193L182.157 311.229C182.353 311.302 182.624 311.364 182.971 311.414C183.317 311.464 183.659 311.489 183.996 311.489C184.62 311.489 185.069 311.357 185.343 311.093C185.621 310.828 185.76 310.427 185.76 309.89V308.885C185.623 309.012 185.438 309.115 185.206 309.192C184.978 309.265 184.746 309.32 184.509 309.356C184.272 309.388 184.069 309.404 183.9 309.404C182.975 309.404 182.285 309.206 181.829 308.81C181.378 308.413 181.152 307.839 181.152 307.087V304.701C181.152 303.972 181.373 303.389 181.815 302.951C182.262 302.514 182.957 302.295 183.9 302.295C184.146 302.295 184.399 302.331 184.659 302.404C184.924 302.477 185.156 302.568 185.356 302.678C185.557 302.787 185.691 302.899 185.76 303.013V302.432H187.045V309.507C187.045 310.072 186.951 310.578 186.765 311.024C186.582 311.471 186.272 311.822 185.835 312.077C185.402 312.337 184.81 312.467 184.058 312.467ZM184.099 308.42C184.577 308.42 184.949 308.349 185.213 308.208C185.477 308.067 185.66 307.955 185.76 307.873V304.277C185.76 303.963 185.623 303.719 185.35 303.546C185.081 303.368 184.661 303.279 184.092 303.279C183.586 303.279 183.183 303.382 182.882 303.587C182.586 303.792 182.438 304.118 182.438 304.564V307.285C182.438 307.718 182.597 308.017 182.916 308.181C183.235 308.34 183.629 308.42 184.099 308.42ZM189.232 307.121V304.599C189.232 303.915 189.467 303.361 189.937 302.938C190.406 302.509 191.16 302.295 192.199 302.295C193.193 302.295 193.924 302.491 194.394 302.883C194.863 303.27 195.098 303.808 195.098 304.496V306.219H190.518V307.237C190.518 307.825 190.634 308.24 190.866 308.481C191.103 308.723 191.563 308.844 192.247 308.844C192.653 308.844 192.972 308.83 193.204 308.803C193.441 308.771 193.614 308.68 193.724 308.529C193.838 308.374 193.913 308.115 193.949 307.75H195.084C195.025 308.32 194.899 308.755 194.708 309.056C194.521 309.352 194.232 309.555 193.84 309.664C193.448 309.773 192.917 309.828 192.247 309.828C191.167 309.828 190.395 309.603 189.93 309.151C189.465 308.7 189.232 308.023 189.232 307.121ZM193.854 305.351V304.359C193.854 303.922 193.701 303.632 193.396 303.491C193.095 303.35 192.696 303.279 192.199 303.279C191.689 303.279 191.281 303.368 190.976 303.546C190.67 303.724 190.518 304.036 190.518 304.482V305.351H193.854Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <path
        d="M228.219 310.85C227.297 310.85 226.565 310.688 226.023 310.365C225.482 310.037 225.094 309.602 224.859 309.061C224.625 308.519 224.508 307.923 224.508 307.271C224.508 306.761 224.57 306.274 224.695 305.811C224.82 305.347 225.003 304.87 225.242 304.381C225.482 303.891 225.773 303.35 226.117 302.756L228.062 299.381H229.625L226.812 304.154C227.047 304.029 227.286 303.943 227.531 303.896C227.781 303.844 228.078 303.818 228.422 303.818C229.589 303.818 230.469 304.133 231.062 304.764C231.661 305.389 231.961 306.199 231.961 307.193C231.961 307.85 231.839 308.456 231.594 309.014C231.354 309.566 230.961 310.011 230.414 310.35C229.867 310.683 229.135 310.85 228.219 310.85ZM228.281 309.584C228.891 309.584 229.354 309.48 229.672 309.271C229.995 309.058 230.214 308.782 230.328 308.443C230.443 308.1 230.5 307.735 230.5 307.35C230.5 306.969 230.44 306.607 230.32 306.264C230.206 305.92 229.987 305.639 229.664 305.42C229.341 305.201 228.87 305.092 228.25 305.092C227.641 305.092 227.169 305.201 226.836 305.42C226.508 305.639 226.281 305.92 226.156 306.264C226.031 306.607 225.969 306.969 225.969 307.35C225.969 307.735 226.031 308.1 226.156 308.443C226.286 308.782 226.518 309.058 226.852 309.271C227.185 309.48 227.661 309.584 228.281 309.584Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <rect
        x="208.5"
        y="285.178"
        width="39"
        height="39"
        rx="19.5"
        stroke="#ffffff"
        stroke-opacity={opacity}
      />
      <path
        d="M335.887 305.678L333 302.791L330.113 305.678L333 308.564L335.887 305.678ZM247.5 306.178H333V305.178H247.5V306.178Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <g opacity="0.47">
        <path
          d="M455.753 402.705C359.394 402.705 281 323.902 281 227.044C281 225.365 282.361 224 284.044 224H284.508C285.908 224 287.088 224.948 287.442 226.238L317.56 255.962L347.627 225.494C348.492 224.617 349.801 224.35 350.938 224.814C352.079 225.278 352.826 226.383 352.834 227.614C352.983 255.191 363.767 281.121 383.207 300.632C402.643 320.143 428.407 330.887 455.753 330.887C456.315 330.887 456.85 331.041 457.31 331.316C457.522 331.442 457.723 331.599 457.904 331.78L490.779 364.639C491.349 365.209 491.671 365.984 491.671 366.79C491.671 367.596 491.353 368.371 490.779 368.942L457.904 401.816C457.593 402.127 457.231 402.359 456.838 402.508C456.496 402.642 456.126 402.713 455.749 402.713L455.753 402.705ZM287.249 234.599C291.178 324.19 364.585 395.952 454.498 396.617L484.325 366.79L454.486 336.967C425.985 336.641 399.182 325.295 378.893 304.93C360.003 285.974 348.834 261.287 347.009 234.784L319.747 262.404C319.18 262.979 318.409 263.305 317.599 263.309C316.789 263.325 316.018 262.998 315.44 262.432L287.241 234.603L287.249 234.599Z"
          fill="url(#paint14_linear_110_1597)"
        />
      </g>
      <g opacity="0.58">
        <path
          d="M490.684 370.42L457.809 337.561C399.567 337.561 352.161 289.93 351.846 231.264L319.64 263.895L286.553 231.236H286.557C286.557 231.047 286.557 230.863 286.557 230.674H286.093C286.093 325.857 363.122 403.295 457.805 403.295L490.68 370.42H490.684Z"
          fill="url(#paint15_linear_110_1597)"
        />
        <path
          d="M457.809 337.561L490.684 370.42H490.68L457.805 403.295M457.809 337.561V337.569M457.809 337.561C399.567 337.561 352.161 289.93 351.846 231.264L319.64 263.895L286.553 231.236H286.557C286.557 231.047 286.557 230.863 286.557 230.674H286.093C286.093 325.857 363.122 403.295 457.805 403.295M457.805 403.295V403.287"
          stroke="url(#paint16_linear_110_1597)"
          stroke-width="15.47"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g opacity="0.27">
        <path
          d="M458.955 402.532C364.063 402.532 286.865 324.925 286.865 229.533C286.865 229.325 287.034 229.152 287.246 229.152H287.71C287.919 229.152 288.088 229.321 288.092 229.529V229.793C288.092 229.84 288.092 229.891 288.092 229.938L320.793 262.211L352.732 229.848C352.838 229.738 353.004 229.706 353.145 229.761C353.287 229.82 353.381 229.958 353.381 230.111C353.535 258.393 364.594 284.987 384.529 304.993C404.469 325.007 430.906 336.031 458.963 336.031C459.037 336.031 459.104 336.051 459.167 336.09C459.191 336.106 459.214 336.122 459.238 336.145L492.113 369.004C492.184 369.075 492.223 369.173 492.223 369.272C492.223 369.37 492.184 369.468 492.113 369.539L459.238 402.414C459.199 402.453 459.151 402.481 459.1 402.5C459.057 402.516 459.01 402.528 458.967 402.528L458.955 402.532ZM287.628 230.556C288.178 325.007 364.739 401.686 458.797 401.773L491.295 369.276L458.797 336.794C430.595 336.755 404.032 325.656 383.983 305.532C364.122 285.596 353.008 259.175 352.622 231.032L321.057 263.014C320.986 263.085 320.892 263.128 320.79 263.128C320.691 263.112 320.593 263.088 320.522 263.018L287.628 230.552V230.556Z"
          fill="url(#paint17_linear_110_1597)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint14_linear_110_1597"
          x1="281"
          y1="313.355"
          x2="491.671"
          y2="313.355"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#ffffff" : COLOR} />
          <stop offset="0.2" stop-color={!mouseIn ? "#FCFCFC" : COLOR} />
          <stop offset="0.33" stop-color={!mouseIn ? "#F3F3F3" : COLOR} />
          <stop offset="0.45" stop-color={!mouseIn ? "#E3E3E3" : COLOR} />
          <stop offset="0.55" stop-color={!mouseIn ? "#CECECE" : COLOR} />
          <stop offset="0.65" stop-color={!mouseIn ? "#B2B2B2" : COLOR} />
          <stop offset="0.74" stop-color={!mouseIn ? "#8F8F8F" : COLOR} />
          <stop offset="0.83" stop-color={!mouseIn ? "#666666" : COLOR} />
          <stop offset="0.92" stop-color={!mouseIn ? "#373737" : COLOR} />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_110_1597"
          x1="320"
          y1="253"
          x2="491"
          y2="375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#F7F7F7" : COLOR} />
          <stop
            offset="1"
            stop-color={!mouseIn ? "#ffffff" : COLOR}
            stop-opacity="0.28"
          />
        </linearGradient>
        <linearGradient
          id="paint16_linear_110_1597"
          x1="331.37"
          y1="264.396"
          x2="511.904"
          y2="388.575"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#ffffff" : COLOR} />
          <stop
            offset="1"
            stop-color={!mouseIn ? "#ffffff" : COLOR}
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint17_linear_110_1597"
          x1="286.865"
          y1="315.844"
          x2="492.211"
          y2="315.844"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#ffffff" : COLOR} />
          <stop offset="0.25" stop-color={!mouseIn ? "#FBFBFB" : COLOR} />
          <stop offset="0.45" stop-color={!mouseIn ? "#F1F1F2" : COLOR} />
          <stop offset="0.63" stop-color={!mouseIn ? "#E0E1E2" : COLOR} />
          <stop offset="0.81" stop-color={!mouseIn ? "#C8C9CB" : COLOR} />
          <stop offset="0.98" stop-color={!mouseIn ? "#AAABAE" : COLOR} />
          <stop offset="1" stop-color={!mouseIn ? "#A5A7AA" : COLOR} />
        </linearGradient>
      </defs>
    </g>
  );
};

export default Six;