import React from 'react'

import { cn } from '../utils/cn'

interface Props {
  className?: string
  animated?: boolean
}

export function LogoSmall({ className, animated = true }: Props) {
  return (
    <svg
      className={cn('overflow-visible', className)}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="L2BEAT logo"
    >
      <g className={cn('origin-center', animated && 'animate-pulse')}>
        <path
          d="M15.75 1.53C17.37 2.48 18.80 3.70 19.60 5.43L26.16 1.53L33.81 5.20L35.55 11.91L19.89 31.42L16.55 34.60L4.07 19.31C3.43 18.58 2.80 17.75 2.19 16.83C1.55 15.92 1.03 14.96 0.64 13.95C0.21 12.94 0 11.95 0 10.97C0 8.74 0.42 6.82 1.28 5.20C2.10 3.58 3.28 2.33 4.80 1.44C6.33 0.56 8.13 0.11 10.21 0.11C12.26 0.11 14.10 0.59 15.75 1.53Z"
          className="fill-brand-red dark:fill-brand-red-dark"
        />
        <path
          d="M17.15 17.36H6.77V30.22H17.15V17.36Z"
          className="fill-brand-red dark:fill-brand-red-dark"
        />
        <path
          d="M16.96 35.20C17.42 35.65 17.99 35.88 18.66 35.88L35.61 35.64C36.29 35.64 36.91 35.55 37.31 34.95C37.83 34.17 36.45 31.18 34.63 30.97C32.82 30.75 27.73 30.74 24.83 30.48C24.60 30.46 24.54 30.13 24.62 29.91C24.83 29.29 33.27 19.30 33.27 19.30C33.91 18.57 34.54 17.74 35.15 16.83C35.79 15.91 36.31 14.95 36.71 13.94C37.13 12.93 37.35 11.94 37.35 10.96C37.35 8.73 36.92 6.81 36.06 5.19C35.24 3.57 34.06 2.32 32.54 1.44C31.01 0.55 29.21 0.11 27.13 0.11C25.09 0.11 23.24 0.58 21.59 1.53C19.97 2.47 18.54 3.70 17.74 5.42C17.27 6.43 17 8.07 17.27 9.18C17.50 10.09 17.73 10.32 18.42 10.55C19.11 10.78 19.33 10.28 19.56 9.18C19.79 8.08 20.17 6.84 20.71 5.97C21.40 4.87 22.67 4.06 23.69 3.68C24.55 3.36 25.98 3.09 27.13 3.22C29.18 3.45 30.63 4.18 31.70 5.42C32.78 6.66 33.61 8.72 33.37 10.28L33.36 10.33C33.22 11.29 33.02 12.60 32.54 13.53C32.05 14.48 30.56 16.35 29.64 17.42L16.96 31.90C16.54 32.33 16.32 32.87 16.32 33.55C16.32 34.19 16.54 34.74 16.96 35.20Z"
          className="fill-brand-black dark:fill-white"
        />
        <path
          d="M4.40 22.70C4.40 22.59 4.40 22.20 4.40 21.55C4.43 20.86 4.44 20.09 4.44 19.24C4.47 18.36 4.47 17.50 4.44 16.68C4.44 15.83 4.41 15.17 4.36 14.70C4.30 14.10 4.29 13.56 4.32 13.09C4.37 12.63 4.40 12.10 4.40 11.53C4.40 11.14 4.41 10.80 4.44 10.50C4.47 10.17 4.54 9.89 4.65 9.67C4.76 9.42 4.93 9.25 5.18 9.14C5.43 9 5.79 8.93 6.25 8.93C6.69 8.93 7.12 9.08 7.53 9.38C7.97 9.69 8.23 10.10 8.31 10.62L8.93 18.82L9.06 29.30L14.58 29.13C14.77 29.13 15.05 29.23 15.41 29.42C15.79 29.58 15.98 29.79 15.98 30.04C15.98 30.26 15.89 30.45 15.69 30.61C15.50 30.75 15.27 30.88 14.99 30.99C14.75 31.07 14.48 31.14 14.21 31.19C13.96 31.22 13.78 31.23 13.67 31.23C13.45 31.26 13.12 31.29 12.68 31.32C12.24 31.32 11.78 31.32 11.28 31.32C10.82 31.32 10.36 31.32 9.92 31.32C9.48 31.32 9.15 31.32 8.93 31.32C8.66 31.45 8.33 31.51 7.94 31.48C7.56 31.45 7.24 31.44 7 31.44H5.72C5.50 31.44 5.25 31.38 4.98 31.27C4.73 31.14 4.54 30.99 4.40 30.82V22.70Z"
          className="fill-brand-black dark:fill-white"
        />
      </g>
    </svg>
  )
}
