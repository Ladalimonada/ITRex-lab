import PatientsController from './controllers/patientsController.js';
import Model from './models/Model.js';
import AuthLayout from './views/layouts/AuthLayout.js';
import PatientsLayout from './views/layouts/PatientsLayout.js';
import AuthController from './controllers/AuthController.js';

const authModule = new AuthController(null, new AuthLayout());
const patientsModule = new PatientsController(new Model(), new PatientsLayout());

const routes = {
    '/patients': {
        page: patientsModule,
    },
    '/sign-in': {
        page: authModule,
    },
    '/sign-up': {
        page: authModule,
    },
    '/restore-password': {
        page: authModule,
    },
    '/restored-password': {
        page: authModule,
    },
};

const router = () => {
    const root = document.getElementById('root');
    const URL = window.location.hash.substring(1);
    let rout = routes[`/${URL}`];
    if(!rout) {
        rout = routes['/sign-in'];
    }
    root.innerHTML = rout.page.displayPage();
    rout.page.onRender();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);