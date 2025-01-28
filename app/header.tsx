'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-xl border-3 border-white shadow-lg">
          <Image
            src="https://4util2rybf.ufs.sh/f/WdnH6lJULdDkozPCCOV7uAd5jf3qHMmkBQnOzYSgEc0hp6VR"
            alt="Jawher Ben Arbia"
            fill
            className="rounded-lg"
          />
        </div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Jawher Ben Arbia
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
