import React from "react"

type AvatarProps = {
  avatarUrl: string
}

const Avatar = ({avatarUrl}: AvatarProps): JSX.Element => {
  return <li className="h-10 w-10 bg-slate-500 rounded-full flex items-center justify-center">{avatarUrl}</li>
}

export default Avatar
