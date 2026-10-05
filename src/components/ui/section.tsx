import * as React from "react"
import { cn } from "../../lib/utils"
import { StaggerWords } from "./StaggerWords"

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string
}

function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28 bg-background scroll-mt-16 sm:scroll-mt-20 transition-colors duration-500", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  )
}

function SectionHeader({
  index,
  label,
  title,
  description,
  className,
}: {
  index?: string
  label: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        {index && <span className="text-xs font-mono text-muted-foreground tabular-nums">{index}</span>}
        <span className="h-px w-8 bg-border" />
        <span className="text-xs font-mono tracking-wider uppercase text-muted-foreground">{label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
      {description && (
        <StaggerWords
          text={description}
          className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed mt-4 sm:mt-5"
          as="p"
        />
      )}
    </div>
  )
}

export { Section, SectionHeader }