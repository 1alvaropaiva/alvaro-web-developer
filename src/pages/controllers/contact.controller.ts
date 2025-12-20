import { submitContact } from "../../services/contact.service";

export function bindContactForm(root: HTMLElement) {
  const form = root.querySelector('#contactForm') as HTMLFormElement;
  if (!form) return;

  const button = form.querySelector('.contact-submit') as HTMLButtonElement;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!button) return;

    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Enviando...';

    try {
      await submitContact(data);
      button.textContent = 'Enviado com sucesso';
      form.reset();
    } catch {
      button.textContent = 'Erro ao enviar';
    } finally {
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2000);
    }
  });
}
