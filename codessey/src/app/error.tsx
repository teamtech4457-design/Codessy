'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-amber-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto section-padding">
        <h2 className="text-4xl font-serif text-gold-400 mb-4">Something went wrong!</h2>
        <p className="text-gray-300 mb-8">
          We apologize for the inconvenience. The divine energies are working to fix this.
        </p>
        <button
          onClick={reset}
          className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-full transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}