import { createContext } from 'react';
import { projects, ProjectType } from '../data';

export const ProjectsContext = createContext<ProjectType[]>(projects);

