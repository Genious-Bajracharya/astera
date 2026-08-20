"use client"
import { useState, useEffect, createContext } from "react"
import { GetOffplans, DeleteOffplan, UpdateOffplan } from "@/api"
import { OffPlanInterface } from "@/interfaces/interface"

interface OffplanContextType {
  offplanData: OffPlanInterface[]
  isLoading: boolean
  fetchData: () => Promise<void>
  deleteProduct: (id: string) => Promise<void>
  updateProduct: (
    id: string,
    updatedData: Partial<OffPlanInterface>
  ) => Promise<void>
  total: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const OffplanContext = createContext<OffplanContextType | null>(null)

export function OffplanProvider({ children }: { children: React.ReactNode }) {
  const [offplanData, setOffplanData] = useState<OffPlanInterface[]>([])
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // ✅ FETCH (admin=true → drafts + published)
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const data = await GetOffplans(`page=${currentPage}&admin=true`)
      setOffplanData(data.data)
      setTotal(data.total)
    } catch (error) {
      console.error("Fetch failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])

  const deleteProduct = async (id: string) => {
    try {
      setIsLoading(true)
      await DeleteOffplan(id)
      
  
      setOffplanData(prev => prev.filter(item => item._id !== id))
      
      // Refresh total count
      const data = await GetOffplans(`page=${currentPage}&admin=true`)
      setTotal(data.total)
      
      return Promise.resolve();
    } catch (error) {
      console.error("Delete failed:", error)
      // Revert on error
      fetchData();
      return Promise.reject(error);
    } finally {
      setIsLoading(false)
    }
  }

  // ✅ FIXED UPDATE with optimistic updates
  const updateProduct = async (
    id: string,
    updatedData: Partial<OffPlanInterface>
  ) => {
    try {
      setIsLoading(true)
      
      // 🔴 FIX: Optimistic update
      setOffplanData(prev =>
        prev.map(item =>
          item._id === id
            ? { ...item, ...updatedData }
            : item
        )
      )
      
      await UpdateOffplan(id, updatedData)
      
      // Optional: Refresh data from server to ensure consistency
      // fetchData();
      
      return Promise.resolve();
    } catch (error) {
      console.error("Update failed:", error)
      // Revert optimistic update on error
      fetchData();
      return Promise.reject(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <OffplanContext.Provider
      value={{
        offplanData,
        isLoading,
        fetchData,
        updateProduct,
        deleteProduct,
        total,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </OffplanContext.Provider>
  )
}
