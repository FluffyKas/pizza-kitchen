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

const modalVariants = {
  hidden: {
    y: "-100%",
    x: "-50%",
    opacity: 0
  },
  visible: {
    y: "-50%",
    x: "-50%",
    opacity: 1
  }
}

export { ingredientContainerVariants, pageAnimation, modalVariants }