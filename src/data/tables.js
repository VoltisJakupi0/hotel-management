
import { faGoogle, faTwitter, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, } from '@fortawesome/free-solid-svg-icons';

import USAFlag from '../assets/img/flags/united-states-of-america.svg';
import CanadaFlag from '../assets/img/flags/canada.svg';
import GermanyFlag from '../assets/img/flags/germany.svg';
import FranceFlag from '../assets/img/flags/france.svg';
import JapanFlag from '../assets/img/flags/japan.svg';
import ItalyFlag from '../assets/img/flags/italy.svg';


const pageVisits = [
    { id: 1, views: 4.525, returnValue: 255, bounceRate: 42.55, pageName: "/demo/admin/index.html" },
    { id: 2, views: 2.987, returnValue: 139, bounceRate: -43.52, pageName: "/demo/admin/forms.html" },
    { id: 3, views: 2.844, returnValue: 124, bounceRate: -32.35, pageName: "/demo/admin/util.html" },
    { id: 4, views: 1.220, returnValue: 55, bounceRate: 15.78, pageName: "/demo/admin/validation.html" },
    { id: 5, views: 505, returnValue: 3, bounceRate: -75.12, pageName: "/demo/admin/modals.html" }
];


const categories = [
    {id: 1, categoryName: "Comfort"},
    {id: 2, categoryName: "Premium"},
    {id: 3, categoryName: "Vip"}
]

const status = [
    {id: 1, statusName: "Free"},
    {id: 2, statusName: "Reserved"},
    {id: 3, statusName: "Out of usage"}
]


const rooms = [
    {id: 1, roomNr: "1", clientNr: 3, category: "Comfort", status: "Active", price: "20$"},
    {id: 2, roomNr: "2", clientNr: 2, category: "Premium", status: "Active", price: "40$"},
    {id: 3, roomNr: "3", clientNr: 2, category: "Vip", status: "Active", price: "60$"},
]

const reservations = [
    {id: 1, roomNr: "1", clientName: "Voltis", clientSurname: "Jakupi", clientEmail: "voltis@gmail.com", reservationDate: "31/10/2021", endReservationDate: "02/11/2021"},
    {id: 2, roomNr: "5",  clientName: "Nderim", clientSurname: "Bunjaku",  clientEmail: "nderim@gmail.com", reservationDate: "31/10/2021", endReservationDate: "02/11/2021"},
    {id: 3, roomNr: "9", clientName: "Artonit", clientSurname: "Kameri", clientEmail: "artonit@gmail.com", reservationDate: "31/10/2021", endReservationDate: "02/11/2021"},
]
 

const designersTasks = [
    { id: 1, name: "Voltis", surname: "Jakupi", taskName: "Create posters", category: "Poster", description: "Designed 2 Posters",  client: "Capital T", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 80, payment: '20$'},
    { id: 2, name: "Gjergj", surname: "Kadriu", taskName: "Create poster", category: "Poster", description: "Designed 2 Posters",  client: "Flori", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 20, payment: '-'},
    { id: 3, name: "Voltis", surname: "Jakupi",taskName: "Create logo", category: "Logo", description: "Designed 1 Posters", client: "Ledri", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 0, payment: '10$'},
    { id: 4, name: "Gjergj", surname: "Kadriu",taskName: "Create animation", category: "Animation", description: "Created 4 Animations", client: "Capital T",startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 100, payment: '33$'},
];

const socialMediaTasks = [
    { id: 1, name: "Voltis", surname: "Jakupi", taskName: "Post images",  category: "Poster", description: "Post 3 images for campaing",  client: "Capital T", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00" , difficulty: 80, payment: '20$'},
    { id: 2, name: "Gjergj", surname: "Kadriu", taskName: "Post images", category: "Poster", description: "Added boost of last story",  client: "Flori", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00" ,difficulty: 20, payment: '-'},
    { id: 3, name: "Voltis", surname: "Jakupi", taskName: "Post images", category: "Logo", description: "Added boost of last story",  client: "Ledri", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 0, payment: '10$'},
    { id: 4, name: "Gjergj", surname: "Kadriu", taskName: "Post images", category: "Animation", description: "Post 2 campaigns",  client: "Capital T", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 100, payment: '33$'},
];

const myTasks = [
    { id: 1,  taskName: "Post images",  category: "Poster", description: "Post 3 images for campaing",  client: "Capital T", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00" , difficulty: 80, payment: '20$'},
    { id: 2, taskName: "Post images", category: "Poster", description: "Added boost of last story",  client: "Flori", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00" ,difficulty: 20, payment: '-'},
    { id: 3,  taskName: "Post images", category: "Logo", description: "Added boost of last story",  client: "Ledri", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 0, payment: '10$'},
    { id: 4,  taskName: "Post images", category: "Animation", description: "Post 2 campaigns",  client: "Capital T", startDate: "2021/12/01 12:00", endDate: "2021/12/01 16:00", difficulty: 100, payment: '33$'},
];



const pageRanking = [
    { id: 1, country: "United States", countryImage: USAFlag, overallRank: 76, overallRankChange: -5, travelRank: 3, widgetsRank: 32, widgetsRankChange: 3 },
    { id: 2, country: "Canada", countryImage: CanadaFlag, overallRank: 106, overallRankChange: 17, travelRank: 4, widgetsRank: 30, widgetsRankChange: 3 },
    { id: 4, country: "France", countryImage: FranceFlag, overallRank: 112, overallRankChange: 10, travelRank: 5, widgetsRank: 34, widgetsRankChange: 7 },
    { id: 5, country: "Japan", countryImage: JapanFlag, overallRank: 115, overallRankChange: 3, travelRank: 7, travelRankChange: 1, widgetsRank: 39, widgetsRankChange: -2 },
    { id: 3, country: "Germany", countryImage: GermanyFlag, overallRank: 147, overallRankChange: -12, travelRank: 10, travelRankChange: -1, widgetsRank: 12, widgetsRankChange: -5 },
    { id: 6, country: "Italy", countryImage: ItalyFlag, overallRank: 220, overallRankChange: -56, travelRank: 11, travelRankChange: -3, widgetsRank: 89, widgetsRankChange: 2 }
];

const invoiceItems = [
    { id: 1, item: "Origin License", description: "Extended License", price: "999,00", quantity: 1 },
    { id: 2, item: "Custom Services", description: "Instalation and Customization (cost per hour)", price: "150,00", quantity: 20 },
    { id: 3, item: "Hosting", description: "1 year subcription", price: "499,00", quantity: 1 },
    { id: 4, item: "Platinum Support", description: "1 year subcription 24/7", price: "3999,00", quantity: 1 },
];

export {
    pageVisits,
    designersTasks,
    pageRanking,
    invoiceItems,
    socialMediaTasks,
    myTasks,
    categories,
    status,
    rooms,
    reservations
};