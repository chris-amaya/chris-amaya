import {useEffect, useState} from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--color-primary', '#01263a')
      document.documentElement.style.setProperty('--color-light', '#1a3852')
      document.documentElement.style.setProperty('--color-dark', '#000')
      document.documentElement.style.setProperty('--color-text', '#fff')
      document.documentElement.style.setProperty('--color-accent', '#ffffff')
      document.documentElement.style.setProperty('--color-rowTable', '#1b3954')
      document.documentElement.style.setProperty(
        '--color-headerTable',
        '#01263a',
      )
    } else if (theme === 'light') {
      document.documentElement.style.setProperty('--color-primary', '#01263a')
      document.documentElement.style.setProperty('--color-light', '#ffffff')
      document.documentElement.style.setProperty('--color-dark', '#000')
      document.documentElement.style.setProperty('--color-text', '#ffffff')
      document.documentElement.style.setProperty('--color-rowTable', '#fff')
      document.documentElement.style.setProperty('--color-accent', '#01263a')
      document.documentElement.style.setProperty(
        '--color-headerTable',
        '#f0f0f0',
      )
    }
  }, [theme])

  const [isActive, setIsActive] = useState(false)

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      setIsActive(false)
    } else {
      setTheme('light')
      setIsActive(true)
    }
  }

  return {
    handleTheme,
    isActive,
  }
}
