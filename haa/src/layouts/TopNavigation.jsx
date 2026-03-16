import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/TopNavigation.module.css'

export function TopNavigation({
  items,
  navigationLabel = 'Dashboard navigation',
  brandBadge = 'C',
}) {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current

      if (currentScrollY <= 24) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY + 8) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY - 8) {
        setIsVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`dashboard-topnav glass-panel${isVisible ? ' is-visible' : ' is-hidden'}`}
    >
      <div className="topnav-brand">
        <div className="sidebar-brand-badge">{brandBadge}</div>
      </div>

      <nav className="topnav-links" aria-label={navigationLabel}>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === items[0]?.path}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' is-active' : ''}`
            }
            aria-label={item.label}
            title={item.label}
          >
            <span className="sidebar-link-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="sidebar-link-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="topnav-actions">
        <button type="button" className="topnav-logout-button">
          Logout
        </button>
      </div>
    </header>
  )
}
