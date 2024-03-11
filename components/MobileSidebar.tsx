"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Sidebar from '@/components/Sidebar'
  

const MobileSidebar = () => {

    const [isMute, setIsMuted] = useState(false);
    useEffect(() => {
        setIsMuted(true)
    }, [])

    if(!isMute){
        return null
    }

  return (
<Sheet>
  <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
            <Menu />
        </Button>
  </SheetTrigger>
  <SheetContent className='p-0' side='left'>
    <Sidebar />
  </SheetContent>
</Sheet>

 
      
  )
}

export default MobileSidebar