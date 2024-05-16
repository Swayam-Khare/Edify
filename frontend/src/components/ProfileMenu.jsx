

export default function ProfileMenu({ user, onClick }) {

  function logout() {
    localStorage.removeItem('user');
    onClick('');
    window.location.reload();
  }

  return (
    <div className="absolute z-50 right-0 mt-4 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
      <div className="px-4 py-3">
        <p className="text-sm">Signed in as</p>
        <p className="text-sm font-medium text-gray-900">{user.email}</p>
      </div>
      <div className="py-1">
        <div onClick={() => onClick('profile')} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</div>
        <div onClick={logout} className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</div>
      </div>
    </div>
  )
}