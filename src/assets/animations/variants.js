const ingredientContainerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .5
    }
  }
}

const pageAnimation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0
  }
}



export { ingredientContainerVariants, pageAnimation }