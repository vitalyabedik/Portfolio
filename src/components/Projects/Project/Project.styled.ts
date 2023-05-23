import styled from 'styled-components';

export const ProjectContainer = styled.div`
  width: 500px;
  //min-width: 40%;
  border: 1px solid;
  background-color: #F7F7F7;
`

type ProjectImagePropsType = {
  backgroundImage: string
}

export const ProjectImage = styled.div<ProjectImagePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: #9e9ea2;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`

export const ProjectLink = styled.a`
  background-color: #666667;
  padding: 15px 25px;
  cursor: pointer;
`

export const ProjectInfo = styled.div`
  background-color: #d1d1d1;
  text-align: left;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`

export const ProjectTitle = styled.h3`
  margin-bottom: 10px;
  background-color: #9e9ea2;
`

export const ProjectDescription = styled.div`
  background-color: #9e9ea2;
  width: 100%;
  padding-bottom: 30px;
`