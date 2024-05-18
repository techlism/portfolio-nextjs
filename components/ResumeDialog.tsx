'use client'
import { Button } from "@/shadcn-components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn-components/ui/dialog"

import { FileText } from "lucide-react"

export function ResumeDialog(){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'ghost'} className="flex gap-2 border align-middle p-4 text-lg max-w-max bg-active-300 dark:bg-active-400 mb-5">
            <FileText className="m-1"/>
            Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[70vw] max-w-[85vw] auto-gradient">
        <DialogHeader>
          <DialogTitle>My Resume</DialogTitle>
        </DialogHeader>
        <div className="flex align-middle justify-center overflow-auto">
            <iframe src="/resume.pdf" className="rounded-lg custom-scrollbar"  height={'550'} width={'600'} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
