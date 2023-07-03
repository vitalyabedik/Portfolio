import styled from 'styled-components';

export const SkillContainer = styled.div`
  width: 80px;
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
  line-height: 2.8rem;
  font-weight: 600;
  text-align: center;
  
  color: white;
`



