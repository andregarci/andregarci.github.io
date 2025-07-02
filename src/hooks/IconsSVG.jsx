// Importación y organización de iconos por categorías
// =======================================================

// Cloud/Server
import awsIcon from '../assets/svg/aws.svg';
import googleCloudIcon from '../assets/svg/google-cloud.svg';
import dockerIcon from '../assets/svg/docker.svg';

// Frontend
import html5Icon from '../assets/svg/html5.svg';
import cssIcon from '../assets/svg/css.svg';
import javascriptIcon from '../assets/svg/javascript.svg';
import typescriptIcon from '../assets/svg/typescript.svg';
import reactIcon from '../assets/svg/react.svg';
import vitejsIcon from '../assets/svg/vitejs.svg';

// Backend/Languages
import nodejsIcon from '../assets/svg/nodejs.svg';
import djangoIcon from '../assets/svg/django.svg';
import javaIcon from '../assets/svg/java.svg';
import csharpIcon from '../assets/svg/csharp.svg';
import kotlinIcon from '../assets/svg/kotlin.svg';

// Mobile
import flutterIcon from '../assets/svg/flutter.svg';

// Databases
import mongodbIcon from '../assets/svg/mongodb.svg';
import mysqlIcon from '../assets/svg/mysql.svg';
import sqliteIcon from '../assets/svg/sqlite.svg';

// OS/Virtualization
import linuxIcon from '../assets/svg/linux.svg';
import windowsIcon from '../assets/svg/windows.svg';
import vmwareIcon from '../assets/svg/vmware-1.svg';
import virtualboxIcon from '../assets/svg/virtualbox-icon.svg';

/**
 * Objeto que mapea los nombres de archivos SVG a sus importaciones
 * Organizado por categorías para mejor mantenibilidad
 */
const iconsSVG = {
  // Cloud/Server
  'aws.svg': awsIcon,
  'google-cloud.svg': googleCloudIcon,
  'docker.svg': dockerIcon,
  
  // Frontend
  'html5.svg': html5Icon,
  'css.svg': cssIcon,
  'javascript.svg': javascriptIcon,
  'typescript.svg': typescriptIcon,
  'react.svg': reactIcon,
  'vitejs.svg': vitejsIcon,
  
  // Backend/Languages
  'nodejs.svg': nodejsIcon,
  'django.svg': djangoIcon,
  'java.svg': javaIcon,
  'csharp.svg': csharpIcon,
  'kotlin.svg': kotlinIcon,
  
  // Mobile
  'flutter.svg': flutterIcon,
  
  // Databases
  'mongodb.svg': mongodbIcon,
  'mysql.svg': mysqlIcon,
  'sqlite.svg': sqliteIcon,
  
  // OS/Virtualization
  'linux.svg': linuxIcon,
  'windows.svg': windowsIcon,
  'vmware-1.svg': vmwareIcon,
  'virtualbox-icon.svg': virtualboxIcon,
};

export default iconsSVG;
