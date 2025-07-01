"use client";

import { useState } from "react";
import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Notification,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";
import { supabase } from "@/utils/supabaseClient";

export function GetInTouch() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Kirim ke Formspree
      await fetch("https://formspree.io/f/movwpgqv", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });

      // 2. Simpan ke Supabase
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      if (error) {
        console.error("Gagal simpan ke Supabase:", error.message);
      }

      // 3. Kirim notifikasi Telegram
      await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "📩 Kontak Baru Masuk",
          ...form,
        }),
      });

      // 4. Reset form & tampilkan notifikasi
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Gagal kirim:", err);
    }

    setLoading(false);
  };

  return (
    <Paper shadow="0" radius="lg" px={{ base: 20, sm: 100 }} bg="transparent">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{
            backgroundImage:
              "linear-gradient(to right, #4F8025 ,rgb(144, 183, 110))",
          }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Informasi Kontak
          </Text>
          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          {success && (
            <Notification
              mt="md"
              color="green"
              icon={<IconCheck size="1.2rem" />}
              onClose={() => setSuccess(false)}
            >
              Pesan berhasil dikirim!
            </Notification>
          )}

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <TextInput
                label="Your email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="info@denext.id"
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />

            <Textarea
              mt="md"
              label="Your message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please include all relevant information"
              minRows={3}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                color="#4F8025"
                className={classes.control}
                loading={loading}
              >
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
