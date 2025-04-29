"use client"

import { useState } from "react"
import { Search, ChevronDown, Heart, Home, Compass, BookmarkIcon, User, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function WanderSol() {
  const [activeScreen, setActiveScreen] = useState(0)

  const screens = [
    // Landing Screen
    <div key="landing" className="relative w-full h-full flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image src="/city-night.jpg" alt="City at night" fill className="object-cover brightness-50" />
      </div>
      <div className="relative z-10 flex flex-col h-full p-6 justify-between">
        <div className="text-[#15ff58] text-xl font-bold tracking-wider mt-8">WanderSol</div>
        <div className="space-y-4 mb-12">
          <h2 className="text-white text-2xl font-light">Wander through your</h2>
          <h1 className="text-white text-4xl font-bold">favourite cities</h1>
          <h2 className="text-white text-2xl font-light">using Web3!</h2>
          <button
            className="w-full bg-[#15ff58] text-[#2c2c2c] font-bold py-4 rounded-full mt-8"
            onClick={() => setActiveScreen(1)}
          >
            Explore
          </button>
        </div>
      </div>
    </div>,

    // Explore Screen
    <div key="explore" className="flex flex-col h-full">
      <div className="p-5 pb-2">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[#c4c4c4] text-sm">Explore</p>
            <h1 className="text-white text-3xl font-bold">Bucharest</h1>
          </div>
          <div className="flex items-center gap-1 bg-[#414040] px-3 py-1 rounded-full">
            <span className="text-white text-sm">Bucharest, RO</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Find your next adventure"
            className="w-full bg-[#f2f7fd] text-[#414040] py-3 px-10 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#b8b8b8] w-5 h-5" />
        </div>
      </div>

      <div className="px-5 py-2">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold">Popular</h2>
          <span className="text-[#15ff58] text-sm">See all</span>
        </div>

        <div className="flex gap-3 mt-2 overflow-x-auto pb-2 no-scrollbar">
          <div className="relative min-w-[150px] h-[180px] rounded-xl overflow-hidden">
            <Image src="/bucharest-day.jpg" alt="Bucharest by day" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#000000] to-transparent">
              <div className="flex items-center gap-1">
                <div className="bg-[#f8d675] p-0.5 rounded">
                  <span className="text-xs">★</span>
                </div>
                <span className="text-white text-xs">4.1</span>
              </div>
              <p className="text-white text-sm font-medium">Bucharest by Day</p>
            </div>
          </div>

          <div className="relative min-w-[150px] h-[180px] rounded-xl overflow-hidden">
            <Image src="/bucharest-night.jpg" alt="Bucharest by night" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#000000] to-transparent">
              <div className="flex items-center gap-1">
                <div className="bg-[#f8d675] p-0.5 rounded">
                  <span className="text-xs">★</span>
                </div>
                <span className="text-white text-xs">4.5</span>
              </div>
              <p className="text-white text-sm font-medium">Bucharest by night</p>
            </div>
            <div className="absolute top-3 right-3">
              <Heart className="w-5 h-5 text-[#ec5655] fill-[#ec5655]" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-2 flex-1 overflow-auto">
        <h2 className="text-white text-lg font-semibold">Recommended</h2>

        <div className="space-y-3 mt-2">
          <div className="flex bg-[#3a544f]/20 rounded-xl overflow-hidden" onClick={() => setActiveScreen(2)}>
            <div className="relative w-24 h-24">
              <Image src="/halloween-bucharest.jpg" alt="Halloween in Bucharest" fill className="object-cover" />
            </div>
            <div className="flex-1 p-3">
              <p className="text-white text-sm font-medium">Halloween in Bucharest</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#b8b8b8] text-xs">Trending</span>
              </div>
            </div>
            <div className="flex items-center px-2">
              <div className="bg-[#414040] px-2 py-1 rounded-md">
                <span className="text-white text-xs">easy</span>
              </div>
            </div>
          </div>

          <div className="flex bg-[#3a544f]/20 rounded-xl overflow-hidden">
            <div className="relative w-24 h-24">
              <Image src="/historic-bucharest.jpg" alt="Historic Bucharest" fill className="object-cover" />
            </div>
            <div className="flex-1 p-3">
              <p className="text-white text-sm font-medium">Historic Bucharest</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#b8b8b8] text-xs">Trending</span>
              </div>
            </div>
            <div className="flex items-center px-2">
              <div className="bg-[#414040] px-2 py-1 rounded-md">
                <span className="text-white text-xs">hard</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto p-4">
        <div className="flex justify-around items-center bg-[#414040]/50 rounded-full py-3">
          <Home className="w-6 h-6 text-white" />
          <Compass className="w-6 h-6 text-[#15ff58]" />
          <BookmarkIcon className="w-6 h-6 text-white" />
          <User className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>,

    // Detail Screen
    <div key="detail" className="flex flex-col h-full">
      <div className="relative h-[250px]">
        <Image src="/halloween-bucharest-large.jpg" alt="Halloween in Bucharest" fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-white rounded-full p-2">
          <ArrowLeft className="w-5 h-5" onClick={() => setActiveScreen(1)} />
        </div>
        <div className="absolute bottom-4 right-4 bg-white rounded-full p-2">
          <Heart className="w-5 h-5 text-[#ec5655] fill-[#ec5655]" />
        </div>
      </div>

      <div className="p-5 flex-1 overflow-auto">
        <div className="flex justify-between items-start">
          <h1 className="text-white text-2xl font-bold">Halloween in Bucharest</h1>
          <span className="text-[#15ff58] text-sm">Show map</span>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <div className="text-[#15ff58]">★</div>
          <span className="text-white">4.5</span>
          <span className="text-[#b8b8b8] text-sm">(355 Reviews)</span>
        </div>

        <p className="text-[#d3d3d3] mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam...
        </p>

        <div className="flex justify-end mt-1">
          <span className="text-[#15ff58] text-sm flex items-center">
            Read more
            <ChevronDown className="w-4 h-4 ml-1" />
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-white text-lg font-semibold">Riddles for this Quest</h2>

          <div className="bg-[#414040]/50 rounded-xl p-4 mt-2">
            <div className="flex justify-between items-center">
              <p className="text-white">We're off to a scary start</p>
              <div className="flex items-center gap-1">
                <span className="text-[#15ff58] font-medium">5 XP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="text-[#b8b8b8] text-sm">Price</p>
            <p className="text-[#15ff58] text-2xl font-bold">Free</p>
          </div>

          <button className="bg-[#15ff58] text-[#2c2c2c] font-bold py-3 px-6 rounded-full flex items-center">
            Start now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>,
  ]

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#000000]">
      <div className="w-full max-w-md h-[100dvh] rounded-none md:rounded-3xl overflow-hidden bg-[#2c2c2c] relative">
        {screens[activeScreen]}
      </div>
    </div>
  )
}
