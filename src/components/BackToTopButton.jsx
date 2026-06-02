import { useState, useEffect } from 'react'
import { MdOutlineWavingHand } from 'react-icons/md'

const buttonStyle = {
  position: 'fixed',
  right: '1.5rem',
  bottom: '1.5rem',
  width: '3.5rem',
  height: '3.5rem',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: '#1d4ed8',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  display: 'grid',
  placeItems: 'center',
  zIndex: 1000,
}

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      title="Voltar ao início"
      aria-label="Voltar ao início"
    >
      <MdOutlineWavingHand size={28} />
    </button>
  )
}