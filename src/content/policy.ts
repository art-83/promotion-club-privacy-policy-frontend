export type Locale = "pt" | "en";

export interface PolicySection {
  title: string;
  body: string;
}

export interface PolicyContent {
  pageTitle: string;
  sections: PolicySection[];
}

export const policy: Record<Locale, PolicyContent> = {
  pt: {
    pageTitle: "Termos de Uso e Política de Privacidade",
    sections: [
      {
        title: "Termos de uso e política de privacidade",
        body: "Ao utilizar o aplicativo Clube de Descontos, você concorda com estes termos e com o tratamento dos seus dados conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
      },
      {
        title: "LGPD e seus direitos",
        body: "Respeitamos sua privacidade e garantimos: acesso aos seus dados, correção de informações incorretas, exclusão quando permitido por lei, portabilidade e informação clara sobre como usamos seus dados. O controlador dos dados é o responsável pelo aplicativo, e você pode exercer seus direitos entrando em contato através dos canais indicados no app.",
      },
      {
        title: "Uso do CPF",
        body: "O CPF é coletado para identificação única do usuário, validação de ofertas e cumprimento de obrigações legais. Ele é armazenado de forma segura e utilizado apenas para as finalidades descritas, sem compartilhamento com terceiros para fins comerciais não autorizados.",
      },
      {
        title: "Uso do telefone",
        body: "O número de telefone é utilizado para contato, recuperação de conta e, quando autorizado, para notificações sobre ofertas e benefícios. Não enviamos spam; as comunicações estão alinhadas ao seu uso do app e às suas preferências.",
      },
      {
        title: "Notificações push e dados do dispositivo",
        body: "Para envio de notificações push, coletamos o identificador do dispositivo de notificação (token) e, quando disponibilizado pelo aplicativo, informações do dispositivo como plataforma (iOS/Android), versão do sistema operacional, fabricante, nome e modelo do aparelho. Esses dados são utilizados exclusivamente para entregar notificações e para suporte técnico, e são armazenados e processados apenas para essas finalidades.",
      },
      {
        title: "Senha e segurança",
        body: "Sua senha não é armazenada em texto puro. Utilizamos criptografia (hashing) para guardar apenas um valor derivado da sua senha, de forma que não seja possível recuperá-la. Recomendamos uma senha forte, com letras, números e caracteres especiais, e que você não a compartilhe com terceiros.",
      },
      {
        title: "Alterações",
        body: "Estes termos e a política de privacidade podem ser atualizados. Em caso de mudanças relevantes, você será informado pelo app ou por e-mail. O uso continuado do aplicativo após as alterações constitui aceitação das novas condições.",
      },
    ],
  },
  en: {
    pageTitle: "Terms of Use and Privacy Policy",
    sections: [
      {
        title: "Terms of use and privacy policy",
        body: "By using the Clube de Descontos app, you agree to these terms and to the processing of your data in accordance with the Brazilian General Data Protection Law (LGPD — Law No. 13,709/2018).",
      },
      {
        title: "Your rights under LGPD",
        body: "We respect your privacy and guarantee: access to your data, correction of incorrect information, deletion when permitted by law, portability, and clear information about how we use your data. The data controller is responsible for the application, and you may exercise your rights by contacting us through the channels indicated in the app.",
      },
      {
        title: "Use of CPF",
        body: "CPF is collected for unique user identification, offer validation, and compliance with legal obligations. It is stored securely and used only for the purposes described, with no sharing with third parties for unauthorized commercial purposes.",
      },
      {
        title: "Use of phone",
        body: "Your phone number is used for contact, account recovery, and, when authorized, for notifications about offers and benefits. We do not send spam; communications are aligned with your use of the app and your preferences.",
      },
      {
        title: "Push notifications and device data",
        body: "To send push notifications, we collect the notification device identifier (token) and, when provided by the app, device information such as platform (iOS/Android), operating system version, manufacturer, and device name and model. This data is used solely to deliver notifications and for technical support, and is stored and processed only for these purposes.",
      },
      {
        title: "Password and security",
        body: "Your password is not stored in plain text. We use encryption (hashing) to store only a value derived from your password, so that it cannot be recovered. We recommend a strong password with letters, numbers, and special characters, and that you do not share it with third parties.",
      },
      {
        title: "Changes",
        body: "These terms and the privacy policy may be updated. In the event of material changes, you will be informed via the app or by email. Continued use of the application after changes constitutes acceptance of the new conditions.",
      },
    ],
  },
};
