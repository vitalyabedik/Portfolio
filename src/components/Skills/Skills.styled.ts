import styled from 'styled-components';

export const SkillsWrapper = styled.div`
  //height: 100vh;
  background-color: #D4FFC0;
  padding: 100px 0;

  @media (max-width: 576px) {
    padding: 100px 0 15px;
  }
`
export const SkillsTitle = styled.h2`
  background-color: #9e9ea2;
  margin-bottom: 60px;
  text-align: center;
`

export const SkillsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`