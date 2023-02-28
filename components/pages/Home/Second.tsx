import React from "react";
import styled from "styled-components";
import me from "@/public/junbeom.png";
import Image from "next/image";

const SecondStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: tan;
  .container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    p {
      margin: 0;
      color: #000000;
      font-weight: 600;
    }

    #name {
      margin-bottom: 1rem;
    }

    #job {
      font-size: 6rem;
    }
  }

  .me {
    position: absolute;
    bottom: 12%;
    right: 5%;
    width: 800px;
    height: 100vh;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 1400px) {
    .container {
      margin-top: 50px;
      width: 80%;
    }
    .me {
      width: 800px;
      height: 100vh;
      right: 0;
    }
  }

  @media (max-width: 1100px) {
    align-items: flex-start;
    .container {
      margin-top: 0;
      /* transform: translateY(150px); */
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1;
      #name {
        font-size: 0.8rem;
      }
      #job {
        font-size: 4rem;
      }
    }
    .me {
      width: 100%;
      height: 70vh;
    }
  }

  @media (max-width: 500px) {
    .container {
      min-width: 350px;
      #job {
        font-size: 2.5rem;
      }
    }
    .me {
      background-size: 70%;
      background-position: bottom;
    }
  }
`;

const HomeSecondPage = () => {
  return (
    <SecondStyle>
      <div className="container">
        <p id="name">JUNBEOM MOON</p>
        <div id="job">
          <p>I'm Junior </p>
          <p>front-end</p>
          <p>Developer ;</p>
        </div>
      </div>
      {/* <Image className="me" src={me} alt={"준범"} priority={true} /> */}
    </SecondStyle>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default React.memo(HomeSecondPage);
