import { motion } from "framer-motion";
import "../styles/projects.css";

const projectsData = [
	{
		title: "Robo Bloguero",
		description:
			"Sitio web de guías y tutoriales sobre Linux, enfocado en Arch Linux, personalización, juegos y emulación. Incluye instrucciones paso a paso, comandos, capturas y recursos para usuarios de todos los niveles.",
		imageUrl: "/img/proyectos/RoboBloguero.png",
		tags: ["Next.js", "React", "TypeScript", "Linux", "Blog", "Tutoriales"],
		githubUrl: null,
		liveUrl: "https://robobloguero.com",
	},
	{
		title: "DosyCuatroSG - Ecomerce y Administración",
		description:
			"Plataforma completa para la empresa 2 & 4 SG que integra un sitio web corporativo moderno y un sistema administrativo seguro. Permite la gestión eficiente de productos, categorías y marcas, con autenticación y control de acceso. El frontend es responsivo y atractivo.",
		imageUrl: "/img/proyectos/DosyCuatroSGEcomerce.png",
		tags: [
			"React",
			"Vite",
			"Bootstrap",
			"Django",
			"Django REST Framework",
			"JWT",
			"API REST",
			"Panel de Administración",
			"Web Corporativa",
		],
		githubUrl: null,
		liveUrl: "https://www.dosycuatrosg.com/",
	},
	{
		title: "Cotización de DosyCuatroSG (Escritorio)",
		description:
			"Aplicación de escritorio para la gestión y generación de cotizaciones de productos, diseñada para optimizar la administración de precios y clientes. Ofrece una interfaz moderna, almacenamiento local y generación automática de documentos en formato Word.",
		imageUrl: "/img/proyectos/CotizacionDosyCuatroSG.png",
		tags: ["Tauri", "Rust", "JavaScript", "HTML", "CSS"],
		githubUrl: null,
		liveUrl: null,
	},
];

// Componente para una tarjeta de proyecto individual
const ProjectCard = ({ project }) => {
	return (
		<motion.div
			className="project-card"
			variants={{
				hidden: { opacity: 0, y: 20 },
				visible: { opacity: 1, y: 0 },
			}}
		>
			<div className="card-image-container">
				<img
					src={project.imageUrl}
					alt={`Imagen de ${project.title}`}
					className="card-image"
				/>
			</div>
			<div className="card-content">
				<h3 className="card-title">{project.title}</h3>
				<div className="card-tags">
					{project.tags.map((tag, index) => (
						<span key={index} className="card-tag">
							{tag}
						</span>
					))}
				</div>
				<p className="card-description">{project.description}</p>
				<div className="card-links">
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub Repository"
						>
							<i className="bi bi-github"></i>
						</a>
					)}
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Live Demo"
						>
							<i className="bi bi-box-arrow-up-right"></i>
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

// Componente principal de la sección de img/proyectos
const ProjectsSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Animación escalonada para las tarjetas
			},
		},
	};

	return (
		<motion.section
			id="projects"
			className="projects section"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			<div className="container section-title">
				<h2>Proyectos</h2>
				<p>
					Una selección de proyectos que demuestran mis habilidades y mi pasión
					por el desarrollo.
				</p>
			</div>

			<motion.div
				className="container projects-grid"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
			>
				{projectsData.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</motion.div>
		</motion.section>
	);
};

export default ProjectsSection;
