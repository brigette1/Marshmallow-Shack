import { loadHome } from '../Homepage/loadHome';
import { loadMenu } from '../Menu/loadMenu';
import { loadContact } from '../Contact/loadContact';
import { clearContents } from './clearContents';

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

function switchTabs() {

    home.addEventListener('click', function() {
        clearContents();
        loadHome();
    });

    menu.addEventListener('click', function() {
        clearContents();
        loadMenu();
    });

    contact.addEventListener('click', function() {
        clearContents();
        loadContact();
    });
}

export {switchTabs};