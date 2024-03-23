"use client"
import { classNames } from '@/utils/classNames'
import {
  CheckCircleIcon,
  NewspaperIcon,
  DocumentIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const navigation = [
  { name: 'Docs', href: '/templates/docs', icon: DocumentIcon, count: '5', current: true },
  { name: 'Blog', href: '/templates/blogs', icon: NewspaperIcon, current: false },
  { name: 'Profile', href: '/templates/profiles', icon: UserCircleIcon, count: '12', current: false },
  { name: 'Action', href: '/templates/actions', icon: CheckCircleIcon, count: '20+', current: false }

]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]



export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex grow lg:min-w-44 h-screen flex-col gap-y-5 overflow-y-auto bg-stone-100 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <Link href="/" className='text-xl font-bold flex text-slate-950 gap-2 items-center '>
          <svg viewBox="0 0 256 256" className='w-7 h-7 ' xmlns="http://www.w3.org/2000/svg"><rect fill="none" /><path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm68.7,16a16.1,16.1,0,0,1-6.7,1.4,15.6,15.6,0,0,1-10-3.6V184a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V141.8a15.6,15.6,0,0,1-10,3.6,16.1,16.1,0,0,1-6.7-1.4,15.8,15.8,0,0,1-9.1-17.6L30.6,38.9A16.1,16.1,0,0,1,50.2,26.3L105,40h46l54.8-13.7a16.1,16.1,0,0,1,19.6,12.6l16.4,87.5A15.8,15.8,0,0,1,232.7,144ZM200,184V122L148.1,56H107.9L56,122v62a24.1,24.1,0,0,0,24,24h40V195.3l-13.7-13.6a8.1,8.1,0,0,1,11.4-11.4L128,180.7l10.3-10.4a8.1,8.1,0,0,1,11.4,11.4L136,195.3V208h40A24.1,24.1,0,0,0,200,184Z" />
          </svg>
          <span className='hidden lg:block'>  DOG </span>
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      pathname == item.href ? 'bg-stone-100  text-stone-950 font-semibold' : 'text-stone-500 hover:text-stone-700 hover:ring hover:ring-stone-500 ',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 '
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className='hidden lg:block'>   {item.name} </span>
                  </a>
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </nav>
    </div >
  )
}
