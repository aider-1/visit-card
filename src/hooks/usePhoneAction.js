import { useEffect, useRef, useState } from 'react'

const MOBILE_PHONE_QUERY = '(max-width: 759px)'

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return true
    } catch {
      // Fall back for browsers that block the Clipboard API.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    return document.execCommand('copy')
  } finally {
    textarea.remove()
  }
}

export function usePhoneAction(phoneHref) {
  const [phoneCopied, setPhoneCopied] = useState(false)
  const copiedTimer = useRef(null)

  useEffect(
    () => () => {
      window.clearTimeout(copiedTimer.current)
    },
    [],
  )

  const handlePhone = async (event) => {
    if (window.matchMedia(MOBILE_PHONE_QUERY).matches) return

    event.preventDefault()
    const copied = await copyText(phoneHref.replace(/^tel:/, ''))
    if (!copied) return

    window.clearTimeout(copiedTimer.current)
    setPhoneCopied(true)
    copiedTimer.current = window.setTimeout(() => setPhoneCopied(false), 1800)
  }

  return { phoneCopied, handlePhone }
}
