import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  //width: 700px;

  background-color: #182636;
  padding: 20px;
  //width: 800px;
  //min-width: 40%;
  border: 1px solid;
  //background-color: #F7F7F7;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

type ProjectImagePropsType = {
    backgroundimage: string
}

export const ProjectImage = styled.div<ProjectImagePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  //height: 400px;
  width: 600px;
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
  //flex-direction: column;
`

export const ProjectMainInfo = styled.div`
  display: flex;
  width: 100%;
  //flex-direction: column;
`

export const ProjectInfo = styled.div`
  //background-color: #d1d1d1;
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
  //background-color: #9e9ea2;
  //width: 100%;
  margin-top: 10px;
  //margin-bottom: 30px;

  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #BBBBBB
`
export const ProjectStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`

export const ProjectStackItem = styled.span`
  //font-size: 1.6rem;
  //padding: 10px;
  ////margin: 0 10px;
  //text-align: center;
  //
  //color: #4bffa5;
  //line-height: 2.4rem;
  //font-weight: 600;
  //
  //border: 1px solid white;
  //border-radius: 30px;

  font-size: 1.6rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  //background-color: #fff;
  color: #4bffa5;
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
