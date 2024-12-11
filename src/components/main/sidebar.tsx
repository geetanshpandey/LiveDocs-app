'use client';
import React, { useState } from 'react';
import { Plus, Minus, Menu } from 'lucide-react';
import { Box, Star, Grid, Package, FileArchive} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Settings, LayoutDashboard, DollarSign,LogOut, ChevronDown } from "lucide-react";
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";


const Navbar: React.FC = () => {
  // State to manage the dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // State to manage the sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/" className="flex ms-2 md:me-24">
                <FileArchive size={28} className='sm:mr-2 mr-1 ml-1' />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  LIVE<span className='text-blue-600'>DOCS</span>
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="flex items-center ms-3  mr-6">
                  <div className="ml-4 mr-4">
                    {/* Dropdown Button */}
                    <Button className=''>
                      Share
                    </Button>
                  </div>
                  <Avatar className='hover:cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;