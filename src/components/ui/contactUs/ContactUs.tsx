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
    <Paper id="contact-us" shadow="0" radius="lg" px={{ base: 20, sm: 100 }} bg="transparent" pt={{ base: "0px", md:"72"}}>
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{
            backgroundImage:
              "linear-gradient(to right, #4F8025 ,rgb(144, 183, 110))",
          }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Informasi Kontak
          </Text>
          <ContactIconsList />
        </div>

        <form className={classes.form}>
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Your name"
                name="name"
                placeholder="Your name"
                required
              />
              <TextInput
                label="Your email"
                name="email"
                placeholder="info@denext.id"
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Subject"
              name="subject"
              placeholder="Subject"
              required
            />

            <Textarea
              mt="md"
              label="Your message"
              name="message"
              placeholder="Please include all relevant information"
              minRows={3}
              required
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" color="#4F8025" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
