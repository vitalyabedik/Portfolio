import styled from 'styled-components';

export const SkillsWrapper = styled.section`
  //height: 100vh;
  //background-color: #D4FFC0;
  padding: 100px 0;

  @media (max-width: 576px) {
    padding: 100px 0 15px;
  }
`

export const SkillsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
  border: 1px solid;
  gap: 50px;
  
  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`

