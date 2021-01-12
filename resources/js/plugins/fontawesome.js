import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser,
  faLock,
  faSignOutAlt,
  faCog,
  faUserPlus,
  faEdit,
  faTrashAlt,
  faTachometerAlt,
  faHome,
  faBars,
  faAt,
  faChartLine,
  faBell,
  faUniversity,
  faTools,
  faChalkboardTeacher,
  faTimes,
  faCheck,
  faSearch,
  faFilePdf,
  faFileExcel,
  faFileCsv,
  faCalendarAlt,
  faUserClock,
  faVials,
  faCogs,
  faUsers,
  faBezierCurve,
  faGripVertical,
  faUserCircle,
  faPlus

} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser,
  faLock,
  faSignOutAlt,
  faCog,
  faGithub,
  faUserPlus,
  faEdit,
  faTrashAlt,
  faTachometerAlt,
  faHome,
  faBars,
  faAt,
  faChartLine,
  faBell,
  faUniversity,
  faTools,
  faChalkboardTeacher,
  faTimes,
  faCheck,
  faSearch,
  faFilePdf,
  faFileExcel,
  faFileCsv,
  faCalendarAlt,
  faUserClock,
  faVials,
  faCogs,
  faUsers,
  faBezierCurve,
  faGripVertical,
  faUserCircle,
  faPlus
)

Vue.component('Fa', FontAwesomeIcon)
