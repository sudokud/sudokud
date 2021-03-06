import React from "react";
import {motion, AnimatePresence} from 'framer-motion'

const container = {
	hidden: { opacity: 1 },
	show: {
    opacity: 1,
	  transition: {
		staggerChildren: 0.1,
	  }
	}
}
  const item = {
    hidden: { opacity: 0, scale:0 },
    show: {
      opacity: 1.3,
      scale:1,
      transition: {
          type: "spring",
          mass: 1,
          stiffness: 100,
      }
    }
  }
function SwitchMode({ isDark }) {
  return (
    <motion.svg variants={container} initial="hidden" animate="show" width="100%" height="100%" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
      {isDark ?
      <AnimatePresence exitBeforeEnter>
        <g key={0}>
        <motion.circle variants={item} cx="22.0002" cy="22.0002" r="12" fill="#fff"/>
        <motion.path variants={item} d="M22 6.10352e-05H22.02C23.12 6.10352e-05 24 0.880061 24 1.98006V3.92006C24 5.02006 23.12 5.90006 22 5.88006H21.98C20.88 5.88006 20 5.00006 20 3.90006V1.98006C20 0.880061 20.88 6.10352e-05 22 6.10352e-05Z" fill="#fff"/>
        <motion.path variants={item} d="M34.3652 6.56771C35.1452 5.80771 36.4052 5.80771 37.1852 6.58771C37.9652 7.36771 37.9652 8.60771 37.1852 9.38771L36.4052 10.1677C35.6452 10.9477 34.3852 10.9477 33.6052 10.1677L33.5852 10.1477C32.8052 9.38771 32.8052 8.12771 33.5852 7.34771L34.3652 6.56771Z" fill="#fff"/>
        <motion.path variants={item} d="M38 22.0001V21.9801C38 20.8801 38.88 20.0001 39.98 20.0001H41.92C43.02 20.0001 43.9 20.8801 43.88 22.0001V22.0201C43.88 23.1201 43 24.0001 41.9 24.0001H39.98C38.88 24.0001 38 23.1201 38 22.0001Z" fill="#fff"/>
        <motion.path variants={item} d="M33.5677 36.4052C32.8077 35.6252 32.8077 34.3652 33.5877 33.5852C34.3677 32.8052 35.6077 32.8052 36.3877 33.5852L37.1677 34.3652C37.9477 35.1252 37.9477 36.3852 37.1677 37.1652L37.1477 37.1852C36.3877 37.9652 35.1277 37.9652 34.3477 37.1852L33.5677 36.4052Z" fill="#fff"/>
        <motion.path variants={item} d="M22 38.0001H22.02C23.12 38.0001 24 38.8801 24 39.9801V41.9201C24 43.0201 23.12 43.9001 22 43.8801H21.98C20.88 43.8801 20 43.0001 20 41.9001V39.9801C20 38.8801 20.88 38.0001 22 38.0001Z" fill="#fff"/>
        <motion.path variants={item} d="M7.36518 33.5677C8.14518 32.8077 9.40518 32.8077 10.1852 33.5877C10.9652 34.3677 10.9652 35.6077 10.1852 36.3877L9.40518 37.1677C8.64518 37.9477 7.38518 37.9477 6.60518 37.1677L6.58518 37.1477C5.80518 36.3877 5.80518 35.1277 6.58518 34.3477L7.36518 33.5677Z" fill="#fff"/>
        <motion.path variants={item} d="M0 22.0001L0 21.9801C0 20.8801 0.88 20.0001 1.98 20.0001H3.92C5.02 20.0001 5.9 20.8801 5.88 22.0001V22.0201C5.88 23.1201 5 24.0001 3.9 24.0001H1.98C0.88 24.0001 0 23.1201 0 22.0001Z" fill="#fff"/>
        <motion.path variants={item} d="M6.56771 9.4052C5.80771 8.6252 5.80771 7.3652 6.58771 6.5852C7.36771 5.8052 8.60771 5.8052 9.38771 6.5852L10.1677 7.3652C10.9477 8.1252 10.9477 9.38521 10.1677 10.1652L10.1477 10.1852C9.38771 10.9652 8.12771 10.9652 7.34771 10.1852L6.56771 9.4052Z" fill="#fff"/>
        </g>
      </AnimatePresence>
      
      :
      <AnimatePresence exitBeforeEnter>
       <motion.path 
        key={1} 
        initial={{ 
          x: 5,
          y: 5,
          scale: 0.4,
          rotate:10 }}
        animate={{rotate: -10, scale: 1}}
        d="M13.2676 4.41899C13.3324 3.90928 12.8081 3.53301 12.3222 3.7192C4.64402 6.63847 1.16049 15.7159 5.29224 23.188C8.00551 28.1013 13.6557 30.8556 19.1978 29.994C24.7701 29.137 28.8242 25.236 30.2871 20.4356C30.4296 19.9438 30.023 19.4431 29.5249 19.547C20.4373 21.3994 12.0303 13.7747 13.2676 4.41899Z" fill="#000"/>
      </AnimatePresence>
      }
    </motion.svg>
  )
}

export default SwitchMode;
