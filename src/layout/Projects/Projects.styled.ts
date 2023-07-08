import styled from 'styled-components';

export const ProjectsWrapper = styled.section`
  padding: 100px 0;
`

export const ProjectsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

export const ProjectListElement = styled.li`
  list-style-type: none;
  width: 100%;
`