'use client';

import { useDashboardStore } from '@/stores/dashboard';

export function TopBar() {
  const { sidebarOpen } = useDashboardStore();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border-primary bg-bg-secondary px-4">
      {/* Left: Logo (shown when sidebar collapsed) + breadcrumb area */}
      <div className="flex items-center gap-3">
        {!sidebarOpen && (
          <span className="font-mono text-sm font-bold tracking-wider text-accent-blue">
            IREM
          </span>
        )}
      </div>

      {/* Center: Search trigger */}
      <button
        className="flex items-center gap-2 rounded-lg border border-border-primary bg-bg-primary px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-border-highlight hover:text-text-secondary"
        aria-label="Open search"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="hidden sm:inline">Search cities, developers, RERA...</span>
        <kbd className="hidden rounded border border-border-highlight bg-bg-tertiary px-1.5 py-0.5 font-mono text-xs text-text-muted sm:inline">
          Cmd+K
        </kbd>
      </button>

      {/* Right: Status + notifications */}
      <div className="flex items-center gap-3">
        {/* Data freshness */}
        <span className="hidden text-xs text-text-muted md:inline">
          Updated 2m ago
        </span>

        {/* Notification bell */}
        <button
          className="relative rounded-md p-1.5 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary"
          aria-label="Notifications"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {/* Notification dot */}
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent-red" />
        </button>

        {/* Live indicator */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
          </span>
          <span className="hidden text-xs font-medium text-accent-green lg:inline">
            LIVE
          </span>
        </div>
      </div>
    </header>
  );
}
