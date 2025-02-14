'use client';

interface OrDividerProps {
  text?: string;
}

export function OrDivider({ text = 'or' }: OrDividerProps) {
  return (
    <div className="relative w-full my-4">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-divider"></div>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-content1 px-2 text-default-500">{text}</span>
      </div>
    </div>
  );
}
