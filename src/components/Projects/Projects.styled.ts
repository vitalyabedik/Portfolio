import styled from 'styled-components';
import React from 'react';

export const ProjectsWrapper = styled.section`
  background-color: #c3a0cc;
  padding: 100px 0;
`

export const ProjectsTitle = styled.h2`
  background-color: #9e9ea2;
  text-align: center;
`

export const ProjectsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 60px;
  gap: 20px;
  border: 1px solid;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

export const ProjectListElement = styled.li`
  list-style-type: none;
`