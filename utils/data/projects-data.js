import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Uganda Passport Application',
        description: "Passport application system used by the Uganda government. It tracks the passport process from start (passport application) to end (issuance of the passport)",
        tools: ['Express', 'MongoDB', 'ReactJS'],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://passports.go.ug',
        image: crefin,
    },
    {
        id: 2,
        name: 'Aoxios',
        description: 'An appointment booking and virtual meetings tool clients.',
        tools: ['Laravel', 'React.js'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://aoxios.com/',
        image: travel,
    },
    {
        id: 3,
        name: 'Pidoxe',
        description: 'AI writing, code generation, content creation tool using chatgpt API.',
        tools: ['React js', 'Laravel','OpenAI API'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'FortiCrypt',
        description: "A Web3 DeFi crypto wallet.",
        tools: ['html', 'css', 'flutter'],
        code: '',
        demo: 'https://forticrypt.com/',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },