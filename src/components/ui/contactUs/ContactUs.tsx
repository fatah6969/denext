"use client";

import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
  return (
    <Paper
      id="contact-us"
      shadow="0"
      radius="lg"
      px={{ base: 20, sm: 100 }}
      bg="transparent"
      pt={72}
      pb={36}
      className={classes.container}
    >
      <div className={classes.wrapper}>
        
        {/* LEFT SIDE */}
        <div className={classes.contacts}>
          <div className={classes.contactsContent}>
            <Text size="xl" fw={700} c="#fff">
              Hubungi Kami
            </Text>
            <ContactIconsList />
          </div>
          <div className={classes.contactsDecoration}></div>
        </div>

        {/* FORM */}
        <form 
          className={classes.form}
          action="https://formspree.io/f/movwpgqv"
          method="POST"
        >
          <div className={classes.formHeader}>
            <Text fz="lg" fw={700} className={classes.title}>
              Konsultasi Sekarang
            </Text>
            <Text size="sm" c="dimmed" className={classes.subtitle}>
              Diskusikan kebutuhan IT bisnis Anda bersama tim kami
            </Text>
          </div>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              
              <div className={classes.inputWrapper}>
                <TextInput
                  label="Nama"
                  name="name"
                  placeholder="Masukkan nama Anda"
                  required
                  className={classes.input}
                />
              </div>

              <div className={classes.inputWrapper}>
                <TextInput
                  label="Email"
                  name="email"
                  placeholder="email@perusahaan.com"
                  required
                  className={classes.input}
                />
              </div>
            </SimpleGrid>

            <div className={classes.inputWrapper}>
              <TextInput
                mt="md"
                label="Subjek"
                name="subject"
                placeholder="Contoh: Setup Server / Jaringan"
                required
                className={classes.input}
              />
            </div>

            <div className={classes.inputWrapper}>
              <Textarea
                mt="md"
                label="Pesan"
                name="message"
                placeholder="Jelaskan kebutuhan Anda secara singkat..."
                minRows={3}
                required
                className={classes.textarea}
              />
            </div>

            <Group justify="flex-end" mt="md">
              <Button
                type="submit"
                color="#4F8025"
                className={classes.control}
                size="md"
              >
                <span className={classes.buttonText}>Kirim Pesan</span>
                <div className={classes.buttonRipple}></div>
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
