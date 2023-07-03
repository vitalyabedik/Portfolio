import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  padding: 100px 0;

  @media (max-width: 576px) {
    padding-top: 400px;
  }
`

export const SkillsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 60px;
  border: 1px solid;
  gap: 50px;
  
  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`

