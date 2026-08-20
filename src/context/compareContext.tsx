'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { PropertyInterface } from '@/interfaces/interface'

interface compareContextType {
  compares: PropertyInterface[]
  addCompare: (property: PropertyInterface) => void
  removeCompare: (_id: string) => void
  iscompareed: (_id: string) => boolean
}
    
const CompareContext = createContext<compareContextType | undefined>(undefined)

export const CompareProvider = ({ children }: { children: React.ReactNode }) => {
  const [compares, setCompares] = useState<PropertyInterface[]>([])

  // Load compares from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('compares')
    if (stored) {
      try {
        setCompares(JSON.parse(stored))
      } catch {
        setCompares([])
      }
    }
  }, [])

  // Save compares to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('compares', JSON.stringify(compares))
  }, [compares])

  const addCompare = (property: PropertyInterface) => {
    setCompares((prev) =>
      prev.find((p) => p._id === property._id) ? prev : [...prev, property]
    )
  }

  const removeCompare = (_id: string) => {
    setCompares((prev) => prev.filter((p) => p._id !== _id))
  }

  const iscompareed = (_id: string) => {
    return compares.some((p) => p._id === _id)
  }

  return (
    <CompareContext.Provider
      value={{ compares, addCompare, removeCompare, iscompareed }}
    >
      {children}
    </CompareContext.Provider>
  )
}

export const useCompare = () => {
  const context = useContext(CompareContext)
  if (!context) throw new Error('useCompare must be used within compareProvider')
  return context
}