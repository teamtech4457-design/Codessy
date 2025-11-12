import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-amber-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto section-padding">
        <h1 className="text-6xl font-serif text-gold-400 mb-4">404</h1>
        <h2 className="text-2xl font-serif text-white mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The divine path you&apos;re seeking seems to have vanished into the cosmic dance.
        </p>
        <Link 
          href="/"
          className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-full transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}