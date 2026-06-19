import React from 'react';

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  eyebrowNumber?: string;
  className?: string;
  bgClass?: string;
  noBorder?: boolean;
  noBorderBottom?: boolean;
  children: React.ReactNode;
}

export default function SectionShell({
  id,
  eyebrow,
  eyebrowNumber,
  className = '',
  bgClass = '',
  noBorder = false,
  noBorderBottom = true,
  children,
}: SectionShellProps) {
  const sectionClasses = ['relative', bgClass, className].filter(Boolean).join(' ');

  const frameClasses = [
    'max-w-7xl mx-auto border-slate-200',
    'px-3 sm:px-4 md:px-6',
    !noBorder ? 'border-t border-l border-r' : 'border-l border-r',
    !noBorderBottom ? 'border-b' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <div className={frameClasses}>
        {eyebrow && (
          <div className="pt-5 sm:pt-6 md:pt-8 pb-2">
            <span className="type-eyebrow-num">
              {eyebrowNumber && <span className="text-slate-400">[{eyebrowNumber}]</span>}
              {eyebrowNumber && <span>&nbsp;</span>}
              {eyebrow}
            </span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
