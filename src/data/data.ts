import {IconType} from 'react-icons';
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
    TbBrandHtml5, TbBrandStorybook, TbBrandTypescript, TbBrandRadixUi
} from 'react-icons/tb';
import {DiCss3Full, DiJavascript1, DiNpm, DiSass} from 'react-icons/di';
import {BsGit} from 'react-icons/bs';
import {AiOutlineCloudServer} from 'react-icons/ai';

import flashcardsImage from '../assets/images/flashcards.png'
import weatherAppImage from '../assets/images/weather-app.png'
import taskManagerAppImage from '../assets/images/task-manager-app.png'
import socialiteAppImage from '../assets/images/socialite-app.png'
import counterAppImage from '../assets/images/counter-app.png'
import reactCheatSheepAppImage from '../assets/images/react-cheat-sheet-app.png'
import plantsAppImage from '../assets/images/plants-app.png'
import beautyShopAppImage from '../assets/images/beauty-shop-app.png'
import nftAppImage from '../assets/images/nft-creative-art.png'


export type SkillType = {
    title: string
    icon: IconType
    color: string
}

export type ProjectType = {
    title: string
    demoUrl: string
    githubUrl: string
    image: string
    description: string
    technologies: string[]
    badge: string
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
    // {
    //     title: 'Redux Saga',
    //     icon: SiReduxsaga,
    //     color: '#86d46b',
    // },
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
        title: 'Radix UI',
        icon: TbBrandRadixUi,
        color: '#FFF',
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
        title: 'Styled Components',
        icon: SiStyledcomponents,
        color: '#ffd35b',
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
    // {
    //     title: 'React Query',
    //     icon: SiReactquery,
    //     color: '#ff4154',
    // },
    // {
    //     title: 'Apollo',
    //     icon: SiApollographql,
    //     color: '#fff',
    // },
    // {
    //     title: 'Graph QL',
    //     icon: SiGraphql,
    //     color: '#fff',
    // },
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
        title: 'REST API',
        icon: AiOutlineCloudServer,
        color: '#39a6dd',
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
];

export const projects: ProjectType[] = [
    {
        title: 'Flashcards',
        demoUrl: 'https://flashcards-learning.vercel.app/',
        githubUrl: 'https://github.com/vitalyabedik/flashcards',
        image: flashcardsImage,
        description: `
        It is interactive and customizable platform for learning through flashcards. 
        Users can easily create, organize, and study flashcards on various subjects, 
        enhancing their learning experience and knowledge retention.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'CSS Modules',
            'Radix UI', 'React Router Dom 6', 'React Hook Form',
            'Storybook',  'REST API', 'react-toastify', 'zod', 'vite'
        ],
        badge: 'IT-Incubator'
    },
    {
        title: 'Task Manager',
        demoUrl: 'https://vitalyabedik.github.io/task-manager/',
        githubUrl: 'https://github.com/vitalyabedik/task-manager',
        image: taskManagerAppImage,
        description: `
        It is a list of tasks. You can combine tasks into groups, 
        delete/add new ones, as well as change their names. 
        There is a filter for sorting tasks by the degree of their completion.
        The project is in a development project.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'TypeScript', 'Styled components',
            'Material UI', 'React Router Dom 6', 'React Hook Form',
            'Storybook', 'Jest', 'Axios', 'REST API',
        ],
        badge: 'IT-Incubator'
    },
    {
        title: 'Socialite',
        demoUrl: 'https://vitalyabedik.github.io/socialite/',
        githubUrl: 'https://github.com/vitalyabedik/socialite',
        image: socialiteAppImage,
        description: `
        This website project is a possible representation of a social network like VKONTAKTE or Facebook. 
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript',
            'CSS modules', 'SCSS', 'React Router Dom 5', 'Redux Form', 'Reselect', 'Axios', 'REST API'
        ],
        badge: 'IT-Incubator'
    },
    {
        title: 'NFT-creative-art',
        demoUrl: 'https://vitalyabedik.github.io/NFT-creative-art/',
        githubUrl: 'https://github.com/vitalyabedik/NFT-creative-art',
        image: nftAppImage,
        description: `
         The site is made according to the layout from Figma. With adaptive.
        `,
        technologies: [
            'React', 'TypeScript', 'Styled components',
            'react-awesome-reveal', 'react-curved-text', 'react-scroll', 'eslint', 'prettier', 'stylelint',
        ],
        badge: 'IT-Incubator'
    },
    {
        title: 'Weather and Notes',
        demoUrl: 'https://vitalyabedik.github.io/weather-test/',
        githubUrl: 'https://github.com/vitalyabedik/weather-test',
        image: weatherAppImage,
        description: `
        An application that displays the weather in populated areas 
        with additional visualization. At the first stage, 
        the user's location is determined automatically. Also user can do some notes and see it in calendar.
        With full adaptive.
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'Redux Persist', 'JavaScript',
            'CSS modules', 'SCSS', 'Ant Design', 'Axios', 'moment-js', 'eslint-config-airbnb',
            'REST API',
        ],
        badge: 'Test task'
    },
    {
        title: 'React Cheatsheet',
        demoUrl: 'https://vitalyabedik.github.io/react-cheatsheet/',
        githubUrl: 'https://github.com/vitalyabedik/react-cheatsheet',
        image: reactCheatSheepAppImage,
        description: `
        Comprehensive React cheatsheet for beginners.
        `,
        technologies: [
            'React', 'JavaScript', 'SCSS', 'React Router Dom 6', 'Ant Design', 'React Code Blocks'
        ],
        badge: 'Redev Education'
    },
    {
        title: 'Counter',
        demoUrl: 'https://vitalyabedik.github.io/Counter/',
        githubUrl: 'https://github.com/vitalyabedik/Counter',
        image: counterAppImage,
        description: `
        Counter is a test project which (to tell the truth) 
        doesn't have a lot of practical use. It allows to do some settings which influence 
        on the way how the counter works.
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript', 'CSS modules'
        ],
        badge: 'IT-Incubator'
    },
    {
        title: 'Plants',
        demoUrl: 'https://rolling-scopes-school.github.io/vitalyabedik-JSFEPRESCHOOL2022Q4/plants/',
        githubUrl: 'https://github.com/rolling-scopes-school/vitalyabedik-JSFEPRESCHOOL2022Q4/tree/plants-part2',
        image: plantsAppImage,
        description: `
        The site is made according to the layout from Figma.
        With adaptive for 380px, 768px, 1220px and higher screens.
        `,
        technologies: [
            'SCSS'
        ],
        badge: 'RS School'
    },
    {
        title: 'Beauty Shop',
        demoUrl: 'https://vitalyabedik.github.io/Redev.HTML-CSS.Final-project/',
        githubUrl: 'https://github.com/vitalyabedik/Redev.HTML-CSS.Final-project',
        image: beautyShopAppImage,
        description: `
        The site is made according to the layout from Figma. 
        With some adaptive.
        `,
        technologies: [
          'SCSS'
        ],
        badge: 'Redev Education'
    },
];
