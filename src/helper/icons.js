
import { faTrash, 
     faSignOutAlt,
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
     faBriefcase,
     faStarOfLife,
     faAtom,
     faCode,
     faBook,
     faEdit

    } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";



const Icons = () => {
 return library.add(faAtom, faEdit,faBook,faCode, faStarOfLife, faBriefcase,faDownload,faTrash,faSignOutAlt, faBan, faMeh, faSpinner,faPlusCircle, faPhone,faEnvelope, faMapMarkedAlt, faLock, faClipboardCheck,faClipboard); }

 export default Icons;