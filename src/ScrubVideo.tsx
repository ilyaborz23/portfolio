import { useEffect, useRef } from 'react'

const VIDEO_SRC = '/portfoliovideo.mp4'

const SENSITIVITY = 0.8

export default function ScrubVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX: number | null = null
    let targetTime = video.currentTime
    let rafId: number | null = null
    let seeking = false

    const applyTargetTime = () => {
      rafId = null
      if (seeking) return
      if (Math.abs(video.currentTime - targetTime) < 1 / 60) return
      seeking = true
      video.currentTime = targetTime
    }

    const handleSeeked = () => {
      seeking = false
      if (rafId === null && Math.abs(video.currentTime - targetTime) >= 1 / 60) {
        rafId = requestAnimationFrame(applyTargetTime)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!video.duration || Number.isNaN(video.duration)) return

      if (prevX === null) {
        prevX = e.clientX
        return
      }

      const delta = e.clientX - prevX
      prevX = e.clientX

      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration

      targetTime = Math.min(Math.max(targetTime + timeOffset, 0), video.duration)

      if (rafId === null) {
        rafId = requestAnimationFrame(applyTargetTime)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    video.addEventListener('seeked', handleSeeked)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 z-0 h-full w-full object-cover"
      style={{ objectPosition: '70% center' }}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
    />
  )
}
