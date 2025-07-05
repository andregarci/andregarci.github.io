import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className="footer position-relative light-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h3 className="sitename">Andre Garcia</h3>
        <p>Nunca es demasiado tarde para hacer lo que amas</p>
      </div>
      <p>
        <em>Actualizado 2024-11-04</em>
      </p>
    </motion.footer>
  );
};

export default Footer;