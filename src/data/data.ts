import { IconType } from 'react-icons';
import {FaReact, FaYarn} from 'react-icons/fa';
import {
    SiAntdesign, SiApollographql,
    SiAxios,
    SiCssmodules,
    SiFigma, SiGraphql,
    SiJest,
    SiMui,
    SiReacthookform,
    SiReactquery,
    SiReactrouter,
    SiRedux, SiReduxsaga,
    SiStyledcomponents,
    SiWebpack,
} from 'react-icons/si';
import {
    TbBrandHtml5, TbBrandStorybook, TbBrandTypescript
} from 'react-icons/tb';
import {DiCss3Full, DiJavascript1, DiNpm, DiSass} from 'react-icons/di';
import {BsGit} from 'react-icons/bs';



export type SkillType = {
    title: string;
    icon: IconType;
    color: string;
}

export type ProjectType = {
    title: string;
    url: string;
    img: string
    technologies: string
}

export const skills: SkillType[] = [
    {
        title: 'React',
        icon: FaReact,
        color: '#149eca',
    },
    {
        title: 'Redux Toolkit',
        icon: SiRedux,
        color: '#764abc',
    },
    {
        title: 'Redux Saga',
        icon: SiReduxsaga,
        color: '#86d46b',
    },
    {
        title: 'TypeScript',
        icon: TbBrandTypescript,
        color: '#3077c5',
    },
    {
        title: 'JavaScript',
        icon: DiJavascript1,
        color: '#ffcc33',
    },
    {
        title: 'HTML',
        icon: TbBrandHtml5,
        color: '#c63',
    },
    {
        title: 'CSS',
        icon: DiCss3Full,
        color: '#017dc8',
    },
    {
        title: 'SASS',
        icon: DiSass,
        color: '#cc6699',
    },
    {
        title: 'CSS Modules',
        icon: SiCssmodules,
        color: '#fff',
    },
    {
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
    },
    {
        title: 'Ant Design',
        icon: SiAntdesign,
        color: '#0170fe',
    },
    {
        title: 'Material UI',
        icon: SiMui,
        color: '#0081cb',
    },
    {
        title: 'Storybook',
        icon: TbBrandStorybook,
        color: '#f1618c',
    },
    {
        title: 'React Router',
        icon: SiReactrouter,
        color: '#f44250',
    },
    {
        title: 'React Hook Form',
        icon: SiReacthookform,
        color: '#ec5990',
    },
    {
        title: 'React Query',
        icon: SiReactquery,
        color: '#ff4154',
    },
    {
        title: 'Apollo',
        icon: SiApollographql,
        color: '#fff',
    },
    {
        title: 'Graph QL',
        icon: SiGraphql,
        color: '#fff',
    },
    {
        title: 'Jest',
        icon: SiJest,
        color: '#c53d17',
    },
    {
        title: 'Axios',
        icon: SiAxios,
        color: '#5a29e4',
    },
    {
        title: 'Git',
        icon: BsGit,
        color: '#f44c28',
    },
    {
        title: 'Webpack',
        icon: SiWebpack,
        color: '#1c78c1',
    },
    {
        title: 'Figma',
        icon: SiFigma,
        color: '#a259ff',
    },
    {
        title: 'Yarn',
        icon: FaYarn,
        color: '#2c8ebb',
    },
    {
        title: 'NPM',
        icon: DiNpm,
        color: '#c53635',
    }
];

export const projects: ProjectType[] = [
    {
        title: 'Weather and Notes',
        url: 'https://vitalyabedik.github.io/weather-test/',
        img: '',
        technologies: 'React, Redux, JavaScript, AntDesign',
    },
    {
        title: 'Todolist',
        url: '',
        img: '',
        technologies: 'React, Redux, TypeScript',
    },
    {
        title: 'Social Network',
        url: '',
        img: '',
        technologies: 'React, Redux, TypeScript',
    },
    {
        title: 'Food Recipes',
        url: '',
        img: '',
        technologies: 'React, Redux, TypeScript',
    },
    {
        title: 'Counter',
        url: '',
        img: '',
        technologies: 'React, Redux, TypeScript',
    },
    {
        title: 'React Cheat Sheet',
        url: '',
        img: '',
        technologies: 'React, Redux, JavaScript',
    },
    {
        title: 'Plants',
        url: '',
        img: '',
        technologies: 'HTML, CSS',
    },
    {
        title: 'Beauty Shop',
        url: '',
        img: '',
        technologies: 'HTML, CSS',
    },
];