import React from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Goal from "./Goal";
import Process from "./Process";
import Used from "./Used";
import Architecture from "./Architecture";

const S = {
  Container: styled.article`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    color: white;

    .intro {
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logo {
        display: block;
        width: 400px;
        height: 150px;
      }

      p {
        color: #ec6375;
        font-size: 2.5rem;
        font-family: Kcc;
      }
    }

    @media (max-width: 600px) {
      padding-top: 120px;
      .intro {
        height: 250px;
        .logo {
          width: 250px;
        }

        p {
          color: #ec6375;
          font-size: 1.5rem;
          font-family: Kcc;
        }
      }
    }
  `,
};

const RealTimeWork = () => {
  return (
    <S.Container>
      <div className="intro">
        <section className="logo" />
        <p>"실시간으로 빠르게 소통하는 업무 시스템"</p>
      </div>
      <Overview />
      <Goal />
      <Architecture />
      <Process />
      <Used />
    </S.Container>
  );
};

export default RealTimeWork;