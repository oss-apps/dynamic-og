import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Profiles() {
  return (
    <main className="grid  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">

      <div className="text-center">
        {/* <p className="text-base font-semibold text-slate-600">User management</p> */}
        <h1 className="mt-4 text-lg font-bold tracking-tight text-gray-900 sm:text-3xl">This page is under construction</h1>
        {/* <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p> */}
        <div className="mt-10 flex items-center justify-center flex-col gap-x-6">
          {/* <Image src="/illus/under-construct.svg" width={400} height={400} alt="under consuryctions"></Image> */}
          <Button className="mt-8">
            <Link href="/templates/docs">
              Go back
            </Link>
          </Button>

        </div>
      </div>
    </main>
  )
}
