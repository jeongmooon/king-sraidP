import React from 'react'
import styled from 'styled-components';


const DetailBlock = styled.div`
  max-width: 500px;
  margin: 0 auto;
  height: auto;
`;

const CoktailImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ChartWrap = styled.div`
  width: 100%;
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const MainContentWrap = styled.div`
  width: 85%;
  height: auto;
  margin: 0 auto;
  font-size: 12px;
  padding-bottom: 20px;
`;

function DetailComponent({ detailData }) {
    return (
        <DetailBlock>
            <MainTitle>{detailData.title}</MainTitle>
            <MainContentWrap>
                <div dangerouslySetInnerHTML={{__html:detailData.contents}} />
            </MainContentWrap>
        </DetailBlock>
    )
}

export default DetailComponent
