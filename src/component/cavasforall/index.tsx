import React from "react";
import Image from "next/image";
import CanvasImage from "../../../public/assets/images/Canvas for all.svg";
import styles from "./styles.module.scss";

const CanvasForAll = () => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col items-center">
        <Image src={CanvasImage} width={300} height={300} alt="canvasforAll" />
        <p style={{ fontSize: "1.4rem", paddingTop: "9px" }}>
          Explore untapped revenue avenues for your content.
        </p>
      </div>
      <div className={styles.card_grid}>
        <div className={styles.card_container}>
          <div className={styles.custom_element}>Canvas Free</div>
          <div
            style={{ padding: "50px 40px" }}
            className="flex flex-col items-center "
          >
            For all users who want to monetise and earn with their content
          </div>
          <div
            style={{ marginTop: "25px", marginBottom: "25px" }}
            className="flex flex-col items-center text-align-center "
          >
            <a
              href="#"
              style={{ borderRadius: "45px" }}
              className="gradient_text_btn font-large  m-5 px-8 lg:px-17 py-5 lg:py-4 "
            >
              Monetize Now
            </a>
          </div>
        </div>
        <div className={styles.card_container}>
          <div style={{background: 'rgba(240, 251, 255, 1)',borderRadius:'45px'}} className={styles.custom_element}>Canvas Free</div>
          <div
            style={{ padding: "50px 40px" }}
            className="flex flex-col items-center "
          >
            For all users who want to monetise and earn with their content
          </div>
          <div
            style={{ marginTop: "25px", marginBottom: "25px" }}
            className="flex flex-col items-center text-align-center "
          >
            <a
              href="#"
              style={{ borderRadius: "45px" }}
              className="gradient_text_btn font-large  m-5 px-8 lg:px-17 py-5 lg:py-4 "
            >
              Monetize Now
            </a>
          </div>
        </div>
        <div className={`${styles.card_container} `} >
          <div style={{background: 'rgba(255, 249, 239, 1)',borderRadius:'45px 45px 0px 45px'}} className={styles.custom_element}>Canvas Free</div>
          <div
            style={{ padding: "50px 40px" }}
            className="flex flex-col items-center "
          >
            For all users who want to monetise and earn with their content
          </div>
          <div
            style={{ marginTop: "25px", marginBottom: "25px" }}
            className="flex flex-col items-center text-align-center "
          >
            <a
              href="#"
              style={{ borderRadius: "45px" }}
              className="gradient_text_btn font-large  m-5 px-8 lg:px-17 py-5 lg:py-4 "
            >
              Monetize Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasForAll;
