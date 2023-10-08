/* eslint-disable react/no-unescaped-entities */
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type ContactEmailProps = {
  message: string;
  name: string;
  senderEmail: string;
  number?: string;
};

const EmailTemplate = ({
  name,
  message,
  number,
  senderEmail,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-stone-900 text-gray-200">
          <Container>
            <Section>
              <Heading>
                You received the following message from your portfolio form
              </Heading>
            </Section>
            <Text className="text-xl">message: {message}</Text>
            <Hr />
            <Text className="text-lg font-bold">
              The Sender's email is: {senderEmail}
            </Text>
            <Text className="text-lg font-bold">
              The Sender's name is: {name}
            </Text>
            {number && (
              <Text className="text-lg font-bold">
                The Sender's Tele is: {number}
              </Text>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default EmailTemplate;
