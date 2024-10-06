import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex py-5 items-center justify-between ">
      <Link href="/" className="flex item-center gap-2">
        {/* <Image src={} alt="Logo" className='size-10'/> */}
        <h4>Image Logo</h4>
        <h4 className="text-3xl font-semibold">Calendar</h4>
      </Link>
    </div>
  );
}
