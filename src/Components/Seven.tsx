import { useState } from "react";
import { COLOR } from "../Mock";

const Seven = () => {
  const [opacity, setOpacity] = useState("0.6");
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouse = (action: "enter" | "leave") => (_e: any) => {
    setOpacity(action === "enter" ? "1" : "0.6");
    setMouseIn(action === "enter");
  };
  return (
    <g onMouseEnter={handleMouse("enter")} onMouseLeave={handleMouse("leave")}>
      <path
        d="M530.649 449.494L534.524 439.486H529.243V438.197H536.126V439.424L532.298 449.494H530.649Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <rect
        x="513.235"
        y="423.994"
        width="39"
        height="39"
        rx="19.5"
        stroke="#ffffff"
        stroke-opacity={opacity}
      />
      <path
        d="M569.938 448.645C569.113 448.645 568.44 448.56 567.921 448.392C567.401 448.223 567 447.986 566.718 447.681C566.44 447.371 566.246 447.004 566.137 446.58C566.032 446.156 565.979 445.687 565.979 445.172V442.068C565.979 441.544 566.03 441.063 566.13 440.626C566.235 440.184 566.426 439.801 566.704 439.478C566.987 439.154 567.385 438.903 567.9 438.726C568.42 438.548 569.094 438.459 569.924 438.459C570.922 438.459 571.688 438.58 572.221 438.821C572.754 439.058 573.121 439.409 573.321 439.874C573.522 440.339 573.622 440.911 573.622 441.59V441.679L572.316 441.795V441.61C572.316 441.013 572.239 440.569 572.084 440.277C571.934 439.986 571.683 439.794 571.332 439.703C570.981 439.612 570.512 439.566 569.924 439.566C569.345 439.566 568.867 439.632 568.488 439.765C568.11 439.892 567.827 440.12 567.641 440.448C567.454 440.772 567.36 441.228 567.36 441.815V445.384C567.36 445.967 567.456 446.414 567.647 446.724C567.839 447.034 568.126 447.248 568.509 447.366C568.896 447.48 569.382 447.537 569.965 447.537C570.539 447.537 570.997 447.498 571.339 447.421C571.685 447.343 571.934 447.168 572.084 446.895C572.239 446.617 572.316 446.184 572.316 445.596V445.432H573.622V445.5C573.622 445.997 573.574 446.441 573.479 446.833C573.387 447.22 573.214 447.549 572.959 447.817C572.704 448.086 572.332 448.291 571.845 448.433C571.362 448.574 570.726 448.645 569.938 448.645ZM578.387 448.645C577.794 448.645 577.313 448.547 576.944 448.351C576.58 448.155 576.313 447.895 576.145 447.571C575.976 447.248 575.892 446.895 575.892 446.512V441.248H577.177V446.519C577.177 446.879 577.309 447.159 577.573 447.359C577.838 447.56 578.193 447.66 578.64 447.66C579.269 447.66 579.736 447.523 580.041 447.25C580.346 446.977 580.499 446.687 580.499 446.382V441.248H581.784V448.494H580.636L580.499 447.585C580.317 447.909 580.05 448.166 579.699 448.357C579.353 448.549 578.915 448.645 578.387 448.645ZM584.026 448.057L584.341 447.113C584.5 447.2 584.776 447.314 585.168 447.455C585.56 447.592 586.002 447.66 586.494 447.66C587.064 447.66 587.449 447.555 587.649 447.346C587.85 447.136 587.95 446.879 587.95 446.573C587.95 446.291 587.911 446.067 587.834 445.903C587.761 445.739 587.554 445.593 587.212 445.466L585.489 444.837C584.965 444.646 584.598 444.42 584.389 444.16C584.179 443.9 584.074 443.545 584.074 443.094C584.074 442.483 584.243 442 584.58 441.645C584.917 441.289 585.533 441.111 586.426 441.111C586.936 441.111 587.403 441.152 587.827 441.234C588.256 441.312 588.602 441.403 588.866 441.508L588.572 442.492C588.436 442.433 588.256 442.374 588.032 442.314C587.809 442.255 587.576 442.205 587.335 442.164C587.093 442.118 586.87 442.096 586.665 442.096C586.077 442.096 585.697 442.171 585.523 442.321C585.355 442.467 585.271 442.704 585.271 443.032C585.271 443.256 585.312 443.422 585.394 443.531C585.48 443.636 585.646 443.736 585.893 443.832L587.595 444.495C588 444.65 588.306 444.816 588.511 444.994C588.72 445.167 588.862 445.377 588.935 445.623C589.007 445.869 589.044 446.181 589.044 446.56C589.044 446.938 588.964 447.286 588.805 447.605C588.65 447.92 588.397 448.173 588.046 448.364C587.7 448.551 587.239 448.645 586.665 448.645C585.991 448.645 585.423 448.569 584.963 448.419C584.503 448.269 584.19 448.148 584.026 448.057ZM591.594 446.423V442.219H590.384V441.248H591.642L591.799 439.006H592.879V441.248H594.697V442.219H592.879V446.341C592.879 446.819 593.02 447.127 593.303 447.264C593.585 447.4 594.032 447.469 594.643 447.469H594.786L594.649 448.549H594.458C593.469 448.549 592.744 448.394 592.284 448.084C591.824 447.774 591.594 447.22 591.594 446.423ZM599.537 448.645C598.812 448.645 598.229 448.547 597.787 448.351C597.35 448.15 597.031 447.877 596.83 447.53C596.634 447.184 596.536 446.787 596.536 446.341V443.422C596.536 442.975 596.634 442.579 596.83 442.232C597.031 441.882 597.35 441.608 597.787 441.412C598.229 441.212 598.812 441.111 599.537 441.111C600.257 441.111 600.836 441.212 601.273 441.412C601.715 441.608 602.037 441.882 602.237 442.232C602.438 442.579 602.538 442.975 602.538 443.422V446.341C602.538 446.787 602.438 447.184 602.237 447.53C602.037 447.877 601.715 448.15 601.273 448.351C600.836 448.547 600.257 448.645 599.537 448.645ZM599.537 447.66C600.038 447.66 600.449 447.571 600.768 447.394C601.091 447.211 601.253 446.897 601.253 446.45V443.312C601.253 442.866 601.091 442.551 600.768 442.369C600.449 442.187 600.038 442.096 599.537 442.096C599.027 442.096 598.612 442.187 598.293 442.369C597.979 442.551 597.821 442.866 597.821 443.312V446.45C597.821 446.897 597.979 447.211 598.293 447.394C598.612 447.571 599.027 447.66 599.537 447.66ZM604.821 441.248H606.106V441.952C606.321 441.706 606.59 441.506 606.913 441.351C607.237 441.191 607.66 441.111 608.185 441.111C608.745 441.111 609.196 441.2 609.538 441.378C609.884 441.551 610.142 441.779 610.311 442.062C610.625 441.752 610.967 441.517 611.336 441.357C611.71 441.193 612.159 441.111 612.683 441.111C613.28 441.111 613.751 441.209 614.098 441.405C614.444 441.597 614.69 441.854 614.836 442.178C614.986 442.497 615.062 442.848 615.062 443.23V448.494H613.776V443.155C613.776 442.795 613.651 442.529 613.4 442.355C613.15 442.182 612.801 442.096 612.354 442.096C611.726 442.096 611.277 442.214 611.008 442.451C610.739 442.688 610.604 442.982 610.604 443.333V448.494H609.319V443.155C609.319 442.795 609.187 442.529 608.923 442.355C608.659 442.182 608.303 442.096 607.856 442.096C607.228 442.096 606.779 442.214 606.51 442.451C606.241 442.688 606.106 442.982 606.106 443.333V448.494H604.821V441.248ZM617.276 445.938V443.415C617.276 442.731 617.511 442.178 617.98 441.754C618.45 441.326 619.204 441.111 620.243 441.111C621.237 441.111 621.968 441.307 622.438 441.699C622.907 442.087 623.142 442.624 623.142 443.312V445.035H618.562V446.054C618.562 446.642 618.678 447.056 618.91 447.298C619.147 447.539 619.607 447.66 620.291 447.66C620.697 447.66 621.016 447.646 621.248 447.619C621.485 447.587 621.658 447.496 621.768 447.346C621.882 447.191 621.957 446.931 621.993 446.566H623.128C623.069 447.136 622.943 447.571 622.752 447.872C622.565 448.168 622.276 448.371 621.884 448.48C621.492 448.59 620.961 448.645 620.291 448.645C619.211 448.645 618.438 448.419 617.974 447.968C617.509 447.517 617.276 446.84 617.276 445.938ZM621.897 444.167V443.176C621.897 442.738 621.745 442.449 621.439 442.308C621.139 442.166 620.74 442.096 620.243 442.096C619.733 442.096 619.325 442.185 619.02 442.362C618.714 442.54 618.562 442.852 618.562 443.299V444.167H621.897ZM625.315 441.248H626.601V442.273C626.705 442 626.895 441.781 627.168 441.617C627.446 441.449 627.76 441.328 628.111 441.255C628.462 441.182 628.797 441.146 629.116 441.146L629.075 442.246C628.665 442.246 628.271 442.303 627.893 442.417C627.514 442.526 627.204 442.67 626.963 442.848C626.721 443.025 626.601 443.217 626.601 443.422V448.494H625.315V441.248ZM634.489 438.609H640.102V439.635H635.863V442.93H639.855V443.955H635.863V448.494H634.489V438.609ZM641.94 445.938V443.415C641.94 442.731 642.175 442.178 642.645 441.754C643.114 441.326 643.868 441.111 644.907 441.111C645.901 441.111 646.632 441.307 647.102 441.699C647.571 442.087 647.806 442.624 647.806 443.312V445.035H643.226V446.054C643.226 446.642 643.342 447.056 643.574 447.298C643.811 447.539 644.271 447.66 644.955 447.66C645.361 447.66 645.68 447.646 645.912 447.619C646.149 447.587 646.322 447.496 646.432 447.346C646.546 447.191 646.621 446.931 646.657 446.566H647.792C647.733 447.136 647.607 447.571 647.416 447.872C647.229 448.168 646.94 448.371 646.548 448.48C646.156 448.59 645.625 448.645 644.955 448.645C643.875 448.645 643.103 448.419 642.638 447.968C642.173 447.517 641.94 446.84 641.94 445.938ZM646.562 444.167V443.176C646.562 442.738 646.409 442.449 646.104 442.308C645.803 442.166 645.404 442.096 644.907 442.096C644.397 442.096 643.989 442.185 643.684 442.362C643.378 442.54 643.226 442.852 643.226 443.299V444.167H646.562ZM649.72 445.938V443.415C649.72 442.731 649.954 442.178 650.424 441.754C650.893 441.326 651.647 441.111 652.687 441.111C653.68 441.111 654.411 441.307 654.881 441.699C655.35 442.087 655.585 442.624 655.585 443.312V445.035H651.005V446.054C651.005 446.642 651.121 447.056 651.354 447.298C651.59 447.539 652.051 447.66 652.734 447.66C653.14 447.66 653.459 447.646 653.691 447.619C653.928 447.587 654.102 447.496 654.211 447.346C654.325 447.191 654.4 446.931 654.437 446.566H655.571C655.512 447.136 655.387 447.571 655.195 447.872C655.008 448.168 654.719 448.371 654.327 448.48C653.935 448.59 653.404 448.645 652.734 448.645C651.654 448.645 650.882 448.419 650.417 447.968C649.952 447.517 649.72 446.84 649.72 445.938ZM654.341 444.167V443.176C654.341 442.738 654.188 442.449 653.883 442.308C653.582 442.166 653.183 442.096 652.687 442.096C652.176 442.096 651.768 442.185 651.463 442.362C651.158 442.54 651.005 442.852 651.005 443.299V444.167H654.341ZM657.499 446.204V443.47C657.499 442.741 657.741 442.166 658.224 441.747C658.707 441.323 659.475 441.111 660.527 441.111C660.755 441.111 661.024 441.136 661.334 441.187C661.644 441.237 661.91 441.303 662.134 441.385V438.206H663.419V448.494H662.544L662.332 448.016C662.122 448.18 661.835 448.326 661.471 448.453C661.111 448.581 660.744 448.645 660.37 448.645C659.677 448.645 659.119 448.537 658.695 448.323C658.276 448.109 657.971 447.82 657.779 447.455C657.592 447.086 657.499 446.669 657.499 446.204ZM662.134 447.202V442.396C661.942 442.305 661.703 442.232 661.416 442.178C661.133 442.123 660.842 442.096 660.541 442.096C660.035 442.096 659.616 442.189 659.283 442.376C658.951 442.563 658.784 442.88 658.784 443.326V446.3C658.784 446.751 658.944 447.086 659.263 447.305C659.586 447.523 659.983 447.633 660.452 447.633C660.817 447.633 661.152 447.583 661.457 447.482C661.762 447.382 661.988 447.289 662.134 447.202ZM668.97 448.645C668.541 448.645 668.165 448.569 667.842 448.419C667.523 448.264 667.268 448.127 667.076 448.009L666.912 448.494H665.962V438.206H667.247V441.59C667.479 441.458 667.771 441.346 668.122 441.255C668.473 441.159 668.842 441.111 669.229 441.111C670.123 441.111 670.793 441.332 671.239 441.774C671.686 442.216 671.909 442.779 671.909 443.463V446.088C671.909 446.571 671.795 447.006 671.567 447.394C671.34 447.781 671.007 448.086 670.569 448.31C670.132 448.533 669.599 448.645 668.97 448.645ZM668.778 447.633C669.284 447.633 669.717 447.51 670.077 447.264C670.442 447.013 670.624 446.667 670.624 446.225V443.367C670.624 442.934 670.483 442.615 670.2 442.41C669.922 442.201 669.546 442.096 669.072 442.096C668.771 442.096 668.452 442.144 668.115 442.239C667.778 442.335 667.489 442.438 667.247 442.547V447.209C667.434 447.314 667.66 447.412 667.924 447.503C668.188 447.59 668.473 447.633 668.778 447.633ZM676.1 448.645C675.566 448.645 675.131 448.553 674.794 448.371C674.461 448.184 674.215 447.94 674.056 447.64C673.901 447.334 673.823 447.008 673.823 446.662C673.823 446.298 673.894 445.992 674.035 445.746C674.181 445.495 674.452 445.27 674.849 445.069C675.25 444.864 675.835 444.65 676.605 444.427C677.007 444.308 677.328 444.203 677.569 444.112C677.811 444.021 677.986 443.905 678.096 443.764C678.205 443.622 678.26 443.42 678.26 443.155C678.26 442.959 678.228 442.782 678.164 442.622C678.105 442.463 677.979 442.335 677.788 442.239C677.601 442.144 677.314 442.096 676.927 442.096C676.444 442.096 676.09 442.146 675.867 442.246C675.644 442.346 675.5 442.479 675.437 442.643C675.377 442.802 675.348 442.98 675.348 443.176V443.497H674.11V443.169C674.11 442.453 674.35 441.932 674.828 441.604C675.307 441.275 676.02 441.111 676.968 441.111C677.925 441.111 678.592 441.335 678.971 441.781C679.354 442.228 679.545 442.825 679.545 443.572V446.662C679.545 447.045 679.593 447.291 679.688 447.4C679.789 447.51 679.994 447.564 680.304 447.564L680.153 448.549H679.894C679.41 448.549 679.062 448.455 678.848 448.269C678.633 448.077 678.472 447.811 678.362 447.469C678.257 447.633 678.112 447.806 677.925 447.988C677.743 448.171 677.503 448.326 677.207 448.453C676.915 448.581 676.546 448.645 676.1 448.645ZM676.257 447.688C676.517 447.688 676.788 447.633 677.07 447.523C677.353 447.41 677.604 447.261 677.822 447.079C678.046 446.892 678.191 446.687 678.26 446.464V444.557C678.16 444.657 677.984 444.789 677.733 444.953C677.487 445.113 677.134 445.258 676.674 445.391C676.113 445.55 675.701 445.714 675.437 445.883C675.177 446.051 675.047 446.298 675.047 446.621C675.047 446.986 675.14 447.255 675.327 447.428C675.519 447.601 675.828 447.688 676.257 447.688ZM684.891 448.645C684.171 448.645 683.594 448.531 683.161 448.303C682.733 448.07 682.423 447.765 682.231 447.387C682.04 447.004 681.944 446.589 681.944 446.143V443.381C681.944 442.697 682.204 442.148 682.724 441.733C683.248 441.319 683.959 441.111 684.856 441.111C685.435 441.111 685.939 441.18 686.367 441.316C686.796 441.449 687.126 441.69 687.358 442.041C687.595 442.392 687.714 442.893 687.714 443.545L686.49 443.661C686.49 443.219 686.44 442.886 686.34 442.663C686.24 442.44 686.073 442.289 685.841 442.212C685.608 442.134 685.292 442.096 684.891 442.096C684.339 442.096 683.924 442.196 683.646 442.396C683.368 442.592 683.229 442.932 683.229 443.415V446.252C683.229 446.771 683.375 447.136 683.667 447.346C683.963 447.555 684.371 447.66 684.891 447.66C685.314 447.66 685.636 447.631 685.854 447.571C686.078 447.507 686.235 447.384 686.326 447.202C686.417 447.015 686.479 446.74 686.511 446.375H687.7C687.655 446.931 687.536 447.375 687.345 447.708C687.153 448.041 686.859 448.28 686.463 448.426C686.071 448.572 685.547 448.645 684.891 448.645ZM689.765 438.206H691.05V444.912L694.516 441.248H695.924L692.978 444.434L696.218 448.494H694.734L692.137 445.131L691.05 446.211V448.494H689.765V438.206Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <path
        d="M532.735 356.607L529.849 359.494L532.735 362.381L535.622 359.494L532.735 356.607ZM533.235 423.994V359.494H532.235V423.994H533.235Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <g opacity="0.47">
        <path
          d="M453.044 404.52C451.365 404.52 450 403.159 450 401.476C450 400.618 450.354 399.843 450.928 399.289L481.616 368.601L450.928 337.928C450.165 337.189 449.827 336.084 450.09 335.01C450.425 333.653 451.644 332.698 453.044 332.698C492.947 332.698 529.77 313.792 562.495 276.513C578.483 258.3 589.778 239.76 596.44 227.411C596.971 226.428 597.997 225.814 599.118 225.814H599.893C599.932 225.814 599.972 225.811 600.015 225.811L640.881 225C642.419 224.977 643.744 226.098 643.957 227.628L650.591 275.899C650.698 276.592 650.56 277.319 650.178 277.944C649.372 279.258 648.511 280.642 647.61 282.066L647.378 282.436C646.537 283.761 645.656 285.134 644.751 286.514L644.401 287.049C643.473 288.465 642.545 289.861 641.636 291.198L641.298 291.694C640.217 293.291 639.222 294.73 638.262 296.095C631.8 305.301 624.957 314.091 617.921 322.225C571.34 376.058 514.326 404.516 453.04 404.516L453.044 404.52ZM460.202 338.589L488.074 366.446C488.644 367.016 488.967 367.791 488.967 368.597C488.967 369.403 488.648 370.178 488.074 370.748L460.54 398.282C517.165 396.048 569.846 368.491 613.324 318.244C620.226 310.269 626.943 301.64 633.283 292.598C634.223 291.257 635.198 289.845 636.264 288.276L636.598 287.784C637.487 286.471 638.4 285.098 639.312 283.706L639.658 283.179C640.547 281.822 641.412 280.473 642.242 279.168L642.47 278.806C643.143 277.74 643.799 276.69 644.421 275.683L638.297 231.132L600.939 231.871C594.037 244.464 582.765 262.642 567.069 280.521C535.083 316.955 499.165 336.461 460.198 338.581L460.202 338.589Z"
          fill="url(#paint11_linear_110_1597)"
        />
      </g>
      <g opacity="0.8">
        <path
          d="M457.983 402.945L490.858 370.071L457.983 337.212C498.799 337.212 536.393 317.956 569.724 279.988C586.061 261.378 597.537 242.414 604.058 230.324H605.025H605.021L605.029 230.32L645.884 229.51L645.998 230.324L652.526 277.821C651.708 279.159 650.855 280.527 649.978 281.908C649.903 282.03 649.824 282.148 649.75 282.27C648.908 283.599 648.039 284.948 647.146 286.316C647.032 286.493 646.914 286.67 646.796 286.847C645.907 288.204 644.995 289.573 644.055 290.961C643.945 291.126 643.831 291.291 643.717 291.457C642.741 292.896 641.742 294.347 640.712 295.818C634.856 304.16 628.15 312.934 620.56 321.704C574.577 374.849 518.357 402.941 457.979 402.941"
          fill="url(#paint12_linear_110_1597)"
        />
        <path
          d="M457.983 402.945L490.858 370.071L457.983 337.212C498.799 337.212 536.393 317.956 569.724 279.988C586.061 261.378 597.537 242.414 604.058 230.324H605.025H605.021L605.029 230.32L645.884 229.51L645.998 230.324L652.526 277.821C651.708 279.159 650.855 280.527 649.978 281.908C649.903 282.03 649.824 282.148 649.75 282.27C648.908 283.599 648.039 284.948 647.146 286.316C647.032 286.493 646.914 286.67 646.796 286.847C645.907 288.204 644.995 289.573 644.055 290.961C643.945 291.126 643.831 291.291 643.717 291.457C642.741 292.896 641.742 294.347 640.712 295.818C634.856 304.16 628.15 312.934 620.56 321.704C574.577 374.849 518.357 402.941 457.979 402.941"
          stroke="#ffffff"
          stroke-opacity="0.7"
          stroke-width="15.47"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g opacity="0.27">
        <path
          d="M459.126 402.182C458.918 402.182 458.745 402.013 458.745 401.805C458.745 401.695 458.792 401.592 458.87 401.526L491.466 368.93L458.867 336.346C458.768 336.252 458.725 336.114 458.76 335.981C458.804 335.811 458.953 335.69 459.126 335.69C499.827 335.69 537.327 316.481 570.579 278.6C586.732 260.198 598.141 241.474 604.866 229.007C604.933 228.885 605.059 228.806 605.2 228.806H606.097C606.097 228.806 606.128 228.802 606.144 228.802L647.014 227.992C647.014 227.992 647.018 227.992 647.022 227.992C647.211 227.992 647.372 228.134 647.4 228.319L654.038 276.61C654.054 276.701 654.038 276.795 653.991 276.882C653.193 278.183 652.336 279.56 651.443 280.972L651.215 281.334C650.377 282.651 649.5 284.016 648.607 285.384L648.257 285.915C647.302 287.37 646.405 288.719 645.516 290.033L645.178 290.529C644.1 292.117 643.113 293.545 642.169 294.894C635.759 304.026 628.97 312.749 621.994 320.812C575.936 374.043 519.617 402.182 459.126 402.182ZM460.042 336.445L492.272 368.659C492.343 368.729 492.382 368.828 492.382 368.926C492.382 369.024 492.343 369.123 492.272 369.194L460.046 401.419C519.96 401.136 575.739 373.107 621.419 320.316C628.381 312.273 635.153 303.574 641.548 294.457C642.492 293.112 643.475 291.689 644.552 290.1L644.887 289.608C645.776 288.295 646.672 286.95 647.624 285.498L647.974 284.967C648.867 283.603 649.74 282.242 650.574 280.928L650.802 280.567C651.667 279.198 652.497 277.865 653.276 276.602L646.7 228.755L606.243 229.557C606.219 229.561 606.195 229.565 606.172 229.565H605.432C598.676 242.068 587.27 260.745 571.157 279.1C538 316.871 500.626 336.161 460.046 336.445H460.042Z"
          fill="url(#paint13_linear_110_1597)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint11_linear_110_1597"
          x1="450"
          y1="314.76"
          x2="650.627"
          y2="314.76"
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
          id="paint12_linear_110_1597"
          x1="646.5"
          y1="230"
          x2="483.5"
          y2="365.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#ffffff" : COLOR} />
          <stop
            offset="0.839617"
            stop-color={!mouseIn ? "#ffffff" : COLOR}
            stop-opacity="0.27"
          />
        </linearGradient>
        <linearGradient
          id="paint13_linear_110_1597"
          x1="458.745"
          y1="315.085"
          x2="654.042"
          y2="315.085"
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

export default Seven;