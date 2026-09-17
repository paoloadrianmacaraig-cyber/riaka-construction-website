import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-xs font-semibold text-gray-400 ${className}`}>
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className="text-gray-600">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-sky-400 font-bold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
