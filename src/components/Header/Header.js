import styles from "./Header.module.css";
import Button from "../Button/Button";
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/"><div className={styles.logosvg}>
        <svg
          className={styles.logo}
          width="522"
          height="128"
          viewBox="0 0 522 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.path}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M73 28.0001C73 32.4184 69.4183 36.0001 65 36.0001H8C3.58172 36.0001 0 39.5819 0 44.0001V84.0001C0 88.4184 3.58172 92.0001 8 92.0001H65C69.4183 92.0001 73 95.5819 73 100V120C73 124.418 76.5817 128 81 128H143C147.418 128 151 124.418 151 120V100C151 95.5819 154.582 92.0001 159 92.0001H216C220.418 92.0001 224 88.4184 224 84.0001V44.0001C224 39.5819 220.418 36.0001 216 36.0001H159C154.582 36.0001 151 32.4184 151 28.0001V8C151 3.58173 147.418 0 143 0H81C76.5817 0 73 3.58172 73 8V28.0001ZM277.851 77.8777C277.851 78.9822 278.747 79.8777 279.851 79.8777H285.128C286.233 79.8777 287.128 78.9822 287.128 77.8777V56.7713C287.128 55.6667 288.024 54.7713 289.128 54.7713H304.275C306.835 54.7713 308.114 56.0266 308.114 58.5372V77.8777C308.114 78.9822 309.01 79.8777 310.114 79.8777H315.392C316.496 79.8777 317.392 78.9822 317.392 77.8777V57.4702C317.392 54.4993 316.517 52.1142 314.768 50.3149C313.062 48.4738 310.332 47.5532 306.579 47.5532H289.128C288.024 47.5532 287.128 46.6578 287.128 45.5532V37C287.128 35.8954 286.233 35 285.128 35H279.851C278.747 35 277.851 35.8954 277.851 37V77.8777ZM129.799 76.0489C132.998 78.8106 137.455 80.1915 143.171 80.1915H167.083C168.188 80.1915 169.083 79.2961 169.083 78.1915V74.9734C169.083 73.8688 168.188 72.9734 167.083 72.9734H143.171C139.639 72.9734 137.205 71.808 135.87 69.4773C135.231 68.3616 136.208 67.1362 137.494 67.1362H159.166C166.886 67.1362 170.747 63.8514 170.747 57.2819C170.747 54.0599 169.744 51.5911 167.74 49.8755C165.777 48.1181 162.92 47.2394 159.166 47.2394H143.171C137.455 47.2394 132.998 48.6411 129.799 51.4447C126.6 54.2064 125 58.3071 125 63.7468C125 69.1447 126.6 73.2454 129.799 76.0489ZM136.132 57.5248C137.532 55.4799 139.878 54.4574 143.171 54.4574H158.718C160.552 54.4574 161.469 55.3362 161.469 57.0936C161.469 57.9723 161.213 58.6628 160.702 59.1649C160.232 59.667 159.571 59.9181 158.718 59.9181H137.685C136.36 59.9181 135.383 58.6183 136.132 57.5248ZM176.736 76.658C175.724 77.9732 176.661 79.8777 178.321 79.8777H184.142C184.768 79.8777 185.357 79.5852 185.735 79.0872L194.068 68.1149C194.446 67.6169 195.035 67.3245 195.661 67.3245H198.29C198.911 67.3245 199.497 67.6127 199.875 68.1047L208.336 79.0975C208.714 79.5894 209.3 79.8777 209.921 79.8777H215.699C217.356 79.8777 218.295 77.9778 217.287 76.6619L208.331 64.9625C207.782 64.2451 207.782 63.2485 208.331 62.5311L217.287 50.8317C218.295 49.5158 217.356 47.616 215.699 47.616H209.921C209.3 47.616 208.714 47.9047 208.336 48.3974L199.939 59.3249C199.561 59.8176 198.975 60.1064 198.353 60.1064H195.658C195.034 60.1064 194.446 59.8155 194.068 59.3198L185.735 48.4025C185.357 47.9068 184.769 47.616 184.145 47.616H178.321C176.661 47.616 175.724 49.5204 176.736 50.8356L185.732 62.5271C186.285 63.2461 186.285 64.2475 185.732 64.9665L176.736 76.658ZM248.446 80.1915C242.73 80.1915 238.273 78.8106 235.074 76.0489C231.875 73.2454 230.275 69.1447 230.275 63.7468C230.275 58.3071 231.875 54.2064 235.074 51.4447C238.273 48.6411 242.73 47.2394 248.446 47.2394H267.88C268.984 47.2394 269.88 48.1348 269.88 49.2394V52.4574C269.88 53.562 268.984 54.4574 267.88 54.4574H248.446C245.673 54.4574 243.541 55.2106 242.048 56.717C240.597 58.2234 239.872 60.5667 239.872 63.7468C239.872 66.8851 240.597 69.2074 242.048 70.7138C243.541 72.2202 245.673 72.9734 248.446 72.9734H268.519C269.624 72.9734 270.519 73.8688 270.519 74.9734V78.1915C270.519 79.2961 269.624 80.1915 268.519 80.1915H248.446ZM335.412 79.8777C331.957 79.8777 329.313 79.0199 327.479 77.3043C325.645 75.5887 324.727 73.1408 324.727 69.9606C324.727 66.8223 325.645 64.3954 327.479 62.6798C329.313 60.9642 331.957 60.1064 335.412 60.1064H358.475C359.307 60.1064 359.981 59.4319 359.981 58.6C359.981 56.0475 358.702 54.7713 356.142 54.7713H331.014C329.91 54.7713 329.014 53.8758 329.014 52.7713V49.5532C329.014 48.4486 329.91 47.5532 331.014 47.5532H358.574C362.455 47.5532 365.206 48.4319 366.827 50.1894C368.448 51.905 369.259 54.3319 369.259 57.4702V77.8777C369.259 78.9822 368.363 79.8777 367.259 79.8777H335.412ZM337.076 72.6596H357.981C359.086 72.6596 359.981 71.7641 359.981 70.6596V69.3245C359.981 68.2199 359.086 67.3245 357.981 67.3245H337.076C336.265 67.3245 335.626 67.5755 335.156 68.0777C334.73 68.5379 334.517 69.1656 334.517 69.9606C334.517 70.7557 334.73 71.4043 335.156 71.9064C335.626 72.4085 336.265 72.6596 337.076 72.6596ZM378.879 77.8777C378.879 78.9822 379.775 79.8777 380.879 79.8777H386.157C387.261 79.8777 388.157 78.9822 388.157 77.8777V56.7713C388.157 55.6667 389.052 54.7713 390.157 54.7713H405.303C407.863 54.7713 409.142 56.0266 409.142 58.5372V77.8777C409.142 78.9822 410.038 79.8777 411.142 79.8777H416.42C417.524 79.8777 418.42 78.9822 418.42 77.8777V57.4702C418.42 54.4993 417.545 52.1142 415.796 50.3149C414.09 48.4738 411.36 47.5532 407.607 47.5532H380.879C379.775 47.5532 378.879 48.4486 378.879 49.5532V77.8777ZM437.481 94C436.376 94 435.481 93.1046 435.481 92V88.7819C435.481 87.6773 436.376 86.7819 437.481 86.7819H454.803C457.362 86.7819 458.642 85.5057 458.642 82.9532V81.8777C458.642 80.7731 457.747 79.8777 456.642 79.8777H444.566C438.85 79.8777 434.393 78.4968 431.194 75.7351C427.995 72.9734 426.395 68.9773 426.395 63.7468C426.395 58.4745 427.995 54.4574 431.194 51.6957C434.393 48.934 438.85 47.5532 444.566 47.5532H465.919C467.024 47.5532 467.919 48.4486 467.919 49.5532V84.083C467.919 87.0539 467.045 89.439 465.296 91.2383C463.547 93.0794 460.817 94 457.106 94H437.481ZM444.566 72.6596H456.642C457.747 72.6596 458.642 71.7641 458.642 70.6596V56.7713C458.642 55.6667 457.747 54.7713 456.642 54.7713H444.566C441.793 54.7713 439.661 55.5245 438.168 57.0308C436.718 58.4954 435.993 60.734 435.993 63.7468C435.993 66.7177 436.718 68.9564 438.168 70.4628C439.661 71.9273 441.793 72.6596 444.566 72.6596ZM481.052 76.0489C484.251 78.8106 488.708 80.1915 494.424 80.1915H518.336C519.441 80.1915 520.336 79.2961 520.336 78.1915V74.9734C520.336 73.8688 519.441 72.9734 518.336 72.9734H494.424C490.892 72.9734 488.458 71.808 487.123 69.4773C486.484 68.3616 487.461 67.1362 488.747 67.1362H510.419C518.14 67.1362 522 63.8514 522 57.2819C522 54.0599 520.998 51.5911 518.993 49.8755C517.031 48.1181 514.173 47.2394 510.419 47.2394H494.424C488.708 47.2394 484.251 48.6411 481.052 51.4447C477.853 54.2064 476.253 58.3071 476.253 63.7468C476.253 69.1447 477.853 73.2454 481.052 76.0489ZM487.385 57.5248C488.785 55.4799 491.131 54.4574 494.424 54.4574H509.971C511.806 54.4574 512.723 55.3362 512.723 57.0936C512.723 57.9723 512.467 58.6628 511.955 59.1649C511.486 59.667 510.825 59.9181 509.971 59.9181H488.938C487.613 59.9181 486.636 58.6183 487.385 57.5248Z"
            fill="#283489"
          />
        </svg>
      </div></Link>
      <div className={styles.nav}>
        <Button className="accent">Подключить кошелёк</Button>
        <Button className="outlined">EN</Button>
        <Button className="outlined">☀︎</Button>
      </div>
    </div>
  );
};

export default Header;
