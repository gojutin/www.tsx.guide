import React, { Fragment } from "react";
import styled from "styled-components";
import { useBaseUrl } from "../hooks";

type DataItem = {
  text: string;
  logo: string;
  url: string;
};

type Props = {
  data: DataItem[];
};

export const AboutSite = ({ data }: Props) => {
  const Container = styled.div`
    margin-top: 30px;
    padding: 20px;
  `;

  const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: -20px -25px;
  `;

  const ItemLabel = styled.h2`
    margin: 0px 40px;
    margin-top: -10px;
  `;

  const Line = styled.hr`
    display: inline-block;
    width: 2px;
    height: 40px;
    border-radius: 1px;
    background: lightgray;
    border: none;
    margin-left: 5px;
  `;

  const renderMap = data.map(({ text, logo, url }, index) => {
    const isLastItem = index === data.length - 1;
    return (
      <Fragment key={text}>
        <ItemWrapper>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={useBaseUrl(logo)} alt={text} height={60} />
          </a>
          <ItemLabel>{text}</ItemLabel>
        </ItemWrapper>
        {!isLastItem && <Line />}
      </Fragment>
    );
  });

  return <Container>{renderMap}</Container>;
};
