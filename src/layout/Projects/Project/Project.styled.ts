import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  background-color: #182636;
  padding: 20px;
  border: 1px solid;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

type ProjectImagePropsType = {
    backgroundimage: string
}

export const ProjectImage = styled.div<ProjectImagePropsType>`
  height: 300px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.backgroundimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 20px;
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`

export const ProjectHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProjectMainInfo = styled.div`
  display: flex;
  width: 100%;
`

export const ProjectInfo = styled.div`
  width: 100%;
  text-align: left;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    padding-left: 0px;
  }
`

export const ProjectDescription = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #BBBBBB;
  margin-top: 10px;
`
export const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`

export const ProjectStackItem = styled.span`
  font-size: 1.6rem;
  color: #4bffa5;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 30px;
  margin-right: 5px;
  padding: 5px 10px;
  padding-left: 0;
  white-space: nowrap;
`
export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const ProjectLink = styled.a`
  margin-top: 20px;
  padding-right: 15px;

  svg {
    transition: fill 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover svg {
    fill: #4bffa5;
    transform: scale(1.05);
  }
`;
