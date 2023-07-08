import styled from 'styled-components';

type SpanProps = {
    color?: string
}

export const Span = styled.span<SpanProps>`
  color: ${({color = '#4bffa5'}) => color};
  font-weight: bold;
`
export const Badge = styled.span<SpanProps>`
  color: ${({color = '#4bffa5'}) => color};
  border: 2px solid #4bffa5;
  font-size: 1.6rem;
  padding: 10px;
`

export const Title1 = styled.h1`
  font-size: 4.6rem;
  line-height: 5.4rem;
  font-weight: 300;
  color: #fff;

  @media (max-width: 976px) {
    font-size: 3rem;
    line-height: 3.8rem;
  }

  @media (max-width: 576px) {
    font-size: 3rem;
    line-height: 3.8rem;
  }
`

export const Title2 = styled.h2`
  font-size: 3rem;
  line-height: 3.8rem;
  font-weight: 600;
  color: #fff;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`

export const Title3 = styled.h3`
  font-size: 2rem;
  line-height: 2.8rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
  
`

export const Text1 = styled.span`
  font-size: 18px;
  font-weight: 400;
`