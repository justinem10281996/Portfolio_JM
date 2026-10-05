import { cn } from '../../lib/utils';

/**
 * Label that appears above the trigger on hover and on keyboard focus.
 * Purely CSS so it costs no state and works on the icon-only buttons.
 */
export function Tooltip({
  label,
  children,
  side = 'top',
  className,
}: {
  label: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom';
  className?: string;
}) {
  return (
    <span className={cn('group/tt relative inline-flex', className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 transition-all duration-200 group-hover/tt:opacity-100 group-focus-within/tt:opacity-100 z-50',
          side === 'top' ? 'bottom-full mb-2 translate-y-1' : 'top-full mt-2 -translate-y-1',
          'group-hover/tt:translate-y-0'
        )}
      >
        {label}
        <span className="absolute left-1/2 -translate-x-1/2 border-4 border-transparent" style={side === 'top' ? { top: '100%', borderTopColor: 'hsl(var(--foreground))' } : { bottom: '100%', borderBottomColor: 'hsl(var(--foreground))' }} />
      </span>
    </span>
  );
}