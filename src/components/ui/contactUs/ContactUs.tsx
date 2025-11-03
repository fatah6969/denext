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
        <div className={classes.contacts}>
          <div className={classes.contactsContent}>
            <Text size="xl" fw={700} c="#fff">
              Informasi Kontak
            </Text>
            <ContactIconsList />
          </div>
          <div className={classes.contactsDecoration}></div>
        </div>

        <form className={classes.form}>
          <div className={classes.formHeader}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>
            <Text size="sm" c="dimmed" className={classes.subtitle}>
              Let’s discuss your project with us
            </Text>
          </div>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <div className={classes.inputWrapper}>
                <TextInput
                  label="Your name"
                  name="name"
                  placeholder="Your name"
                  required
                  className={classes.input}
                />
              </div>
              <div className={classes.inputWrapper}>
                <TextInput
                  label="Your email"
                  name="email"
                  placeholder="info@denext.id"
                  required
                  className={classes.input}
                />
              </div>
            </SimpleGrid>

            <div className={classes.inputWrapper}>
              <TextInput
                mt="md"
                label="Subject"
                name="subject"
                placeholder="Subject"
                required
                className={classes.input}
              />
            </div>

            <div className={classes.inputWrapper}>
              <Textarea
                mt="md"
                label="Your message"
                name="message"
                placeholder="Please include all relevant information"
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
                <span className={classes.buttonText}>Send message</span>
                <div className={classes.buttonRipple}></div>
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
