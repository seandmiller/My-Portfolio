import { faTrash, 
     faSignOutAlt,
     faEdit,
     faBan,faSpinner,
     faPlusCircle, 
     faPhone, 
     faEnvelope,
     faMapMarkedAlt,
     faLock,
     faClipboard,
     faClipboardCheck,
     faMeh,
     faDownload,
     faBriefcase

    } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";



const Icons = () => {
 return library.add(faBriefcase,faDownload,faTrash,faSignOutAlt,faEdit, faBan, faMeh, faSpinner,faPlusCircle, faPhone,faEnvelope, faMapMarkedAlt, faLock, faClipboardCheck,faClipboard); }

 export default Icons;