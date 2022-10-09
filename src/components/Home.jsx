import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
    >
      <h2>Home</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        recusandae molestias, nulla molestiae ut repellendus amet, beatae,
        incidunt a ratione nisi? Culpa at magnam ea labore! Consequatur, ducimus
        reprehenderit in labore at expedita dignissimos porro reiciendis.
        Dolorem quia veritatis earum officia aut, blanditiis qui iure sit,
        eveniet ab officiis suscipit?
      </p>
    </motion.section>
  );
};

export default Home;
