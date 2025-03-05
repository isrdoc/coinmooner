interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="my-6">
      <h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>
      {description && <p className="text-gray-400 max-w-3xl">{description}</p>}
    </div>
  )
}

