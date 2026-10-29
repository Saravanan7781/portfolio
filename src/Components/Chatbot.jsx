import React, { useEffect, useRef, useState } from 'react'
import '../Styles/Chatbot.css'
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi'

const suggestions = [
  'What is he working on right now?',
  'Tell me about his best project',
  'What is his tech stack?',
  'How can I contact him?',
]

const greeting = {
  role: 'assistant',
  content: "Hi! I'm an assistant that knows Saravanan's work. Ask me about his projects, skills, experience or how to reach him.",
}

// reads the streamed plain-text reply and reports the text received so far
async function streamReply(history, onText) {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: history }),
  })

  if (!response.ok) {
    let message = 'Something went wrong. Please try again.'
    try { message = (await response.json()).error || message } catch { /* keep default */ }
    throw new Error(message)
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let text = ''
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    text += decoder.decode(value, { stream: true })
    onText(text)
  }
  return text
}

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([greeting])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, open])

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const ask = async (question) => {
    const text = question.trim()
    if (!text || busy) return

    // the greeting is UI only, so it is not sent to the model
    const history = [...messages.filter((m) => m !== greeting), { role: 'user', content: text }]
    setMessages([...messages, { role: 'user', content: text }, { role: 'assistant', content: '' }])
    setInput('')
    setError('')
    setBusy(true)

    try {
      await streamReply(history, (partial) => {
        setMessages((prev) => [...prev.slice(0, -1), { role: 'assistant', content: partial }])
      })
    } catch (err) {
      setMessages((prev) => prev.slice(0, -1))
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    ask(input)
  }

  const showSuggestions = messages.length === 1

  return (
    <div className="chatbot">
      {open && (
        <section className="chatPanel" role="dialog" aria-label="Chat about Saravanan">
          <header className="chatHeader">
            <div>
              <strong>Ask about Saravanan</strong>
              <span>AI assistant. Answers come from his resume and projects.</span>
            </div>
            <button type="button" className="chatClose" onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX />
            </button>
          </header>

          <div className="chatMessages" ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <p key={i} className={`chatBubble ${m.role === 'user' ? 'chatUser' : 'chatBot'}`}>
                {m.content || (busy && i === messages.length - 1 ? <span className="chatTyping" aria-label="Typing"><i /><i /><i /></span> : '')}
              </p>
            ))}
            {showSuggestions && (
              <div className="chatSuggestions">
                {suggestions.map((s) => (
                  <button type="button" key={s} onClick={() => ask(s)}>{s}</button>
                ))}
              </div>
            )}
            {error && <p className="chatError" role="alert">{error}</p>}
          </div>

          <form className="chatForm" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              aria-label="Your question"
              maxLength={600}
              disabled={busy}
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send question">
              <FiSend />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="chatLauncher"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Chat about Saravanan'}
      >
        {open ? <FiX /> : <FiMessageCircle />}
      </button>
    </div>
  )
}

export default Chatbot
