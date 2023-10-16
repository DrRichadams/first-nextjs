import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <BannerContainer>
        <Banner_info>
            <Title>We have helped businesses stay afloat during difficult times.</Title>
            <Banner_msg>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae tenetur reiciendis 
                quis voluptates voluptatum aperiam natus quia, molestias blanditiis, totam fuga officiis 
                accusantium dignissimos. Iste minima omnis porro praesentium consequatur saepe vel, 
                repudiandae architecto deleniti. Corporis repellat esse, aspernatur eos obcaecati suscipit 
                doloribus distinctio ipsam perferendis modi aliquid cumque.
            </Banner_msg>
        </Banner_info>
        <Banner_btns>
            <CTA_btn>Get Started</CTA_btn>
            <CTA_btn>Continue with Google</CTA_btn>
        </Banner_btns>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
    // background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 150px;
    min-height: 100vh;
`;

const Title = styled.h1`
    font-size: 4rem;
    font-family: Inter;
    font-weight: black;
    background: linear-gradient(90deg, #00dbde, #fc00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 5rem;
    margin-bottom: 1rem;
`;

const Banner_msg = styled.p`
    font-size: 1rem;
    font-family: Roboto;
    // font-weight: light;
`;

const Banner_info = styled.div`
    // background-color: pink;
    // display: flex;
    // align-items: center;
    // padding: 50px 150px;
    // min-height: 100vh;
    max-width: 800px
`;

const Banner_btns = styled.div`
    // background-color: red;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const CTA_btn = styled.button`
    // background-color: red;
    display: flex;
    flex-direction: column;
    border: none;
    padding: 15px 12px;
    width: 100%;
    min-width: 230px;
    max-width: 400px;
    border-radius: 6px;
`;

export default Banner