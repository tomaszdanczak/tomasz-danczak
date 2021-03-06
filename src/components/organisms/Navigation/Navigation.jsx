import React from "react"
import { Popover } from "@headlessui/react"
import HeroLogo from "components/molecules/HeroLogo/HeroLogo"
import PopoverOpenButton from "components/molecules/PopoverOpenButton/PopoverOpenButton"
import DesktopMenuItems from "components/molecules/DesktopMenuItems/DesktopMenuItems"
import TransitionPopoverPanel from "components/atoms/TransitionPopoverPanel/TransitionPopoverPanel"
import PopoverLogo from "components/atoms/PopoverLogo/PopoverLogo"
import PopoverCloseButton from "components/molecules/PopoverCloseButton/PopoverCloseButton"
import MobileMenuItems from "components/molecules/MobileMenuItems/MobileMenuItems"

export default function Navigation() {
  return (
    <Popover>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <HeroLogo />
              <PopoverOpenButton />
            </div>
          </div>
          <DesktopMenuItems />
        </nav>
      </div>

      <TransitionPopoverPanel>
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <PopoverLogo />
              <PopoverCloseButton />
            </div>
            <MobileMenuItems />
          </div>
        </Popover.Panel>
      </TransitionPopoverPanel>
    </Popover>
  )
}
