const courseContent = [
    {
        time: '5h40 mins',
        title: 'The Basic',
    },
    { time: '7h35 mins', title: 'Environment Setup ' },
    { time: '10h35 mins', title: 'UI & Interaction' },
    { time: '6h35 mins', title: 'Debuging' },
    { time: '4h20 mins', title: 'Testing' },
    { time: '5h40 mins', title: 'Performent' },
];

const courses = [
    {
        name: 'React Native',
        title: 'Welcome to React Native',
        totalCourse: '25',
        image: require('../assets/react.png'),
        price: '50',
        star: '4.3',
        students: '10',
        courseContent,
    },
    {
        name: 'NodeJS',
        title: 'Welcome to NodeJS',
        totalCourse: '20',
        image: require('../assets/nodejs.png'),
        price: '50',
        star: '4.1',
        students: '55',
        courseContent,
    },
    {
        name: 'VueJS',
        title: 'Welcome to VueJS',
        totalCourse: '10',
        image: require('../assets/vuejs.png'),
        price: '50',
        star: '4.3',
        students: '10',
        courseContent,
    },
    {
        name: 'Angular',
        title: 'Welcome to Angular',
        totalCourse: '7',
        image: require('../assets/angular.png'),
        price: '50',
        star: '4.2',
        students: '35',
        courseContent,
    },
];


export default courses;