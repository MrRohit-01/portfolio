import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useState } from "react"

export default function CommandDock() {
  const [open, setOpen] = useState(true)

  return (
    <CommandDialog
      showCloseButton
      open={open}
      onOpenChange={setOpen}
      className="bg-[#D3DAD9]/90 text-[#37353E] border border-[#44444E]/40 shadow-2xl backdrop-blur-md rounded-xl"
    >
      <Command className="bg-transparent text-[#37353E]">
        <CommandInput
          placeholder="Type a command or search..."
          className="placeholder:text-[#44444E]"
        />
        <CommandList>
          <CommandEmpty className="text-[#44444E]">No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions" className="text-[#37353E]">
            <CommandItem className="hover:bg-[#44444E]/20 rounded-md">
              Calendar
            </CommandItem>
            <CommandItem className="hover:bg-[#44444E]/20 rounded-md">
              Search Emoji
            </CommandItem>
            <CommandItem className="hover:bg-[#44444E]/20 rounded-md">
              Calculator
            </CommandItem>
          </CommandGroup>

          <CommandSeparator className="bg-[#44444E]/30" />

          <CommandGroup heading="Settings" className="text-[#37353E]">
            <CommandItem className="hover:bg-[#44444E]/20 rounded-md">
              Profile
            </CommandItem>
            <CommandItem className="hover:bg-[#44444E]/20 rounded-md">
              Billing
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
