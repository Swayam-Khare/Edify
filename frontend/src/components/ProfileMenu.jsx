

export default function ProfileMenu() {
  return (
    <div className="absolute right-0 mt-4 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
      <div className="px-4 py-3">
        <p className="text-sm">Signed in as</p>
        <p className="text-sm font-medium text-gray-900">user@example.com</p>
      </div>
      <div className="py-1">
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
      </div>
    </div>
  )
}