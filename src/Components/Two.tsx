import { useState } from "react";
import { COLOR } from "../Mock";

const Two = () => {
  const [opacity, setOpacity] = useState("0.6");
  const [mouseIn, setMouseIn] = useState(false);

  const handleMouse = (action: "enter" | "leave") => (_e: any) => {
    setOpacity(action === "enter" ? "1" : "0.6");
    setMouseIn(action === "enter");
  };
  return (
    <g onMouseEnter={handleMouse("enter")} onMouseLeave={handleMouse("leave")}>
      <path
        d="M1060.26 178.741L1060.11 177.506L1063.93 173.358C1064.31 172.946 1064.62 172.595 1064.85 172.303C1065.08 172.006 1065.25 171.72 1065.36 171.444C1065.47 171.163 1065.52 170.842 1065.52 170.483C1065.52 169.759 1065.37 169.254 1065.05 168.967C1064.74 168.681 1064.24 168.538 1063.56 168.538C1063.01 168.538 1062.57 168.595 1062.24 168.709C1061.91 168.819 1061.67 169.032 1061.52 169.35C1061.38 169.663 1061.3 170.126 1061.3 170.741H1059.73C1059.73 169.496 1060.07 168.608 1060.73 168.077C1061.4 167.54 1062.3 167.272 1063.44 167.272C1064.26 167.272 1064.93 167.415 1065.45 167.702C1065.98 167.983 1066.37 168.366 1066.62 168.85C1066.88 169.329 1067.01 169.868 1067.01 170.467C1067.01 170.967 1066.94 171.405 1066.82 171.78C1066.7 172.15 1066.5 172.519 1066.22 172.889C1065.94 173.259 1065.56 173.696 1065.08 174.202L1061.94 177.522H1066.94V178.741H1060.26Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <rect
        x="1043.83"
        y="153.241"
        width="39"
        height="39"
        rx="19.5"
        stroke="#ffffff"
        stroke-opacity={opacity}
      />
      <path
        d="M1096.63 166.715H1098.52V158.875H1096.63V157.856H1101.77V158.875H1099.89V166.715H1101.77V167.741H1096.63V166.715ZM1104.34 160.495H1105.63V161.199C1105.84 160.953 1106.11 160.752 1106.44 160.597C1106.76 160.438 1107.18 160.358 1107.71 160.358C1108.27 160.358 1108.72 160.447 1109.06 160.625C1109.41 160.798 1109.67 161.026 1109.83 161.308C1110.15 160.998 1110.49 160.764 1110.86 160.604C1111.23 160.44 1111.68 160.358 1112.21 160.358C1112.8 160.358 1113.27 160.456 1113.62 160.652C1113.97 160.843 1114.21 161.101 1114.36 161.424C1114.51 161.743 1114.58 162.094 1114.58 162.477V167.741H1113.3V162.402C1113.3 162.042 1113.17 161.775 1112.92 161.602C1112.67 161.429 1112.32 161.342 1111.88 161.342C1111.25 161.342 1110.8 161.461 1110.53 161.698C1110.26 161.935 1110.13 162.229 1110.13 162.58V167.741H1108.84V162.402C1108.84 162.042 1108.71 161.775 1108.45 161.602C1108.18 161.429 1107.83 161.342 1107.38 161.342C1106.75 161.342 1106.3 161.461 1106.03 161.698C1105.76 161.935 1105.63 162.229 1105.63 162.58V167.741H1104.34V160.495ZM1117.06 170.53V160.495H1118.07L1118.22 161.042C1118.41 160.868 1118.69 160.711 1119.05 160.57C1119.41 160.429 1119.8 160.358 1120.22 160.358C1121.14 160.358 1121.83 160.583 1122.28 161.035C1122.74 161.486 1122.97 162.06 1122.97 162.757V165.389C1122.97 166.118 1122.72 166.718 1122.21 167.187C1121.72 167.656 1121 167.891 1120.05 167.891C1119.65 167.891 1119.3 167.848 1119.02 167.761C1118.74 167.679 1118.52 167.595 1118.34 167.508V170.53H1117.06ZM1119.97 166.907C1120.48 166.907 1120.89 166.788 1121.2 166.551C1121.52 166.31 1121.68 165.968 1121.68 165.526V162.655C1121.68 162.222 1121.52 161.896 1121.2 161.677C1120.89 161.454 1120.49 161.342 1120.02 161.342C1119.72 161.342 1119.45 161.395 1119.21 161.5C1118.97 161.6 1118.78 161.711 1118.62 161.834C1118.48 161.958 1118.39 162.049 1118.34 162.108V166.517C1118.51 166.608 1118.73 166.697 1119 166.784C1119.27 166.866 1119.6 166.907 1119.97 166.907ZM1125.28 165.293V157.453H1126.56V165.307C1126.56 165.699 1126.6 165.998 1126.67 166.203C1126.74 166.403 1126.88 166.54 1127.07 166.613C1127.26 166.681 1127.53 166.715 1127.89 166.715H1128.12L1127.97 167.795H1127.6C1127.07 167.795 1126.63 167.734 1126.29 167.611C1125.95 167.488 1125.69 167.246 1125.52 166.886C1125.36 166.526 1125.28 165.995 1125.28 165.293ZM1129.75 165.184V162.662C1129.75 161.978 1129.98 161.424 1130.45 161C1130.92 160.572 1131.67 160.358 1132.71 160.358C1133.71 160.358 1134.44 160.554 1134.91 160.946C1135.38 161.333 1135.61 161.871 1135.61 162.559V164.282H1131.03V165.3C1131.03 165.888 1131.15 166.303 1131.38 166.544C1131.62 166.786 1132.08 166.907 1132.76 166.907C1133.17 166.907 1133.49 166.893 1133.72 166.866C1133.96 166.834 1134.13 166.743 1134.24 166.592C1134.35 166.437 1134.43 166.178 1134.46 165.813H1135.6C1135.54 166.383 1135.41 166.818 1135.22 167.119C1135.04 167.415 1134.75 167.618 1134.35 167.727C1133.96 167.836 1133.43 167.891 1132.76 167.891C1131.68 167.891 1130.91 167.666 1130.44 167.214C1129.98 166.763 1129.75 166.086 1129.75 165.184ZM1134.37 163.414V162.422C1134.37 161.985 1134.22 161.695 1133.91 161.554C1133.61 161.413 1133.21 161.342 1132.71 161.342C1132.2 161.342 1131.8 161.431 1131.49 161.609C1131.18 161.787 1131.03 162.099 1131.03 162.545V163.414H1134.37ZM1137.79 160.495H1139.07V161.199C1139.29 160.953 1139.55 160.752 1139.88 160.597C1140.2 160.438 1140.63 160.358 1141.15 160.358C1141.71 160.358 1142.16 160.447 1142.5 160.625C1142.85 160.798 1143.11 161.026 1143.28 161.308C1143.59 160.998 1143.93 160.764 1144.3 160.604C1144.67 160.44 1145.12 160.358 1145.65 160.358C1146.24 160.358 1146.72 160.456 1147.06 160.652C1147.41 160.843 1147.65 161.101 1147.8 161.424C1147.95 161.743 1148.03 162.094 1148.03 162.477V167.741H1146.74V162.402C1146.74 162.042 1146.62 161.775 1146.37 161.602C1146.11 161.429 1145.77 161.342 1145.32 161.342C1144.69 161.342 1144.24 161.461 1143.97 161.698C1143.7 161.935 1143.57 162.229 1143.57 162.58V167.741H1142.28V162.402C1142.28 162.042 1142.15 161.775 1141.89 161.602C1141.62 161.429 1141.27 161.342 1140.82 161.342C1140.19 161.342 1139.74 161.461 1139.47 161.698C1139.21 161.935 1139.07 162.229 1139.07 162.58V167.741H1137.79V160.495ZM1150.24 165.184V162.662C1150.24 161.978 1150.48 161.424 1150.95 161C1151.41 160.572 1152.17 160.358 1153.21 160.358C1154.2 160.358 1154.93 160.554 1155.4 160.946C1155.87 161.333 1156.11 161.871 1156.11 162.559V164.282H1151.53V165.3C1151.53 165.888 1151.64 166.303 1151.88 166.544C1152.11 166.786 1152.57 166.907 1153.26 166.907C1153.66 166.907 1153.98 166.893 1154.21 166.866C1154.45 166.834 1154.62 166.743 1154.73 166.592C1154.85 166.437 1154.92 166.178 1154.96 165.813H1156.09C1156.03 166.383 1155.91 166.818 1155.72 167.119C1155.53 167.415 1155.24 167.618 1154.85 167.727C1154.46 167.836 1153.93 167.891 1153.26 167.891C1152.18 167.891 1151.4 167.666 1150.94 167.214C1150.47 166.763 1150.24 166.086 1150.24 165.184ZM1154.86 163.414V162.422C1154.86 161.985 1154.71 161.695 1154.4 161.554C1154.1 161.413 1153.7 161.342 1153.21 161.342C1152.7 161.342 1152.29 161.431 1151.98 161.609C1151.68 161.787 1151.53 162.099 1151.53 162.545V163.414H1154.86ZM1158.28 160.495H1159.57V161.199C1159.78 160.953 1160.06 160.752 1160.41 160.597C1160.75 160.438 1161.19 160.358 1161.71 160.358C1162.31 160.358 1162.79 160.456 1163.15 160.652C1163.51 160.843 1163.78 161.101 1163.94 161.424C1164.1 161.743 1164.19 162.094 1164.19 162.477V167.741H1162.9V162.402C1162.9 162.042 1162.76 161.775 1162.48 161.602C1162.19 161.429 1161.83 161.342 1161.38 161.342C1160.75 161.342 1160.29 161.461 1160 161.698C1159.71 161.935 1159.57 162.229 1159.57 162.58V167.741H1158.28V160.495ZM1167.15 165.669V161.465H1165.94V160.495H1167.19L1167.35 158.252H1168.43V160.495H1170.25V161.465H1168.43V165.587C1168.43 166.066 1168.57 166.374 1168.86 166.51C1169.14 166.647 1169.58 166.715 1170.2 166.715H1170.34L1170.2 167.795H1170.01C1169.02 167.795 1168.3 167.64 1167.84 167.331C1167.38 167.021 1167.15 166.467 1167.15 165.669ZM1172.49 160.495H1173.77V167.741H1172.49V160.495ZM1172.46 157.453H1173.79V158.875H1172.46V157.453ZM1176.42 160.495H1177.71V161.199C1177.92 160.953 1178.2 160.752 1178.55 160.597C1178.9 160.438 1179.33 160.358 1179.85 160.358C1180.45 160.358 1180.93 160.456 1181.29 160.652C1181.65 160.843 1181.92 161.101 1182.08 161.424C1182.25 161.743 1182.33 162.094 1182.33 162.477V167.741H1181.04V162.402C1181.04 162.042 1180.9 161.775 1180.62 161.602C1180.34 161.429 1179.97 161.342 1179.53 161.342C1178.9 161.342 1178.44 161.461 1178.15 161.698C1177.85 161.935 1177.71 162.229 1177.71 162.58V167.741H1176.42V160.495ZM1187.45 170.53C1186.96 170.53 1186.54 170.509 1186.19 170.468C1185.84 170.427 1185.53 170.357 1185.26 170.256L1185.55 169.292C1185.74 169.365 1186.02 169.427 1186.36 169.477C1186.71 169.527 1187.05 169.552 1187.39 169.552C1188.01 169.552 1188.46 169.42 1188.73 169.156C1189.01 168.891 1189.15 168.49 1189.15 167.953V166.948C1189.01 167.075 1188.83 167.178 1188.6 167.255C1188.37 167.328 1188.14 167.383 1187.9 167.419C1187.66 167.451 1187.46 167.467 1187.29 167.467C1186.37 167.467 1185.68 167.269 1185.22 166.873C1184.77 166.476 1184.54 165.902 1184.54 165.15V162.764C1184.54 162.035 1184.76 161.452 1185.21 161.014C1185.65 160.577 1186.35 160.358 1187.29 160.358C1187.54 160.358 1187.79 160.394 1188.05 160.467C1188.32 160.54 1188.55 160.631 1188.75 160.741C1188.95 160.85 1189.08 160.962 1189.15 161.076V160.495H1190.44V167.57C1190.44 168.135 1190.34 168.641 1190.16 169.087C1189.97 169.534 1189.66 169.885 1189.23 170.14C1188.79 170.4 1188.2 170.53 1187.45 170.53ZM1187.49 166.483C1187.97 166.483 1188.34 166.412 1188.6 166.271C1188.87 166.13 1189.05 166.018 1189.15 165.936V162.34C1189.15 162.026 1189.01 161.782 1188.74 161.609C1188.47 161.431 1188.05 161.342 1187.48 161.342C1186.98 161.342 1186.57 161.445 1186.27 161.65C1185.98 161.855 1185.83 162.181 1185.83 162.627V165.348C1185.83 165.781 1185.99 166.08 1186.31 166.244C1186.63 166.403 1187.02 166.483 1187.49 166.483ZM1196.6 167.741V157.856H1200.53C1201.44 157.856 1202.17 158.004 1202.72 158.3C1203.27 158.592 1203.66 158.988 1203.9 159.49C1204.15 159.991 1204.27 160.556 1204.27 161.185V164.446C1204.27 165.517 1203.96 166.335 1203.34 166.9C1202.73 167.46 1201.79 167.741 1200.54 167.741H1196.6ZM1197.98 166.715H1200.4C1200.88 166.715 1201.3 166.665 1201.67 166.565C1202.05 166.46 1202.35 166.255 1202.57 165.95C1202.79 165.644 1202.9 165.189 1202.9 164.583V161.103C1202.9 160.492 1202.79 160.03 1202.56 159.715C1202.34 159.396 1202.05 159.18 1201.67 159.066C1201.29 158.947 1200.87 158.888 1200.4 158.888H1197.98V166.715ZM1207.01 157.856H1213.18V158.881H1208.38V162.135H1212.62V163.161H1208.38V166.715H1213.26V167.741H1207.01V157.856ZM1214.8 167.262L1215.18 166.203C1215.29 166.253 1215.47 166.321 1215.73 166.408C1215.99 166.49 1216.29 166.565 1216.62 166.633C1216.96 166.697 1217.3 166.729 1217.63 166.729C1218.28 166.729 1218.75 166.563 1219.04 166.23C1219.34 165.893 1219.48 165.405 1219.48 164.767V158.984H1215.7V157.856H1220.86V164.794C1220.86 165.729 1220.6 166.474 1220.1 167.03C1219.59 167.581 1218.78 167.857 1217.67 167.857C1217.29 167.857 1216.9 167.823 1216.52 167.754C1216.13 167.691 1215.79 167.613 1215.48 167.522C1215.18 167.426 1214.95 167.34 1214.8 167.262ZM1223.52 164.33V163.352H1227.35V164.33H1223.52ZM1232.81 167.891C1232.38 167.891 1232 167.816 1231.68 167.666C1231.36 167.511 1231.1 167.374 1230.91 167.255L1230.75 167.741H1229.8V157.453H1231.08V160.836C1231.32 160.704 1231.61 160.593 1231.96 160.501C1232.31 160.406 1232.68 160.358 1233.07 160.358C1233.96 160.358 1234.63 160.579 1235.08 161.021C1235.52 161.463 1235.75 162.026 1235.75 162.709V165.334C1235.75 165.818 1235.63 166.253 1235.4 166.64C1235.18 167.028 1234.84 167.333 1234.41 167.556C1233.97 167.779 1233.43 167.891 1232.81 167.891ZM1232.61 166.879C1233.12 166.879 1233.55 166.756 1233.91 166.51C1234.28 166.26 1234.46 165.913 1234.46 165.471V162.614C1234.46 162.181 1234.32 161.862 1234.04 161.657C1233.76 161.447 1233.38 161.342 1232.91 161.342C1232.61 161.342 1232.29 161.39 1231.95 161.486C1231.61 161.582 1231.32 161.684 1231.08 161.793V166.456C1231.27 166.56 1231.5 166.658 1231.76 166.75C1232.02 166.836 1232.31 166.879 1232.61 166.879ZM1239.94 167.891C1239.4 167.891 1238.97 167.8 1238.63 167.618C1238.3 167.431 1238.05 167.187 1237.89 166.886C1237.74 166.581 1237.66 166.255 1237.66 165.909C1237.66 165.544 1237.73 165.239 1237.87 164.993C1238.02 164.742 1238.29 164.516 1238.68 164.316C1239.09 164.111 1239.67 163.897 1240.44 163.673C1240.84 163.555 1241.16 163.45 1241.41 163.359C1241.65 163.268 1241.82 163.152 1241.93 163.01C1242.04 162.869 1242.1 162.666 1242.1 162.402C1242.1 162.206 1242.06 162.028 1242 161.869C1241.94 161.709 1241.82 161.582 1241.62 161.486C1241.44 161.39 1241.15 161.342 1240.76 161.342C1240.28 161.342 1239.93 161.392 1239.7 161.493C1239.48 161.593 1239.34 161.725 1239.27 161.889C1239.21 162.049 1239.18 162.226 1239.18 162.422V162.744H1237.95V162.416C1237.95 161.7 1238.19 161.178 1238.66 160.85C1239.14 160.522 1239.86 160.358 1240.8 160.358C1241.76 160.358 1242.43 160.581 1242.81 161.028C1243.19 161.474 1243.38 162.071 1243.38 162.819V165.909C1243.38 166.292 1243.43 166.538 1243.52 166.647C1243.62 166.756 1243.83 166.811 1244.14 166.811L1243.99 167.795H1243.73C1243.25 167.795 1242.9 167.702 1242.68 167.515C1242.47 167.324 1242.31 167.057 1242.2 166.715C1242.09 166.879 1241.95 167.053 1241.76 167.235C1241.58 167.417 1241.34 167.572 1241.04 167.7C1240.75 167.827 1240.38 167.891 1239.94 167.891ZM1240.09 166.934C1240.35 166.934 1240.62 166.879 1240.91 166.77C1241.19 166.656 1241.44 166.508 1241.66 166.326C1241.88 166.139 1242.03 165.934 1242.1 165.71V163.803C1242 163.903 1241.82 164.036 1241.57 164.2C1241.32 164.359 1240.97 164.505 1240.51 164.637C1239.95 164.797 1239.54 164.961 1239.27 165.129C1239.01 165.298 1238.88 165.544 1238.88 165.868C1238.88 166.232 1238.98 166.501 1239.16 166.674C1239.35 166.847 1239.66 166.934 1240.09 166.934ZM1245.74 167.303L1246.05 166.36C1246.21 166.446 1246.49 166.56 1246.88 166.702C1247.27 166.838 1247.71 166.907 1248.21 166.907C1248.78 166.907 1249.16 166.802 1249.36 166.592C1249.56 166.383 1249.66 166.125 1249.66 165.82C1249.66 165.537 1249.62 165.314 1249.55 165.15C1249.47 164.986 1249.27 164.84 1248.92 164.712L1247.2 164.083C1246.68 163.892 1246.31 163.667 1246.1 163.407C1245.89 163.147 1245.79 162.792 1245.79 162.34C1245.79 161.73 1245.96 161.247 1246.29 160.891C1246.63 160.536 1247.25 160.358 1248.14 160.358C1248.65 160.358 1249.12 160.399 1249.54 160.481C1249.97 160.558 1250.31 160.65 1250.58 160.754L1250.29 161.739C1250.15 161.68 1249.97 161.62 1249.75 161.561C1249.52 161.502 1249.29 161.452 1249.05 161.411C1248.81 161.365 1248.58 161.342 1248.38 161.342C1247.79 161.342 1247.41 161.417 1247.24 161.568C1247.07 161.714 1246.98 161.951 1246.98 162.279C1246.98 162.502 1247.02 162.668 1247.11 162.778C1247.19 162.883 1247.36 162.983 1247.61 163.079L1249.31 163.742C1249.71 163.897 1250.02 164.063 1250.22 164.241C1250.43 164.414 1250.57 164.624 1250.65 164.87C1250.72 165.116 1250.76 165.428 1250.76 165.806C1250.76 166.184 1250.68 166.533 1250.52 166.852C1250.36 167.167 1250.11 167.419 1249.76 167.611C1249.41 167.798 1248.95 167.891 1248.38 167.891C1247.7 167.891 1247.14 167.816 1246.68 167.666C1246.22 167.515 1245.9 167.394 1245.74 167.303ZM1252.56 165.184V162.662C1252.56 161.978 1252.8 161.424 1253.27 161C1253.74 160.572 1254.49 160.358 1255.53 160.358C1256.52 160.358 1257.25 160.554 1257.72 160.946C1258.19 161.333 1258.43 161.871 1258.43 162.559V164.282H1253.85V165.3C1253.85 165.888 1253.96 166.303 1254.2 166.544C1254.43 166.786 1254.89 166.907 1255.58 166.907C1255.98 166.907 1256.3 166.893 1256.53 166.866C1256.77 166.834 1256.94 166.743 1257.05 166.592C1257.17 166.437 1257.24 166.178 1257.28 165.813H1258.41C1258.35 166.383 1258.23 166.818 1258.04 167.119C1257.85 167.415 1257.56 167.618 1257.17 167.727C1256.78 167.836 1256.25 167.891 1255.58 167.891C1254.5 167.891 1253.72 167.666 1253.26 167.214C1252.79 166.763 1252.56 166.086 1252.56 165.184ZM1257.18 163.414V162.422C1257.18 161.985 1257.03 161.695 1256.72 161.554C1256.42 161.413 1256.03 161.342 1255.53 161.342C1255.02 161.342 1254.61 161.431 1254.3 161.609C1254 161.787 1253.85 162.099 1253.85 162.545V163.414H1257.18ZM1260.34 165.451V162.716C1260.34 161.987 1260.58 161.413 1261.07 160.994C1261.55 160.57 1262.32 160.358 1263.37 160.358C1263.6 160.358 1263.87 160.383 1264.18 160.433C1264.49 160.483 1264.75 160.549 1264.98 160.631V157.453H1266.26V167.741H1265.39L1265.17 167.262C1264.96 167.426 1264.68 167.572 1264.31 167.7C1263.95 167.827 1263.59 167.891 1263.21 167.891C1262.52 167.891 1261.96 167.784 1261.54 167.57C1261.12 167.356 1260.81 167.066 1260.62 166.702C1260.43 166.333 1260.34 165.916 1260.34 165.451ZM1264.98 166.449V161.643C1264.78 161.552 1264.54 161.479 1264.26 161.424C1263.98 161.37 1263.68 161.342 1263.38 161.342C1262.88 161.342 1262.46 161.436 1262.12 161.623C1261.79 161.809 1261.63 162.126 1261.63 162.573V165.546C1261.63 165.998 1261.79 166.333 1262.1 166.551C1262.43 166.77 1262.82 166.879 1263.29 166.879C1263.66 166.879 1263.99 166.829 1264.3 166.729C1264.6 166.629 1264.83 166.535 1264.98 166.449ZM1100.54 187.891C1099.71 187.891 1099.04 187.807 1098.52 187.638C1098 187.47 1097.6 187.233 1097.32 186.927C1097.04 186.617 1096.85 186.25 1096.74 185.827C1096.63 185.403 1096.58 184.933 1096.58 184.418V181.315C1096.58 180.791 1096.63 180.31 1096.73 179.873C1096.83 179.431 1097.03 179.048 1097.3 178.724C1097.59 178.401 1097.99 178.15 1098.5 177.972C1099.02 177.794 1099.69 177.706 1100.52 177.706C1101.52 177.706 1102.29 177.826 1102.82 178.068C1103.35 178.305 1103.72 178.656 1103.92 179.121C1104.12 179.585 1104.22 180.157 1104.22 180.836V180.925L1102.92 181.042V180.857C1102.92 180.26 1102.84 179.816 1102.68 179.524C1102.53 179.232 1102.28 179.041 1101.93 178.95C1101.58 178.859 1101.11 178.813 1100.52 178.813C1099.94 178.813 1099.47 178.879 1099.09 179.011C1098.71 179.139 1098.43 179.367 1098.24 179.695C1098.05 180.018 1097.96 180.474 1097.96 181.062V184.63C1097.96 185.214 1098.06 185.66 1098.25 185.97C1098.44 186.28 1098.73 186.494 1099.11 186.613C1099.5 186.727 1099.98 186.784 1100.56 186.784C1101.14 186.784 1101.6 186.745 1101.94 186.667C1102.28 186.59 1102.53 186.415 1102.68 186.141C1102.84 185.863 1102.92 185.43 1102.92 184.842V184.678H1104.22V184.747C1104.22 185.243 1104.17 185.688 1104.08 186.08C1103.99 186.467 1103.81 186.795 1103.56 187.064C1103.3 187.333 1102.93 187.538 1102.44 187.679C1101.96 187.82 1101.33 187.891 1100.54 187.891ZM1108.99 187.891C1108.39 187.891 1107.91 187.793 1107.54 187.597C1107.18 187.401 1106.91 187.141 1106.74 186.818C1106.58 186.494 1106.49 186.141 1106.49 185.758V180.495H1107.78V185.765C1107.78 186.125 1107.91 186.405 1108.17 186.606C1108.44 186.806 1108.79 186.907 1109.24 186.907C1109.87 186.907 1110.34 186.77 1110.64 186.497C1110.95 186.223 1111.1 185.934 1111.1 185.628V180.495H1112.38V187.741H1111.24L1111.1 186.832C1110.92 187.155 1110.65 187.413 1110.3 187.604C1109.95 187.795 1109.51 187.891 1108.99 187.891ZM1114.63 187.303L1114.94 186.36C1115.1 186.446 1115.38 186.56 1115.77 186.702C1116.16 186.838 1116.6 186.907 1117.09 186.907C1117.66 186.907 1118.05 186.802 1118.25 186.592C1118.45 186.383 1118.55 186.125 1118.55 185.82C1118.55 185.537 1118.51 185.314 1118.43 185.15C1118.36 184.986 1118.15 184.84 1117.81 184.712L1116.09 184.083C1115.56 183.892 1115.2 183.667 1114.99 183.407C1114.78 183.147 1114.67 182.792 1114.67 182.34C1114.67 181.73 1114.84 181.247 1115.18 180.891C1115.52 180.536 1116.13 180.358 1117.03 180.358C1117.54 180.358 1118 180.399 1118.43 180.481C1118.86 180.558 1119.2 180.65 1119.47 180.754L1119.17 181.739C1119.04 181.68 1118.86 181.62 1118.63 181.561C1118.41 181.502 1118.18 181.452 1117.93 181.411C1117.69 181.365 1117.47 181.342 1117.26 181.342C1116.68 181.342 1116.3 181.417 1116.12 181.568C1115.95 181.714 1115.87 181.951 1115.87 182.279C1115.87 182.502 1115.91 182.668 1115.99 182.778C1116.08 182.883 1116.25 182.983 1116.49 183.079L1118.19 183.742C1118.6 183.897 1118.91 184.063 1119.11 184.241C1119.32 184.414 1119.46 184.624 1119.53 184.87C1119.61 185.116 1119.64 185.428 1119.64 185.806C1119.64 186.184 1119.56 186.533 1119.4 186.852C1119.25 187.167 1119 187.419 1118.65 187.611C1118.3 187.798 1117.84 187.891 1117.26 187.891C1116.59 187.891 1116.02 187.816 1115.56 187.666C1115.1 187.515 1114.79 187.394 1114.63 187.303ZM1122.19 185.669V181.465H1120.98V180.495H1122.24L1122.4 178.252H1123.48V180.495H1125.3V181.465H1123.48V185.587C1123.48 186.066 1123.62 186.374 1123.9 186.51C1124.18 186.647 1124.63 186.715 1125.24 186.715H1125.39L1125.25 187.795H1125.06C1124.07 187.795 1123.34 187.64 1122.88 187.331C1122.42 187.021 1122.19 186.467 1122.19 185.669ZM1130.14 187.891C1129.41 187.891 1128.83 187.793 1128.39 187.597C1127.95 187.397 1127.63 187.123 1127.43 186.777C1127.23 186.431 1127.14 186.034 1127.14 185.587V182.668C1127.14 182.222 1127.23 181.825 1127.43 181.479C1127.63 181.128 1127.95 180.855 1128.39 180.659C1128.83 180.458 1129.41 180.358 1130.14 180.358C1130.86 180.358 1131.44 180.458 1131.87 180.659C1132.32 180.855 1132.64 181.128 1132.84 181.479C1133.04 181.825 1133.14 182.222 1133.14 182.668V185.587C1133.14 186.034 1133.04 186.431 1132.84 186.777C1132.64 187.123 1132.32 187.397 1131.87 187.597C1131.44 187.793 1130.86 187.891 1130.14 187.891ZM1130.14 186.907C1130.64 186.907 1131.05 186.818 1131.37 186.64C1131.69 186.458 1131.85 186.143 1131.85 185.697V182.559C1131.85 182.112 1131.69 181.798 1131.37 181.616C1131.05 181.433 1130.64 181.342 1130.14 181.342C1129.63 181.342 1129.21 181.433 1128.89 181.616C1128.58 181.798 1128.42 182.112 1128.42 182.559V185.697C1128.42 186.143 1128.58 186.458 1128.89 186.64C1129.21 186.818 1129.63 186.907 1130.14 186.907ZM1135.42 180.495H1136.71V181.199C1136.92 180.953 1137.19 180.752 1137.51 180.597C1137.84 180.438 1138.26 180.358 1138.78 180.358C1139.34 180.358 1139.8 180.447 1140.14 180.625C1140.48 180.798 1140.74 181.026 1140.91 181.308C1141.22 180.998 1141.57 180.764 1141.94 180.604C1142.31 180.44 1142.76 180.358 1143.28 180.358C1143.88 180.358 1144.35 180.456 1144.7 180.652C1145.04 180.843 1145.29 181.101 1145.44 181.424C1145.59 181.743 1145.66 182.094 1145.66 182.477V187.741H1144.38V182.402C1144.38 182.042 1144.25 181.775 1144 181.602C1143.75 181.429 1143.4 181.342 1142.95 181.342C1142.33 181.342 1141.88 181.461 1141.61 181.698C1141.34 181.935 1141.2 182.229 1141.2 182.58V187.741H1139.92V182.402C1139.92 182.042 1139.79 181.775 1139.52 181.602C1139.26 181.429 1138.9 181.342 1138.46 181.342C1137.83 181.342 1137.38 181.461 1137.11 181.698C1136.84 181.935 1136.71 182.229 1136.71 182.58V187.741H1135.42V180.495ZM1147.88 185.184V182.662C1147.88 181.978 1148.11 181.424 1148.58 181C1149.05 180.572 1149.8 180.358 1150.84 180.358C1151.84 180.358 1152.57 180.554 1153.04 180.946C1153.51 181.333 1153.74 181.871 1153.74 182.559V184.282H1149.16V185.3C1149.16 185.888 1149.28 186.303 1149.51 186.544C1149.75 186.786 1150.21 186.907 1150.89 186.907C1151.3 186.907 1151.62 186.893 1151.85 186.866C1152.08 186.834 1152.26 186.743 1152.37 186.592C1152.48 186.437 1152.56 186.178 1152.59 185.813H1153.73C1153.67 186.383 1153.54 186.818 1153.35 187.119C1153.16 187.415 1152.88 187.618 1152.48 187.727C1152.09 187.836 1151.56 187.891 1150.89 187.891C1149.81 187.891 1149.04 187.666 1148.57 187.214C1148.11 186.763 1147.88 186.086 1147.88 185.184ZM1152.5 183.414V182.422C1152.5 181.985 1152.34 181.695 1152.04 181.554C1151.74 181.413 1151.34 181.342 1150.84 181.342C1150.33 181.342 1149.92 181.431 1149.62 181.609C1149.31 181.787 1149.16 182.099 1149.16 182.545V183.414H1152.5ZM1155.92 180.495H1157.2V181.52C1157.31 181.247 1157.49 181.028 1157.77 180.864C1158.05 180.695 1158.36 180.574 1158.71 180.501C1159.06 180.429 1159.4 180.392 1159.72 180.392L1159.67 181.493C1159.26 181.493 1158.87 181.55 1158.49 181.664C1158.11 181.773 1157.8 181.917 1157.56 182.094C1157.32 182.272 1157.2 182.463 1157.2 182.668V187.741H1155.92V180.495ZM1165.09 177.856H1171.26V178.881H1166.46V182.135H1170.7V183.161H1166.46V186.715H1171.34V187.741H1165.09V177.856ZM1172.62 187.741L1175.11 184.042L1172.66 180.495H1174.02L1175.86 183.154L1177.63 180.495H1178.99L1176.5 184.097L1179.02 187.741H1177.66L1175.77 185L1173.99 187.741H1172.62ZM1180.67 190.53V180.495H1181.69L1181.84 181.042C1182.03 180.868 1182.3 180.711 1182.66 180.57C1183.03 180.429 1183.42 180.358 1183.83 180.358C1184.76 180.358 1185.45 180.583 1185.9 181.035C1186.35 181.486 1186.58 182.06 1186.58 182.757V185.389C1186.58 186.118 1186.33 186.718 1185.83 187.187C1185.33 187.656 1184.61 187.891 1183.67 187.891C1183.26 187.891 1182.92 187.848 1182.64 187.761C1182.36 187.679 1182.13 187.595 1181.96 187.508V190.53H1180.67ZM1183.59 186.907C1184.09 186.907 1184.5 186.788 1184.82 186.551C1185.14 186.31 1185.3 185.968 1185.3 185.526V182.655C1185.3 182.222 1185.14 181.896 1184.82 181.677C1184.5 181.454 1184.11 181.342 1183.63 181.342C1183.33 181.342 1183.06 181.395 1182.82 181.5C1182.58 181.6 1182.39 181.711 1182.24 181.834C1182.09 181.958 1182 182.049 1181.96 182.108V186.517C1182.12 186.608 1182.34 186.697 1182.62 186.784C1182.89 186.866 1183.21 186.907 1183.59 186.907ZM1188.6 185.184V182.662C1188.6 181.978 1188.84 181.424 1189.31 181C1189.78 180.572 1190.53 180.358 1191.57 180.358C1192.56 180.358 1193.3 180.554 1193.77 180.946C1194.24 181.333 1194.47 181.871 1194.47 182.559V184.282H1189.89V185.3C1189.89 185.888 1190.01 186.303 1190.24 186.544C1190.48 186.786 1190.94 186.907 1191.62 186.907C1192.02 186.907 1192.34 186.893 1192.58 186.866C1192.81 186.834 1192.99 186.743 1193.1 186.592C1193.21 186.437 1193.28 186.178 1193.32 185.813H1194.46C1194.4 186.383 1194.27 186.818 1194.08 187.119C1193.89 187.415 1193.6 187.618 1193.21 187.727C1192.82 187.836 1192.29 187.891 1191.62 187.891C1190.54 187.891 1189.77 187.666 1189.3 187.214C1188.84 186.763 1188.6 186.086 1188.6 185.184ZM1193.23 183.414V182.422C1193.23 181.985 1193.07 181.695 1192.77 181.554C1192.47 181.413 1192.07 181.342 1191.57 181.342C1191.06 181.342 1190.65 181.431 1190.35 181.609C1190.04 181.787 1189.89 182.099 1189.89 182.545V183.414H1193.23ZM1196.64 180.495H1197.93V181.52C1198.03 181.247 1198.22 181.028 1198.5 180.864C1198.77 180.695 1199.09 180.574 1199.44 180.501C1199.79 180.429 1200.13 180.392 1200.44 180.392L1200.4 181.493C1199.99 181.493 1199.6 181.55 1199.22 181.664C1198.84 181.773 1198.53 181.917 1198.29 182.094C1198.05 182.272 1197.93 182.463 1197.93 182.668V187.741H1196.64V180.495ZM1202.24 180.495H1203.52V187.741H1202.24V180.495ZM1202.21 177.453H1203.54V178.875H1202.21V177.453ZM1205.91 185.184V182.662C1205.91 181.978 1206.15 181.424 1206.62 181C1207.09 180.572 1207.84 180.358 1208.88 180.358C1209.87 180.358 1210.6 180.554 1211.07 180.946C1211.54 181.333 1211.78 181.871 1211.78 182.559V184.282H1207.2V185.3C1207.2 185.888 1207.31 186.303 1207.55 186.544C1207.78 186.786 1208.24 186.907 1208.93 186.907C1209.33 186.907 1209.65 186.893 1209.88 186.866C1210.12 186.834 1210.29 186.743 1210.4 186.592C1210.52 186.437 1210.59 186.178 1210.63 185.813H1211.76C1211.71 186.383 1211.58 186.818 1211.39 187.119C1211.2 187.415 1210.91 187.618 1210.52 187.727C1210.13 187.836 1209.6 187.891 1208.93 187.891C1207.85 187.891 1207.08 187.666 1206.61 187.214C1206.15 186.763 1205.91 186.086 1205.91 185.184ZM1210.53 183.414V182.422C1210.53 181.985 1210.38 181.695 1210.08 181.554C1209.78 181.413 1209.38 181.342 1208.88 181.342C1208.37 181.342 1207.96 181.431 1207.66 181.609C1207.35 181.787 1207.2 182.099 1207.2 182.545V183.414H1210.53ZM1213.95 180.495H1215.24V181.199C1215.45 180.953 1215.73 180.752 1216.08 180.597C1216.42 180.438 1216.86 180.358 1217.38 180.358C1217.98 180.358 1218.46 180.456 1218.82 180.652C1219.18 180.843 1219.45 181.101 1219.61 181.424C1219.78 181.743 1219.86 182.094 1219.86 182.477V187.741H1218.57V182.402C1218.57 182.042 1218.43 181.775 1218.15 181.602C1217.87 181.429 1217.5 181.342 1217.06 181.342C1216.43 181.342 1215.97 181.461 1215.67 181.698C1215.38 181.935 1215.24 182.229 1215.24 182.58V187.741H1213.95V180.495ZM1225.02 187.891C1224.3 187.891 1223.72 187.777 1223.29 187.549C1222.86 187.317 1222.55 187.012 1222.36 186.633C1222.17 186.25 1222.07 185.836 1222.07 185.389V182.627C1222.07 181.944 1222.33 181.395 1222.85 180.98C1223.38 180.565 1224.09 180.358 1224.99 180.358C1225.56 180.358 1226.07 180.426 1226.5 180.563C1226.92 180.695 1227.25 180.937 1227.49 181.288C1227.72 181.639 1227.84 182.14 1227.84 182.792L1226.62 182.908C1226.62 182.466 1226.57 182.133 1226.47 181.91C1226.37 181.686 1226.2 181.536 1225.97 181.458C1225.74 181.381 1225.42 181.342 1225.02 181.342C1224.47 181.342 1224.05 181.443 1223.78 181.643C1223.5 181.839 1223.36 182.179 1223.36 182.662V185.499C1223.36 186.018 1223.5 186.383 1223.8 186.592C1224.09 186.802 1224.5 186.907 1225.02 186.907C1225.44 186.907 1225.76 186.877 1225.98 186.818C1226.21 186.754 1226.36 186.631 1226.46 186.449C1226.55 186.262 1226.61 185.986 1226.64 185.622H1227.83C1227.78 186.178 1227.67 186.622 1227.47 186.955C1227.28 187.287 1226.99 187.527 1226.59 187.672C1226.2 187.818 1225.68 187.891 1225.02 187.891ZM1229.63 185.184V182.662C1229.63 181.978 1229.87 181.424 1230.34 181C1230.81 180.572 1231.56 180.358 1232.6 180.358C1233.59 180.358 1234.33 180.554 1234.79 180.946C1235.26 181.333 1235.5 181.871 1235.5 182.559V184.282H1230.92V185.3C1230.92 185.888 1231.04 186.303 1231.27 186.544C1231.5 186.786 1231.96 186.907 1232.65 186.907C1233.05 186.907 1233.37 186.893 1233.61 186.866C1233.84 186.834 1234.02 186.743 1234.12 186.592C1234.24 186.437 1234.31 186.178 1234.35 185.813H1235.49C1235.43 186.383 1235.3 186.818 1235.11 187.119C1234.92 187.415 1234.63 187.618 1234.24 187.727C1233.85 187.836 1233.32 187.891 1232.65 187.891C1231.57 187.891 1230.8 187.666 1230.33 187.214C1229.87 186.763 1229.63 186.086 1229.63 185.184ZM1234.25 183.414V182.422C1234.25 181.985 1234.1 181.695 1233.8 181.554C1233.5 181.413 1233.1 181.342 1232.6 181.342C1232.09 181.342 1231.68 181.431 1231.38 181.609C1231.07 181.787 1230.92 182.099 1230.92 182.545V183.414H1234.25Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <path
        d="M959.448 172.741L962.335 175.627L965.222 172.741L962.335 169.854L959.448 172.741ZM962.335 173.241L1043.33 173.241V172.241L962.335 172.241V173.241Z"
        fill="#ffffff"
        fill-opacity={opacity}
      />
      <g opacity="0.47">
        <path
          d="M965.777 263.488C966.576 263.488 967.347 263.174 967.913 262.611L1001 229.957C1001.64 229.328 1001.96 228.462 1001.9 227.597C1001.9 227.55 1001.9 227.503 1001.9 227.452V227.235C1001.98 203.63 997.449 180.682 988.438 159.04C979.735 138.136 967.236 119.329 951.297 103.138C935.353 86.9463 916.766 74.1881 896.06 65.2251C874.61 55.9436 851.815 51.1573 828.312 51H828.292C827.494 51 826.723 51.3146 826.157 51.877C825.583 52.4434 825.256 53.2142 825.252 54.0244L825.245 55.2632C825.241 56.0773 825.559 56.86 826.137 57.4342L856.184 87.4655L826.015 117.634C825.15 118.5 824.887 119.801 825.351 120.938C825.815 122.071 826.912 122.818 828.139 122.83C884.67 123.365 930.366 170.146 930.095 227.153C930.039 228.006 930.342 228.863 930.964 229.493L963.622 262.584C964.188 263.158 964.959 263.484 965.769 263.488H965.789H965.777ZM995.816 226.523L965.809 256.142L936.485 226.429C936.407 226.189 936.304 225.965 936.171 225.753C935.718 168.423 891.34 121.194 835.214 117.037L862.634 89.6167C863.204 89.0465 863.527 88.2717 863.527 87.4655C863.527 86.6592 863.204 85.8844 862.634 85.3142L834.55 57.2414C855.012 58.1263 874.865 62.6806 893.645 70.8098C913.632 79.4621 931.569 91.7719 946.963 107.405C962.356 123.038 974.418 141.196 982.822 161.376C991.435 182.055 995.805 203.972 995.816 226.523Z"
          fill="url(#paint26_linear_110_1597)"
        />
      </g>
      <g opacity="0.8">
        <path
          d="M931.821 222.451L930.158 220.901C930.544 165.602 883.4 120.312 825.004 119.794L857.382 89.4166L825.122 59.1644L825.13 58C919.788 58.584 996.323 131.553 996 220.776C996 220.953 996.004 221.127 996 221.304L995.5 226.5L966 256L933.5 224L930.142 220.901H930.603"
          fill="url(#paint27_linear_110_1597)"
        />
        <path
          d="M931.821 222.451L930.158 220.901C930.544 165.602 883.4 120.312 825.004 119.794L857.382 89.4166L825.122 59.1644L825.13 58C919.788 58.584 996.323 131.553 996 220.776C996 220.953 996.004 221.127 996 221.304L995.5 226.5L966 256L933.5 224L930.142 220.901H930.603"
          stroke="url(#paint28_linear_110_1597)"
          stroke-width="15.47"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g opacity="0.27">
        <path
          d="M962.353 263.702C962.451 263.702 962.55 263.662 962.621 263.591L995.794 230.849C995.884 230.758 995.924 230.636 995.9 230.513C995.9 230.431 995.9 230.352 995.9 230.269V230.013C995.979 206.698 991.504 184.041 982.608 162.674C974.012 142.032 961.675 123.461 945.934 107.476C930.19 91.487 911.843 78.893 891.395 70.0449C870.221 60.8813 847.718 56.1576 824.513 56.0038C824.415 55.9841 824.316 56.0433 824.245 56.1142C824.174 56.1852 824.131 56.2798 824.131 56.3824L824.123 57.6244C824.123 57.7269 824.162 57.8255 824.233 57.8965L856.247 89.894L824.111 122.029C824.005 122.136 823.969 122.302 824.028 122.444C824.087 122.585 824.225 122.68 824.375 122.68C882.562 123.228 929.587 171.4 929.236 230.08C929.216 230.198 929.251 230.324 929.338 230.415L962.077 263.587C962.148 263.658 962.243 263.702 962.345 263.702H962.353ZM995.139 230.427L962.353 262.783L930.375 230.379C930.415 230.328 930.442 230.265 930.45 230.194C930.45 230.182 930.45 230.166 930.45 230.155C930.45 229.946 930.28 229.772 930.072 229.772H929.993C930.178 171.12 883.363 122.972 825.278 121.935L857.047 90.166C857.118 90.0951 857.157 89.9965 857.157 89.8979C857.157 89.7993 857.118 89.7008 857.047 89.6298L824.876 57.4746V56.7727C847.848 56.9738 870.122 61.6739 891.083 70.7467C911.437 79.5554 929.709 92.0942 945.382 108.016C961.056 123.934 973.342 142.423 981.898 162.974C990.758 184.25 995.21 206.804 995.131 230.017V230.281C995.131 230.328 995.131 230.379 995.131 230.427H995.139Z"
          fill="url(#paint29_linear_110_1597)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint26_linear_110_1597"
          x1="1001.91"
          y1="157.246"
          x2="825.119"
          y2="157.246"
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
          id="paint27_linear_110_1597"
          x1="862.462"
          y1="80.8601"
          x2="962.549"
          y2="232.553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#E1E1E1" : COLOR} stop-opacity="0.41" />
          <stop offset="0.994383" stop-color={!mouseIn ? "#ffffff" : COLOR} />
        </linearGradient>
        <linearGradient
          id="paint28_linear_110_1597"
          x1="911.5"
          y1="58"
          x2="966.394"
          y2="239.866"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={!mouseIn ? "#ffffff" : COLOR} />
          <stop
            offset="1"
            stop-color={!mouseIn ? "#626262" : COLOR}
            stop-opacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint29_linear_110_1597"
          x1="995.908"
          y1="159.851"
          x2="823.997"
          y2="159.851"
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

export default Two;