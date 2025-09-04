"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (res.ok) {
      setSuccess(true)
      form.reset()
    }

    setLoading(false)
  }

  return (
    <section className="bg-gradient-to-b from-white to-rose-50 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Have a question or just want to say hello? Fill out the form below
            and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="mt-2 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500 shadow-sm p-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="mt-2 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500 shadow-sm p-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className="mt-2 w-full rounded-lg border-gray-300 focus:ring-rose-500 focus:border-rose-500 shadow-sm p-3 text-gray-900"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {success && (
            <p className="text-green-600 text-center font-medium mt-4">
              ✅ Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
