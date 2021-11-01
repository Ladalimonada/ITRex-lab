import Controller from './controllers/Controller.js';
import Model from './models/Model.js';
import AuthLayout from './views/layouts/AuthLayout.js';
import { PatientsPage } from './views/layouts/Patients.js';
import AuthController from './controllers/AuthController.js';

const authModule = new AuthController(null, new AuthLayout());
const patientsModule = new Controller(new Model(), new PatientsPage());

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
    const rout = routes[`/${URL}`];
    root.innerHTML = rout.page.displayPage();

    rout.page.onRender();
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);