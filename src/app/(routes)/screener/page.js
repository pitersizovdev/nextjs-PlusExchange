"use client";

import Chart from "@/components/Chart/Chart";
import styles from "./page.module.css";
import Screen from "@/components/Screener/Screener";
import {
  AdvancedChart,
  CryptocurrencyMarket,
  Timeline,
} from "react-tradingview-embed";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import News from "@/components/News/News";

export default function Screener() {
  return (
    <div className={styles.screener}>
      <div className={styles.chart}>
        <AdvancedChart
          widgetProps={{
            theme: "dark",
            allow_symbol_change: true,
            show_popup_button: true,
            popup_width: "1000",
            popup_height: "650",
          }}
        />
      </div>

      <div className={styles.market}>
        <div className={styles.leftPanel}>
          <CryptocurrencyMarket
            widgetProps={{
              theme: "dark",
              isTransparent: false,
              width: "100%",
            }}
          />
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.marketNews}>
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}
