import Mindshare from '../img/portImages/Mindshare.jpg';
import EmployeeManagement from '../img/portImages/Employee-Management.jpg';
import StoryBook from '../img/portImages/StoryBook.jpg';
import burgerOrderingSystem from '../img/portImages/burgerOrderingSystem.jpg';
import EmployeeDirectory from '../img/portImages/EmployeeDirectory.jpg';
import TrueWeather from '../img/portImages/True-Weather.png';
import noteTaker from '../img/portImages/noteTaker.png';
import DatePlanner from '../img/portImages/Date-Night-Planner.png';
import DayPlanner from '../img/portImages/Day-Planner.png';
import JSQuiz from '../img/portImages/JSQuiz.jpg';
import passwordGenerator from '../img/portImages/passwordGenerator.jpg';
import taskTracker from '../img/portImages/taskTracker.jpg';
import RPS from '../img/portImages/RPS.jpg';
import exerciseTracker from '../img/portImages/exerciseTracker.jpg';
import budgetTracker from '../img/portImages/budgetTracker.jpg';
import TeamBuilder from '../img/portImages/TeamBuilder.jpg';


const portfolios = [
    {
        id: 1,
        category: 'MERN',
        link1: 'https://guarded-dusk-24354.herokuapp.com/',
        link2: 'https://github.com/P3TeamTwo/p3',
        icon1: 'Live',
        icon2: 'Repo',
        image: Mindshare,
        title: 'Mindshare',
        desription: "Mindshare is a smart personal journal, the user is prompted to do a daily self reflection which are converted and analyzed to create a large array of visual and functional tools to assist in personal development"
    },
    {
        id: 2,
        category: 'Handlebars',
        link1: "https://snowmanagement.herokuapp.com/",
        link2: 'https://github.com/MT2314/snow-removal-mgmt',
        icon1: 'Live',
        icon2: 'Repo',
        image: EmployeeManagement,
        title: 'Employee Management Systems',
        desription: "Employee Management System. Allow the user to be able to add employees and jobs to a database. Make teams outs of the employees and assign jobs to them. Track your crews and job completion" },
    {
        id: 3,
        category: 'MERN',
        link1: "https://story-book-board.herokuapp.com",
        link2: 'https://github.com/MT2314/Google-Book-Search',
        icon1: 'Live',
        icon2: 'Repo',
        image: StoryBook,
        title: 'Story Book',
        desription: "A Storybook application. Create, Edit and Share stories. Make stories public or post them on the public board for others to read"
    },
    {
        id: 4,
        category: 'Javascript',
        link1: "https://mt2314.github.io/Date-Night-Planner/",
        link2: 'https://github.com/MT2314/Date-Night-Planner',
        icon1: 'Live',
        icon2: 'Repo',
        image: DatePlanner,
        title: 'Date Night Planner',
        desription: "This application allows a user to enter a location and how far they are willing to travel. Based on this information, a list of theatres will be generated and displayed on the page. The user will be able to select a theatre, and a list of movies and their showtimes will be displayed. The user may then select a movie and specific show-time to book their tickets."
    },
    {
        id: 5,
        category: 'React',
        link1: "https://mt2314.github.io/Task-Tracker/",
        link2: 'https://github.com/MT2314/Task-Tracker',
        icon1: 'Live',
        icon2: 'Repo',
        image: taskTracker,
        title: 'Task Tracker',
        desription: "Seamless, responsive and dynamic task tracker that reads and writes to a JSON file."
    },
    {
        id: 6,
        category: 'Javascript',
        link1: "https://burger-ordersystem.herokuapp.com/",
        link2: 'https://github.com/MT2314/Burger-OrderSystem',
        icon1: 'Live',
        icon2: 'Repo',
        image: burgerOrderingSystem,
        title: 'Burger Order System',
        desription: "A Burger Order Management System. User inputs their order into a form. Input is stored in a MYSQL database. The webpage is reloaded adding the users burger order onto the webpage using Handle Bars. Application is modelled in MVC. Home-made ORM."
    },
    {
        id: 7,
        category: 'React',
        link1: 'https://employee-database--system.herokuapp.com/',
        link2: "https://mt2314.github.io/Employee-Directory",
        icon1: 'Live',
        icon2: 'Repo',
        image: EmployeeDirectory,
        title: 'Employee Database',
        desription: "Built using React Seeding Data with Web Api to be used as props to display data. Seemless Search and Sort Database"
    },
    {
        id: 8,
        category: 'Javascript',
        link1: "https://web-note-application.herokuapp.com",
        link2: 'https://github.com/MT2314/Web-Note-App',
        icon1: 'Live',
        icon2: 'Repo',
        image: noteTaker,
        title: 'Note Taker',
        desription: "User is able to add notes with a title to be saved into a json file. User can Delete and view previously saved notes"
    },
    {
        id: 9,
        category: 'Javascript',
        link1: 'https://mt2314.github.io/True-Weather-App/',
        link2: "https://github.com/MT2314/True-Weather-App",
        icon1: 'Live',
        icon2: 'Repo',
        image: TrueWeather,
        title: 'True Weather',
        desription: "Dynamic Weather App - Live Updates  Open Weather Api"
    },
    {
        id: 10,
        category: 'Javascript',
        link1: "https://exercisetrackandgraph.herokuapp.com/",
        link2: 'https://github.com/MT2314/Exercise-Tracker',
        icon1: 'Live',
        icon2: 'Repo',
        image: exerciseTracker,
        title: 'Exercise Tracker',
        desription: "User is able to track their exercise routines and review their data in useful charts"
    },
    {
        id: 11,
        category: 'Javascript',
        link1: 'https://exercisetrackandgraph.herokuapp.com/',
        link2: "https://github.com/MT2314/Budget-Tracker",
        icon1: 'Live',
        icon2: 'Repo',
        image: budgetTracker,
        title: 'Budget Tracker',
        desription: "Offline ready exercise tracker. Syncronizes inputed data to databse when connection is re-established Saves backed up data in IndexDb."
    },
    {
        id: 12,
        category: 'Javascript',
        link1: "https://mt2314.github.io/Dynamic-Day-Planner/",
        link2: 'https://github.com/MT2314/Dynamic-Day-Planner',
        icon1: 'Live',
        icon2: 'Repo',
        image: DayPlanner,
        title: 'Day Planner',
        desription: "Dynamically Built Daily Planner Using Moment to Keep Date, and Color Coded Time Slots. Saves to Local Storage and Time Blocks are Repopulated on Refresh"
    },
    {
        id: 13,
        category: 'Javascript',
        link1: "https://mt2314.github.io/Team_Builder/",
        link2: 'https://github.com/MT2314/Team_Builder',
        icon1: 'Node File',
        icon2: 'Repo',
        image: TeamBuilder,
        title: 'Team Builder',
        desription: "Team Builder applicatiom, prompts the user in CLI to add role specific employees to a team, their role and employee specific details. Exports the dynamically created HTML(team.html)"
    }
]

export default portfolios;