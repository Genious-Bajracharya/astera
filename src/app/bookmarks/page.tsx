"use client"
import PropertyCard from "@/components/common/cards/propertycard"
import PropertyCard2 from "@/components/common/cards/propertycard2"
import LandingContact from "@/components/landing/contact"
import Seller from "@/components/common/seller/seller"
import { useBookmarks } from "@/context/bookmarkContext"
import Link from "next/link"
import { Suspense, useEffect, useState } from "react"
import Loading from "../loading"
import { PropertyInterface, OffPlanInterface } from "@/interfaces/interface"

const Bookmark = () => {
    const { bookmarks } = useBookmarks()
    const [active, setActive] = useState<'buy' | 'offplan'>('offplan')
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    const filteredBookmarks = bookmarks.filter(
        (bookmark) => bookmark.category === active
    )
    function isOffPlan(item: PropertyInterface | OffPlanInterface): item is OffPlanInterface {
        return 'handover' in item && 'bookingAmount' in item
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="ptb">
                <div className="space-y-9 plr">
                    <p className="grey"><span className="font-bold">Home /</span> Bookmark</p>
                    <p className="heading3">Your Bookmarks</p>

                    {/* Toggle Buttons */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setActive('buy')}
                            className={`rounded-full cursor-pointer py-2.5 px-3 transition-all duration-200 ${
                                active === 'buy' ? 'back text-white' : 'border-2 text-black'
                            }`}
                        >
                            For Sale
                        </button>
                        <button
                            onClick={() => setActive('offplan')}
                            className={`rounded-full cursor-pointer py-2.5 px-3 transition-all duration-200 ${
                                active === 'offplan' ? 'back text-white' : 'border-2 text-black'
                            }`}
                        >
                            Off Plan
                        </button>
                    </div>

                    {/* Bookmarked Properties */}
                    {filteredBookmarks.length === 0 ? (
                        <div className="text-center space-y-4">
                            <p className="heading2">No Bookmarks in {active === 'buy' ? 'For Sale' : 'Off Plan'}</p>
                            <Link className="underline underline-offset-4" href={active === 'buy' ? "/buy" : "/offplan"}>
                                View More
                            </Link>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-6">
                            {filteredBookmarks.map((item, index) => (
                                active === 'buy' ? (
                                    <PropertyCard property={item as PropertyInterface} key={index} />
                                ) : (
                                    isOffPlan(item) ? (
                                        <PropertyCard2 data={item} key={index} />
                                    ) : null
                                )
                            ))}
                        </div>
                    )}
                </div>

                <LandingContact />
                <Seller />
            </div>
        </Suspense>
    )
}

export default Bookmark