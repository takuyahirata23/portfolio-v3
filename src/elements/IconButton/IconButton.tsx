import React from 'react'
import { default as MaterialIconButton } from '@material-ui/core/IconButton'

interface Props {
  children: React.ReactNode
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

export default function IconButton({ children, onClick }: Props) {
  return <MaterialIconButton onClick={onClick}>{children}</MaterialIconButton>
}
