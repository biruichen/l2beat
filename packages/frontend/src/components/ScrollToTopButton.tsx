import React from 'react'

import { ChevronUpIcon } from './icons'

interface Props {
  desktopThreshold?: number
  mobileThreshold?: number
}

export function ScrollToTopButton(props: Props) {
  return (
    <button
      data-role="scroll-to-top-button"
      data-desktop-threshold={props.desktopThreshold}
      data-mobile-threshold={props.mobileThreshold}
      className="-bottom-12 fixed right-8 flex size-12 items-center justify-center rounded-lg bg-pink-900 transition-[bottom,background-color] ease-out data-[visible]:bottom-8 dark:bg-pink-200 dark:hover:bg-purple-450 hover:bg-fuchsia-700"
    >
      <ChevronUpIcon className="fill-pure-white dark:fill-neutral-900" />
    </button>
  )
}
