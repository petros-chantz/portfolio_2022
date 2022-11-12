import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 2,
        delay: 2,
        duration: 3.5,
      }}
    >
      <div className="flex flex-row justify-between px-10">
        <Link to="/" relative="path">
          <h6 className="navbar--title">petros chantzopoulos</h6>
        </Link>
      </div>
    </motion.nav>
  );
};
