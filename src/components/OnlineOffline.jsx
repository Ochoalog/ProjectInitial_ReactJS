export default function OnlineOffline({ isOnline = true }) {
  const className = isOnline ? 'bg-green-500' : 'bg-red-300'
  return (
    <span className={`${className} p-1`}>
      {isOnline ? 'Online' : 'Offline'}
    </span>
  )
}
