"use client";

import { useState } from "react";
import {
  Button,
  Paper,
  Text,
  Textarea,
  TextInput,
  Notification,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { supabase } from "@/utils/supabaseClient";

export function TestimonialForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("Testimonials").insert({
      ...form,
      is_approved: false,
    });

    if (!error) {
      setSuccess(true);
      setForm({ name: "", company: "", message: "" });

      // kirim notifikasi ke Telegram
      await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Paper shadow="xs" radius="lg" p="lg" mt="lg">
      <Text size="xl" fw={700} mb="sm">
        Tinggalkan Testimoni
      </Text>

      {success && (
        <Notification
          mt="md"
          color="green"
          icon={<IconCheck size="1.2rem" />}
          onClose={() => setSuccess(false)}
        >
          Testimoni berhasil dikirim! Akan tampil setelah disetujui admin.
        </Notification>
      )}

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nama"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama Anda"
          required
          mb="sm"
        />
        <TextInput
          label="Perusahaan (opsional)"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Nama Perusahaan"
          mb="sm"
        />
        <Textarea
          label="Pesan"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tulis testimoni Anda..."
          required
          minRows={4}
        />
        <Button
          type="submit"
          loading={loading}
          mt="md"
          color="green"
        >
          Kirim Testimoni
        </Button>
      </form>
    </Paper>
  );
}
