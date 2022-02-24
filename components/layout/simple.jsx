import React from 'react'
import Myfooter from "../footer/footer";
import Navbar from '../navbar/navbar';
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0.2, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0.2, x: 0, y: 0 },
}

export default function SimpleLayout(props) {
  return (
    <>
      <Navbar />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container">
              <motion.main variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ type: 'linear' }} className="">
                  {props.children}
              </motion.main>
          </div>
        </div>
      </main>
      <Myfooter/>
    </>
  )
}

