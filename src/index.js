import _ from 'lodash';
import './style.css';
import { loadHome } from './Homepage/loadHome';
// import { loadMenu } from './Menu/loadMenu';
// import { loadContact } from './Contact/loadContact';
import { switchTabs } from './Tabs/switchtabs';
import { showRestName } from './rest-name';


showRestName();
loadHome();
switchTabs();


console.log('hello!')