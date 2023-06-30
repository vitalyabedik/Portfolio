import styled from 'styled-components';

export const SkillContainer = styled.div`
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & > svg {
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`

export const SkillTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  
  color: white;
`



// export const SkillContainer = styled.div`
//   width: 270px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   border: 1px solid;
//   background-color: #F7F7F7;
// `

// export const SkillIcon = styled.div`
//   width: 60px;
//   height: 60px;
//   background-color: #EEEEF5;
// `

// export const SkillTitle = styled.h3`
//   padding: 20px 0;
//   background-color: #9e9ea2;
// `


// export const SkillDescription = styled.div`
//   border: solid 1px;
//   padding-top: 10px;
//   padding-bottom: 40px;
//   background-color: #c8c8cb;
// `