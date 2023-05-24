import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  background-color: #c3a0cc;
  padding: 100px 0;
`

export const ProjectsTitle = styled.h2`
  background-color: #9e9ea2;
  margin-bottom: 60px;
  text-align: center;
`

export const ProjectsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  border: 1px solid;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`