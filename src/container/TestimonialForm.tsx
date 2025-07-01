'use client'
import { useState } from 'react'
import { supabase } from '@/utils/supabaseClient'

export default function TestimonialForm() {
  const [form, setForm] = useState({ name: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('Testimonials').insert([form])
    setLoading(false)
    if (!error) {
      setSuccess(true)
      setForm({ name: '', company: '', message: '' })
    } else {
      alert('❌ Gagal mengirim testimoni: ' + error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nama"
        required
        className="w-full border p-2 rounded"
      />
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Perusahaan"
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Pesan testimoni"
        required
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Mengirim...' : 'Kirim Testimoni'}
      </button>
      {success && <p className="text-green-600">✅ Testimoni berhasil dikirim! Akan muncul setelah disetujui admin.</p>}
    </form>
  )
}
