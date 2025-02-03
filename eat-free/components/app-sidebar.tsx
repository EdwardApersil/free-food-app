'use client'
import { FC, Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { SearchIcon } from 'lucide-react';


interface AppSidebarProp {
  children: React.ReactNode;
  pageTitle: string;
}

const AppSidebar: FC<AppSidebarProp> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle} | Eat Free</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <header className="w-full h-[88px] px-8 py-4 bg-white flex justify-between items-center border-b border-neutral-100 shadow-sm">
          <div className="flex items-center gap-4">
            <Image src="/eat-free-16.png" alt="Eat Free Logo" width={32} height={32} />
            <h2 className="text-xl font-bold">{pageTitle} Eat Free</h2>
          </div>
          <div className="relative w-[300px]">
            <input
              type="text"
              placeholder="Search"
              className="w-[500px] p-2 pl-10 rounded-md shadow-md focus:outline-none focus:ring-2 border-gray-300 focus:ring-green-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="flex items-center gap-2 focus:outline-none">
              <CgProfile className="w-5 h-5" />
                <span className="text-gray-700">User Name</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-[200px] origin-top-right bg-white border border-gray-200 rounded shadow-lg focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/profile"
                      className={`${active ? 'bg-gray-100' : ''} px-4 py-2 text-lg flex items-center gap-2  text-gray-700`}
                    >
                      <CgProfile className="w-5 h-5" />
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/logout"
                      className={`${active ? 'bg-gray-100' : ''} flex items-center gap-2 px-4 py-2 text-lg  text-gray-700`}
                    >
                      <IoIosLogOut className="w-5 h-5" />
                      Logout
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/logout"
                      className={`${active ? 'bg-gray-100' : ''}  px-4 py-2 text-lg flex items-center gap-2 text-gray-700`}
                    >
                      <CiSettings className="w-5 h-5" />
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/logout"
                      className={`${active ? 'bg-gray-100' : ''} px-4 py-2 text-lg flex items-center gap-2  text-gray-700`}
                    >
                      <IoIosHelpCircleOutline className="w-5 h-5" />
                      Help
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/logout"
                      className={`${active ? 'bg-gray-100' : ''} px-4 py-2 text-lg flex items-center gap-2 text-gray-700`}
                    >
                      <MdOutlinePrivacyTip className="w-5 h-5" />
                      Privacy
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </header>
        <div className="flex flex-1">
          <aside className=" static w-64 bg-gray-50 border-r border-neutral-100 shadow-sm flex flex-col">
            <div className="upwards flex-grow py-10 mx-3 px-4">
              <nav className="flex flex-col gap-4 text-lg">
                <Link href="/dashboard" className="text-gray-700 hover:text-green-500 flex items-center gap-3 transition-colors duration-200">
                  <LuLayoutDashboard className="w-5 h-5" />
                  <span className="text-lg font-medium">Dashboard</span>
                </Link>
                <Link href="/dashboard/orders" className="text-gray-700 hover:text-green-500 flex items-center gap-3 transition-colors duration-200">
                  <CiShoppingCart className="w-5 h-5" />
                  <span className="text-lg font-medium">Orders</span>
                </Link>
                <Link href="/dashboard/foods" className="text-gray-700 hover:text-green-500 flex items-center gap-3 transition-colors duration-200">
                  <IoFastFoodSharp className="w-5 h-5" />
                  <span className="text-lg font-medium">Foods</span>
                </Link>
              </nav>
            </div>

            {/* <div className="down border-t border-neutral-100 py-4 px-4">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-colors duration-200 cursor-pointer">
                  <CiSettings className="w-5 h-5" />
                  <span className="text-sm font-medium">Settings</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-colors duration-200 cursor-pointer">
                  <IoIosHelpCircleOutline className="w-5 h-5" />
                  <span className="text-sm font-medium">Help</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-colors duration-200 cursor-pointer">
                  <MdOutlinePrivacyTip className="w-5 h-5" />
                  <span className="text-sm font-medium">Logout</span>
                </div>
              </div>
            </div> */}
          </aside>
          <main className="bg-white ">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;