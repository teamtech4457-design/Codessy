export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-amber-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold-400 mx-auto mb-4"></div>
        <h2 className="text-2xl font-serif text-gold-400">Codessey</h2>
        <p className="text-gray-300 mt-2">Loading divine experiences...</p>
      </div>
    </div>
  )
}