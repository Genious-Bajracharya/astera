"use client"
import {  useState, useEffect, createContext } from "react"
import { PropertyInterface } from "@/interfaces/interface"
import { GetBuys, DeleteBuy, UpdateBuy } from "@/api"


interface BuyContextType {
    buyData: PropertyInterface[]
    fetchData: () => void
    refetchProducts: () => void;
    deleteProduct: (id: string) => Promise<void>;
    updateProduct: (id: string, updatedData: Partial<PropertyInterface>) => Promise<void>;
    isLoading:boolean
}

export const BuyContext = createContext<BuyContextType | null>(null)

export function BuyProvider({children}:{children:React.ReactNode}){
    const [buyData,setBuyData] = useState<PropertyInterface[]>([])
    const [isLoading,setIsLoading] = useState(false)

   const fetchData = async () =>{
    try{
        setIsLoading(true)
        const {data} = await GetBuys()
        setBuyData(data)
    }catch(error){
        console.log(error)
    }finally{
        setIsLoading(false)
    }
   }

    const deleteProduct = async (id: string) => {
        try {
            setIsLoading(true);
            await DeleteBuy(id);
            setBuyData(prev => prev.filter(item => item._id !== id));
        } catch (error) {
            console.error("Delete failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const updateProduct = async (id: string, updatedData: Partial<PropertyInterface>) => {
        try {
            setIsLoading(true);
            const { data } = await UpdateBuy(id, updatedData);
            setBuyData(prev =>
            prev.map(item => (item._id === id ? { ...item, ...data } : item))
            );
        } catch (error) {
            console.error("Update failed:", error);
        } finally {
            setIsLoading(false);
        }
    };


    const refetchProducts = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData(); // Fetch on mount
    }, []);

    return(
        <BuyContext.Provider value={{buyData, fetchData , refetchProducts,deleteProduct,updateProduct,isLoading}}>
            {children}
        </BuyContext.Provider>
    )

}
