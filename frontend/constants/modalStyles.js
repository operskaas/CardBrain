const modalStyles = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'none',
    bottom: 'none',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    color: '#555555',
    padding: 0,
    transition: '0.3s all'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    width: '100vw',
    height: '100%',
    height: '100vh',
    background: 'rgba(0,0,0,0.6)',
    display: 'block',
    transition: '0.3s all'
  }
}

export default modalStyles;
