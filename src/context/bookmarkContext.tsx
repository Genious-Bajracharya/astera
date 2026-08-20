/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { PropertyInterface } from '@/interfaces/interface'

interface BookmarkContextType {
  bookmarks: PropertyInterface[]
  addBookmark: (property: PropertyInterface) => void
  removeBookmark: (_id: string) => void
  isBookmarked: (_id: string) => boolean
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined)

const inferCategory = (property: any): 'buy' | 'offplan' => {
  if (!property) return 'buy'
  if (property.category) return property.category
  if ('bookingAmount' in property || 'handover' in property || 'commission' in property) return 'offplan'
  return 'buy'
}

export const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<PropertyInterface[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('bookmarks')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          const normalized = parsed.map((p: any) => ({ ...p, category: p.category ?? inferCategory(p) }))
          setBookmarks(normalized)
        } else {
          setBookmarks([])
        }
      } catch {
        setBookmarks([])
      }
    }
  }, [])

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const addBookmark = (property: PropertyInterface) => {
    const propWithCategory = { ...property, category: property.category ?? inferCategory(property) }
    setBookmarks((prev) =>
      prev.find((p) => p._id === propWithCategory._id) ? prev : [...prev, propWithCategory]
    )
  }

  const removeBookmark = (_id: string) => {
    setBookmarks((prev) => prev.filter((p) => p._id !== _id))
  }

  const isBookmarked = (_id: string) => bookmarks.some((p) => p._id === _id)

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export const useBookmarks = () => {
  const context = useContext(BookmarkContext)
  if (!context) throw new Error('useBookmarks must be used within BookmarkProvider')
  return context
}