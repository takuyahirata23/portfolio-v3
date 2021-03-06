interface InnerProps {
  LABEL: string
  URL: string
}

export default function withList(Component: React.ComponentType<InnerProps>) {
  function withListInner({ LABEL, URL }: InnerProps) {
    return (
      <li key={LABEL}>
        <Component LABEL={LABEL} URL={URL} />
      </li>
    )
  }

  return withListInner
}
