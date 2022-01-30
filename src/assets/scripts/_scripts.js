import Alpine from 'alpinejs';
import { queryDates } from './datum';
import kalender from './kalender';

window.queryDates = queryDates;
window.kalender = kalender;
window.alpine = Alpine;
window.alpine.start();
