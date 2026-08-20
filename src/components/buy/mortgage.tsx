'use client'

import { useState } from 'react'

const Mortgage = () => {
  const [price, setPrice] = useState(0)
  const [deposit, setDeposit] = useState(0)
  const [period, setPeriod] = useState(25) // years
  const [rate, setRate] = useState(3.5) // %
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const calculateMortgage = () => {
    const principal = price - deposit
    const monthlyRate = rate / 100 / 12
    const totalPayments = period * 12

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / totalPayments)
      return
    }

    const M =
      principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalPayments) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1)

    setMonthlyPayment(M)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="heading2">Mortgage Calculator</p>
        <p className="grey">Estimate your monthly mortgage payments</p>
      </div>

      <div className="space-y-3">
        <p className="grey">Monthly Payment</p>
        <p className="heading2">AED {monthlyPayment.toFixed(2)}</p>
      </div>

      {/* form */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          calculateMortgage()
        }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-3 flex flex-col">
          <label className="grey text-sm">Property Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="rounded-full border-[1px] border-[#C9C9C9] px-5 py-3"
          />
        </div>
        <div className="space-y-3 flex flex-col">
          <label className="grey text-sm">Deposit</label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(+e.target.value)}
            className="rounded-full border-[1px] border-[#C9C9C9] px-5 py-3"
          />
        </div>
        <div className="space-y-3 flex flex-col">
          <label className="grey text-sm">Mortgage Period (Years)</label>
          <input
            type="number"
            value={period}
            onChange={(e) => setPeriod(+e.target.value)}
            className="rounded-full border-[1px] border-[#C9C9C9] px-5 py-3"
          />
        </div>
        <div className="space-y-3 flex flex-col">
          <label className="grey text-sm">Interest Rate (%)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="rounded-full border-[1px] border-[#C9C9C9] px-5 py-3"
          />
        </div>

        <button
          type="submit"
          className="back py-2.5 px-6 text-white rounded-full w-fit"
        >
          Get a Free Consultation
        </button>
      </form>
    </div>
  )
}

export default Mortgage